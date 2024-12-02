// Lista completa de cores disponíveis em HTML5
const allColors = [
  "aqua", "cyan", "forestgreen", "lightblue", "mediumspringgreen", 
  "olive", "purple", "sandybrown", "teal", "turquoise", "black", 
  "white", "gray", "red", "blue", "green", "yellow", "orange", 
  "pink", "brown", "violet", "gold", "silver", "lime"
];

// Função para selecionar 10 cores aleatórias
function getRandomColors(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Selecionar 10 cores aleatórias
const selectedColors = getRandomColors(allColors, 10);

// Exibir as cores no HTML
const colorListElement = document.getElementById("color-list");
selectedColors.forEach(color => {
  const colorItem = document.createElement("span");
  colorItem.textContent = `${color} `;
  colorItem.style.color = color;
  
  // Adicionar fundo e borda para cores claras como white
  if (color === "white" ) {
    colorItem.style.backgroundColor = "gray";
    colorItem.style.color = "white";
    colorItem.style.padding = "2px 5px";
    colorItem.style.borderRadius = "5px";
  }
  
  colorListElement.appendChild(colorItem);
});

// Escolher uma cor aleatória para o computador
const targetColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

// Adicionar lógica para o jogo
document.getElementById("submit-btn").addEventListener("click", () => {
  const userGuess = document.getElementById("color-input").value.trim().toLowerCase();
  const hintElement = document.getElementById("hint");

  if (!selectedColors.includes(userGuess)) {
    hintElement.textContent = "Por favor, escolha uma cor válida da lista.";
    return;
  }

  if (userGuess === targetColor) {
    document.body.style.backgroundColor = targetColor;
    hintElement.textContent = "Parabéns! Você acertou!";
  } else {
    const hint = userGuess < targetColor 
      ? "Dica: Sua cor vem antes da minha em ordem alfabética." 
      : "Dica: Sua cor vem depois da minha em ordem alfabética.";
    hintElement.textContent = `Errado! ${hint}`;
  }
});
