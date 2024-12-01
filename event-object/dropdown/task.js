document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const valueElement = dropdown.querySelector(".dropdown__value");
    const listElement = dropdown.querySelector(".dropdown__list");
    const items = dropdown.querySelectorAll(".dropdown__item");

    // Функция для открытия/закрытия списка
    valueElement.addEventListener("click", () => {
      listElement.classList.toggle("dropdown__list_active");
    });

    // Функция для обработки клика по пункту меню
    items.forEach((item) => {
      const link = item.querySelector(".dropdown__link");
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Отключаем переход по ссылке
        valueElement.textContent = link.textContent; // Задаем новое значение
        listElement.classList.remove("dropdown__list_active"); // Закрываем список
      });
    });

    // Закрытие списка при клике вне его
    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        listElement.classList.remove("dropdown__list_active");
      }
    });
  });
});
