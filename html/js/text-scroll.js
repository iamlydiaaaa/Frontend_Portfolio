var headline = document.getElementsByClassName('visual-txt');
var headlineOffset = headline[0].offsetTop;
var letters = headline[0].innerText.split('');
letters = letters.filter(function(letter) {
  return letter !== ' ' && letter !== '\n' ? letter : false;
});
var tweenDistance = getRandomArbitrary(200, 400);
var topDistance = 0;
var movement = 0;
var elements = [];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function move(element, distance) {
  var translate3d = 'translate3d(0, ' + distance + 'px, 0)';
  element.style['-webkit-transform'] = translate3d;
  element.style['-moz-transform'] = translate3d;
  element.style['-ms-transform'] = translate3d;
  element.style['-o-transform'] = translate3d;
  element.style.transform = translate3d;
};

function moveY(element, distance) {
  var translate3d = 'translateY(' + distance + '%)';
  element.style['-webkit-transform'] = translate3d;
  element.style['-moz-transform'] = translate3d;
  element.style['-ms-transform'] = translate3d;
  element.style['-o-transform'] = translate3d;
  element.style.transform = translate3d;
};

function fadeOut(element, scrollDistance, tweenDistance) {
  element.style.opacity = (tweenDistance - scrollDistance) / tweenDistance;
}

function tweenHeight(element, scrollDistance, tweenDistance, initialHeight) {
  element.style.height = (((tweenDistance - scrollDistance) / tweenDistance) * initialHeight) + 'px';
}

letters.forEach(function(letter) {
  var element = document.createElement('span');
  element.innerText = letter;
  element.dataset.speed = Math.random(0, 1).toFixed(2);
  headline[0].appendChild(element);
  elements.push(element);
});

//window.addEventListener('scroll', function (event) {
//  var scrollIndicator = document.getElementsByClassName('scroll-indicator');
//  var scrollIndicatorLine = document.getElementsByClassName('scroll-indicator__line');
//  topDistance = window.pageYOffset;
//  movement = topDistance*2;
//
//  fadeOut(scrollIndicator[0], topDistance, 150);
//  tweenHeight(scrollIndicatorLine[0], topDistance, 100, 25);
//  
//  elements.forEach(function(element) {
//    movement = -(topDistance * element.dataset.speed);
//    move(element, movement);
//    fadeOut(element, topDistance, tweenDistance);
//  });
//});