
var fname = document.getElementById('fname');

var lname = document.getElementById('lname');

var emailaddress = document.getElementById('emailaddress');

var comments = document.getElementById('comments');

var submitbutton = document.getElementById('submit');
submitbutton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(fname.value);
    console.log(lname.value);
    console.log(emailaddress.value);
    console.log(comments.value);
});
