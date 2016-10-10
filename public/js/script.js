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

var $red = document.getElementById('red');
var $pink = document.getElementById('pink');
var $purple = document.getElementById('purple');
var $deepPurple = document.getElementById('deep-purple');
var $indigo = document.getElementById('indigo');
var $blue = document.getElementById('blue');
var $lightBlue = document.getElementById('light-blue');
var $cyan = document.getElementById('cyan');
var $teal = document.getElementById('teal');
var $green = document.getElementById('green');
var $lightGreen = document.getElementById('light-green');
var $lime = document.getElementById('lime');
var $yellow = document.getElementById('yellow');
var $amber = document.getElementById('amber');
var $orange = document.getElementById('orange');
var $deepOrange = document.getElementById('deep-orange');
var $brown = document.getElementById('brown');
var $grey = document.getElementById('grey');
var $blueGrey = document.getElementById('blue-grey');
var $black = document.getElementById('black');

var $clear = $('#clear');

var disabledColor = null;

var enable = function (el){
  switch(el) {
    case 'red':
      $red.disabled = false;
      break;
    case 'pink':
      $pink.disabled = false;
      break;
    case 'purple':
      $purple.disabled = false;
      break;
    case 'deep-purple':
      $deepPurple.disabled = false;
      break;
    case 'indigo':
      $indigo.disabled = false;
      break;
    case 'blue':
      $blue.disabled = false;
      break;
    case 'light-blue':
      $lightBlue.disabled = false;
      break;
    case 'cyan':
      $cyan.disabled = false;
      break;
    case 'teal':
      $teal.disabled = false;
      break;
    case 'green':
      $green.disabled = false;
      break;
    case 'light-green':
      $lightGreen.disabled = false;
      break;
    case 'lime':
      $lime.disabled = false;
      break;
    case 'yellow':
      $yellow.disabled = false;
      break;
    case 'amber':
      $amber.disabled = false;
      break;
    case 'orange':
      $orange.disabled = false;
      break;
    case 'deep-orange':
      $deepOrange.disabled = false;
      break;
    case 'brown':
      $brown.disabled = false;
      break;
    case 'grey':
      $grey.disabled = false;
      break;
    case 'blue-grey':
      $blueGrey.disabled = false;
      break;
    case 'black':
      $black.disabled = false;
      break;
    default:
      console.log('default reached');
      break;
  }
}

var contactTemplate = '<button id="<!--id-->" type="button" class="mdl-chip"><span class="mdl-chip__text"><!--nick--></span></button>'