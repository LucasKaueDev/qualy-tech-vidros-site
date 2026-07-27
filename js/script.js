/* ==========================================================
   QUALY TECH VIDROS E ESQUADRIAS
   Script Principal
========================================================== */


/* ==========================================================
   WHATSAPP
========================================================== */

const whatsappUrl =
  "https://wa.me/5511977078472?text=Olá!%20Vim%20pelo%20site%20da%20Qualy%20Tech%20Vidros%20e%20Esquadrias%20e%20gostaria%20de%20solicitar%20um%20orçamento.";


/* ==========================================================
   GALERIA
========================================================== */

const galleryImages = [

    {
        category: "Esquadrias",
        title: "Esquadrias de Alumínio",
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
        title: "Cobertura Retrátil",
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

/* ==========================================================
   DEPOIMENTOS
========================================================== */

const testimonials = [

    {
        name: "Larissa Assunção",
        city: "Suzano • SP",
        photo: "assets/images/Avatar mulher.png",
        text: "Tive uma excelente experiência com a Qualy Tech Vidros! Contratei a instalação de um box até o teto e o resultado ficou impecável. O serviço foi realizado com muita qualidade, acabamento perfeito e atenção aos detalhes."
    },

    {
        name: "Lilian Sales",
        city: "Suzano • SP",
        photo: "assets/images/Avatar mulher.png",
        text: "Gostei muito do atendimento, desde o primeiro contato até a instalação final. Equipe educada, pontual e com excelente acabamento. Super recomendo!"
    },

    {
        name: "Andressa Di Giorgio",
        city: "Suzano • SP",
        photo: "assets/images/Avatar mulher.png",
        text: "Trabalho impecável e atendimento diferenciado. Realizaram o serviço com pontualidade, agilidade e muita qualidade. Sempre que tivemos dúvidas, fomos atendidos prontamente."
    },

    {
        name: "Cezare Micheletto Neto",
        city: "Suzano • SP",
        photo: "assets/images/Avatar homem.png",
        text: "Serviço impecável! O Rafael e o Lucas são extremamente educados, rápidos e muito profissionais. Explicaram tudo sobre a cobertura e entregaram um trabalho perfeito. Indico de olhos fechados."
    },

    {
        name: "Joice Santos",
        city: "Suzano • SP",
        photo: "assets/images/Avatar mulher.png",
        text: "Minha experiência superou todas as expectativas. Falei com eles em um dia e na manhã seguinte meu box já estava instalado. Atendimento nota mil e um resultado maravilhoso."
    },

    {
        name: "Reinaldo Donizete",
        city: "Suzano • SP",
        photo: "assets/images/Avatar homem.png",
        text: "Super recomendo! Atendimento excelente, serviço com alto padrão de qualidade e profissionais muito atenciosos. Quem procura qualidade e ótimo atendimento encontra na Qualy Tech."
    },

    {
        name: "Vitor Anthony",
        city: "Suzano • SP",
        photo: "assets/images/Avatar homem.png",
        text: "Serviço excelente, com altíssima qualidade, atenção aos detalhes e muito empenho para que tudo funcionasse perfeitamente."
    },

    {
        name: "Mariana Iara",
        city: "Suzano • SP",
        photo: "assets/images/Avatar mulher.png",
        text: "Empresa comprometida com o cliente, produtos de qualidade e instalação realizada dentro do prazo por profissionais qualificados. Recomendo!"
    },

    {
        name: "Bruno De Paulo",
        city: "Suzano • SP",
        photo: "assets/images/Avatar homem.png",
        text: "Seriedade, compromisso, transparência e preço justo. Excelente atendimento e muita confiança em todo o processo."
    },

    {
        name: "Camila Magrini",
        city: "Suzano • SP",
        photo: "assets/images/Avatar mulher.png",
        text: "Ótimo atendimento, preço excelente e o melhor custo-benefício da região. Recomendo a Qualy Tech sem dúvidas."
    }

];


/* ==========================================================
   ELEMENTOS DO DOM
========================================================== */

const header = document.getElementById("header");

const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");

const galleryTrack = document.getElementById("galleryTrack");

const galleryFilters = document.getElementById("galleryFilters");

const galleryPrev = document.getElementById("galleryPrev");

const galleryNext = document.getElementById("galleryNext");

const testimonialContent = document.getElementById("testimonialContent");


/* ==========================================================
   ESTADOS DA APLICAÇÃO
========================================================== */

let filteredGallery = [...galleryImages];

let galleryIndex = 0;

let testimonialIndex = 0;

let testimonialTimer = null;

/* ==========================================================
   HEADER
========================================================== */

function updateHeader() {

    header.classList.toggle("scrolled", window.scrollY > 40);

}


/* ==========================================================
   MENU MOBILE
========================================================== */

function closeMenu() {

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");

}


/* ==========================================================
   GALERIA
========================================================== */

function getVisibleGalleryItems() {

    if (window.innerWidth <= 640) {

        return 1;

    }

    if (window.innerWidth <= 992) {

        return 2;

    }

    return 3;

}


/* ==========================================================
   FILTROS
========================================================== */

function renderFilters() {

    const filters = [

        "Todos",

        "Esquadrias",

        "Vidros",

        "Box",

        "Coberturas",

        "Guarda-Corpo",

        "Sacadas",

        "Espelhos"

    ];

    galleryFilters.innerHTML = filters.map(filter => `

        <button
            class="filter-btn${filter === "Todos" ? " active" : ""}"
            type="button"
            data-filter="${filter}">

            ${filter}

        </button>

    `).join("");

}


/* ==========================================================
   RENDERIZAÇÃO DA GALERIA
========================================================== */

function renderGallery() {

    galleryTrack.style.opacity = "0";

    setTimeout(() => {

        galleryTrack.innerHTML = filteredGallery.map(item => `

            <article class="gallery-item">

                <img
                    src="${item.src}"
                    alt="${item.title}"
                    loading="lazy">

                <span>${item.title}</span>

            </article>

        `).join("");

        galleryIndex = 0;

        updateGalleryPosition();

        galleryTrack.style.opacity = "1";

    },150);

}


/* ==========================================================
   POSIÇÃO DA GALERIA
========================================================== */

function updateGalleryPosition() {

    const item = galleryTrack.querySelector(".gallery-item");

    if(!item) return;

    const gap =
        parseFloat(getComputedStyle(galleryTrack).gap) || 24;

    const width =
        item.offsetWidth + gap;

    galleryTrack.style.transform =
        `translateX(-${galleryIndex * width}px)`;

}


/* ==========================================================
   NAVEGAÇÃO
========================================================== */

function moveGallery(direction){

    const visible = getVisibleGalleryItems();

    const max =
        Math.max(filteredGallery.length - visible,0);

    galleryIndex += direction;

    if(galleryIndex < 0){

        galleryIndex = 0;

    }

    if(galleryIndex > max){

        galleryIndex = max;

    }

    updateGalleryPosition();

}


/* ==========================================================
   DEPOIMENTOS
========================================================== */

function renderTestimonial(){

    const item = testimonials[testimonialIndex];

    testimonialContent.innerHTML = `

        <img
            src="${item.photo}"
            alt="${item.name}"
            loading="lazy">

        <h3>${item.name}</h3>

        <p>${item.city}</p>

        <div class="stars">

★★★★★

        </div>

        <p class="testimonial-text">

"${item.text}"

        </p>

    `;

}


/* ==========================================================
   CARROSSEL DE DEPOIMENTOS
========================================================== */

function moveTestimonial(direction){

    testimonialIndex += direction;

    if(testimonialIndex < 0){

        testimonialIndex =
            testimonials.length-1;

    }

    if(testimonialIndex >= testimonials.length){

        testimonialIndex = 0;

    }

    renderTestimonial();

    startTestimonialTimer();

}


function startTestimonialTimer(){

    clearInterval(testimonialTimer);

    testimonialTimer =

        setInterval(()=>{

            moveTestimonial(1);

        },5000);

}


/* ==========================================================
   ANIMAÇÃO DOS CONTADORES
========================================================== */

function animateCounters(entries,observer){

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const number =
            entry.target.querySelector("[data-count]");

        const target =
            Number(number.dataset.count);

        const prefix =
            target === 98 ? "" : "+";

        const suffix =
            target === 98 ? "%" : "";

        let current = 0;

        const increment =
            Math.ceil(target/45);

        const timer = setInterval(()=>{

            current =
                Math.min(current+increment,target);

            number.textContent =
                `${prefix}${current}${suffix}`;

            if(current===target){

                clearInterval(timer);

            }

        },25);

        observer.unobserve(entry.target);

    });

}


