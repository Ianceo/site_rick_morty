import "../css/style.css";
import { characters, storyChapters } from "./data.js";

const $ = (selector, parent = document) => parent.querySelector(selector);

function createEl(tag, className = "", text = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

const statusLabels = {
  Alive: { label: "Vivo", css: "alive" },
  Dead: { label: "Morto", css: "dead" },
  unknown: { label: "Desconhecido", css: "unknown" },
};

function renderStory() {
  const grid = $("#story-grid");
  const fragment = document.createDocumentFragment();

  storyChapters.forEach((chapter, index) => {
    const card = createEl("article", "story-card");
    card.append(
      createEl("span", "num", String(index + 1).padStart(2, "0")),
      createEl("h3", "", chapter.title),
      createEl("p", "", chapter.text)
    );
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

const categories = [
  { key: "todos", label: "Todos" },
  { key: "principal", label: "Protagonistas" },
  { key: "familia", label: "Família" },
  { key: "aliado", label: "Aliados" },
  { key: "alienigena", label: "Alienígena" },
  { key: "inimigo", label: "Inimigos" },
];

function renderFilters(onChange) {
  const container = $("#filters");
  categories.forEach((cat, index) => {
    const btn = createEl("button", "filter-btn", cat.label);
    btn.type = "button";
    btn.dataset.filter = cat.key;
    if (index === 0) btn.classList.add("active");
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      onChange(cat.key);
    });
    container.appendChild(btn);
  });
}

function createCharacterCard(character, index) {
  const card = createEl("article", "card");
  card.dataset.category = character.category;
  card.style.animationDelay = `${index * 0.08}s`;

  const img = createEl("img", "card-img");
  img.src = character.image;
  img.alt = `Foto de ${character.name}`;
  img.loading = "lazy";

  const body = createEl("div", "card-body");
  const status = statusLabels[character.status] ?? statusLabels.unknown;
  const badge = createEl("span", `badge ${status.css}`, status.label);

  const info = [
    ["Espécie", character.species],
    ["Origem", character.origin],
  ];

  body.append(createEl("h3", "", character.name), badge);
  info.forEach(([label, value]) => {
    const p = createEl("p");
    const strong = createEl("strong", "", `${label}: `);
    p.append(strong, document.createTextNode(value));
    body.appendChild(p);
  });
  body.appendChild(createEl("p", "", character.description));

  card.append(img, body);
  return card;
}

function renderCharacters(filter = "todos") {
  const container = $("#cards");
  container.innerHTML = "";

  const list = filter === "todos"
    ? characters
    : characters.filter((c) => c.category === filter);

  const fragment = document.createDocumentFragment();
  list.forEach((character, index) => fragment.appendChild(createCharacterCard(character, index)));
  container.appendChild(fragment);
}

function highlightMenuOnScroll() {
  const links = document.querySelectorAll(".menu a");
  const sections = [...links].map((link) => $(link.getAttribute("href")));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.style.color = link.getAttribute("href") === `#${entry.target.id}`
            ? "var(--green)"
            : "";
        });
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  sections.forEach((section) => section && observer.observe(section));
}

function init() {
  renderStory();
  renderFilters((filter) => renderCharacters(filter));
  renderCharacters();
  highlightMenuOnScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
