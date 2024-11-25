// Получаем элемент по индексу
function getHole(index) {
  return document.getElementById(`hole${index}`);
}

// Инициализация переменных для счетчиков
let dead = 0; // Счетчик убитых кротов
let lost = 0; // Счетчик промахов

// Функция для обновления состояния игры
function updateGame() {
  const deadDisplay = document.getElementById("dead");
  const lostDisplay = document.getElementById("lost");
  deadDisplay.textContent = dead;
  lostDisplay.textContent = lost;

  if (dead >= 10) {
    alert("Победа! Вы убили 10 кротов.");
    resetGame();
  } else if (lost >= 5) {
    alert("Вы проиграли! 5 промахов.");
    resetGame();
  }
}

// Функция для сброса игры
function resetGame() {
  dead = 0;
  lost = 0;
  updateGame();
}

// Регистрация обработчиков событий для каждой лунки
for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = () => {
    if (hole.classList.contains("hole_has-mole")) {
      dead++; // Увеличиваем счетчик побед
    } else {
      lost++; // Увеличиваем счетчик поражений
    }
    updateGame();
  };
}
