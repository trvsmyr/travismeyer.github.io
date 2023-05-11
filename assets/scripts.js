"use strict";


(() => {
  const random = (a = 1, b = 0) => {
    const lower = Math.min(a, b);
    const upper = Math.max(a, b);
    return Math.floor(lower + Math.random() * (upper - lower + 1))
  };

  const sparkColors = [
    '#3E9DF0',
    '#F0514A',
    '#32F0E3',
    '#26F070',
    '#7A4AF0'
  ]

  Array.from({ length: 10 }, (_, i) => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top = `${random(i, 75)}%`;
    confetti.style.left = `${random(i, 75)}%`;
    confetti.style.transform = `rotate(${random(i, 320)}deg)`;
    confetti.style.backgroundColor = `${sparkColors[random(0, sparkColors.length)]}`

    const container = document.getElementById('container');
    container.appendChild(confetti);
  })
})();
