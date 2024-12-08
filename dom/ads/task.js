document.addEventListener("DOMContentLoaded", () => {
  // Находим все ротаторы на странице
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach((rotator) => {
    const cases = rotator.querySelectorAll(".rotator__case"); // Все элементы ротатора
    let activeIndex = 0; // Индекс активного элемента

    const rotate = () => {
      // Убираем класс и возвращаем стиль цвета текущего элемента
      const currentCase = cases[activeIndex];
      currentCase.classList.remove("rotator__case_active");

      // Переход к следующему элементу
      activeIndex = (activeIndex + 1) % cases.length;
      const nextCase = cases[activeIndex];

      // Устанавливаем новый цвет и активируем следующий элемент
      nextCase.style.color = nextCase.dataset.color;
      nextCase.classList.add("rotator__case_active");

      // Запускаем следующий цикл с учетом задержки
      setTimeout(rotate, nextCase.dataset.speed);
    };

    // Запускаем первый цикл
    const initialCase = cases[activeIndex];
    initialCase.style.color = initialCase.dataset.color;
    setTimeout(rotate, initialCase.dataset.speed);
  });
});
