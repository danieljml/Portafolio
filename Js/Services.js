let servicesList = [
  {
    dataAos: "fade-right",
    icon: "bx-globe",
    title: "Publicidad Digital",
    content:
      "Diseños creativos para que cada pieza de contenido sea más atractiva al usuario y así poder aumentar el recuerdo del producto.",
  },
  {
    dataAos: "fade-left",
    icon: "bx-mobile-alt",
    title: "Diseño Responsive",
    content:
      "Su sitio se mostrará correctamente en cualquier dispositivo, incluidas computadoras de escritorio, tabletas y teléfonos móviles.",
  },
  {
    dataAos: "fade-right",
    icon: "bx-edit",
    title: "Diseño Creativo",
    content:
      "Diseño web atractivo con una interfaz intuitiva que permita ofrecer una experiencia agradable al los clientes.",
  },
  {
    dataAos: "fade-left",
    icon: "bx-laptop",
    title: "Desarrollo",
    content:
      "Construye tu producto con alguien dedicado, que estará disponible para ti a lo largo el proyecto.",
  },
];

let services = document.querySelector(".boxer");
let fragmentServices = "";

servicesList.map((item) => {
  fragmentServices += `<div class="col-12 col-lg-6 card-services">
  <div class="box" data-aos="${item.dataAos}" data-aos-duration="1000">
    <div class="icon">
      <i class="bx ${item.icon} icon-services"></i>
    </div>
    <h5>${item.title}</h5>
    <p>
    ${item.content}
    </p>
  </div>
</div>`;
});

services.innerHTML = fragmentServices;
