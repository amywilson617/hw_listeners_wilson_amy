
var fnameInput = document.getElementById('fname');

document.querySelector('form#contactform').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(fnameInput.value);
});
