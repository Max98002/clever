$(document).ready(function () {
  var menu__button = $('.header-btn');
  var menu = $('.header-menu');
  var brif = $('.brif');
  var modal = $('.modal');
  var close = $('.modal-header__close');

  menu__button.on('click', function () {
    menu.toggleClass('header-menu_active');
  })

  brif.on('click', function () {
    modal.addClass('modal_active');
  })
  close.on('click', function () {
    modal.removeClass('modal_active');
  })
});