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
     
    // main counter scripts
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });
    // category-section swipper
    const categorySwiper = new Swiper(".categorySwipper", {
        loop: true,
        slidesPerView: 6,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 6,
            }
        },
    });
    // trending theme swiper
    const trendingSwiper = new Swiper(".trendingSwiper", {
        loop: true,
        slidesPerView: 1,
        draggable: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
        },
    });

        // // product filter slider
        $(".slider").slider({ range: true });
});
