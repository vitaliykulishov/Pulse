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
});


