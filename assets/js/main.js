// hero slider 
$(".hero-slider.slick-slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
      dots: true,
     arrows: false
   });


   $(".testimonial-slider.slick-slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
   });
   