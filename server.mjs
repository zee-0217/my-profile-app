import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { realpath, stat } from 'node:fs/promises';
import { dirname, extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const publicDirectory = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), 'public'));
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

function insidePublic(path) {
  const localPath = relative(publicDirectory, path);
  return !isAbsolute(localPath) && localPath !== '..' && !localPath.startsWith(`..${sep}`);
}

const server = createServer(async (request, response) => {
  function reply(status, message, headers = {}) {
    response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
    response.end(request.method === 'HEAD' ? undefined : message);
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    reply(405, 'Method Not Allowed', { Allow: 'GET, HEAD' });
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    reply(400, 'Bad Request');
    return;
  }
  if (pathname.includes('\0') || pathname.includes('\\') || pathname.includes(':') || pathname.split('/').some(segment => segment.startsWith('.'))) {
    reply(404, 'Not Found');
    return;
  }

  try {
    let path = resolve(publicDirectory, `.${pathname}`);
    if (!insidePublic(path)) { reply(404, 'Not Found'); return; }
    let info = await stat(path);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) {
        const url = new URL(request.url, 'http://localhost');
        reply(301, 'Moved Permanently', { Location: `${url.pathname}/${url.search}` });
        return;
      }
      path = resolve(path, 'index.html');
    }
    path = await realpath(path);
    if (!insidePublic(path)) { reply(404, 'Not Found'); return; }
    info = await stat(path);
    if (!info.isFile()) { reply(404, 'Not Found'); return; }

    response.writeHead(200, {
      'Content-Type': contentTypes[extname(path).toLowerCase()] ?? 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    if (request.method === 'HEAD') response.end();
    else await pipeline(createReadStream(path), response);
  } catch (error) {
    if (response.headersSent) { response.destroy(); return; }
    const missing = ['ENOENT', 'ENOTDIR', 'EACCES', 'EPERM'].includes(error.code);
    if (!missing) console.error(error);
    reply(missing ? 404 : 500, missing ? 'Not Found' : 'Internal Server Error');
  }
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${port} is already in use. Set PORT to another port and try again.`
    : error.message);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Local: http://localhost:${port}`);
  console.log('Serving public/ — press Ctrl+C to stop.');
});
