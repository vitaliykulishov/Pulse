$(document).ready(function () {
  const slider = tns({
    container: '.carusel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false
  });
  
  document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  
  document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');
  });


$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  // $('.catalog-item__link').each(function (i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
  //     $('.catalog-item__reverse').eq(i).toggleClass('catalog-item__reverse_active');
  //   });
  // });
  // $('.catalog-item__back').each(function (i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
  //     $('.catalog-item__reverse').eq(i).toggleClass('catalog-item__reverse_active');
  //   });
  // });


  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__front').eq(i).toggleClass('catalog-item__front_active');
        $('.catalog-item__reverse').eq(i).toggleClass('catalog-item__reverse_active');
      });
    });
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
    
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  // $('.button_mini').on('click', function() {
  //   $('.overlay, #order').fadeIn('slow');
  // });
  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('.overlay, #order').fadeIn('slow');
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    });
  });

  function valideForms(form) {
    $(form).validate({
      // errorElemnt: "label",
      errorPlacement:function (error, elemnt) {
        error.insertBefore(elemnt);
      },
      rules: {
        name: {
          required: true,
          minlength: 2
        },
      phone: "required",
      email: {
        required: true,
        email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Имя должно содержать не менее {0} символов!")
        },
        phone: {
          required: "Пожалуйста, введите свой номер телефона"
        },
        email: {
          required: "Нам нужен ваш электронный адрес, чтобы связаться с вами",
          email: "Ваш электронный адрес должен быть в формате name@domain.com"
        }
      }
    });
  }
  valideForms('#consultation form');
  valideForms('#order form');
  valideForms('#consultation-form');

  $('input[name=phone]').mask("+9 (999) 999-99-99");
  
});

