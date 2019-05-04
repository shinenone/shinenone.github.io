$('.logo').addClass('animation');

if ($('.grid').offset().top < ($(document).scrollTop() + window.innerHeight)) {
    $('.grid').addClass('animation');
}

$(document).scroll(function () {

    if ($('.about-section').offset().top < ($(document).scrollTop() + window.innerHeight)) {
        $('.about-section').addClass('animation');
    }


    if ($('.service-section').offset().top < ($(document).scrollTop() + window.innerHeight)) {
        $('.service-section').addClass('animation');
    }

    if ($('.work-section').offset().top < ($(document).scrollTop() + window.innerHeight)) {
        $('.work-section').addClass('animation');
    }
});
