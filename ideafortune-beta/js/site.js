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

  $("#arrow").click(function () {
    $.fn.pagepiling.moveSectionDown();
  });
});
