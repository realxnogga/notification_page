

$(document).ready(function () {
    $('.hover').hover(
      function () {
        $(this).css('color', 'blue');
        $(this).css('cursor', 'pointer');

      },
      function () {
        $('.hover').css('color', 'black');
      }
    )
    $('#markAsRead').click(function () {
      $('#notifCounter').text(0);
      $('.removeBg').css('backgroundColor', 'white');
      $('.card').css('display', 'none');
    })

    $('.card').css('display', 'none');
    $('.cardActive').css('display', 'block');
    $('img').click(function(){
      $(this).siblings('.text-lg').find('.card').slideToggle();
    })
  });
