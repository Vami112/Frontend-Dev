const input = document.getElementById("product-input");
const btn = document.getElementById("add-product");
const list = document.getElementById("product-list");

// Add product
btn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="p-text">${input.value}</span>
    <button class="edit">Edit</button>
    <button class="del">Delete</button>
  `;
  list.appendChild(li);
  input.value = "";
});

// Event Delegation
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.classList.contains("del")) {
    li.remove();
  }

  if (e.target.classList.contains("edit")) {
    const span = li.querySelector(".p-text");
    const inp = document.createElement("input");
    inp.value = span.textContent;
    span.replaceWith(inp);
    inp.focus();

    const save = () => {
      const spanNew = document.createElement("span");
      spanNew.className = "p-text";
      spanNew.textContent = inp.value.trim() || "Unnamed";
      inp.replaceWith(spanNew);
      document.removeEventListener("click", outsideClick);
    };

    const outsideClick = (ev) => {
      if (!li.contains(ev.target)) save();
    };

    document.addEventListener("click", outsideClick);
  }
});
