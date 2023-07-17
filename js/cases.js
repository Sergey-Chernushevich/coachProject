const casesSwiper = new Swiper(".cases-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  autoplayDisableOnInteraction: 1,
});
casesSwiper.on("click", function () {
  casesSwiper.autoplay.stop();
});

document.querySelector(".cases-prev").addEventListener("click", () => {
  casesSwiper.autoplay.stop();
});
document.querySelector(".cases-next").addEventListener("click", () => {
  casesSwiper.autoplay.stop();
});
