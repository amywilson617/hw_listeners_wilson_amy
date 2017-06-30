var heading = document.getElementById('header');

heading.addEventListener('click', function () {
    var myElement = document.createElement('paragraph');
    myElement.innerHTML = '<p>This is click "function(CountFun)" </p>';
    document.getElementById('header').appendChild(myElement);
});
