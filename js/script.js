/* ==========================================================
   QUALY TECH VIDROS E ESQUADRIAS
   Script principal
========================================================== */

const WHATSAPP_URL =
  "https://wa.me/5511977078472?text=Ola!%20Vim%20pelo%20site%20da%20Qualy%20Tech%20Vidros%20e%20Esquadrias%20e%20gostaria%20de%20solicitar%20um%20orcamento.";

const galleryImages = [
  {
    category: "Esquadrias",
    title: "Esquadrias de Aluminio",
    src: "assets/images/Esquadrias de alumínio.png"
  },
  {
    category: "Vidros",
    title: "Vidros Temperados",
    src: "assets/images/vidro temperado.png"
  },
  {
    category: "Box",
    title: "Box para Banheiro",
    src: "assets/images/Box.png"
  },
  {
    category: "Guarda-Corpo",
    title: "Guarda-Corpo de Vidro",
    src: "assets/images/guarda corpo.png"
  },
  {
    category: "Coberturas",
    title: "Cobertura de Vidro",
    src: "assets/images/cobertura de vidro.png"
  },
  {
    category: "Coberturas",
    title: "Cobertura Retratil",
    src: "assets/images/Cobertura retratil.png"
  },
  {
    category: "Sacadas",
    title: "Fechamento de Sacadas",
    src: "assets/images/fechamento de sacada.png"
  },
  {
    category: "Espelhos",
    title: "Espelhos Sob Medida",
    src: "assets/images/espelhos.png"
  }
];

const testimonials = [
  {
    name: "Larissa Assuncao",
    city: "Suzano | SP",
    photo: "assets/images/Avatar mulher.png",
    text: "Tive uma excelente experiencia com a Qualy Tech Vidros. Contratei a instalacao de um box ate o teto e o resultado ficou impecavel. O servico foi realizado com muita qualidade, acabamento perfeito e atencao aos detalhes."
  },
  {
    name: "Lilian Sales",
    city: "Suzano | SP",
    photo: "assets/images/Avatar mulher.png",
    text: "Gostei muito do atendimento, desde o primeiro contato ate a instalacao final. Equipe educada, pontual e com excelente acabamento. Super recomendo."
  },
  {
    name: "Andressa Di Giorgio",
    city: "Suzano | SP",
    photo: "assets/images/Avatar mulher.png",
    text: "Trabalho impecavel e atendimento diferenciado. Realizaram o servico com pontualidade, agilidade e muita qualidade. Sempre que tivemos duvidas, fomos atendidos prontamente."
  },
  {
    name: "Cezare Micheletto Neto",
    city: "Suzano | SP",
    photo: "assets/images/Avatar homem.png",
    text: "Servico impecavel. O Rafael e o Lucas sao extremamente educados, rapidos e muito profissionais. Explicaram tudo sobre a cobertura e entregaram um trabalho perfeito. Indico de olhos fechados."
  },
  {
    name: "Joice Santos",
    city: "Suzano | SP",
    photo: "assets/images/Avatar mulher.png",
    text: "Minha experiencia superou todas as expectativas. Falei com eles em um dia e na manha seguinte meu box ja estava instalado. Atendimento nota mil e um resultado maravilhoso."
  },
  {
    name: "Reinaldo Donizete",
    city: "Suzano | SP",
    photo: "assets/images/Avatar homem.png",
    text: "Super recomendo. Atendimento excelente, servico com alto padrao de qualidade e profissionais muito atenciosos. Quem procura qualidade e otimo atendimento encontra na Qualy Tech."
  },
  {
    name: "Vitor Anthony",
    city: "Suzano | SP",
    photo: "assets/images/Avatar homem.png",
    text: "Servico excelente, com altissima qualidade, atencao aos detalhes e muito empenho para que tudo funcionasse perfeitamente."
  },
  {
    name: "Mariana Iara",
    city: "Suzano | SP",
    photo: "assets/images/Avatar mulher.png",
    text: "Empresa comprometida com o cliente, produtos de qualidade e instalacao realizada dentro do prazo por profissionais qualificados. Recomendo."
  },
  {
    name: "Bruno De Paulo",
    city: "Suzano | SP",
    photo: "assets/images/Avatar homem.png",
    text: "Seriedade, compromisso, transparencia e preco justo. Excelente atendimento e muita confianca em todo o processo."
  },
  {
    name: "Camila Magrini",
    city: "Suzano | SP",
    photo: "assets/images/Avatar mulher.png",
    text: "Otimo atendimento, preco excelente e o melhor custo-beneficio da regiao. Recomendo a Qualy Tech sem duvidas."
  }
];

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const galleryTrack = document.getElementById("galleryTrack");
const galleryFilters = document.getElementById("galleryFilters");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");
const testimonialContent = document.getElementById("testimonialContent");
const testimonialPrev = document.getElementById("testimonialPrev");
const testimonialNext = document.getElementById("testimonialNext");
const testimonialDots = document.getElementById("testimonialDots");

