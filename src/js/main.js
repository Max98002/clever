$(document).ready(function () {
  var menu__button = $('.header-btn');
  var menu = $('.header-menu');
  var brif = $('.brif');
  var modal = $('.modal');
  var close = $('.modal-header__close');
  var header_btn = $('.header-btn');

  menu__button.on('click', function () {
    menu.toggleClass('header-menu_active');
  })

  brif.on('click', function () {
    modal.addClass('modal_active');
  })
  close.on('click', function () {
    modal.removeClass('modal_active');
  })

  header_btn.on('click', () => {
    $('.header-btn__line').toggleClass('header-btn__line_active');
  })

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    center: true,
    dots: false,
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.team-arrow__left').click(function () {
    owl.trigger('next.owl.carousel');
  })
  $('.team-arrow__right').click(function () {
    owl.trigger('prev.owl.carousel');
  })

  // Прокрутка До секцій
  $("a[href^='#']").click(function () {
    event.preventDefault();
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + -180 + "px" }, 800);
    return false;
  });
  // Прокрутка До секцій
  var link = $('.link');
  link.on('click', function () {
    menu.removeClass('header-menu_active');
  })

  // Валідація форми
  $('#form-contact').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('.modal-form')[0].reset();
    //       modal.removeClass('modal-active');
    //       img_load.removeClass('modal__button_image-active');
    //       var thanks = $('#thanks');
    //       thanks.addClass('thanks-active');
    //       function close() {
    //         thanks.removeClass('thanks-active');
    //       }
    //       setTimeout(close, 3000);
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  $('.modal-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 8,
      },
      namecompany: {
        required: true,
        maxlength: 12,
      },
      email: {
        required: true,
        email: true
      }
    },
    errorElement: "div",
    errorClass: "error",
    messages: {
      username: {
        required: "Вкажіть ім'я",
        minlength: jQuery.validator.format("Залишилось {0} символи"),
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      namecompany: {
        required: "Вкажіть назву компанії",
        maxlength: jQuery.validator.format("Не більше {0} символів")
      },
      email: {
        required: "Заповніть поле Email",
        email: "Введіть коректний Email"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     url: form.action,
    //     type: form.method,
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log("Hello Все гуд: " + response);
    //       $('.modal-form')[0].reset();
    //       modal.removeClass('modal-active');
    //       img_load.removeClass('modal__button_image-active');
    //       var thanks = $('#thanks');
    //       thanks.addClass('thanks-active');
    //       function close() {
    //         thanks.removeClass('thanks-active');
    //       }
    //       setTimeout(close, 3000);
    //     },
    //     error: function (jqHXR, textStatus, errorThrown) {
    //       console.log(jqHXR + " " + textStatus);
    //     }
    //   });
    // }
  });
  // Валідація форми
});