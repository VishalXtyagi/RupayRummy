$(function() {
    "use strict";
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        autoPlay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});