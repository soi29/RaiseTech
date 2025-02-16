
$(function() {
  $('#js-btn__sp').click(function() {
    // メニューの開閉状態を切り替える
    $('.l-sidebar').toggleClass('active');
    $('.js-overlay').toggleClass('active');

    
    $(this).toggleClass('active');
  });

  $('#js-btn__cross').click(function() {
    $('.l-sidebar').removeClass('active');
    $('.js-overlay').removeClass('active');
  });
});