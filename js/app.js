
// let mySwiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     speed: 5000,
//     autoplay: {
//         delay: 5000,
//     },
//     effect: 'fade',
// });


  // $(document).ready(function () {
  //   //initialize swiper when document ready
  //   var mySwiper = new Swiper ('.swiper-container', {
  //     // Optional parameters
  //     loop: true,
  //     speed: 500,
  //     autoplay: {
  //       delay: 500,
  //     },
  //     // effect: 'fade',
  //   })
  //   console.log(mySwiper);
  // });



$(function() {
    //get the height of the target element
    let getHeight = $('body').height();
    $(window).scroll(function(){
        let scrollTop = $(document).scrollTop();
        let bgPosition = 80/getHeight*scrollTop+10;

        $('.top-image1').css({
            backgroundPositionY: bgPosition+"%"
        });
        $('.top-image2').css({
            backgroundPositionY: bgPosition+"%"
        });
        $('.top-image3').css({
            backgroundPositionY: bgPosition+"%"
        });

    });
});



