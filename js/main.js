var heading = document.getElementById('header');

var clicks = 0;

heading.addEventListener('click', function () {
    var myElement = document.createElement('paragraph');
    myElement.innerHTML = '<p> This is click number </p>' + ++clicks;
    document.getElementById('header').appendChild(myElement);
});
