var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e){
  if (dragging) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.lineWidth = radius*2;
      ctx.strokeStyle = '#ff0000';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
      ctx.fillStyle = '#ff0000';
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
  }
};

var engage = function(e){
  dragging = true;
  putPoint(e);
}

var disengage = function(){
  dragging = false;
  ctx.beginPath()
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage)