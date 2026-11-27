/* 홈페이지를 그려 주는 파일입니다. 내용은 content.js 에서 바꾸세요. (이 파일은 고치지 않아도 됩니다) */

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const S = SITE;

function head(icon, title, text) {
  return `<div class="sec-head reveal"><div class="icon">${icon}</div><h2>${esc(title)}</h2>${text ? `<p>${esc(text)}</p>` : ""}</div>`;
}

const sections = [];

// 맨 위 큰 사진
sections.push({
  id: "top", menu: "홈",
  html: `<section class="hero" id="top">
    <div class="hero-bg" style="background-image:url('${esc(S.hero.photo)}')"></div>
    <div class="wrap">
      <h1>${esc(S.hero.title)}</h1>
      <p>${esc(S.hero.text)}</p>
      <div class="hero-btns">
        ${S.enroll.show ? `<a class="btn btn-main" href="#enroll">${esc(S.hero.button1)} 🌿</a>` : ""}
        ${S.story.show ? `<a class="btn btn-ghost" href="#story">${esc(S.hero.button2)} ♡</a>` : ""}
      </div>
    </div>
    <div class="hero-menu-wrap"><div class="wrap"><div class="hero-menu" id="heroMenu"></div></div></div>
  </section>`,
});

if (S.day.show) sections.push({
  id: "day", menu: S.day.title,
  html: `<section class="block" id="day"><div class="wrap">
    ${head("🌱", S.day.title, S.day.text)}
    <div class="day-photos reveal">${S.day.photos.map((p) => `<img src="${esc(p)}" alt="">`).join("")}</div>
    <div class="badges reveal">${S.day.badges.map((b) => `<span class="badge">${esc(b.icon)} ${esc(b.text)}</span>`).join("")}</div>
  </div></section>`,
});

if (S.about.show) sections.push({
  id: "about", menu: S.about.title,
  html: `<section class="block" id="about"><div class="wrap">
    ${head("🏡", S.about.title)}
    <div class="about">
      <div class="about-photo reveal"><img src="${esc(S.about.photo)}" alt=""></div>
      <div class="reveal">
        <h3>${esc(S.about.headline)}</h3>
        <p class="greet">${esc(S.about.greeting)}</p>
        <p class="sign">— ${esc(S.about.sign)}</p>
        <div class="highlights">${S.about.highlights.map((h) => `<div class="hl"><b>${esc(h.big)}</b><span>${esc(h.small)}</span></div>`).join("")}</div>
      </div>
    </div>
  </div></section>`,
});

if (S.mascot && S.mascot.show) sections.push({
  id: "mascot", menu: "캐릭터",
  html: `<section class="block" id="mascot"><div class="wrap">
    ${head("🌸", S.mascot.title)}
    <div class="mascot">
      <div class="mascot-photo reveal"><img src="${esc(S.mascot.photo)}" alt="${esc(S.name)} 캐릭터"></div>
      <div class="reveal">
        <h3>${esc(S.mascot.headline)}</h3>
        <p class="m-text">${esc(S.mascot.text)}</p>
        <div class="m-points">${S.mascot.points.map((m) => `<div class="m-point"><span class="m-icon">${esc(m.icon)}</span><div><b>${esc(m.name)}</b><span>${esc(m.text)}</span></div></div>`).join("")}</div>
      </div>
    </div>
  </div></section>`,
});

if (S.facility && S.facility.show) sections.push({
  id: "facility", menu: "시설 안내",
  html: `<section class="block" id="facility"><div class="wrap">
    ${head("🏫", S.facility.title, S.facility.text)}
    <div class="facilities">${S.facility.items.map((f) => `<div class="fac reveal${f.photo ? " zoom" : ""}" data-src="${esc(f.photo)}" data-text="${esc(f.name)}">
      <div class="fac-img">${f.photo ? `<img src="${esc(f.photo)}" alt="${esc(f.name)}">` : `<span>${esc(f.icon)}</span>`}</div>
      <div class="fac-body"><h4>${esc(f.icon)} ${esc(f.name)}</h4><p>${esc(f.text)}</p></div>
    </div>`).join("")}</div>
  </div></section>`,
});

if (S.edu.show) sections.push({
  id: "edu", menu: S.edu.title,
  html: `<section class="block" id="edu"><div class="wrap">
    ${head("🌳", S.edu.title)}
    <p class="quote reveal">${esc(S.edu.quote)}</p>
    <p class="edu-text reveal">${esc(S.edu.text)}</p>
    <div class="programs">${S.edu.programs.map((p) => `<div class="prog reveal">
      <div class="prog-img">${p.photo ? `<img src="${esc(p.photo)}" alt="">` : esc(p.icon)}</div>
      <div class="prog-body"><h4>${esc(p.icon)} ${esc(p.name)}</h4><p>${esc(p.text)}</p></div>
    </div>`).join("")}</div>
  </div></section>`,
});

if (S.routine.show) sections.push({
  id: "routine", menu: "하루 일과",
  html: `<section class="block" id="routine"><div class="wrap">
    ${head("⏰", S.routine.title)}
    <div class="routine">${S.routine.items.map((r) => `<div class="r-item reveal">
      <div class="r-time">${esc(r.time)}</div><div class="r-dot"></div>
      <div class="r-body"><b>${esc(r.name)}</b><p>${esc(r.text)}</p></div>
    </div>`).join("")}</div>
  </div></section>`,
});

