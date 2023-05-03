jQuery( document ).ready( function($){

    $('.Slider-testimonial').slick({
        prevArrow: '<button class="left"><img src="assets/images/left-icon.png"></button>',
        nextArrow: '<button class="right"><img src="assets/images/right-icon.png"></button>',
        responsive: [
            {
              
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){        
            $(this).children(".video").get(0).play();   
            $(this).children(".playpause").fadeOut();
        }else{       
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    // header sticky
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 85) {
            $('.top-header').addClass('fixed-header');
        }
        else {
            $('.top-header').removeClass('fixed-header');
        }
    });

    // animation
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
    )
    wow.init();
    AOS.init();

    // acccordion
    $('.accordio-item').click( function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $(this).find('.accordio-dec').slideToggle();
        $(this).siblings().find('.accordio-dec').hide();
    })
})