/* ==========================================================
   OBSERVERS
========================================================== */

function initObservers(){

    const revealObserver =

        new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },{

            threshold:.15

        });


    document

        .querySelectorAll(".reveal")

        .forEach(el=>revealObserver.observe(el));


    const counterObserver =

        new IntersectionObserver(

            animateCounters,

            {

                threshold:.45

            }

        );


    document

        .querySelectorAll(".stat")

        .forEach(stat=>counterObserver.observe(stat));

}

/* ==========================================================
   EVENTOS
========================================================== */

menuToggle.addEventListener("click", () => {

    const isOpen = document.body.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

});


mainNav.addEventListener("click", (event) => {

    if (event.target.matches("a")) {

        closeMenu();

    }

});


galleryFilters.addEventListener("click", (event) => {

    const button = event.target.closest(".filter-btn");

    if (!button) return;

    galleryFilters
        .querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.dataset.filter;

    filteredGallery =

        filter === "Todos"

            ? [...galleryImages]

            : galleryImages.filter(item => item.category === filter);

    galleryIndex = 0;

    renderGallery();

});


galleryPrev.addEventListener("click", () => {

    moveGallery(-1);

});


galleryNext.addEventListener("click", () => {

    moveGallery(1);

});


document
    .getElementById("testimonialPrev")
    .addEventListener("click", () => {

        moveTestimonial(-1);

});


document
    .getElementById("testimonialNext")
    .addEventListener("click", () => {

        moveTestimonial(1);

});


window.addEventListener("scroll", updateHeader, {

    passive: true

});


window.addEventListener("resize", () => {

    updateGalleryPosition();

});


/* ==========================================================
   SCROLL SUAVE
========================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", event => {

            const target = document.querySelector(

                anchor.getAttribute("href")

            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

});


/* ==========================================================
   WHATSAPP
========================================================== */

document
    .querySelectorAll('a[href*="wa.me"]')
    .forEach(link => {

        link.href = whatsappUrl;

});


/* ==========================================================
   AUTO PLAY DA GALERIA
========================================================== */

let galleryTimer = null;

function startGalleryTimer() {

    clearInterval(galleryTimer);

    galleryTimer = setInterval(() => {

        const visible = getVisibleGalleryItems();

        const maxIndex = Math.max(

            filteredGallery.length - visible,

            0

        );

        if (galleryIndex >= maxIndex) {

            galleryIndex = 0;

        } else {

            galleryIndex++;

        }

        updateGalleryPosition();

    }, 4500);

}


galleryTrack.addEventListener("mouseenter", () => {

    clearInterval(galleryTimer);

});


galleryTrack.addEventListener("mouseleave", () => {

    startGalleryTimer();

});


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

renderFilters();

renderGallery();

renderTestimonial();

startGalleryTimer();

startTestimonialTimer();

initObservers();

updateHeader();