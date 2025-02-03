// Generate random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Set up the game
function setupGame() {
  const colorBox = document.getElementById('colorBox');
  const buttonContainer = document.getElementById('buttonContainer');
  const result = document.getElementById('result');

  // Generate correct color
  const correctColor = getRandomColor();
  colorBox.style.backgroundColor = correctColor;

  // Generate options
  const options = [correctColor];
  while (options.length < 3) {
    const newColor = getRandomColor();
    if (!options.includes(newColor)) {
      options.push(newColor);
    }
  }

  // Shuffle options
  options.sort(() => Math.random() - 0.5);

  // Display buttons
  buttonContainer.innerHTML = '';
  options.forEach(color => {
    const button = document.createElement('button');
    button.textContent = color;
    button.style.backgroundColor = color;
    button.style.color = '#fff';
    button.addEventListener('click', () => {
      if (color === correctColor) {
        result.textContent = 'Correct! 🎉';
        result.style.color = 'green';
      } else {
        result.textContent = 'Try Again! ❌';
        result.style.color = 'red';
      }
    });
    buttonContainer.appendChild(button);
  });
}

// Initialize game
setupGame();