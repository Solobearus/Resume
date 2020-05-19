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

$('.lightBlue').click(() => {
    changeColors('lightBlue')
})
$('.darkBlue').click(() => {
    changeColors('darkBlue')
})
$('.lightYellow').click(() => {
    changeColors('lightYellow')
})
$('.darkYellow').click(() => {
    changeColors('darkYellow')
})

function changeColors(colorScheme) {
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