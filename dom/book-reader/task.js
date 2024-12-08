document.addEventListener("DOMContentLoaded", () => {
  const book = document.getElementById("book");

  // Управление размерами шрифта
  const fontSizeControls = document.querySelectorAll(
    ".book__control_font-size .font-size"
  );
  fontSizeControls.forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();

      // Удаляем активный класс со всех элементов
      fontSizeControls.forEach((item) =>
        item.classList.remove("font-size_active")
      );

      // Устанавливаем активный класс текущему элементу
      control.classList.add("font-size_active");

      // Убираем старые классы размера шрифта
      book.classList.remove("book_fs-big", "book_fs-small");

      // Добавляем новый класс в зависимости от data-size
      const size = control.dataset.size;
      if (size === "small") {
        book.classList.add("book_fs-small");
      } else if (size === "big") {
        book.classList.add("book_fs-big");
      }
    });
  });

  // Управление цветом текста
  const textColorControls = document.querySelectorAll(
    ".book__control_color .color"
  );
  textColorControls.forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();

      // Удаляем активный класс со всех элементов
      textColorControls.forEach((item) =>
        item.classList.remove("color_active")
      );

      // Устанавливаем активный класс текущему элементу
      control.classList.add("color_active");

      // Убираем старые классы цвета текста
      book.classList.remove(
        "book_color-black",
        "book_color-gray",
        "book_color-whitesmoke"
      );

      // Добавляем новый класс в зависимости от data-text-color
      const textColor = control.dataset.textColor;
      if (textColor) {
        book.classList.add(`book_color-${textColor}`);
      }
    });
  });

  // Управление цветом фона
  const bgColorControls = document.querySelectorAll(
    ".book__control_background .color"
  );
  bgColorControls.forEach((control) => {
    control.addEventListener("click", (event) => {
      event.preventDefault();

      // Удаляем активный класс со всех элементов
      bgColorControls.forEach((item) => item.classList.remove("color_active"));

      // Устанавливаем активный класс текущему элементу
      control.classList.add("color_active");

      // Убираем старые классы цвета фона
      book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");

      // Добавляем новый класс в зависимости от data-bg-color
      const bgColor = control.dataset.bgColor;
      if (bgColor) {
        book.classList.add(`book_bg-${bgColor}`);
      }
    });
  });
});
