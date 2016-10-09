$(document).ready(function(){
   var mouse = {
      click: false,
      move: false,
      pos: {x:0, y:0},
      pos_prev: false
   };

   var canvas = document.getElementById('drawing');
   var ctx = canvas.getContext('2d');
   var width = window.innerWidth;
   var height = window.innerHeight;
   var radius = 5;

   // setting ratio of canvas to all displays
   canvas.width = (width/3)-24;
   canvas.height = (canvas.width/4)*3;

   // register mouse event handlers
   canvas.onmousedown = function(e){ mouse.click = true; };
   canvas.onmouseup = function(e){ mouse.click = false; };

   canvas.onmousemove = function(e) {
      // making positions appear the 'same' on different resolution screens.
      mouse.pos.x = (e.clientX - document.getElementById("drawing").getBoundingClientRect().left)/width;
      mouse.pos.y = (e.clientY - document.getElementById("drawing").getBoundingClientRect().top)/height;
      // mouse.pos.x = e.clientX / width;
      // mouse.pos.y = e.clientY / height;
      mouse.move = true;
   };

   // drawing lines from the server. also allows people who just joined to see what has already been placed.
  socket.on('drawLine', function (data) {
      var line = data.line;
      var useColor = data.colour;
      console.log('hi')
      ctx.beginPath();
      ctx.moveTo(line[0].x * width, line[0].y * height);
      ctx.lineTo(line[1].x * width, line[1].y * height);
      // ctx.moveTo(line[0].x * width, line[0].y * height);
      // ctx.lineTo(line[1].x * width, line[1].y * height);
      ctx.lineWidth = radius*2;
      ctx.lineCap = 'round';
      // ctx.strokeStyle = useColor;
      ctx.stroke();
   });

   // main loop, runs every 30ms
   function mainLoop() {
      // check if the user is drawing
      if (mouse.click && mouse.move && mouse.pos_prev) {
         // send line to to the server
         socket.emit('drawLine', { line: [ mouse.pos, mouse.pos_prev ] });
         mouse.move = false;
      }
      mouse.pos_prev = {x: mouse.pos.x, y: mouse.pos.y};
      setTimeout(mainLoop, 30);
   }
   mainLoop();
});