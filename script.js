// MENU
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

// CURSOR
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
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
