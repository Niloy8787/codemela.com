$(document).ready(function () {
    // scroll top
    $("body").materialScrollTop();
    // fixed navbar
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar").addClass("fixed-top-bar-active");
        } else {
            $(".navbar").removeClass("fixed-top-bar-active");
        }
    });
    // navbar menu
    $(".menu-bar").click(function (e) {
        $(".menu-bar").toggleClass("show");
    });

    //  nice select
    $("select").niceSelect();

    // // product filter slider
    $(".slider").slider({ range: true });

    // main counter scripts
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
});
