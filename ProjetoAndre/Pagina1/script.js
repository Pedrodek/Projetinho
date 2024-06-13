
$('.box-top-page').slick({
  prevArrow: '<button type="button" class="prevArrow">&#8592;</button>',
  nextArrow: '<button type="button" class="nextArrow">&#8594;</button>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, appearOptions);
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
/*$("a").hover(
    function(){
      $(this).css("background-color", "red");
    }, function(){
      $(this).css("background-color", "white");
    }
);*/