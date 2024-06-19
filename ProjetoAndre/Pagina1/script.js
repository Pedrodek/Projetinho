const choicebtn = document.getElementById('choose');
const slickerOST = document.querySelectorAll('.OSTs');
const music = document.querySelectorAll('.music');
const faders = document.querySelectorAll('.fade-in');

console.log(slickerOST)


$('.slicker-box').slick({
  prevArrow: '<button type="button" class="prevArrow">&#8592;</button>',
  nextArrow: '<button type="button" class="nextArrow">&#8594;</button>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

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

$('.theme').slick({
  centerMode: true,
  centerPadding: '70px',
  slidesToShow: 3,
  prevArrow: '<button type="button" class="prevArrow">&#8592;</button>',
  nextArrow: '<button type="button" class="nextArrow">&#8594;</button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

function changePlaylist() {
  slickerOST.forEach(divIframe => {
    const divMusic = divIframe.getAttribute("data-theme");
    console.log(divMusic);
    console.log(divIframe.firstElementChild); 
  });
}

choicebtn.addEventListener('click', changePlaylist)



/*$("a").hover(
    function(){
      $(this).css("background-color", "red");
    }, function(){
      $(this).css("background-color", "white");
    }
);*/