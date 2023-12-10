$(document).ready(function(){
   $(".language-list").click(function (e) { 
    e.preventDefault();
    $(".list").fadeToggle(500);
   });

   // main counter scripts
   $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  const categorySwiper = new Swiper(".mySwiper", {
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

  });