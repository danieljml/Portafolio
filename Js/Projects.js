let projectsList = [
  {
    dataAos: "fade-right",
    img: "Img/Black-and-white.png",
    h4: "Sitio Web",
    p: "REACT JS",
    href: "https://black-and-white-solutions.github.io/",
    category: "website",
  },
  {
    dataAos: "fade-up",
    img: "Img/App-Tareas.png",
    h4: "App-Tareas",
    p: "REACT JS",
    href: "https://danieljml.github.io/App-Tareas/",
    category: "website",
  },
  {
    dataAos: "fade-left",
    img: "Img/Whatsapp-clone-1.png",
    h4: "App-Whatsapp",
    p: "REACT JS",
    href: "https://whatsapp-clone-526b3.web.app/",
    category: "website",
  },
  {
    dataAos: "fade-right",
    img: "Img/Variedades-Monica.png",
    h4: "Tienda Online",
    p: "WORDPRESS",
    href: "https://www.variedades-monica.com/",
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
    img: "Img/Video-1.png",
    h4: "Video",
    p: "FILMORA-SKETCHUP",
    href: "https://www.youtube.com/watch?v=TMT-NsjcNJw",
    category: "video",
  },
  {
    dataAos: "fade-right",
    img: "Img/Video-2.png",
    h4: "Video",
    p: "FILMORA-SKETCHUP",
    href: "https://www.youtube.com/watch?v=aYgIDuhjbVM",
    category: "video",
  },
  {
    dataAos: "fade-up",
    img: "Img/Card-Component.png",
    h4: "Diseño-Card",
    p: "HTML - CSS",
    href: "https://danieljml.github.io/Card-Component/",
    category: "desing",
  },
  {
    dataAos: "fade-left",
    img: "Img/Article-Component.png",
    h4: "Diseño-Article",
    p: "HTML - CSS - JS",
    href: "https://danieljml.github.io/Frontend-Mentor/",
    category: "desing",
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
