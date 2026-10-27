'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function closeMenu() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', '메뉴 열기');
}

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
  navigation.classList.toggle('is-open', expanded);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);

// Use native anchor navigation so deep links and browser history work normally.
const sections = [...document.querySelectorAll('main section[id]')];
let scrollScheduled = false;
function updateActiveSection() {
  scrollScheduled = false;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 120) active = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
    active = sections[sections.length - 1];
  }
  navigation?.querySelectorAll('a').forEach((link) => {
    if (active && link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(updateActiveSection);
  }
}, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const name = String(values.get('name')).trim();
  const message = String(values.get('message')).trim();
  if (!name || !message) {
    form.querySelector('.form-status').textContent = '이름과 메시지에 공백 이외의 내용을 입력해 주세요.';
    form.querySelector(!name ? '#name' : '#message').focus();
    return;
  }
  const recipient = document.querySelector('.email-link').getAttribute('href');
  const subject = `[포트폴리오 문의] ${values.get('subject')} — ${name}`;
  const body = `이름: ${name}\r\n회신 이메일: ${values.get('email')}\r\n\r\n${message}`;
  window.location.href = `${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector('.form-status').textContent = '메일 앱에서 내용을 확인하고 전송해 주세요. 열리지 않으면 위 이메일 주소를 직접 이용해 주세요.';
});
