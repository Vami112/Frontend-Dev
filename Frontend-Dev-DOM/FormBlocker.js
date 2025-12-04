const form = document.getElementById("myForm");
const success = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const pass = form.pass.value.trim();

  let valid = true;

  if (!name) showErr("name", "Required"), (valid = false);
  if (!email.includes("@")) showErr("email", "Invalid email"), (valid = false);
  if (pass.length < 6) showErr("pass", "Min 6 chars"), (valid = false);

  if (valid) {
    success.textContent = "Form Submitted Successfully!";
    success.style.color = "green";
  }
});

form.addEventListener("input", (e) =>
  e.target.nextElementSibling && (e.target.nextElementSibling.textContent = "")
);

function showErr(field, msg) {
  document.querySelector(`[data-err='${field}']`).textContent = msg;
}
