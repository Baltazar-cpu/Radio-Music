$(document).ready(function () {
     $('.playAudio').on('click', function () {
        $(this).parents('.buttons').find('.myAudio').trigger('play');
  });
   $('.pauseAudio').on('click', function () {
        $(this).parents('body').find('.myAudio').trigger('pause');
  });
});