let filteredGallery = [...galleryImages];
let galleryIndex = 0;
let galleryTimer = null;
let testimonialIndex = 0;
let testimonialTimer = null;

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 40);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function getVisibleGalleryItems() {
  if (window.innerWidth <= 680) return 1;
  if (window.innerWidth <= 920) return 2;
  return 3;
}

function renderFilters() {
  if (!galleryFilters) return;

  const filters = ["Todos", ...new Set(galleryImages.map((item) => item.category))];

  galleryFilters.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-btn${filter === "Todos" ? " active" : ""}" type="button" data-filter="${filter}">
          ${filter}
        </button>
      `
    )
    .join("");
}

function renderGallery() {
  if (!galleryTrack) return;

  galleryTrack.style.opacity = "0";

  window.setTimeout(() => {
    galleryTrack.innerHTML = filteredGallery
      .map(
        (item) => `
          <article class="gallery-item">
            <img src="${item.src}" alt="${item.title}" width="420" height="340" loading="lazy">
            <span>${item.title}</span>
          </article>
        `
      )
      .join("");

    galleryIndex = 0;
    updateGalleryPosition();
    galleryTrack.style.opacity = "1";
  }, 150);
}

function updateGalleryPosition() {
  if (!galleryTrack) return;

  const item = galleryTrack.querySelector(".gallery-item");
  if (!item) return;

  const gap = parseFloat(getComputedStyle(galleryTrack).gap) || 24;
  const width = item.offsetWidth + gap;

  galleryTrack.style.transform = `translateX(-${galleryIndex * width}px)`;
}

function moveGallery(direction) {
  const visible = getVisibleGalleryItems();
  const maxIndex = Math.max(filteredGallery.length - visible, 0);

  galleryIndex = Math.min(Math.max(galleryIndex + direction, 0), maxIndex);
  updateGalleryPosition();
}

function renderTestimonialDots() {
  if (!testimonialDots) return;

  testimonialDots.innerHTML = testimonials
    .map(
      (_, index) => `
        <button
          class="testimonial-dot${index === testimonialIndex ? " active" : ""}"
          type="button"
          data-index="${index}"
          aria-label="Ver depoimento ${index + 1}">
        </button>
      `
    )
    .join("");
}

function renderTestimonial() {
  if (!testimonialContent) return;

  const item = testimonials[testimonialIndex];

  testimonialContent.innerHTML = `
    <img src="${item.photo}" alt="${item.name}" width="95" height="95" loading="lazy">
    <h3>${item.name}</h3>
    <p>${item.city}</p>
    <div class="stars" aria-label="Avaliacao maxima">★★★★★</div>
    <p class="testimonial-text">"${item.text}"</p>
  `;

  renderTestimonialDots();
}

function startTestimonialTimer() {
  clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => moveTestimonial(1), 5000);
}

function moveTestimonial(direction) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial();
  startTestimonialTimer();
}

function animateCounter(number) {
  const target = Number(number.dataset.count);
  const increment = Math.max(Math.ceil(target / 45), 1);
  let current = 0;

  const timer = window.setInterval(() => {
    current = Math.min(current + increment, target);
    number.textContent = current;

    if (current === target) {
      clearInterval(timer);
    }
  }, 25);
}

function initObservers() {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const number = entry.target.querySelector("[data-count]");
        if (number) animateCounter(number);

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  document.querySelectorAll(".stat").forEach((stat) => counterObserver.observe(stat));
}

function startGalleryTimer() {
  clearInterval(galleryTimer);

  galleryTimer = window.setInterval(() => {
    const visible = getVisibleGalleryItems();
    const maxIndex = Math.max(filteredGallery.length - visible, 0);

    galleryIndex = galleryIndex >= maxIndex ? 0 : galleryIndex + 1;
    updateGalleryPosition();
  }, 4500);
}

function bindEvents() {
  menuToggle?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav?.addEventListener("click", (event) => {
    if (event.target.matches("a")) closeMenu();
  });

  galleryFilters?.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    galleryFilters.querySelectorAll(".filter-btn").forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });

    filteredGallery =
      button.dataset.filter === "Todos"
        ? [...galleryImages]
        : galleryImages.filter((item) => item.category === button.dataset.filter);

    renderGallery();
    startGalleryTimer();
  });

  galleryPrev?.addEventListener("click", () => moveGallery(-1));
  galleryNext?.addEventListener("click", () => moveGallery(1));

  galleryTrack?.addEventListener("mouseenter", () => clearInterval(galleryTimer));
  galleryTrack?.addEventListener("mouseleave", startGalleryTimer);

  testimonialPrev?.addEventListener("click", () => moveTestimonial(-1));
  testimonialNext?.addEventListener("click", () => moveTestimonial(1));

  testimonialDots?.addEventListener("click", (event) => {
    const button = event.target.closest(".testimonial-dot");
    if (!button) return;

    testimonialIndex = Number(button.dataset.index);
    renderTestimonial();
    startTestimonialTimer();
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateGalleryPosition);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.href = WHATSAPP_URL;
  });
}

function init() {
  bindEvents();
  renderFilters();
  renderGallery();
  renderTestimonial();
  startGalleryTimer();
  startTestimonialTimer();
  initObservers();
  updateHeader();
}

init();
