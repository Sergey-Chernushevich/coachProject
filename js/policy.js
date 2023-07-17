const policyBtn = document.querySelectorAll(".policyBtn");
const policyWrapper = document.querySelector(".policyWrapper");
const closePolicy = document.querySelector(".close-policy");
const wrapper = document.querySelector(".wrapper");
const policyCheck = document.querySelectorAll(".policyCheck");
const bookingFormButton = document.querySelectorAll(".booking-form-button");

policyBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, scrollPosition);
    policyWrapper.classList.toggle("active");
  });
});

policyCheck.forEach((elem) => {
  elem.addEventListener("change", function () {
    if (this.checked) {
      policyCheck.forEach((el) => {
        el.checked = true;
      });
      bookingFormButton.forEach((el) => {
        el.disabled = false;
        el.classList.remove("disabled");
      });
    } else {
      policyCheck.forEach((el) => {
        el.checked = false;
      });
      bookingFormButton.forEach((el) => {
        el.disabled = true;
        el.classList.add("disabled");
      });
    }
  });
});

closePolicy.addEventListener("click", () => {
  policyWrapper.classList.toggle("active");
  wrapper.style.overflow = "visible";
});
