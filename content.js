$('.slider-container').each(function(key, item) {  
    var sliderNavIdName = 'slider' + key;      
    $('.slider')[key].id = sliderNavIdName; 
    var sliderNavId = '#' + sliderNavIdName;
  
    $(sliderNavId).slick({
      slidesToShow: 2,
      slidesToScroll: 2,
    //   asNavFor: sliderId,
      dots: true,
      arrows: true,
      speed: 300,
      centerMode: false,
      focusOnSelect: true,

      responsive: [
        {
            breakpoint: 1024,
            settings: {
                // rows: 2,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                centerMode: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
]
    });
  
  });

//   $(document).ready(function () {
    var degrees = 0;
    const ui = document.querySelector('#ui');
    const ui1 = document.querySelector('#ui1');
    const ui2 = document.querySelector('#ui2');
    const ui3 = document.querySelector('#ui3');
    const ui4 = document.querySelector('#ui4');

    //   $('#ui').click(function rotateMe(e) 
ui.addEventListener('click', () => {
    degrees += 180;
         
    $('#ui').css({

        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
    });
})
ui1.addEventListener('click', () => {
    degrees += 180;
         
    $('#ui1').css({

        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
    });
})
ui2.addEventListener('click', () => {
    degrees += 180;
         
    $('#ui2').css({

        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
    });
})
ui3.addEventListener('click', () => {
    degrees += 180;
         
    $('#ui3').css({

        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
    });
})
ui4.addEventListener('click', () => {
    degrees += 180;
         
    $('#ui4').css({

        'transform': 'rotate(' + degrees + 'deg)',
        '-ms-transform': 'rotate(' + degrees + 'deg)',
        '-moz-transform': 'rotate(' + degrees + 'deg)',
        '-webkit-transform': 'rotate(' + degrees + 'deg)',
        '-o-transform': 'rotate(' + degrees + 'deg)'
    });
})
      
    //   {

         

    //   } )

//   } )