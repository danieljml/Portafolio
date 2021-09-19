let swiperSlide = [
  {
    img: "slide-img-1",
  },
  {
    img: "slide-img-2",
  },
  {
    img: "slide-img-3",
  },
];

let swiperWrapper = document.querySelector(".swiper-wrapper");
let fragmentSlide = "";

swiperSlide.map((item) => {
  fragmentSlide += `  <div class="swiper-slide ${item.img} slide-img">
  <div class="swiper-text">
    <h6 class="hello">Hola, mi nombre es</h6>
    <h1 class="name">Daniel Martinez</h1>
    <h5 class="frontend-developer">Soy Frontend Developer</h5>
    <div class="block-a">
      <a
        class="btn"
        href="https://api.whatsapp.com/send/?phone=+584121938935&amp;text=Hola%2C+me+interesa+su+servicio+para+mi+negocio%21%21&amp;app_absent=0"
        >Contáctame</a
      >
    </div>
  </div>
</div>`;
});

swiperWrapper.innerHTML = fragmentSlide;
