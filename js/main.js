// EVENT LISTENER 1//
(function () {
    var btn = document.getElementsByClassName('btn');
    var output = document.getElementsByTagName('div');
    var printMsg = function () {
        output[0].innerHTML = 'You have clicked the button!';
    };

    btn[0].addEventListener('click', printMsg);

})();

// EVENT LISTENER 2//

function colorize(element) {
    'use strict';
    element.className = 'color';
}

function reset() {
    'use strict';
    document.getElementById('level1').className = 'gray';
    document.getElementById('level2').className = 'gray';
    document.getElementById('level3').className = 'gray';
    document.getElementById('level4').className = 'gray';
}

var parent = document.getElementById('parent');
parent.addEventListener('mouseover', function (e) {
    'use strict';
    if (!e) {
        e = window.event;
    }

    var target = e.target || e.srcElement;

    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }

    reset();

    if (target.getAttribute('id') !== parent.getAttribute('id')) {
        colorize(target);
    }
}, false);


// EVENT LISTENER 3//
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;
var halfWidth = canvas.width / 2;
var halfHeight = canvas.height / 2;

init();

function init() {
    document.addEventListener('click', checkClickSpot);

    circle(canvas.width / 2, canvas.height / 2, 100, 'purple', 'fill');
}

function checkClickSpot(event) {
    if (Math.sqrt((event.clientX - canvas .width / 2) * (event .clientX - canvas.width / 2) + (event.clientY - canvas .height / 2) * (event .clientY - canvas.height / 2)) < 100) {
        console.log('inside circle');
    } else {
        console.log('outside circle');
    }

    circle(event.clientX, event.clientY, 2, '#d5544f', 'fill')
}

function printMousePos(event) {
    console.log('mouse x: ' + event.clientX + ' - mouse y: ' + event.clientY);
}

function circle(x, y, r, color, style) {
  // fill in defaults for color and style if empty
    if (typeof(color) === 'undefined') {
        color = 'black';
    }
    if (typeof(style) === 'undefined') {
        style = 'stroke';
    }

    ctx.beginPath();

    if (style === 'fill') {
        ctx.fillStyle = color;
    } else {
        ctx.strokeStyle = color;
    }

    ctx.arc(x, y, r, 0, 2 * Math.PI);

    if (style === 'fill') {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}
