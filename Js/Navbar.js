let navLinks = [
  {
    navLink: "Inicio",
    href: "#",
  },
  {
    navLink: "Sobre mi",
    href: "#about",
  },
  {
    navLink: "Servicios",
    href: "#services",
  },
  {
    navLink: "Proyectos",
    href: "#projects",
  },
];

let ul = document.querySelector(".navbar-nav");
let fragmentNavbar = "";

navLinks.map((item) => {
  fragmentNavbar += `<li class="nav-item">
 <a class="nav-link active" aria-current="page" href="${item.href}">${item.navLink}</a>
</li>`;
});

ul.innerHTML = fragmentNavbar;
