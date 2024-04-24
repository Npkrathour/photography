$(".photo-slider-1").owlCarousel({
  margin: 10,
  loop: true,
  autoWidth: true,
  items: 5,
  nav: true,
  autoplay: true,
  navText: ['<i class="fs-2 bi bi-arrow-left"></i>', '<i class="fs-2 bi bi-arrow-right"></i>'],
  dots: false,
  onInitialized: function (event) {
    var element = event.target;
    var itemCount = element.querySelectorAll(".owl-item").length;
    var dotsContainer = $(element).parent().find(".owl-pagination");

    // Limiting the number of pagination controls to four
    var pageCount = Math.min(itemCount, 4);

    for (var i = 0; i < pageCount; i++) {
      dotsContainer.append('<div class="owl-page">' + (i + 1) + "</div>");
    }
  },
  onTranslated: function (event) {
    var element = event.target;
    var currentIndex = element.querySelector(".owl-item.active").dataset.index;
    var dotsContainer = $(element).parent().find(".owl-pagination");
    dotsContainer.children().removeClass("active");
    dotsContainer.children().eq(currentIndex).addClass("active");
  },
});

$(".owl-pagination").on("click", ".owl-page", function () {
  var index = $(this).index();
  $(".photo-slider-1").trigger("to.owl.carousel", [index, 300]);
});

// $(".owl-prev").click(function () {
//   $(".photo-slider-1").trigger("prev.owl.carousel");
// });

// $(".owl-next").click(function () {
//   $(".photo-slider-1").trigger("next.owl.carousel");
// });
