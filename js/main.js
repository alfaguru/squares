$(document).ready(function () {
  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
  var effects = [
    'crash',
    'parp',
    'parp2',
    'raspberry',
    'whizz',
  ];
  $('.cell').click(function () {
    $(this).toggleClass('splat');
    localStorage.setItem($(this).data('index'), $(this).hasClass('splat'));
    var effect = effects[getRandomInt(0, effects.length)];
    var sound = new Howl({src: ['./audio/' + effect + '.mp3']});
    sound.play();
  });
  for (var i=1; i < 10; i++) {
    if (localStorage.getItem(i) === 'true') {
      $('.cell-' + i).addClass('splat');
    }
  }
})
