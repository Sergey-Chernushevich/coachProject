const burgerButton = document.getElementById("burgerButton");
const closeBnt = document.querySelector(".closeBurgerBnt");
const burgerNavigationWrapper = document.getElementById(
  "burgerNavigationWrapper"
);
const orderBtn = document.getElementById("orderBtn");
const burgerNavigation = document.querySelectorAll(".burgerItem");

burgerButton.addEventListener("click", function () {
  burgerNavigationWrapper.classList.toggle("active");
  wrapper.style.overflow = "hidden";
});

closeBnt.addEventListener("click", function () {
  burgerNavigationWrapper.classList.toggle("active");
  wrapper.style.overflow = "visible";
});

burgerNavigation.forEach((item) => {
  item.addEventListener("click", function () {
    burgerNavigationWrapper.classList.toggle("active");
    wrapper.style.overflow = "visible";
  });
});

orderBtn.addEventListener("click", function () {
  burgerNavigationWrapper.classList.toggle("active");
  // e.preventDefault();
  wrapper.style.overflow = "visible";
});
