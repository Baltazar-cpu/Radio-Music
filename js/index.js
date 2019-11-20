$(document).ready(function () {
     $('.playAudio').on('click', function () {
        $(this).parents('.buttons').find('.myAudio').trigger('play');
  });
   $('.pauseAudio').on('click', function () {
        $(this).parents('body').find('.myAudio').trigger('pause');
  });
});

function startTime() {
    let tm=new Date();
    let h=tm.getHours();
    let m=tm.getMinutes();
    let s=tm.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('txt').innerHTML=h+":"+m+":"+s;
        t=setTimeout('startTime()',500);
}

function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i;
}