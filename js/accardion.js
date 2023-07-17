let accordionHeaders = document.getElementsByClassName("accordion-header");
let accordionHeadersBtn = document.getElementsByClassName(
  "accordion-header-button"
);

for (let i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}
