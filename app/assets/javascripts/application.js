// = require jquery
// = require rails-ujs

$(function() {
  $('.top-image').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
  });
});

$(function(){
  $(window).scroll(function (){
    $(".sample").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });
});