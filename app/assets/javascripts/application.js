// = require jquery
// = require rails-ujs
$(function() {
  $('.top-image').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
  });
});

// var $slide = $(".top-image")
//   .slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     speed: 2000,
//     autoplaySpeed: 4000,
//     autoplay: true
//   })
//   .on({
//     beforeChange: function(event, slick, currentSlide, nextSlide) {
//       $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
//       $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
//     },
//     afterChange: function() {
//       $(".preve-slide", this).removeClass("preve-slide　slide-animation");
//     }
//   });
// $slide.find(".slick-slide").eq(0).addClass("slide-animation");