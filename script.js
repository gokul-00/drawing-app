const reset = document.getElementById('reset');
const color = document.getElementById('color');
const erase = document.getElementById('erase');
const draw = document.getElementById('draw');
const width = document.getElementById('width');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let isErase = false;
let lineWidth = 2 ;
let x = 0;
let y = 0;
width.addEventListener('change',() => {lineWidth = width.value})

reset.addEventListener('click', () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

erase.addEventListener('click',() => {
    isErase = true
})
draw.addEventListener('click',() => {
    isErase = false
})

canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(ctx, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  if(isErase){
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
  }else{
    ctx.strokeStyle = color.value; 
    ctx.lineWidth = lineWidth;
  }
  ctx.lineCap = "round"
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}