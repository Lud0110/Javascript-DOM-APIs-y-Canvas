const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

// Luna
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'gray';
  ctx.fill();

  // Casa
  ctx.fillStyle = 'orange';
  ctx.fillRect(150, 150, 200, 200);
  ctx.fillStyle = 'black';
  ctx.fillRect(225, 250, 50, 100);

  // Ventanas
  ctx.fillStyle = 'yellow';
  ctx.fillRect(175, 175, 50, 50);
  ctx.fillRect(275, 175, 50, 50);

  // Techo
  ctx.beginPath();
  ctx.moveTo(140, 150);
  ctx.lineTo(300, 150);
  ctx.lineTo(220, 100);
  ctx.closePath();
  ctx.fillStyle = 'black';
  ctx.fill();

  // Árbol
  ctx.fillStyle = 'brown';
  ctx.fillRect(50, 280, 30, 100);
  ctx.beginPath();
  ctx.arc(65, 250, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'green';
  ctx.fill();

  // Calabaza
  ctx.fillStyle = 'orange';
  ctx.beginPath();
  ctx.arc(350, 350, 30, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = 'green';
  ctx.fillRect(345, 310, 10, 20);