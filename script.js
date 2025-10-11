// --- Config ---
const owner = {
  name: "WhyDll",
  hero: "Deniz",
  email: "tupibabapro@gmail.com",
  initials: "DAY",
};

const projects = [
  {
    title: "Cubi Planet",
    short: "A simple RTS game made in 48 hours.",
    category: "Games",
    link: "https://whydll.itch.io/cubi-planet",
    img: "https://img.itch.zone/aW1nLzIyNTY2NTEwLnBuZw==/315x250%23c/sref%2FM.png",
  },
  {
    title: "Somewhere",
    short: "Short dream-core horror game.",
    category: "Games",
    link: "https://whydll.itch.io/somewhere",
    img: "https://img.itch.zone/aW1nLzIxODEyMzkyLnBuZw==/315x250%23c/GuhGF3.png",
  },
];
// ---------------------------

// Helpers
function el(sel, ctx = document) {
  return ctx.querySelector(sel);
}
function els(sel, ctx = document) {
  return Array.from(ctx.querySelectorAll(sel));
}

// populate owner info
document.getElementById("ownerName").textContent = owner.name;
document.getElementById("heroName").textContent = owner.hero;
document.getElementById("aboutName").textContent = owner.name;
document.getElementById("avatarInitials").textContent = owner.initials;
document.getElementById("mailLink").href = "mailto:" + owner.email;
document.getElementById("footerName").textContent = owner.name;
document.getElementById("year").textContent = new Date().getFullYear();

// categories
const catsEl = el("#categories");
const uniqueCats = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
uniqueCats.forEach((c, i) => {
  const btn = document.createElement("button");
  btn.className = "cat" + (i === 0 ? " active" : "");
  btn.textContent = c;
  btn.onclick = () => {
    selectCategory(c);
  };
  catsEl.appendChild(btn);
});

const carousel = el("#projectCarousel");
function renderProjects(filter = "All") {
  carousel.innerHTML = "";
  const filtered = projects.filter((p) =>
    filter === "All" ? true : p.category === filter
  );
  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.textContent = "Bu kategoride proje yok.";
    empty.style.color = "var(--muted)";
    carousel.appendChild(empty);
    return;
  }
  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("role", "button");
    card.tabIndex = 0;
    card.onclick = () => {
      if (p.link && p.link !== "#") window.open(p.link, "_blank");
      else alert("Link yok — linki JS `projects` dizisinde ayarla.");
    };
    card.onkeypress = (e) => {
      if (e.key === "Enter") card.click();
    };

    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = p.category;
    const thumb = document.createElement("div");
    thumb.className = "thumb";
    if (p.img) {
      const img = document.createElement("img");
      img.src = p.img;
      img.alt = p.title;
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      img.style.borderRadius = "6px";
      thumb.appendChild(img);
    } else {
      thumb.textContent = p.title.split(" ").slice(0, 2).join(" ");
      thumb.style.opacity = 0.95;
      thumb.style.fontSize = "13px";
    }
    const h3 = document.createElement("h3");
    h3.textContent = p.title;
    const small = document.createElement("p");
    small.textContent = p.short;

    card.appendChild(chip);
    card.appendChild(thumb);
    card.appendChild(h3);
    card.appendChild(small);
    carousel.appendChild(card);
  });
}

function selectCategory(cat) {
  els(".cat").forEach((c) => c.classList.remove("active"));
  els(".cat")
    .find((c) => c.textContent === cat)
    .classList.add("active");
  renderProjects(cat);
}

// initial render
renderProjects("All");

// small helper for scroll
function scrollToId(id) {
  document
    .getElementById(id)
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

// keyboard horizontal scroll for carousel
carousel.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight")
    carousel.scrollBy({ left: 260, behavior: "smooth" });
  if (e.key === "ArrowLeft")
    carousel.scrollBy({ left: -260, behavior: "smooth" });
});

// allow adding projects dynamically from console: addProject({title,short,category,link,img})
window.addProject = function (p) {
  projects.push(p); // re-compute categories
  const cats = ["All", ...Array.from(new Set(projects.map((x) => x.category)))];
  catsEl.innerHTML = "";
  cats.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "cat" + (i === 0 ? " active" : "");
    btn.textContent = c;
    btn.onclick = () => selectCategory(c);
    catsEl.appendChild(btn);
  });
  renderProjects(
    els(".cat").find((b) => b.classList.contains("active")).textContent || "All"
  );
};
