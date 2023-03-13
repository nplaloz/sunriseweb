const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = Math.PI*40;
canvas.height = 100;

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.moveTo(0, 50);

let x = 0;
let y = 50;

for (let i = 0; i <= canvas.width+1; i++) {
  x = i;
  y = 50 + 25 * Math.sin(i * 0.1);
  ctx.lineTo(x, y);
}

ctx.lineTo(canvas.width, y);
ctx.lineTo(canvas.width, canvas.height);
ctx.lineTo(0, canvas.height);
ctx.lineTo(0, 50);
ctx.fill();

const waveBorder = document.getElementById('wave-border');
waveBorder.style.background = `url(${canvas.toDataURL()}) repeat-x`;
waveBorder.style.padding = '20px';
