var heading = document.getElementById('header');

var clicks = 0;
function clickCounter() {
    clicks += 1;
}

heading.addEventListener('click', function () {
    clickCounter();
    var myElement = document.createElement('paragraph');
    myElement.innerHTML = '<p>This is click number</p>' + clicks;
    document.getElementById('header').appendChild(myElement);
});
