/************    burger  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

/*************     изменение HTML  (1150px)    ******************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var topHeader = $('.header-top-wrap'); /* куда закинуть блок */
  var headerMenu = $('.menu'); /* блок, который закинуть */
  if (w < 1151) {
    /* ширина */
    if (!headerMenu.hasClass('done')) {
      headerMenu.addClass('done').appendTo(topHeader);
    }
  } else {
    if (headerMenu.hasClass('done')) {
      headerMenu.removeClass('done').prependTo($('.header-top-wrap .logo .menu')); /* вернуть блок на прежнее место */
    }
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/*****************   header-search    ******************/
new UISearch(document.getElementById('header-search'));

/****************   ticker    ***************/
$('.ticker').marquee({
  //duration in milliseconds of the marquee
  duration: 15000,
  //gap in pixels between the tickers
  gap: 0,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: false,
  pauseOnHover: true
});

/************    header slick      **************/
$('.header-slider').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 2000,
  responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 741,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 561,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});