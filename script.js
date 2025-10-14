// --- Config ---
const owner = {
  name: "WhyDll",
  hero: "WhyDll",
  email: "tupibabapro@gmail.com",
  initials: "WD",
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
  {
    title: "Shower Date Planner",
    short: "its funny",
    category: "Web",
    link: "https://github.com/Whydll/shower-planner",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEBIVFRUWFRUQFRUQFRUVFRAQFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFhAQGi0dHR0tMC0tLS0tLS0tLS0tLystLS0rLS0tLS0tLTAtLSstLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD4QAAEDAgQDBQQHCAEFAAAAAAEAAhEDIQQSMUFRYXEFEyKBkRQyobFCUsHR4fDxBiMzU2KCkqIkFUNjc5P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALhEBAQACAQMDAgMIAwAAAAAAAAECEQMSEyEEMUFRcUKxwSIyUmGBkdHwBRQV/9oADAMBAAIRAxEAPwDcWpL2LRChYvW28azbC6mlGmt7qaW6mrmTK4MJppbqa3mmlupqpkzvG57qSWaS6BpoO7VzNjeJjFNMYxae6VimlcjnHosMQuprS1qssU9TToYzTVZFrLFWRPqT22Xu1O7WrIpkR1DoZe7VGmteRVkR1F22Tu1BSWvu1Ypp9Q7aYLBZzEEzawJI8hcrX+0nZXsbGOrNeSRADG5gY57ea3fs3jWUKzH1M0E5fDJidzG1l6X9su3cM+kaJbWqyA9vs7XOGaCW5iLwN1zZ8uc5JJPDt4uDjvFbb5fGcT2zT2af7iGrI7tvgwf5j7kvtvAVXOJp4evl2zUnzE2mAuTW7NryJo1dP5b+fJXlzZS6iMPR8dm7HWd207+WPUpZ7bd/LHqVmxeFqZWDu37/AEXcByXOcwhxkEW3BCWXLlL7qw9Nx2fuuye3D/LH+X4Kx24N2HycD9i5+Gjkujg2BznTcWF9B4VeOXJflGfFxY7/AGfb7rHbNM6hw8gftRjtOkfpR1B+5a29l0SHEsFgTqfvXIodmtc8i4bBiDewV3uz6VljODKW+Zp0W4mmdHt9QjIXnsbTDTDbi4vyWQVg02JHSQs76jV1Y2no5lN416ktS3NXBZ2i8f8AcP8Adf5haGdrP3DT6gpz1GFK+l5I6eVRYf8Aqw+p/t+Cifdw+pdjk+n5Ps7MKjGETWvR96uS2u6Yxldg0DsGthqoTVT6qVxxYHYIpTsGV0jWS3VVUyqLhi5pwZQHDFb3VUo1VUyrO4YsnsxV+ylau9RCsjqpdGLKMKUXspWoVwiFcJdVV0YsJwpQ+yldHvgrFUI6qO3i5hwxVezngur3oV52o66O1i5Ps5VdweC7GZqktR3KO1HH7kqd0V2IaplajuDsxx8hXU7BxLqb3uBb/DcP3gkEktAjnMfFGabVpwVFsF0xBZMcAS6fVoU5ZyzyrDjsy3G+viWto081OmczXVCIgQ95a0NDSOLfKVg7cxLadKmwU/E6i1+YPAgvkmRHi+BuVsxuHa3K0OHutY4CNGtDjc/1NWTtmiHECSYDGCdsrAIn7Flhrcb8nVqkdr49rWMFJj2nPa9nCm1oJO4u6IHBJxHbbdGCoCKZzB58OaIkEOv5p3aOEuPFN6x4bkfZyWSp2b73Js3BFi4R8CFpj0am2Ofc3dDxna1EOY5rKwIcA4PblMWJc0h3vQBA/qKRiO1sJ3zn9y4gtcL0KOYOni65BgyT6JmOwHibM+8TcgGDl32MLJjuzzJtoDe0nxm55zKvGcfhlnlzeSKeNwvfVB7PNOIYAyk102BzCI4+Wy4derSM5cPTFzfxAxJj3SLxC7+K7PHevkWh3kcn32XKrdnGTHFdGHQ4+XvTx/OuRVweFeMr8PlGYEmi94dEmw7wvgeI2ETDeErnYr9mcO8zSrup2s2vTztB/wDawz/ou+/AuSH4Zw2VZcPHknD1fPh7/k8niP2RxOtJrawif+O8PP8A8zFT/VcrH0chaw0XUntEPD84c4/WLXab6AL3hpkcQnsxtUNLCc7beGqBUaI4MfLfhsufL0f8NdnH/wAnPxT+z5lJ4lRfQ3UKBucFhidyG1Wz/ayoAPIBRZ/9TNv/AOhxPp2VCQjKErNsAoSERQEqk0JCS5OKEtVRFjO4JRC1OaklqqVFhUK4R5VeVPadFwihHlV5UtnopRMLVWVGxoIVq8qvKjY0pRFCkJGGVCUUKoTAZWzBDw6i5cL8QyAPWoFkhdXA0R3bCRILnE7ENzMMzt/DI81Od8Kwm6bXAeW3MHOZvpJA15Pb8EHaIaajchPirBtyDwHzn15J5ZHdtGYeEcCA4d24nj9A6Iq7c1WkBF8RUdbgH8jGgWMrezww9qNy921pHu1Sb7lzgCT0i6PFNh7hJ934e0tZttARdpU/FSH/AImm5kEueCbdSfyEWKb+9ds3wCb+6cSDZVL7Js83/fgHbPhxFJomDUPT+LFvRZu1hFWo07U3OEayKnzlO7YeDiaZkWeZnwx++cbk3A59UPaVL9/Wi2ak4+rxx/PJPH4+yc/xff8ARkxlP/lGmd72kRLJGnP16FcnEV4cQeJ11810+03D2gPgEQxwAaCD4fqmBr+srl9os/eO8tLiMo0J1HNb8fx9nLy2+dfUh2ICS6uFHNSXsW8kcmWWSPqtSHuYqqMSCtZHLnnfmD8KiWorZ7fSFRRKoXkPpgEICE0hUQnsi4VZUyFIRstEualOatJCS4KpU2FZVcI4VwntOi4RQihEAls5Ci1VlTS1VCNjRcKQmQoAjY0ANULUwlQFGxomFITCFUJ7LQIXRYYptABnLEtkQT3gBnh4wFhhdHJlI6MaQG3iWk6aGx1U5VeEb6pcarRfKAQd/EQ4CCRH0lmwsd7RcTEmq/WbumOhNrQibTirMQIAmSQIIdbfURrus+GqEOZA91n0TrJmYI5ienJZSeGtvn+v+DcWZr0xY+Gi02s3xN3N9hfW6HEtPeD3h4aclsmCXOcJtPO3C6J4Jri0AFgiIhoMiTyjbglsI7xpv4e6aA3cQ4yQWi4tsnCv6k48Hv2EEvOaRnMA+M6HQD4fEKsTBqvIuDSjVse8Jl0kaA/Dqn4of8hpEudmkh+U2mRoYFvkl4xsveXFpORuvhPvtsbwXAWmbwFUvsiz3+7B2oD3jSCGnIy8Zfo3m1zrcarF2kzxzJMhrpMeKQL2/PXVdDGsmo0uIM5ZJkNI069fNY8U0SC3gAdNRa3ELbC+zDknu5rmJD2Le5iS9i2mTmyxc+oxZjSXRqMSixazJzZ8e6wd2othpq1XUy7L3ACkK4VwvLfQgIVEI4VEIAAFcKwFcILRTglkJzglkKomhhSEUIoQWiw1FCN7IVQjZ6AQqhMhUQgaBCkIoUhGy0AhVCZCqE9jQCFUJkKoQNBaybeS3PpEO1JAcWtJtBv4baGYvyWak0kgASZ0EyfRaqDZcAQ53XQfV+70U5VWMMqT4pm0mHiQR4gS0xbb0V0XnvBlF8rWjPNj/VA114IC6A4/SgyADlAMXP8AkR+qPDsAc6A2JaAXGIcBNjPCfPgo+F/JZH74gyfEBlMwYBsZ4cdkdLN3lyQBGbxZtGumHG4Nz63KKnPeOMAmXAHYkNIAPqOpTMOIeSQARwEiMpnSJ6Rp5otOT82B1JpqNbmGvieTE3kG8QYUfAeXNpyWi7XAuGaTNpFoPNMgZ2WIMw7NYNOjY6CPNDiGEkuzgwBBBjkRz/FVtGmfHNGdsEEQ2zRlYNLNJm3MrLi2mGztmbczYOPpqteOacwLjmkDQASIGwsEjEUoA6uG20cL+qvG+zPKe7nuakPatjwkPatpXPlGN7UstWp7UtzVpKxuLPlVpsKJ7Tp66FatRcD1gwqKJUgBCisK4TItyWQmuCENTKhhG0Kg1Pa20JCQmoN0C0liW6mjY0WqhFCkJkEBQhFCgCACFUJuVUgaLhSEcKQgaXQYCb6fHTbitFJzic0mwN4A467JVFuvQ6fba45JzB7xm1vdsCdBOlvJTVQJMtvBiwdckyYgidIlaaVOXuHujN102sY/VAxtwZ1cCYI96fFexFouE3DgAkyfe1Akukx0Gqm1cgKdM53kxm8YiRY2Ex5n9VMO52cyZOY2YQC52hjS2vogw9GXG8QddjfSE3DEZjFySfemSLXkb6oojKAC/Qgw6c0m8HWAZtyH2qYtjQbNDQAJ0cb7gE31+SdTojMA/QTblqB1vul4ikC6GjKLAzPgM6nYJ78ps8MuMaPDA2E6AzwIEeqTXa0CAPpe9M2geGxi11qxxBNhsBImBGwnbRIqgZXCNwQRMARBkE9FePwzynuwPCS4LS5qulRlaysbNsZoyrbgp1XYbg+Kb7KAJR1n2nH9gCi6vs6iOsdufRoUVq4XO6lBqqEUKQgIwShe2CjAV1EBncglOLJROwpsflxT2nRDFoBRHDkAWKsUiNQjZyIETmKwFcqVEGmlPZC1pbwnKVjLCmVEoqSAhSEyFWVA0EBSEwBECEtjS6LDBN4t5/nXyTGNGVx5i/M8vJMpNDgdfIdNb6KUKMxF+IJt93BTauRVOmSQRoSSBwO5+1PpC0Ns69415TsqpGCNNTzGmsbK6dOxIjTa3kpqpFUGG+g4kjjI14qqLLmSATIOx8rdUVBx6bTJEHhzTaToB2t9vDbZFNlYy40Eg+8LCZvzQYyQYcBtFtQCeOm/FaabBmEQJ43yygq0uRIsQ4TLRyOn6J/KbPDJjmaAXEDxHjFxmO3JLcHFrrz7o12vxExI5LS+hGhtJN4/OyNuGJm+0ztHD5KpU2eXGfThNwbDK3+yAohh40V9TPoUGoHN2RuBUYUlKFHkotYaol1H0sYarlRihspUkLoUcMMsnVYqbZhdKk7ZKqjLVYOHyWWqyOi6D6AN5hV7K06keqNixz6bbldLDugDmqfQaBAKujT0jZFuxJptFMEaJFTDrQywRg8VC3JdRGkJD6JW7FC6W29lW0WMIYQgcF03UrLNXpqpSsc4tVgJ+RVkKe0aLDUUI8hRRxRs9EgKEJrqfBRrEtjR1I5WyI4Gwn11RPMhvyFkDiYA211+xOa+wMWHHaeHJSuAoTJzfV5Tf5lOYIF5baLmJcN0L2fIRKIvtBuTaLWj8lI1Nb4etxy3A5bqU5gk6EE2OnkFGi0X+sDGkamQqY2GkiY31h3X1QA0WgniI8+XQp2U2i0kW56ApNMkEGBMToIjmiqVeI4W+aYNxDNJIOm0RG0oLacr8j+it1QkC1iARvbRGwTvy68kEQGhVUar3umME9FRM5adOKoNT3MOqEp7TpQlRWokbK0KwxUOCojmgN9No4fgmuG8hYKdUiy0Nk6qdLlE4yVBeyc0cFCEgxOJ0TqTnDT46prqYPVLcI280yb8NomPas+EqytRbKirnsw1mygZTT3suoylwsq2Wl93IWLFMiF1g2yyYlkpSixzW00YphG8QhaZVpMawIK1GbprdFAUjYsqhFrJuIpeiU1qZLcZABJ/OqN06RERrqqeB+PHiiiOvPgkZzXWuNYI5+adHhM7xefvSZ+kenX82ROeCN5tr89VJrZTHOTbYQhcwRbltqjpO3ItwnyT3gEGLbj7olB6Y2UxMmPLj5KVG6N15De/qE1lGbjzVmhyvy4p7TolzCBAEC0368+qbRpZuVvUhGaRgQNr9bp1Jsa/BGxog4aETBsVqJVBqNnog0kmpRWp6SUSlYSKai2hqiNjpcSFCLI+7KPuZiFSSqVOVvYwNCGlSgK8m5SpyCY/gi70JQnb4ptInQpHELhqicAfwUNCVbaJ2KDKpiDI9CugDZZmgjVOpXSpxYE6o8ihYdQE6nopOQBpqnUVoAUcEtq0xVKM/iszsMB+C6hYh7tOVNxceo0jpxQtbK6j8MNkk4bgq2XSyObIug7jgt7cPKczChGx0uQ5l+lrKu6v+Tx1XYOGE6ITQCXUOlyI4jfnA02TKotN56bLc+kOW5SHNPxT2NENAPUzqNOXwTW0rfeOuvJW4aG4tAG3P4podx/UQgJhBxvtAstBA4IKUax+SrmUjMc2FRAsjy2QgJGWWmbq0whDCZFOCURdaXNSxSunstIGqJuVRLZ6cosCKjThQtWqjTlVaiQIoqzThagxXkU7VpkFIpjaAWsNV5UtnpkcIsFYAWh1NA2kjY0oDkiDE5rEUJbPRTGpoCIBWEGjQrIVqJGCFcK4VgIAC1LNNaIVQgExCgTS1VlQRRKEhOyISEwTlQPpLUAqLUDTE6ny9UunTO/lzC6ORCaaey0TTaETKXBOFNRzUtnoBYhyJpVIBZahKYUBTIMK4VwiAQFKI4USNgbhTutNOkAoonspBgKwFFEjEESpRAWqAUUQBhWookaKKKICwiCiiAiiiiAtUoogIoAoogJCqFFEBWVTKoogLhQhRRAUFRUUQFOQwqUQFEKoVqJkEqBRRBDVKKIN/9k=",
  },
  {
    title: "Mini Wordle",
    short: "A simple wordle clone. TR and EN.",
    category: "Web",
    link: "https://github.com/Whydll/mini-wordle",
    img: "https://avatars.githubusercontent.com/u/193411351?v=4",
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
