const cookieMessageWrapper = document.querySelector(".cookieMessageWrapper");
const denyBtn = document.querySelector(".deny");
const confirmBtn = document.querySelector(".confirm");

wrapper.style.overflow = "hidden";

denyBtn.addEventListener("click", function () {
  cookieMessageWrapper.classList.toggle("active");
  wrapper.style.overflow = "visible";
  showComponents();
});

confirmBtn.addEventListener("click", function () {
  cookieMessageWrapper.classList.toggle("active");
  wrapper.style.overflow = "visible";
  showComponents();
});
