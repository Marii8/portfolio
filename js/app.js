let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    speed: 5000,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
});



$(function() {
    //get the height of the target element
    let getHeight = $('body').height();
    $(window).scroll(function(){
        console.log('背景がちょっと動くやつ')
        let scrollTop = $(document).scrollTop();
        let bgPosition = 80/getHeight*scrollTop+10;

        $('.top-image1').css({
            backgroundPositionY: bgPosition+"%"
        });
        $('.top-image2').css({
            backgroundPositionY: bgPosition+"%"
        });
        $('.about-prof-text').css({
            backgroundPositionX: bgPosition+"%"
        });
        $('.lng-list').css({
            backgroundPositionX: - bgPosition+"%"
        });
        $('.portfolio-bg').css({
            backgroundPositionX: bgPosition+"%"
        });
    });
});

var scrollAnimationClass = 'sa';
var scrollAnimationShowClass = 'show';
var triggerMarginDefault = 300;
 
var scrollAnimationElm = document.querySelectorAll('.' + scrollAnimationClass);
var scrollAnimationFunc = function() {
  var dataMargin = scrollAnimationClass + '_margin';
  var dataTrigger = scrollAnimationClass + '_trigger';
  var dataDelay = scrollAnimationClass + '_delay';
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = triggerMarginDefault;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset[dataMargin] != null) {
      triggerMargin = parseInt(elm.dataset[dataMargin]);
    }
    if(elm.dataset[dataTrigger]) {
      showPos = document.querySelector(elm.dataset[dataTrigger]).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset[dataDelay])? elm.dataset[dataDelay] : 0;
      setTimeout(function(index) {
        scrollAnimationElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);




// $(function() {
//   $(window).scroll(function() {
//     console.log('タイトルの背景を変える');
//     let aboutLc = $(this).scrollTop();
//       $('#about').text($(this).scrollTop());
//       if (aboutLc > 1000){
//         $('.title').addClass('colorChange');
//       } else{
//         $('.title').removeClass('colorChange');
//       }
//   });
// });


$(function () {
  $('div.line').each(function () {
    var $win = $(window),
        $winH = $win.height(),
        $connect = $(this),
        position = $connect.offset().top,
        current = 0,
        scroll;
    $win.on('load scroll', function () {
      scroll = $win.scrollTop();
      current = (1 - (position - scroll) / $winH) * 2 * 100;
      if (current > 99.9) {
        current = 100;
      }
      if (scroll > position - $winH) {
        $connect.css({width: current + '%'});
      }
    });
  });
});

// $(function() {
//   $('div.line').each(function(){
//     let win = $(window);
//     let winH = win.height();
//     let position = $(this).offset().top;
//     let current = 0;
//     let scroll;

//     win.on('load scroll', function() {
//       scroll = win.scrollTop();
//       current = (1 - (position - scroll) / win ) * 2 * 100;
//       if(current > 99.9) {
//         current = 100;
//       }
//       if(scroll > position - winH) {
//         $(this).css({width: current + '%'});
//         console.log('動いている');
//       }
//     });
//   });
// });