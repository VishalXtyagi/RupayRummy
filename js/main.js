var option1 = {
    0:{items:1}
};
var option2 = {
    0:{items:1},
    600:{items:2}
};
var option3 = {
    0:{items:1},
    600:{items:2},
    1000:{items:3}
};

function owl(target, timeout, options) {
    $(target).owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:timeout,
        autoplayHoverPause:true,
        responsive:options
    });
};

function desk(target, child) {
    $(target).owlCarousel('destroy');
    $(target).css('display', 'flex');
    $(target + " " + child).parent('div').addClass('col-md-4');
};

function owlChoices() {
    $("#choices .icon-box").parent('div').removeClass('col-md-4');
    owl('#choices', 3000, option2);
};

function owlFeatures() {
    $("#features .card").parent('div').removeClass('col-md-4');
    owl('#features', 4000, option1);
};

function winSize(){
    if ($(window).width() < 768) {
       owlChoices();
       owlFeatures();
    } else {
        desk('#choices', '.icon-box');
        desk('#features', '.card');
    }
};

$(function() {
    owl('#testinomials', 5000, option3);
    winSize();
});

$(window).resize(function(){
	winSize();
});