


$('.box-top-page').slick({
  prevArrow: '<button type="button" class="prevArrow">&#8592;</button>',
  nextArrow: '<button type="button" class="nextArrow">&#8594;</button>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

$(document).ready(function() {
  $('h1').text('Heading');
});


/*$("a").hover(
    function(){
      $(this).css("background-color", "red");
    }, function(){
      $(this).css("background-color", "white");
    }
);*/