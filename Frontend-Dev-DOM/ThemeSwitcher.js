const btns = document.querySelectorAll(".theme-btn");

btns.forEach((b) =>
  b.addEventListener("click", () => {
    const theme = b.dataset.theme;
    document.body.setAttribute("data-theme", theme);
  })
);
