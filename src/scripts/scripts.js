$(document).ready(function (){

    if($(window).scrollTop() !== 0) {
        $(".nav").addClass("scrolled");
    }

    $(window).scroll(function () {
        if($(window).scrollTop() !== 0) {
            $(".nav").addClass("scrolled");
        } else {
            $(".nav").removeClass("scrolled");
        }
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