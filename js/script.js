$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.slider').slick('setPosition');
});