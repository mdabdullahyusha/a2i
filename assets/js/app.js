$(document).ready(function() {
    // For PagePiling
  $('#pagepiling').pagepiling({
      menu: null,
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
      scrollingSpeed: 700,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: false,
      navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5']
      },

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
  });
  $('#pagepiling').pagepiling({
      sectionsColor: ['#fff', '#4BBFC3', '#7BAABE', 'whitesmoke', '#fff'],
  });
    // End
});

$(document).ready(function() {
    // For Slick
    $('.slick__slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<div class='slick-prev'><i class='fas fa-angle-left' ></i></div>",
            nextArrow:"<div class='slick-next'><i class='fas fa-angle-right'></i></div>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
        },
        ]});
    // End
    
});

new WOW().init();

new VenoBox({
  selector: ".my-link"
});