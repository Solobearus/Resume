const header_title_img = $('.header_title_img')

$.fn.parallax = function (resistance, mouse) {
    $el = $(this);

    TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
};

$(document).mousemove(function (e) {
    $(".header_title_img").parallax(-15, e);
    $(".header_title_h1").parallax(120, e);
});

$('.lightBlue').click((e) => {
    changeColors('lightBlue')
}).addClass('selectedColor');

$('.darkBlue').click(() => {
    changeColors('darkBlue')
})

$('.lightYellow').click(() => {
    changeColors('lightYellow')
})

$('.darkGreen').click(() => {
    changeColors('darkGreen')
})

function changeColors(colorScheme) {
    $('.header_title_img').removeClass('shown')
    $('.' + colorScheme + 'img').addClass('shown')
    $('.circle').removeClass('selectedColor');
    $('.circle').removeClass('attention');
    $('.' + colorScheme).addClass('selectedColor');

    document.documentElement.style
        .setProperty('--main-bgc', colors[colorScheme].mainBgc);
    document.documentElement.style
        .setProperty('--second-bgc', colors[colorScheme].secondBgc);
    document.documentElement.style
        .setProperty('--action-bgc', colors[colorScheme].actionBgc);
    document.documentElement.style
        .setProperty('--back-bgc', colors[colorScheme].backBgc);
    document.documentElement.style
        .setProperty('--main-font-color', colors[colorScheme].mainFontColor);
    document.documentElement.style
        .setProperty('--secondery-font-color', colors[colorScheme].seconderyFontColor);
}

