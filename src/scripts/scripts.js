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

        let scrollWindow = $(window).scrollTop();

        $(".nav-menu__item").removeClass("active");

        switch(true) {
            case scrollWindow >= 700 && scrollWindow < 1650:
                $(".nav-menu__item:eq(0)").addClass("active");
                break;
            case scrollWindow >= 1650 && scrollWindow < 2600:
                $(".nav-menu__item:eq(1)").addClass("active");
                break;
            case scrollWindow >= 3000 && scrollWindow < 4350:
                $(".nav-menu__item:eq(2)").addClass("active");
                break;
            case scrollWindow >= 4350 && scrollWindow < 5550:
                $(".nav-menu__item:eq(3)").addClass("active");
                break;
            case scrollWindow >= 6050 && scrollWindow < 7750:
                $(".nav-menu__item:eq(4)").addClass("active");
                break;
            case scrollWindow >= 7750 && scrollWindow < 8800:
                $(".nav-menu__item:eq(5)").addClass("active");
                break;
            case scrollWindow >= 8800 && scrollWindow < 9700:
                $(".nav-menu__item:eq(6)").addClass("active");
                break;
            case scrollWindow >= 10750 && scrollWindow < 11900:
                $(".nav-menu__item:eq(7)").addClass("active");
                break;
            case scrollWindow >= 12200 && scrollWindow < 12950:
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
            $(this).toggleClass("active");
        }

        switch($(this).children().text()) {
            case 'About Us':
                $('body,html').animate({
                    scrollTop: 800
                }, 800);
                break;

            case 'Our Focus':
                $('body,html').animate({
                    scrollTop: 1800
                }, 800);
                break;

            case 'Portfolio':
                $('body,html').animate({
                    scrollTop: 3100
                }, 800);
                break;

            case 'Our Team':
                $('body,html').animate({
                    scrollTop: 4500
                }, 800);
                break;

            case 'Work Steps':
                $('body,html').animate({
                    scrollTop: 6200
                }, 800);
                break;

            case 'Pricing':
                $('body,html').animate({
                    scrollTop: 7900
                }, 800);
                break;

            case 'Testimonials':
                $('body,html').animate({
                    scrollTop: 8900
                }, 800);
                break;

            case 'Blog':
                $('body,html').animate({
                    scrollTop: 10900
                }, 800);
                break;

            case 'Contact':
                $('body,html').animate({
                    scrollTop: 12400
                }, 800);
                break;
        }
    });

    $(".heading__btn").click(function() {
        $('body,html').animate({
            scrollTop: 3100
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