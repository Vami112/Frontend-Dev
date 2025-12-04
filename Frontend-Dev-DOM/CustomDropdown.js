const btn = document.getElementById("drop");
const boxD = document.getElementById("options");

btn.addEventListener("click", () => boxD.classList.toggle("show"));

boxD.addEventListener("click", (e) => {
  btn.textContent = e.target.textContent;
  boxD.classList.remove("show");
});

document.addEventListener(
  "click",
  () => boxD.classList.remove("show"),
  true // capturing
);
