const text = document.getElementById("msg");
const cnt = document.getElementById("count");
const reset = document.getElementById("reset");

const MAX = 100;
cnt.textContent = MAX;

// live counter
text.addEventListener("input", () => {
  let remain = MAX - text.value.length;
  cnt.textContent = remain;

  if (remain <= 0) cnt.style.color = "red";
  else if (remain <= 20) cnt.style.color = "orange";
  else cnt.style.color = "black";

  if (remain < 0) text.value = text.value.slice(0, MAX);
});

// reset
reset.addEventListener("click", () => {
  text.value = "";
  cnt.textContent = MAX;
  cnt.style.color = "black";
});
