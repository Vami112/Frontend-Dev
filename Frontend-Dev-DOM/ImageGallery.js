const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelector(".gallery").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    modalImg.src = e.target.src;
    modal.style.display = "block";
  }
});

modal.addEventListener("click", () => modal.style.display = "none");
modalImg.addEventListener("click", (e) => e.stopPropagation());
