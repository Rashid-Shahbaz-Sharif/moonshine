// header
let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};
changeIcon = (icon) => icon.classList.toggle("fa-times");

// vesper collection  tabs

// Show the first content section by default
document.getElementById("content1").style.display = "block";

function toggleContent(contentId, button) {
  // Hide all content sections
  var allContent = document.querySelectorAll(".toggleContent");
  allContent.forEach(function (content) {
    content.style.display = "none";
  });

  // Remove "active" class from all buttons
  var allButtons = document.querySelectorAll(".toggleButton");
  allButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Show the clicked content section
  var content = document.getElementById(contentId);
  content.style.display = "block";

  // Add "active" class to the clicked button
  button.classList.add("active");
}

// shop by fish  -slider

$(document).ready(function () {
  $(".fish-slider").slick({
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

// foods - product slider

$(document).ready(function () {
  var slickInitialized = false;

  checkWindowSize();

  $(window).resize(function () {
    checkWindowSize();
  });

  function checkWindowSize() {
    var windowWidth = window.innerWidth;
    var $foodProductSlider = $(".food-product-slider");

    if (windowWidth >= 768 && slickInitialized) {
      $foodProductSlider.slick("unslick");
      $foodProductSlider.removeClass(
        "slick-initialized slick-slider slick-dotted"
      );
      slickInitialized = false;
    } else if (windowWidth < 768 && !slickInitialized) {
      $foodProductSlider.slick({
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
      slickInitialized = true;
    }
  }
});

// weather - fish - images - slider

$(document).ready(function () {
  var slickInitialized = false;

  checkWindowSize();

  $(window).resize(function () {
    checkWindowSize();
  });

  function checkWindowSize() {
    var windowWidth = window.innerWidth;
    var $weatherFishImagesSlider = $(".weather-fish-images-slider");

    if (windowWidth >= 768 && slickInitialized) {
      $weatherFishImagesSlider.slick("unslick");
      $weatherFishImagesSlider.removeClass(
        "slick-initialized slick-slider slick-dotted"
      );
      slickInitialized = false;
    } else if (windowWidth < 768 && !slickInitialized) {
      $weatherFishImagesSlider.slick({
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
      slickInitialized = true;
    }
  }
});

// field notes / quality  accoridan

$(document).ready(function () {
  function updateAccordion() {
    // Check if the window width is greater than or equal to 767 pixels
    if (window.innerWidth <= 767) {
      // Hide all quality content initially except the first one
      $(".quality .content.quality-content").not(":first").hide();

      // Add 'active' class to the first quality-topbar
      $(".quality .quality-topbar:first").addClass("active");

      // Add click event to quality-topbar to toggle content
      $(".quality .quality-topbar")
        .off("click")
        .on("click", function () {
          var content = $(this).siblings(".content.quality-content");
          var seeMore = $(this).find(".see-more");
          var seeLess = $(this).find(".see-less");

          // Toggle the content of the clicked quality item
          content.slideToggle();

          // Toggle the 'active' class on quality-topbar
          $(this).toggleClass("active");

          // Toggle the 'See More' and 'See Less' elements
          seeMore.toggle();
          seeLess.toggle();

          // Close other quality items
          $(".quality .content.quality-content").not(content).slideUp();

          // Remove the 'active' class from all other quality-topbars
          $(".quality .quality-topbar").not(this).removeClass("active");

          // Hide 'See Less' for other items
          $(".quality .toggle-see-more .see-less")
            .not($(this).find(".see-less"))
            .hide();

          // Show 'See More' for other items
          $(".quality .toggle-see-more .see-more")
            .not($(this).find(".see-more"))
            .show();
        });
    } else {
      // If the window width is less than 767 pixels, remove all event handlers
      $(".quality .quality-topbar").off("click");
    }
  }

  // Initial setup
  updateAccordion();

  // Update the accordion behavior on window resize
  $(window).resize(function () {
    updateAccordion();
  });
});
