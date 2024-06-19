const choicebtn = document.querySelectorAll('#choose');
const slickerOST = document.querySelectorAll('.OSTs');
const music = document.querySelectorAll('.music');
const divSongsList = document.querySelector('.div-songs-list')
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
  draggable: false,
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

function slickin() {
  $('.songs-list').slick({
    prevArrow: '<button type="button" class="prevArrow">&#8592;</button>',
    nextArrow: '<button type="button" class="nextArrow">&#8594;</button>',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
  });
}

choicebtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const dataTheme = btn.getAttribute("data-theme")
    const ce = new CustomEvent('themeChange', {detail: {dataTheme} })
    document.dispatchEvent(ce)
  })
})

document.addEventListener('themeChange', (e) => {
  const dataTheme = e.detail.dataTheme;
  const videoData = {
    "Frieren": [
      { src: "https://www.youtube.com/embed/q5cw38y5Ajo", title: "One Last Adventure" },
      { src: "https://www.youtube.com/embed/7S3eJG-8v_E", title: "Zoltraak" },
      { src: "https://www.youtube.com/embed/2ri6KxfpC_4", title: "Headpats and Praise" }
    ],
    "Bocchi": [
      { src: "https://www.youtube.com/embed/MTPiaDzacSI", title: "Karakara" },
      { src: "https://www.youtube.com/embed/Y45cVOrRZZs", title: "SICK HACK - Watashi Dake Yuurei" },
      { src: "https://www.youtube.com/embed/wbQEA_nxLaE", title: "Distortion!!" }
    ],
    "Apothecary": [
      { src: "https://www.youtube.com/embed/wLaYO08gHqo", title: "Omoi Saku Toki" },
      { src: "https://www.youtube.com/embed/EQ-DKvLQlyQ", title: "Be a Flower" },
      { src: "https://www.youtube.com/embed/0IWHP35Pi-0", title: "Sofu" }
    ],
    "Honkai": [
      { src: "https://www.youtube.com/embed/PVqezHKDPC4", title: "Wildfire" },
      { src: "https://www.youtube.com/embed/iRvmI7Cbgzk", title: "Sway to My Beat in Cosmos" },
      { src: "https://www.youtube.com/embed/UYe_vYD0MDM", title: "Samudrartha" },
      { src: "https://www.youtube.com/embed/lMlxrkf7Z0A", title: "Interstellar Journey" }
    ],
    "Undertale": [
      { src: "https://www.youtube.com/embed/tz82xbLvK_k", title: "Hopes & Dreams" },
      { src: "https://www.youtube.com/embed/qrBB3_rFPjg", title: "Spear of Justice" },
      { src: "https://www.youtube.com/embed/y_qHuDjE3CQ", title: "Tem Shop" }
    ],
    "Hollow Knight": [
      { src: "https://www.youtube.com/embed/Mq8E_1LkoAc", title: "Nightmare King" },
      { src: "https://www.youtube.com/embed/ze0Rk-m0w2A", title: "Sealed Vessel" },
      { src: "https://www.youtube.com/embed/Lp5M2BAXwSo", title: "Mantis Lords" }
    ]
  };

  function createVideoHTML(videos) {
    return videos.map(video => `
      <div class="OSTs" data-theme="${dataTheme}">
        <iframe width="1481" height="546" src="${video.src}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2>${video.title}</h2>
      </div>
    `).join('');
  }

  if (videoData[dataTheme]) {
    divSongsList.innerHTML = `<div class="slicker-box songs-list">${createVideoHTML(videoData[dataTheme])}</div>`;
    slickin();
  }
});

  



/*$("a").hover(
    function(){
      $(this).css("background-color", "red");
    }, function(){
      $(this).css("background-color", "white");
    }
);*/