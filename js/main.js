$(document).ready(function(){

    // Smooth Scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
    });

    // Main Overlay Menu Functionality
    // $("#overlay-menu").click(function() {
    //     $(".overlay").addClass("overlay-open");
    //     $('body').addClass("noScroll");
    // });
    //
	// $(".overlay-close").click(function() {
    //     $(".overlay").removeClass("overlay-open");
    //     $('body').removeClass("noScroll");
    // });

    // Site Preloader
    $(window).load(function(){
	    $('.se-pre-con').fadeOut('slow',function(){$(this).remove();});
	});

    // Mobile Menu
    $("#js_mobile_menu").click(function() {
        $(".menu_list").fadeToggle("open_menu");
    });

    // Desktop Menu
    $('.dropdown_toggle').click(function() {
        $('.sub_menu').toggleClass('visible');
    });

    // Slick
    $('.primary_slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        arrows: false,
        cssEase: 'linear'
    });

    $('.call_out_slider').slick ({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: false,
        arrows: true,
        prevArrow: '.pp2',
        nextArrow: '.nn2',
        cssEase: 'linear'
    })

}); // Close of jQuery
