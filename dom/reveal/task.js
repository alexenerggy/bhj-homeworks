document.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    const rect = reveal.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Проверяем, попадает ли верх блока в область видимости
    if (rect.top < windowHeight && rect.bottom > 0) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  });
});
