$(document).ready(function () {
  $('.cell').click(function () {
    $(this).toggleClass('splat');
    localStorage.setItem($(this).data('index'), $(this).hasClass('splat'));
  });
  for (var i=1; i < 10; i++) {
    if (localStorage.getItem(i) === 'true') {
      $('.cell-' + i).addClass('splat');
    }
  }
})
