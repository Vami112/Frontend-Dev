
const search = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");
const msg = document.getElementById("no-result");

search.addEventListener("input", () => {
  let val = search.value.toLowerCase();
  let found = false;

  rows.forEach((r) => {
    const text = r.textContent.toLowerCase();
    if (text.includes(val)) {
      r.style.display = "";
      found = true;
    } else r.style.display = "none";
  });

  msg.style.display = found ? "none" : "block";
});
