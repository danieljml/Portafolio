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
    img: "Img/Dog-Maru.png",
    h4: "Diseño",
    p: "FIGMA",
    href: "",
    category: "desing",
  },
  {
    dataAos: "fade-left",
    img: "Img/Variedades-Monica.png",
    h4: "Tienda Online",
    p: "WORDPRESS",
    href: "https://www.variedades-monica.com/",
    category: "website",
  },
  {
    dataAos: "fade-right",
    img: "Img/Mtz-Store.png",
    h4: "Tienda Online",
    p: "HTML - CSS - JS",
    href: "https://danieljml.github.io/First-Ecommerce/",
    category: "website",
  },
  {
    dataAos: "fade-up",
    img: "Img/Video-1.png",
    h4: "Video",
    p: "FILMORA-SKETCHUP",
    href: "https://www.youtube.com/watch?v=TMT-NsjcNJw",
    category: "video",
  },
  {
    dataAos: "fade-left",
    img: "Img/Video-2.png",
    h4: "Video",
    p: "FILMORA-SKETCHUP",
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
  <div class="overlay p-5">
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
