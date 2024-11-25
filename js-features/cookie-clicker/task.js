// Инициализация переменных
let counter = 0; // Счётчик кликов
let lastClickTime = Date.now(); // Время последнего клика

// Получение элементов из DOM
const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("clicker__counter");

// Создание и добавление элемента для отображения скорости кликов
const speedDisplay = document.createElement("div");
speedDisplay.textContent = "Скорость кликов: 0 кликов/сек";
speedDisplay.style.marginTop = "10px";
document.querySelector(".clicker").appendChild(speedDisplay);

// Обработчик кликов
cookie.addEventListener("click", () => {
  // Увеличиваем счётчик
  counter++;
  counterDisplay.textContent = counter;

  // Анимация изменения размеров печеньки
  if (cookie.style.transform === "scale(0.9)") {
    cookie.style.transform = "scale(1)";
  } else {
    cookie.style.transform = "scale(0.9)";
  }

  // Расчёт скорости кликов
  const currentTime = Date.now();
  const timeDiff = (currentTime - lastClickTime) / 1000; // Время между кликами в секундах
  lastClickTime = currentTime;

  if (timeDiff > 0) {
    const clickSpeed = (1 / timeDiff).toFixed(2); // Скорость кликов в секундах
    speedDisplay.textContent = `Скорость кликов: ${clickSpeed} кликов/сек`;
  }
});
