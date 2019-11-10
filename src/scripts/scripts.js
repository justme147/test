$(document).ready(function (){

    if($(window).scrollTop() > 0) {
        $(".nav").addClass("scrolled");
        $(".header-button").addClass("visible");
    }

    $(window).scroll(function () {
 
        if($(window).scrollTop() > 0) {
            $(".nav").addClass("scrolled");
            $(".header-button").addClass("visible");
        } else {
            $(".nav").removeClass("scrolled");
            $(".header-button").removeClass("visible");
        }

        let scrollValue = $(window).scrollTop();

        // console.log('scroll window', scrollWindow);

        $(".nav-menu__item").removeClass("active");

        switch(true) {
            case scrollValue >= $(".about").offset().top && scrollValue < ($(".about").offset().top + $(".about").height()):
                $(".nav-menu__item:eq(0)").addClass("active");
                break;
            case scrollValue >= $(".services").offset().top && scrollValue < ($(".services").offset().top + $(".services").height()):
                $(".nav-menu__item:eq(1)").addClass("active");
                break;
            case scrollValue >= $(".portfolio").offset().top && scrollValue < ($(".portfolio").offset().top + $(".portfolio").height()):
                $(".nav-menu__item:eq(2)").addClass("active");
                break;
            case scrollValue >= $(".team").offset().top && scrollValue < ($(".team").offset().top + $(".team").height()):
                $(".nav-menu__item:eq(3)").addClass("active");
                break;
            case scrollValue >= $(".work").offset().top && scrollValue < ($(".work").offset().top + $(".work").height()):
                $(".nav-menu__item:eq(4)").addClass("active");
                break;
            case scrollValue >= $(".price").offset().top && scrollValue < ($(".price").offset().top + $(".price").height()):
                $(".nav-menu__item:eq(5)").addClass("active");
                break;
            case scrollValue >= $(".testimonials").offset().top && scrollValue < ($(".testimonials").offset().top + $(".testimonials").height()):
                $(".nav-menu__item:eq(6)").addClass("active");
                break;
            case scrollValue >= $(".blog").offset().top && scrollValue < ($(".blog").offset().top + $(".blog").height()):
                $(".nav-menu__item:eq(7)").addClass("active");
                break;
            case scrollValue >= $(".contact").offset().top && scrollValue < ($(".contact").offset().top + $(".contact").height()):
                $(".nav-menu__item:eq(8)").addClass("active");
                break;
        }
    });

    $(".header-button").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    $(".nav-menu__item").click(function(e) {
        e.preventDefault();

        $(".nav-menu__item").removeClass("active");

        if(!$(this).hasClass("active")) {
            $(this).addClass("active");
        }

        let id = $(this).find('a').attr('href');
        
        console.log($(this).find('a').attr('href'), $(id).offset());

        $('html').animate({
            scrollTop: $(id).offset().top
        }, 800)
    });

    $(".heading__btn").click(function() {

        $('html').animate({
            scrollTop: $('.work').offset().top
        }, 800);
    });

    $('.price-route__btn').hover(function (e){
        if($(this).hasClass('text__green')) {
            $(this).toggleClass('active-btn__green', 400);
        } else if ($(this).hasClass('text__red')) {
            $(this).toggleClass('active-btn__red');
        } else if ($(this).hasClass('text__purple')) {
            $(this).toggleClass('active-btn__purple');
        }
    });

});