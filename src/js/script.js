$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1300,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carusel/left-solid.png"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carusel/right-solid.png"</button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });
  });