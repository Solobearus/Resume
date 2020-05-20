const header_title_img = $('.header_title_img')

$.fn.parallax = function (resistance, mouse) {
    $el = $(this);
    // console.log('test');

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
    header_title_img.attr("src", "./imgs/w_bg.jpg");

})
$('.darkBlue').click(() => {
    changeColors('darkBlue')
    header_title_img.attr("src", "./imgs/db_bg.jpg");
})
$('.lightYellow').click(() => {
    changeColors('lightYellow')
    header_title_img.attr("src", "./imgs/y_bg.jpg");
})
$('.darkGreen').click(() => {
    changeColors('darkGreen')
    header_title_img.attr("src", "./imgs/g_bg.jpg");
})

function changeColors(colorScheme) {

    $('.circle').removeClass('selectedColor');
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