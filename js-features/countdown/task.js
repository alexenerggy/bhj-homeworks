const timerElement = document.getElementById("timer");

// Преобразуем текст в число
let remainingSeconds = parseInt(timerElement.textContent, 10);

// Проверка корректное ли значение получено
if (isNaN(remainingSeconds)) {
  console.error("Ошибка: значение таймера не является числом.");
  remainingSeconds = 59; // Устанавливаем значение по умолчанию
  timerElement.textContent = remainingSeconds;
}

// Функция обратного отсчёта
const countdown = setInterval(() => {
  // Уменьшаем значение таймера
  remainingSeconds -= 1;

  // Обновляем текст в HTML
  timerElement.textContent = remainingSeconds;

  // Если таймер доходит до 0
  if (remainingSeconds <= 0) {
    clearInterval(countdown); // Останавливаем таймер
    alert("Вы победили в конкурсе!"); // Показываем сообщение
  }
}, 1000);
