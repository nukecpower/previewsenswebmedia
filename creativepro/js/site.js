

$(document).ready(function () {
  var Body = $('body');
  Body.addClass('preloading-site');




  $('.getstarted-form').each(function () {
    var initialbutton = $('.initial-button', this);
    var formholder = $('.getstarted-form-outer', this);
    var backbutton = $('.getstarted-form-back > a', this);

    initialbutton.on('click', function (e) {
      $(this).removeClass('fadeInDown').addClass('fadeOutUp').hide();
      formholder.removeClass('fadeOutUp').addClass(' fadeInDown');
      formholder.css('display', 'flex');
      e.preventDefault();
    });

    backbutton.on('click', function (e) {
      formholder.removeClass('fadeInDown').addClass('fadeOutUp').hide();
      initialbutton.show().removeClass('fadeOutUp').addClass('fadeInDown');
      e.preventDefault();
    });
  });

  $('.button-hero').click(function (e) {
    fullpage_api.moveTo('getstarted', 1);
    var formholder = $('.getstarted-form-outer');
    if (!$(formholder).hasClass('fadeInDown')) {
      setTimeout(function () {
        $('.initial-button').removeClass('fadeInDown').addClass('fadeOutUp').hide();
        formholder.removeClass('fadeOutUp').addClass(' fadeInDown');
        formholder.css('display', 'flex');
      }, 500);


    }

    e.preventDefault();
  });


  $(".js-tilt").tilt({
    glare: true,
    maxGlare: 0.5
  });



  var homepageFullpage = new fullpage('#frontpage-1', {
    licenseKey: '7815B4D8-80C549E9-9297142F-95CE0E9B',
    verticalCentered: false,
    anchors: ['creativepro', 'ourwork', 'aboutus', 'getstarted'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['creativePro', 'our work', 'about us', 'get started'],
    parallaxKey: 'Y3JlYXRpdmVwcm8uaW9fdHJwY0dGeVlXeHNZWGc9cHZ4',
    parallax: true,
    parallaxOptions: {
      type: 'reveal',
      percentage: 62,
      property: 'translate'
    },
  });






  $(".feature-work-cards").owlCarousel({
    stagePadding: 150,
    loop: true,
    margin: 50,
    nav: true,
    items: 1,
    lazyLoad: true,
    center: true,
    navText: [
      "<div class='nav-btn prev-slide line-arrow line-arrow-left'><div class='line-arrow-top'></div><div class='line-arrow-bottom'></div></div>",
      "<div class='nav-btn next-slide line-arrow line-arrow-right'><div class='line-arrow-top'></div><div class='line-arrow-bottom'></div></div>"
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 50
      },
      768: {
        items: 1,
        mouseDrag: false,
        stagePadding: 100
      },
      1280: {
        items: 2,
        mouseDrag: true,
        stagePadding: 100
      }
    }
  });




});


$(window).load(function () {

  $('.preloader-wrapper').fadeOut();
  $('body').removeClass('preloading-site');

});



