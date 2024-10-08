const educationSlider = new Swiper(".education-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // thumbs: {
  //   swiper: {
  //     el: ".education-slider-mini",
  //     slidesPerView: 7,
  //   },
  // },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

educationSlider.on("click", function () {
  educationSlider.autoplay.stop();
});

//----------------- modal--------------
let magnifyList = document.getElementsByClassName("magnify");
let educationModalWrapper = document.querySelector(".educationModalWrapper");
let educationModalImg = document.querySelector(".educationModalImg");
let closeEducationModalWrapper = document.querySelector(
  ".closeEducationModalWrapper"
);

for (let i = 0; i < magnifyList.length; i++) {
  magnifyList[i].addEventListener("click", function () {
    console.log(this.nextElementSibling);
    educationModalWrapper.style.display = "flex";
    let path = `${this.nextElementSibling.src}`;
    educationModalImg.src = path;
  });
}

educationModalWrapper.addEventListener("click", function () {
  educationModalWrapper.style.display = "none";
});

closeEducationModalWrapper.addEventListener("click", function () {
  educationModalWrapper.style.display = "none";
});

educationModalImg.addEventListener("click", function (event) {
  event.stopPropagation();
});
