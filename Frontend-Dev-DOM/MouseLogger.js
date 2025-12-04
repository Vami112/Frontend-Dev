const box = document.getElementById("track");
const x = document.getElementById("x");
const y = document.getElementById("y");

box.addEventListener("mousemove", (e) => {
  x.textContent = e.clientX;
  y.textContent = e.clientY;
});

box.addEventListener("dblclick", (e) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  box.appendChild(dot);
});
