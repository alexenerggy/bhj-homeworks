const tooltip = document.querySelector(".tooltip");
const hasTooltipElements = document.querySelectorAll(".has-tooltip");

hasTooltipElements.forEach((element) => {
  element.addEventListener("click", () => {
    tooltip.textContent = element.title;
    tooltip.classList.add("tooltip_active");
  });
});
