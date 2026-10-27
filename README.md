# 김지희 — 개인 프로필 웹사이트

Node.js 기본 모듈만 사용하는 로컬 서버로 실행합니다. 외부 패키지 설치와 빌드는 필요하지 않습니다. 웹사이트는 기존 HTML, CSS, JavaScript를 그대로 사용합니다.

## 로컬 실행

Node.js 22 이상에서 프로젝트 루트 폴더를 열고 실행합니다.

```sh
npm start
```

브라우저에서 `http://localhost:3000`을 엽니다. 종료는 실행한 터미널에서 `Ctrl+C`를 누릅니다. Windows PowerShell에서 `npm.ps1` 실행 정책 오류가 발생하면 `npm.cmd start` 또는 `node server.mjs`를 사용합니다.

```sh
node server.mjs
```

`npm run dev`는 서버 파일이 변경되면 서버를 재시작합니다. HTML·CSS·JavaScript 수정 사항은 브라우저를 새로고침하면 반영됩니다. 자동 브라우저 새로고침 기능은 없습니다.

다른 포트를 사용하려면 PowerShell에서 실행합니다.

```powershell
$env:PORT = '3001'
node server.mjs
```

서버는 로컬 컴퓨터의 `127.0.0.1`에서 실행되며 `public/`의 파일만 제공합니다. `.env`를 자동으로 읽지 않습니다.

## 폴더 구조

```text
project_261027/
├── public/                         # 정적 웹사이트 배포 대상
│   ├── index.html                  # 시작 페이지와 프로필 내용
│   ├── styles.css                  # 기존 스타일 및 반응형 레이아웃
│   ├── script.js                   # 기존 메뉴와 연락 기능
│   ├── assets/                     # 로고와 프로필 사진
│   └── projects/                   # 프로젝트 상세 페이지 3개
├── stitch-export/                  # 보존된 Stitch 디자인 원본
├── server.mjs                      # Node.js 로컬 정적 서버
├── package.json                    # 실행 명령 (외부 의존성 없음)
├── vercel.json                     # Vercel 정적 배포 설정
└── README.md
```

웹사이트를 수정할 때는 `public/index.html`과 `public/` 안의 파일을 편집합니다. 기존 상대 경로는 유지되며 `public/index.html`을 직접 여는 방식도 가능합니다.

## Vercel 정적 배포

Vercel에 프로젝트 저장소를 연결하고 프로젝트 루트를 Root Directory로 선택합니다. `vercel.json`에 다음 설정을 포함했습니다.

- Framework Preset: Other (`framework: null`)
- Build Command: 비어 있음 (빌드 없음)
- Output Directory: `public`
- `.html` 경로 유지 (`cleanUrls: false`)

Vercel은 `public/`의 정적 파일을 배포합니다. `server.mjs`는 로컬 개발용으로 사용하며 Vercel에서 실행할 필요가 없습니다. `.env`, 서버 코드, Stitch 원본은 정적 배포 디렉터리에 포함되지 않습니다. 이 작업에서는 Vercel에 실제 배포하지 않았습니다.

참고: [Vercel 빌드 설정](https://vercel.com/docs/builds/configure-a-build), [vercel.json 설정](https://vercel.com/docs/project-configuration/vercel-json).

## 콘텐츠와 연락 기능

이름, 전문 분야, 프로젝트명과 이메일은 사용자가 제공한 최신 정보를 사용했습니다. 전문 분야는 Marketing, Partnership, AI Creative, Contents이며 이메일은 `jeehee.kim.0217@gmail.com`입니다. 프로젝트 상세 설명은 예시임을 표시했습니다. LinkedIn과 이미지는 Stitch 원본을 유지했습니다. 개인 주소가 없는 소셜 채널은 서비스 홈페이지로 연결됩니다. 실제 프로젝트 링크가 있다면 `public/index.html`의 각 `project-card` 요소의 `href`를 변경하면 됩니다.

이메일 링크와 연락 폼은 기본 메일 앱을 엽니다. 폼은 서버로 전송하지 않으며, 메일 앱에서 직접 전송을 완료해야 합니다. Google Fonts 연결이 없으면 시스템 글꼴을 사용합니다. 이미지와 CSS, JavaScript는 로컬에서 로드됩니다.

원본 `stitch-export/` 폴더는 보존했습니다.
