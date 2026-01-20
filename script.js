// MENU
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;

  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (!el) return;

  if (el.closest(".light")) {
    cursor.classList.add("light");
    cursor.classList.remove("dark");
  } else {
    cursor.classList.add("dark");
    cursor.classList.remove("light");
  }
});

document.querySelectorAll(".magnetic").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = `translate(0,0)`;
  });
});


// SCROLL DISTORTION FOR HERO
const heroTitle = document.querySelector(".hero-title");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const distortion = Math.min(scrollY / 300, 1);

  heroTitle.style.transform = `
    scaleY(${1 + distortion * 0.25})
    scaleX(${1 - distortion * 0.15})
  `;
});
// REMOVE LOADER
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
  }, 1600);
});
function animateHeroText() {
  const hero = document.querySelector(".hero-animate");
  if (!hero) return;

  const text = hero.textContent.trim();
  hero.innerHTML = "";

  [...text].forEach((char, i) => {
    if (char === " ") return;

    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char;
    span.style.animationDelay = `${i * 0.06}s`;
    hero.appendChild(span);

    if (char === "T") {
      const br = document.createElement("span");
      br.className = "line-break";
      hero.appendChild(br);
    }
  });

  requestAnimationFrame(() => {
    hero.classList.add("play");
  });
}

// RUN AFTER LOADER MORPH
window.addEventListener("load", () => {
  setTimeout(animateHeroText, 1700);
});
function updateTime() {
  const el = document.getElementById("live-time");
  if (!el) return;

  const now = new Date();
  el.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function updateTime() {
  const el = document.getElementById("live-time");
  if (!el) return;

  const now = new Date();
  el.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

updateTime();
setInterval(updateTime, 1000);
