$(document).ready(function () {
  $(".language-list").click(function (e) {
    e.preventDefault();
    $(".list").fadeToggle(500);
  });

  // main counter scripts
  $('.counter').counterUp({
    delay: 10,
    time: 1000
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
  });
  // trending theme swiper
  const trendingSwiper = new Swiper(".trendingSwiper", {
    loop: true,
    slidesPerView: 1,
    draggable:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});