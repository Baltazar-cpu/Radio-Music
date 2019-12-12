$(document).ready(function () {
    $('.playAudio').on('click', function () {
        $(this).parents('.buttons').find('.mpegAudio').trigger('play');
    });
    $('.pauseAudio').on('click', function () {
        $(this).parents('body').find('.mpegAudio').trigger('pause');
    });
});

let timerId;

    function update() {
        let clock = document.getElementById('clock');
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
    }
    
    function clockStart() {
        timerId = setInterval(update, 1000);
        update();
    }

    function clockStop() {
        clearInterval(timerId);
    }

    clockStart();

let dialog = document.querySelector('dialog');
    document.querySelector('#show').onclick = function() {
        dialog.show();
};
    document.querySelector('#close').onclick = function() {
        dialog.close();
};

function newPopup(url) {
    popupWindow = window.open(
        url,'popUpWindow','height=500,width=500,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
}

if (typeof jQuery == 'undefined') { 
  var i = "i";
  document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></scr' + i + 'pt>');
}