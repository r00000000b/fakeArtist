function draw(){
  var ctx = document.getElementById('drawing').getContext('2d');
}

window.onload = draw;

var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');

var radius = 10;
var dragging = false;

ctx.lineWidth = radius*2;

var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

var putPoint = function(e){
  if (dragging) {
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, radius, 0, Math.Pi*2);
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