if (S.story.show) sections.push({
  id: "story", menu: S.story.title,
  html: `<section class="block" id="story"><div class="wrap">
    ${head("📷", S.story.title)}
    <div class="stories">${S.story.items.map((it) => `<div class="story reveal" data-src="${esc(it.photo)}" data-text="${esc(it.text)}">
      <img src="${esc(it.photo)}" alt="${esc(it.text)}"><p>${esc(it.text)}</p></div>`).join("")}</div>
    ${S.story.moreLink ? `<div class="more"><a class="btn btn-main" href="${esc(S.story.moreLink)}" target="_blank" rel="noopener">${esc(S.story.moreText)} →</a></div>` : ""}
  </div></section>`,
});

if (S.enroll.show) sections.push({
  id: "enroll", menu: S.enroll.title,
  html: `<section class="block" id="enroll"><div class="wrap">
    ${head("🎒", S.enroll.title)}
    <div class="enroll">
      <div class="e-card reveal"><h4>보육 시간</h4>
        <div class="hours">${S.enroll.hours.map((h) => `<div><span>${esc(h.name)}</span><b>${esc(h.time)}</b></div>`).join("")}</div>
      </div>
      <div class="e-card reveal"><h4>입소 절차</h4>
        <div class="steps">${S.enroll.steps.map((s) => `<span class="step">${esc(s)}</span>`).join('<span class="arrow">→</span>')}</div>
        <p class="e-note">${esc(S.enroll.note)}</p>
        <div class="call">
          ${S.phone ? `<a class="btn btn-main" href="tel:${esc(S.phone.replace(/[^0-9]/g, ""))}">📞 ${esc(S.phone)}</a>` : ""}
          ${S.links.waitlist ? `<a class="btn btn-ghost" style="border:1px solid var(--line)" href="${esc(S.links.waitlist)}" target="_blank" rel="noopener">입소대기 신청</a>` : ""}
        </div>
      </div>
    </div>
  </div></section>`,
});

if (S.location.show) {
  const q = encodeURIComponent(S.address);
  sections.push({
    id: "location", menu: S.location.title,
    html: `<section class="block" id="location"><div class="wrap">
      ${head("📍", S.location.title)}
      <div class="loc">
        ${S.location.mapImage
          ? `<a class="map map-img reveal" href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener"><img src="${esc(S.location.mapImage)}" alt="${esc(S.name)} 약도"></a>`
          : S.location.showMap ? `<div class="map reveal"><iframe loading="lazy" src="https://maps.google.com/maps?q=${q}&z=16&output=embed" title="지도"></iframe></div>` : ""}
        <div class="loc-info reveal">
          ${S.location.photo ? `<img class="loc-photo" src="${esc(S.location.photo)}" alt="${esc(S.name)} 정문">` : ""}
          <div class="loc-row"><small>주소</small><b>${esc(S.address)}</b></div>
          <div class="loc-row"><small>전화</small><b>${esc(S.phone)}</b></div>
          <div class="map-links">
            <a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">구글지도로 보기</a>
            <a href="https://map.kakao.com/?q=${q}" target="_blank" rel="noopener">카카오맵으로 보기</a>
            <a href="https://map.naver.com/p/search/${q}" target="_blank" rel="noopener">네이버지도로 보기</a>
          </div>
        </div>
      </div>
    </div></section>`,
  });
}

/* ---------- 화면에 그리기 ---------- */
document.getElementById("main").innerHTML = sections.map((s) => s.html).join("");
const menuIcons = { day: "🌱", about: "🏡", mascot: "🌸", facility: "🏫", edu: "🌳", routine: "⏰", story: "📷", enroll: "🎒", location: "📍" };
document.getElementById("heroMenu").innerHTML = sections.filter((s) => s.id !== "top")
  .map((s) => `<a href="#${s.id}"><span>${menuIcons[s.id] || "⭐"}</span>${esc(s.menu)}</a>`).join("");
document.getElementById("navList").innerHTML = sections.filter((s) => s.id !== "top").map((s) => `<li><a href="#${s.id}">${esc(s.menu)}</a></li>`).join("");

document.title = S.name;
document.querySelector('meta[name="description"]').content = S.description;
document.querySelector('meta[property="og:title"]').content = S.name;
document.querySelector('meta[property="og:description"]').content = S.description;
document.getElementById("brandName").textContent = S.name;
document.getElementById("brandSub").textContent = S.subName;
if (S.logo) document.getElementById("brandLogo").innerHTML = `<img src="${esc(S.logo)}" alt="">`;

document.getElementById("footName").textContent = S.name;
if (S.logoFull) document.getElementById("footLogo").innerHTML = `<img src="${esc(S.logoFull)}" alt="${esc(S.name)}">`;
document.getElementById("footInfo").innerHTML = `${esc(S.address)}<br>☎ ${esc(S.phone)}`;
document.getElementById("footCopy").textContent = `© ${new Date().getFullYear()} ${S.name}`;
const linkNames = { blog: "블로그", instagram: "인스타그램", cafe: "카페·밴드", waitlist: "입소대기 신청" };
document.getElementById("footLinks").innerHTML = Object.entries(S.links)
  .filter(([, u]) => u)
  .map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${linkNames[k] || k}</a>`)
  .join("");

/* ---------- 움직임 ---------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("solid", window.scrollY > 60);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const nav = document.getElementById("nav");
document.getElementById("menuBtn").addEventListener("click", () => {
  nav.classList.toggle("open");
  header.classList.add("solid");
});
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("on"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const lb = document.getElementById("lightbox");
document.querySelectorAll(".story, .fac.zoom").forEach((el) => el.addEventListener("click", () => {
  lb.querySelector("img").src = el.dataset.src;
  lb.querySelector("p").textContent = el.dataset.text;
  lb.classList.add("open");
}));
lb.addEventListener("click", () => lb.classList.remove("open"));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });
