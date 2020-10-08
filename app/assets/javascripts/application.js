// = require jquery
// = require rails-ujs
$(function() {
  $('.top-image').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 1500,
  });
});


function popupImage() {
  var popup = document.getElementById('js-popup');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg');

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('js-close-btn');
  var showBtn = document.getElementById('js-show-popup');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();