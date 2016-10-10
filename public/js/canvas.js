$(document).ready(function(){
  // Canvas variables

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
  var radius = 3;
  var userColor = swatchBlack;

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

  // Tools

  $('.color').on('click', function(e){
    // if (e.currentTarget.id === 'red') {
    //    userColor = swatchRed;
    //    console.log(userColor);
    // }
    console.log(disabledColor);
    enable(disabledColor);
    console.log(disabledColor);
    disabledColor = this.id;
    console.log(disabledColor);
    this.disabled = true;
    console.log(e.currentTarget.id);

    switch(e.currentTarget.id) {
      case 'red':
        userColor = swatchRed;
        break;
      case 'pink':
        userColor = swatchPink;
        break;
      case 'purple':
        userColor = swatchPurple;
        break;
      case 'deep-purple':
        userColor = swatchDeepPurple;
        break;
      case 'indigo':
        userColor = swatchIndigo;
        break;
      case 'blue':
        userColor = swatchBlue;
        break;
      case 'light-blue':
        userColor = swatchLightBlue;
        break;
      case 'cyan':
        userColor = swatchCyan;
        break;
      case 'teal':
        userColor = swatchTeal;
        break;
      case 'green':
        userColor = swatchGreen;
        break;
      case 'light-green':
        userColor = swatchLightGreen;
        break;
      case 'lime':
        userColor = swatchLime;
        break;
      case 'yellow':
        userColor = swatchYellow;
        break;
      case 'amber':
        userColor = swatchAmber;
        break;
      case 'orange':
        userColor = swatchOrange;
        break;
      case 'deep-orange':
        userColor = swatchDeepOrange;
        break;
      case 'brown':
        userColor = swatchBrown;
        break;
      case 'grey':
        userColor = swatchGrey;
        break;
      case 'blue-grey':
        userColor = swatchBlueGrey;
        break;
      case 'black':
        userColor = swatchBlack;
        break;
      default:
        console.log('default reached');
        break;
    }
  })

  document.getElementById('clear').addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
  })

   // drawing lines from the server. also allows people who just joined to see what has already been placed.
  socket.on('drawLine', function (data) {
      var line = data.line;
      ctx.beginPath();
      ctx.moveTo(line[0].x * width, line[0].y * height);
      ctx.lineTo(line[1].x * width, line[1].y * height);
      // ctx.moveTo(line[0].x * width, line[0].y * height);
      // ctx.lineTo(line[1].x * width, line[1].y * height);
      ctx.lineWidth = radius*2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = line[2];
      // ctx.strokeStyle = userColor;
      ctx.stroke();
  });

  // main loop, runs every 15ms
  function mainLoop() {
     // check if the user is drawing
     if (mouse.click && mouse.move && mouse.pos_prev) {
        // send line to to the server
        socket.emit('drawLine', { line: [ mouse.pos, mouse.pos_prev, userColor] });
        mouse.move = false;
     }
     mouse.pos_prev = {x: mouse.pos.x, y: mouse.pos.y};
     setTimeout(mainLoop, 15);
  }
  mainLoop();
});