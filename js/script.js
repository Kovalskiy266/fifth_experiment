
$(document).ready(function(){   
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
    $('.slider').slick({
        arrows: false,
        dots: true, 
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });

    jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();
        if(windowScrollPosTop >= 30) {
          jQuery(".navigation_container").css({"background": "#18171D",});
        }
        else{
          jQuery(".navigation_container").css({"background": "transparent",});      
        }
     });

});

