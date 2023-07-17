const reviewsSlider = new Swiper(".reviewsSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2.25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoheight: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: { slidesPerView: 2.25 },
    767: { slidesPerView: 1.25 },
    320: { slidesPerView: 1 },
  },
});
reviewsSlider.on("click", function () {
  reviewsSlider.autoplay.stop();
});

document.querySelector(".rev-prev").addEventListener("click", () => {
  reviewsSlider.autoplay.stop();
});
document.querySelector(".rev-next").addEventListener("click", () => {
  reviewsSlider.autoplay.stop();
});

let maxHeight = 0;
let slides = document.querySelectorAll(".reviewItem");
for (let i = 0; i < slides.length; i++) {
  let slideHeight = slides[i].offsetHeight;
  if (slideHeight > maxHeight) {
    maxHeight = slideHeight;
  }
}

for (let i = 0; i < slides.length; i++) {
  slides[i].style.height = maxHeight + "px";
}
