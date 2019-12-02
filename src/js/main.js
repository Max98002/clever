$(document).ready(function () {
  var menu__button = $('.header-btn');
  var menu = $('.header-menu');

  menu__button.on('click', function () {
    menu.toggleClass('header-menu_active');
  })
});