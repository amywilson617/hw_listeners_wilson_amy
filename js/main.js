// EVENT LISTENER 1 - listens for bouble click and changes background color//
var heading = document.getElementById('h1');
heading.addEventListener('dblclick', function () {
    heading.style.backgroundColor = 'gray';
});

// EVENT LISTENER 2 - listens for click and changes text color//
var paragraph = document.getElementById('p');
paragraph.addEventListener('click', function () {
    paragraph.style.color = 'red';
});

// EVENT LISTENER 3 - listens for mouseover and changes color//
var h2 = document.getElementById('h2');
h2.addEventListener('mouseover', function () {
    h2.style.color = 'white';
});
