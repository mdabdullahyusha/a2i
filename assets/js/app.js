$(document).ready(function() {
    // For PagePiling
  $('#pagepiling').pagepiling({
      menu: '.menu',
      direction: 'horizontal',
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
      sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
      navigation: {
          'textColor': '#000',
          'bulletsColor': '#000',
          'position': 'right',
          'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5']
      },

      //events
      
      
      afterRender: function(anchorLink, index){
        NavbarVisible();
        pageCount();
      },
      afterLoad: function(anchorLink, index){
        NavbarVisible();
        pageCount();
      }
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
        slidesToShow: 3,
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

//navbar active deactive function
function NavbarVisible () {
  if($('.pp-section.active').hasClass('navbar-is-visible')) {
      $('.main_menu').addClass('navbar-visible');

  }

  else{
      $('.main_menu').removeClass('navbar-visible');
  }
}
// Index Page Counter Function
function pageCount () {
  if($('.pp-section.active').attr('pageid')) {
    $('.pageNo').html($('.pp-section.active').attr('pageid'));
    $('.page__number').addClass('page_count');
  }
  else {
    $('.page__number').removeClass('page_count');
  }
}

//Side menu active and deactive
$(function(){
  $('#sidenav_button').on('click', function(){
    $('.sidemenu__part').toggleClass('onScreen');
    if($('.sidemenu__part').hasClass('onScreen')) {
      $('.collapse__bar').html('<i class="fas fa-times"></i>')

      //menu css
      $('.logo').css({'visibility':'hidden', 'opacity': '0'});
      $('.menu').css({'visibility':'hidden', 'opacity':'0'});
      $('.main_menu').css({'background':'transparent'});
    }
    else {
      $('.collapse__bar').html('<i class="fas fa-bars"></i>');

    //menu css
    $('.logo').removeAttr('style');
    $('.menu').removeAttr('style');
    $('.main_menu').removeAttr('style');
    }
  })

  //check on load if side menu is active
  if($('.sidemenu__part').hasClass('onScreen')) {
    $('.collapse__bar').html('<i class="fas fa-times"></i>');

          //menu css
          $('.logo').css({'visibility':'hidden', 'opacity': '0'});
          $('.menu').css({'visibility':'hidden', 'opacity':'0'});
          $('.main_menu').css({'background':'transparent'});
  }
  else {
    $('.collapse__bar').html('<i class="fas fa-bars"></i>');

    //menu css
    $('.logo').removeAttr('style');
    $('.menu').removeAttr('style');
    $('.main_menu').removeAttr('style');
  }

})




//wow
// new WOW().init();

new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane',
});
