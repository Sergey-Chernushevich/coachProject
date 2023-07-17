const publicationModalWrapper = document.getElementById(
  "publicationModalWrapper"
);
const publicationModalImg = document.getElementById("publicationModalImg");
const publications = document.querySelectorAll(".publicationImg");

for (let i = 0; i < publications.length; i++) {
  publications[i].addEventListener("click", function () {
    publicationModalWrapper.style.display = "block";
    // wrapper.style.overflow = "hidden";
    let path = `${this.src.slice(0, -4)}-modal.jpg`;
    publicationModalImg.src = path;
  });
}

const closePublicationModal = document.querySelector(".close-publicationModal");
closePublicationModal.addEventListener("click", function () {
  publicationModalWrapper.style.display = "none";
  // wrapper.style.overflow = "visible";
});
