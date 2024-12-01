document.addEventListener("DOMContentLoaded", () => {
  // Находим все блоки с вкладками
  const tabContainers = document.querySelectorAll(".tab__navigation");

  tabContainers.forEach((tabContainer) => {
    const tabs = Array.from(tabContainer.querySelectorAll(".tab")); // Все вкладки в текущем контейнере
    const contents = Array.from(
      tabContainer.nextElementSibling.querySelectorAll(".tab__content")
    ); // Связанное содержимое вкладок

    // Назначаем обработчик для каждой вкладки
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Убираем активные классы со всех вкладок и содержимого
        tabs.forEach((t) => t.classList.remove("tab_active"));
        contents.forEach((c) => c.classList.remove("tab__content_active"));

        // Добавляем активные классы выбранной вкладке и её содержимому
        tab.classList.add("tab_active");
        contents[index].classList.add("tab__content_active");
      });
    });
  });
});
