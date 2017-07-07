(function () {
    var btn = document.getElementsByClassName('btn');
    var output = document.getElementsByTagName('div');
    var printMsg = function () {
        output[0].innerHTML = 'You have clicked the button!';
    };

    btn[0].addEventListener('click', printMsg);

})();
