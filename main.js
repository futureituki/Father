$(function(){
  $('body').fadeIn(1000);
})

$(".openbtn1").click(function () {
  $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn1").removeClass('active');
    $("#g-nav").removeClass('panelactive');
});
window.onload=function(){
  const spinner=document.getElementById('loading');
  spinner.classList.add('loaded')
}
//画面ふわっと
function scan(hoge, setting) {
  const target = hoge === undefined ? '.animation-box' : hoge;
  const add = setting === undefined ? 'active' : setting;

  const targets = [].slice.call(document.querySelectorAll(target));
  const options = {
    root: null,
    rootMargin: "0px 0px -50%",
    threshold: 0
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(function(target) {
    observer.observe(target);
  });

  function callback(entries, object) {
    entries.forEach(function(entry, i){
      if(!entry.isIntersecting) return;
      const item = entry.target;
      animation(item);
      object.unobserve(item);
    })
  }

  function animation(target) {
    if (!target.classList.contains(add)) {
      target.classList.add(add);
    }
  }
}
// validation plugin

$(function(){
  $('#form').validate({
    rules :{
      name :{
        required:true,
      },
      tel :{
        required:true,
      },
    },
    messages:{
      name:{
        required:'お名前をご入力して下さい'
      },
      tel:{
        required:'電話番号をご入力下さい'
      },
    }
  })
})

//slick ライブラリ

$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方で0
  speed: 6900,//スライドのスピード
  infinite: true,//スライドをループさせるかどうか。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。
  cssEase: 'linear',
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});