const header = document.querySelector(".header");
const welcomePhoto = document.querySelector(".welcome-photo");
const mainFirstSubttitle = document.querySelector(".mainFirstSubtitle");
const welcomeMainTitle = document.querySelector(".welcomeMainTitle");
const mainSecondSubtitle = document.querySelector(".mainSecondSubtitle");
const welcomeInfoImg = document.querySelector(".welcome-info-img");
const welcomeInfoButton = document.querySelector(".welcome-info-button");
const welcomeInfoImgInline = document.querySelector(".welcome-info-img-inline");

function showComponent(component) {
  component.classList.add("show");
}

function showComponents() {
  showComponent(header);
  showComponent(welcomePhoto);
  showComponent(mainFirstSubttitle);
  showComponent(welcomeMainTitle);
  showComponent(mainSecondSubtitle);
  showComponent(welcomeInfoImg);
  showComponent(welcomeInfoButton);
  showComponent(welcomeInfoImgInline);
}

window.addEventListener("load", () => {
  if (
    !document
      .querySelector(".cookieMessageWrapper")
      .classList.contains("active")
  ) {
    showComponents();
    wrapper.style.overflow = "visible";
  }
});

const offset = window.innerHeight;

//----------- fade in -------------
// about coaching card animation

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  let elements = document.querySelectorAll(".fade-in");

  for (let i = 0; i < elements.length; i++) {
    let position = elements[i].getBoundingClientRect().top;
    if (position - offset * 0.8 < 0) {
      elements[i].classList.add("visible");
    } else {
      elements[i].classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", handleScroll);

//----------- paralax--------------
const container = document.querySelector(".doYouKnow2");
const paralaxItems = document.querySelectorAll(".parallax-item");
let trY = -60;
function parallax(items) {
  items.forEach((item) => {
    if (trY < 0) {
      let speed = item.getAttribute("data-speed");
      item.style.transform = "translateY(" + trY + "px)";
      trY = trY + 2.5;
    }
  });
}

const coachImg = document.querySelector(".coachImg");

let executed = false;
function move() {
  if (!executed) {
    coachImg.style.transform = "translateY(60px)";
    executed = true;
  }
}

window.addEventListener("scroll", function () {
  if (container.getBoundingClientRect().top < 180) {
    move();
  } else {
    coachImg.style.transform = "translateY(0)";
    executed = false;
  }
});

const cancelationPolicy = document.querySelector(".cancelationPolicy");
const cancelationPolicyBack = document.querySelector(".cancelationPolicy-back");
let executedcancelationPolicy = false;

window.addEventListener("scroll", function () {
  if (window.innerWidth > 1200) {
    if (cancelationPolicy.getBoundingClientRect().top < 270) {
      cancelationPolicyBack.style.top = "0px";
      executedcancelationPolicy = true;
    }
  }
});
