let projectsList = [
  {
    dataAos: "fade-right",
    img: "Img/App-Expenses.png",
    h4: "App-Expenses",
    p: "REACT JS",
    href: "https://app-lista-gastos-425c7.web.app/",
    category: "website",
  },
  {
    dataAos: "fade-up",
    img: "Img/Homepage-Contruction.png",
    h4: "Homepage-Construction",
    p: "HTML - CSS - JS",
    href: "https://danieljml.github.io/Homepage/",
    category: "website",
  },
  {
    dataAos: "fade-left",
    img: "Img/Testimonials-Slider.png",
    h4: "Slider-Testimonials",
    p: "HTML - CSS - JS",
    href: "https://danieljml.github.io/Testimonials-Slider/",
    category: "desing",
  },
  {
    dataAos: "fade-right",
    img: "Img/App-Movies.png",
    h4: "App-Movies",
    p: "REACT JS",
    href: "https://danieljml.github.io/App-Movies/",
    category: "website",
  },
  {
    dataAos: "fade-up",
    img: "Img/App-Tareas.png",
    h4: "App-To-Do-List",
    p: "REACT JS",
    href: "https://danieljml.github.io/App-Tareas/",
    category: "website",
  },
  {
    dataAos: "fade-left",
    img: "Img/Whatsapp-clone.png",
    h4: "App-Whatsapp",
    p: "REACT JS",
    href: "https://whatsapp-clone-526b3.web.app/",
    category: "website",
  },
  {
    dataAos: "fade-right",
    img: "Img/Weather-App.png",
    h4: "App-Weather",
    p: "REACT JS",
    href: "https://danieljml.github.io/App-Weather/",
    category: "website",
  },
  {
    dataAos: "fade-up",
    img: "Img/Portafolio.png",
    h4: "Portafolio",
    p: "HTML - CSS - JS",
    href: "https://danieljml.github.io/Portafolio/",
    category: "website",
  },
  {
    dataAos: "fade-left",
    img: "Img/Black-and-white.png",
    h4: "Sitio Web",
    p: "REACT JS",
    href: "https://black-and-white-solutions.github.io/",
    category: "website",
  },
  {
    dataAos: "fade-right",
    img: "Img/Card-Component.png",
    h4: "Diseño-Card",
    p: "HTML - CSS",
    href: "https://danieljml.github.io/Card-Component/",
    category: "desing",
  },
  {
    dataAos: "fade-up",
    img: "Img/Article-Component.png",
    h4: "Diseño-Article",
    p: "HTML - CSS - JS",
    href: "https://danieljml.github.io/Frontend-Mentor/",
    category: "desing",
  },
  {
    dataAos: "fade-left",
    img: "Img/Testimonials-grid-section-main.png",
    h4: "Diseño-Testimonials",
    p: "HTML - CSS",
    href: "https://danieljml.github.io/Frontend-Mentor-Testimonials/",
    category: "desing",
  },
  {
    dataAos: "fade-right",
    img: "Img/Variedades-Monica.png",
    h4: "Tienda-Online",
    p: "WORDPRESS",
    href: "https://www.variedades-monica.com/",
    category: "website",
  },
  {
    dataAos: "fade-up",
    img: "Img/Video-1.png",
    h4: "Video",
    p: "FILMORA - SKETCHUP",
    href: "https://www.youtube.com/watch?v=TMT-NsjcNJw",
    category: "video",
  },
  {
    dataAos: "fade-left",
    img: "Img/Video-2.png",
    h4: "Video",
    p: "FILMORA - SKETCHUP",
    href: "https://www.youtube.com/watch?v=aYgIDuhjbVM",
    category: "video",
  },
];

let project = document.querySelector(".cardProject");
let fragmentProjects = "";

projectsList.map((item) => {
  fragmentProjects += `<div class="col-lg-4 col-12 cardProjects" 
  data-aos=${item.dataAos} data-aos-duration="1000" category = ${item.category}>
  <img 
  Loading = "lazy"
  class="img-projects"
  src=${item.img}
  alt=""
  />
  <div class="overlay">
    <h4>${item.h4}</h4>
    <p>${item.p}</p>
    <a
    href=${item.href}
    target="_blank"
    >
      <span
      class='bx bx-link-external'
      aria-hidden="true"
      ></span
      >Vér Página
    </a>
  </div>
</div>`;
});

project.innerHTML = fragmentProjects;
