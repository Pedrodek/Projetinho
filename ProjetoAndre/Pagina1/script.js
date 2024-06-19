const choicebtn = document.querySelectorAll('#choose');
const slickerOST = document.querySelectorAll('.OSTs');
const music = document.querySelectorAll('.music');
const songsList = document.querySelector('.a')
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
    autoplay: true,
    autoplaySpeed: 5000,
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
  const dataTheme = e.detail.dataTheme
  if (dataTheme === "Frieren") {
    songsList.innerHTML = `
    <div class="slicker-box songs-list">
      <div class="OSTs" data-theme="Frieren">
        <iframe width="1481" height="546" src="https://www.youtube.com/embed/7S3eJG-8v_E" title="Zoltraak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>         
    </div>
    `
    slickin()
  } else if(dataTheme === "Bocchi") {
    songsList.innerHTML = `
    <div class="slicker-box songs-list">
      <div class="OSTs" data-theme="Bocchi">
        <iframe width="1481" height="546" src="https://www.youtube.com/embed/Y45cVOrRZZs" title="SICK HACK - Watashi Dake Yuurei (ワタシダケユウレイ) [Full version]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="OSTs" data-theme="Bocchi">
        <iframe width="1481" height="546" src="https://www.youtube.com/embed/MTPiaDzacSI" title="TVアニメ「ぼっち・ざ・ろっく！」エンディング映像/「カラカラ」#結束バンド" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="OSTs" data-theme="Bocchi">
        <iframe width="1481" height="546" src="https://www.youtube.com/embed/wbQEA_nxLaE" title="BOCCHI THE ROCK! - Ending | Distortion!!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    `
    slickin()
  } else if (dataTheme === "Apothecary") {
    songsList.innerHTML = `
    <div class="OSTs" data-theme="Apothecary">
      <iframe width="1481" height="546" src="https://www.youtube.com/embed/wLaYO08gHqo" title="想い咲く時（TVアニメ『薬屋のひとりごと』挿入歌）" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    `
    slickin()
  } else if (dataTheme === "Honkai") {
    songsList.innerHTML = `
    <div class="OSTs" data-theme="Honkai">
      <iframe width="1481" height="546" src="https://www.youtube.com/embed/iRvmI7Cbgzk" title="Sway to My Beat in Cosmos - Honkai: Star Rail OST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    `
  } else if (dataTheme === "Undertale") {
    songsList.innerHTML = `
    <div class="OSTs" data-theme="Undertale">
      <iframe width="1481" height="546" src="https://www.youtube.com/embed/tz82xbLvK_k" title="Undertale Ost: 087 - Hopes and Dreams" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    `
    slickin()
  } else if (dataTheme === "Hollow Knight") {
    songsList.innerHTML = `
    <div class="OSTs" data-theme="Hollow Knight">
      <iframe width="1481" height="546" src="https://www.youtube.com/embed/Mq8E_1LkoAc" title="Nightmare King (Hollow Knight: The Grimm Troupe)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    `
    slickin()
  }
})
  



/*$("a").hover(
    function(){
      $(this).css("background-color", "red");
    }, function(){
      $(this).css("background-color", "white");
    }
);*/