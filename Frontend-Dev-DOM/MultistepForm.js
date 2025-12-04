const steps = document.querySelectorAll(".step");
let index = 0;

function show(i) {
  steps.forEach((s, x) => (s.style.display = x === i ? "block" : "none"));
}
show(index);

document.addEventListener("click", (e) => {
  if (!e.target.dataset.step) return;

  if (e.target.dataset.step === "next") {
    const input = steps[index].querySelector("input");
    if (!input.value.trim()) return input.reportValidity();
    index++;
  }

  if (e.target.dataset.step === "back") index--;

  show(index);

  if (index === 3) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById("summary").innerHTML = `
      <h3>Summary</h3>
      Name: ${name}<br>Email: ${email}
    `;
  }
});
