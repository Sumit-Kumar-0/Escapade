// change nav backgroung on scroll 
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    const header = document.querySelector("#header");
    header.classList.add("scroll-class");
  } else {
    header.classList.remove("scroll-class");
  }
})


// responsive menu on click 
let respMenu = document.querySelector(".header");
respMenu.addEventListener("click", ()=>{
  respMenu.classList.toggle("menu-class");
})

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

  //  testimonial slider 
   $(".testimonial-slider.slick-slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
   });
   