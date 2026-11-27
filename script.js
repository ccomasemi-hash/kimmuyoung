// 모바일 메뉴 열기/닫기
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  });
});

// 상담 신청 폼 (현재는 화면에 안내만 표시 — 실제 접수는 서버/폼 서비스 연결 필요)
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.parent.value.trim();
  result.textContent = `${name}님, 상담 신청이 접수되었습니다. 곧 연락드릴게요! 😊`;
  form.reset();
});
