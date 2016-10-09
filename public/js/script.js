// Material Design variables

var swatchRed = '#F44336';
var swatchPink = '#E91E63';
var swatchPurple = '#9C27B0';
var swatchDeepPurple = '#673AB7';
var swatchIndigo = '#3F51B5';
var swatchBlue = '#2196F3';
var swatchLightBlue = '#03A9F4';
var swatchCyan = '#00BCD4';
var swatchTeal = '#009688';
var swatchGreen = '#4CAF50';
var swatchLightGreen = '#8BC34A';
var swatchLime = '#CDDC39';
var swatchYellow = '#FFEB3B';
var swatchAmber = '#FFC107';
var swatchOrange = '#FF9800';
var swatchDeepOrange = '#FF5722';
var swatchBrown = '#795548';
var swatchGrey = '#9E9E9E';
var swatchBlueGrey = '#9E9E9E';
var swatchBlack = '#000000'

var $red = $('#red');
var $pink = $('#pink');
var $purple = $('#purple')
var $deepPurple = $('#deep-purple');
var $indigo = $('#indigo');
var $blue = $('#blue');
var $lightBlue = $('#light-blue');
var $cyan = $('#cyan');
var $teal = $('#teal');
var $green = $('#green');
var $lightGreen = $('#light-green');
var $lime = $('#lime');
var $yellow = $('#yellow');
var $amber = $('#amber');
var $orange = $('#orange');
var $deepOrange = $('#deep-orange');
var $brown = $('#brown');
var $grey = $('grey');
var $blueGrey = $('blue-grey');
var $black = $('#black');
var $clear = $('#clear');

var disabled = $black;

// colorChoose = document.querySelectorAll(".color");
// console.log(colorChoose)

// colorChoose.on('click', function(e){
//   console.log(e);
//   disabled.removeAttribute(disabled);
//   $(e).setAttribute('disabled');
// })

document.getElementById('clear').addEventListener('click', function(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
})