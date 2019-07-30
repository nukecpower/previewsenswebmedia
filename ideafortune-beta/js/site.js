$(document).ready(function () {


  $(".screens-sliders").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>"
    ]
  });

  var featuresCarousel = $(".system-features-slides").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    mouseDrag: false,
    items: 1,
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  });

  $('.next-feature').click(function () {
    featuresCarousel.trigger('next.owl.carousel');
  });
  $('.prev-feature').click(function () {
    featuresCarousel.trigger('prev.owl.carousel');
  });


  $("#arrow").click(function () {
    $.fn.pagepiling.moveSectionDown();
  });
});
