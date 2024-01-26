/* ------------------------------------- AOS Animation ------------------------------------- */
AOS.init({
  duration: 1000,
  delay: 400,
  once: true,
});

AOS.init();

$(window).on("load", function () {
  AOS.refresh();
});

/* ------------------------------------- Custome Animation ------------------------------------- */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 25;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
/* ------------------------------------- Preloader ------------------------------------- */
$(window).on("load", function () {
  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "0.5s ease-in-out";
    preloader.style.transform = "translateY(-100%)";
    $(".preloader").fadeOut("slow");
  }, 2000);
});
/*------------------------------------- Sticky Header -------------------------------------*/
$(window).scroll(function () {
  if ($(window).scrollTop() >= 20) {
    $("#header_sec").addClass("sticky");
  } else {
    $("#header_sec").removeClass("sticky");
  }
});

/* ------------------------------------- Toggle Button ------------------------------------- */
$(document).ready(function () {
  const toggleButton = document.querySelector(".hamburger-toggle-button");
  const navDrawer = document.querySelector(".nav-drawer");
  const closeButton = document.querySelector(".close-button");
  const closeIcon = $(".close-button-icon");

  toggleButton.addEventListener("click", () => {
    toggleNavDrawer();
  });

  closeButton.addEventListener("click", () => {
    closeNavDrawer();
  });

  closeButton.addEventListener("mouseenter", handleMouseEnter);
  closeButton.addEventListener("mouseleave", handleMouseLeave);
  closeButton.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  closeButton.addEventListener("touchend", handleTouchEnd, { passive: true });

  $("body").on("click", handleBodyClick);

  function toggleNavDrawer() {
    setTimeout(function () {
      navDrawer.classList.toggle("active");
      navDrawer.classList.remove("inactive");
    }, 250);
  }

  function closeNavDrawer() {
    setTimeout(function () {
      navDrawer.classList.remove("active");
      navDrawer.classList.add("inactive");
    }, 250);
  }

  function handleMouseEnter() {
    closeIcon.addClass("close-button-icon-hovered");
  }

  function handleMouseLeave() {
    closeIcon.removeClass("close-button-icon-hovered");
  }

  function handleTouchStart() {
    closeIcon.addClass("close-button-icon-hovered");
  }

  function handleTouchEnd() {
    closeIcon.removeClass("close-button-icon-hovered");
  }

  function handleBodyClick(event) {
    if (
      navDrawer.classList.contains("active") &&
      !$(event.target).closest(".nav-drawer, .hamburger-toggle-button").length
    ) {
      closeNavDrawer();
    } else {
      event.stopPropagation();
    }
  }
});

$(document).ready(function () {
  var linkScroll = $(".scroll");

  linkScroll.click(function (e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500
    );
  });
});


/* ------------------------------------- Nav-Dropdown ------------------------------------- */
$(document).ready(function () {
  $("a.dropdown").click(function (e) {
    e.preventDefault();
    $(this).next("ul.dropdown-list-items").slideToggle(10);
  });
});

/* ------------------------------------- Our-Benefits Accodian ------------------------------------- */
$(document).ready(function () {
  $(".benefits-accodian-title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".benefits-accodian-tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".benefits-accodian-tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });
});

/* ------------------------------------- FAQ Accodian ------------------------------------- */
$(document).ready(function () {
  $(".faq_accodian_title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".faq_accodian_tabs")
      .slideToggle()
      .parent()
      .siblings()
      .find(".faq_accodian_tabs")
      .slideUp()
      .prev()
      .removeClass("active");
  });
});

/* ------------------------------------- Single-Service Accodian ------------------------------------- */
$(document).ready(function () {
  $(".single_service_accodian_title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".single_service_accodian_tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".single_service_accodian_tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });
});

/* ------------------------------------- Portfolio Accodian ------------------------------------- */
$(document).ready(function () {
  $(".portfolio_detail_accodian_title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".portfolio_detail_accodian_tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".portfolio_detail_accodian_tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });
});
/* ------------------------------------- We-Offer Hover Logo Js ------------------------------------- */
// WE-OFFER HOVER LOGO JS
function initTrion() {
  //   loader ------------------
  "use strict";
  firstLoad();
  function firstLoad() {
    setTimeout(function () {
      $(".main-loader-wrap .loader-spin").addClass("novisspin");
    }, 1500);
    setTimeout(function () {
      $(".main-loader-wrap").fadeOut(500);
    }, 2200);
    var chdpt = $(".content-holder").data("pagetitle");
    $(".breadcrumb-wrap span").text(chdpt);
  }

  // CURSOR

  $("a.we_offer_img_one").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_one");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_one");
    },
  });
  $("a.we_offer_img_two").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_two");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_two");
    },
  });
  $("a.we_offer_img_three").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_three");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_three");
    },
  });
  $("a.we_offer_img_four").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_four");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_four");
    },
  });
  $("a.we_offer_img_five").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_five");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_five");
    },
  });
  $("a.we_offer_img_six").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_six");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_six");
    },
  });
  $("a.we_offer_img_seven").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_seven");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_seven");
    },
  });
  $("a.we_offer_img_eight").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("we_offer_img_eight");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("we_offer_img_eight");
    },
  });

  $(".img-text-item.meet_the_team_img_one").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("meet_the_team_img_one");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("meet_the_team_img_one");
    },
  });
  $(".img-text-item.meet_the_team_img_two").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("meet_the_team_img_two");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("meet_the_team_img_two");
    },
  });
  $(".img-text-item.meet_the_team_img_three").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("meet_the_team_img_three");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("meet_the_team_img_three");
    },
  });
  $(".img-text-item.meet_the_team_img_four").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("meet_the_team_img_four");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("meet_the_team_img_four");
    },
  });

  $(".our_services_content_box_item.our_service_shap_one").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("our_service_shap_one");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("our_service_shap_one");
    },
  });
  $(".our_services_content_box_item.our_service_shap_two").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("our_service_shap_two");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("our_service_shap_two");
    },
  });
  $(".our_services_content_box_item.our_service_shap_three").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("our_service_shap_three");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("our_service_shap_three");
    },
  });
  $(".our_services_content_box_item.our_service_shap_four").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("our_service_shap_four");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("our_service_shap_four");
    },
  });
  $(".our_services_content_box_item.our_service_shap_five").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("our_service_shap_five");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("our_service_shap_five");
    },
  });
  $(".our_services_content_box_item.our_service_shap_six").on({
    mouseenter: function () {
      $(".megic-cursor-item").addClass("our_service_shap_six");
    },
    mouseleave: function () {
      $(".megic-cursor-item").removeClass("our_service_shap_six");
    },
  });

  $("  #portfolio_horizontal_container").on({
    mouseenter: function () {
      $(".element-item").addClass("slider_hover");
    },
    mouseleave: function () {
      $(".element-item").removeClass("slider_hover");
    },
  });

  // CURSOR
}

//   load animation------------------
$.fn.duplicate = function (a, b) {
  var c = [];
  for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
  return this.pushStack(c);
};

var a = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
  },
};
trueMobile = a.any();
if (null == trueMobile) {
  $(function () {
    $.coretemp({
      reloadbox: "#wrapper",
      outDuration: 1200,
      inDuration: 100,
    });
    readyFunctions();
    $(document).on({
      ksctbCallback: function () {
        readyFunctions();
      },
    });
  });
  function readyFunctions() {
    initTrion();
  }
}
if (trueMobile) {
  $(document).ready(function () {
    initTrion();
  });

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1
  );
}
$("head").append(
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">'
);
document.addEventListener("gesturestart", function (e) {
  e.preventDefault();
});

if ($(".megic-cursor-item").length > 0) {
  var mouse = {
    x: 0,
    y: 0,
  };
  var pos = {
    x: 0,
    y: 0,
  };
  var ratio = 0.15;
  var active = false;
  var ball = document.querySelector(".megic-cursor-item");
  TweenLite.set(ball, {
    xPercent: -50,
    yPercent: -50,
  });
  document.addEventListener("mousemove", mouseMove);
  function mouseMove(e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    mouse.x = e.pageX;
    mouse.y = e.pageY - scrollTop;
  }
  TweenMax.ticker.addEventListener("tick", updatePosition);
  function updatePosition() {
    if (!active) {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      TweenMax.set(ball, {
        x: pos.x,
        y: pos.y,
      });
    }
  }
}

/* ------------------------------------- Video Player ------------------------------------- */
$(".js-overlay-start")
  .unbind("click")
  .bind("click", function (e) {
    e.preventDefault();
    var src = $(this).attr("data-url");
    $(".overlay-video").show();
    setTimeout(function () {
      $(".overlay-video").addClass("o1");
      $("#player").attr("src", src);
    }, 100);
  });

$(".overlay-video").click(function (event) {
  if (!$(event.target).closest(".videoWrapperExt").length) {
    var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
    $("#player").attr("src", PlayingVideoSrc);
    $(".overlay-video").removeClass("o1");
    setTimeout(function () {
      $(".overlay-video").hide();
    }, 600);
  }
});

$(".close").click(function (event) {
  var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
  $("#player").attr("src", PlayingVideoSrc);
  $(".overlay-video").removeClass("o1");
  setTimeout(function () {
    $(".overlay-video").hide();
  }, 600);
});

/* ------------------------------------- Sudan Counter ------------------------------------- */
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        //duration 5 seconds
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}
$(function () {
  $(window).scroll(function () {
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});

/* ------------------------------------- letast Project Slider ------------------------------------- */
$(document).ready(function () {
  $(".letast_project_slider_list.lazy").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "progressive",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/* ------------------------------------- Testimonials Slider ------------------------------------- */
$(document).ready(function () {
  $(".testimonials_list").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: "progressive",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:
      '<div class="slick-custom-arrow slick-custom-arrow-right"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_380_9905" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path d="M0 0H24V24H0V0Z" fill="white"></path></mask><g mask="url(#mask0_380_9905)"><path d="M16.004 9.414L7.397 18.021L5.983 16.607L14.589 8H7.004V6H18.004V17H16.004V9.414Z" fill="black" class="Vector"></path></g></svg></div>',
    prevArrow:
      '<div class="slick-custom-arrow slick-custom-arrow-left"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_380_9905" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path d="M0 0H24V24H0V0Z" fill="white"></path></mask><g mask="url(#mask0_380_9905)"><path d="M16.004 9.414L7.397 18.021L5.983 16.607L14.589 8H7.004V6H18.004V17H16.004V9.414Z" fill="black" class="Vector"></path></g></svg></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

/* ------------------------------------- About Progressbar ------------------------------------- */
$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    9000
  );
  $(this).text($(this).attr("data-progress") + "%");
});

/* ------------------------------------- Grid Tabs ------------------------------------- */
$(".filter a").click(function (e) {
  e.preventDefault();
  var a = $(this).attr("href");
  a = a.substr(1);
  $(
    ".sets .pg2_gallery_box,.sets .pg3_gallery_box,.sets .pg3_wide_gallery_box,.sets .pg4_wide_gallery_box,.sets .pg5_wide_gallery_box,.sets .pmg_gallery_box,.sets .pmg2_gallery_box,.sets .pmg3_box .pmg3_gallery_box"
  ).each(function () {
    if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
    else $(this).removeClass("hide");
  });

  var btnContainer = document.getElementById("btncontainer");
  var btns = btnContainer.getElementsByClassName("pg-btn");
  for (var i = 0; i < btns.length; i++) {
    var current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  }
});

document.querySelectorAll(".tab").forEach((tabs) => {
  tabs.addEventListener("click", function () {
    const target = this.dataset.target;
    if (target) {
      document.querySelector(target).classList.add("active");
    }
  });
});

let imgs = document.querySelectorAll(
  ".pg2_gallery_img a img,.pg3_gallery_img a img,.pg3_wide_gallery_img a img,.pg4_wide_gallery_img a img,.pg5_wide_gallery_img a img,.pmg_gallery_img a img,.pmg2_gallery_img a img,.pmg3_gallery_img a img"
);
let count;
imgs.forEach((img, index) => {
  img.addEventListener("click", function (e) {
    if (e.target == this) {
      count = index;
      let openDiv = document.createElement("div");
      let imgPreview = document.createElement("img");
      let butonsSection = document.createElement("div");
      butonsSection.classList.add("butonsSection");
      let closeBtn = document.createElement("button");
      let nextBtn = document.createElement("button");
      let prevButton = document.createElement("button");
      prevButton.innerText = "Previous";
      nextBtn.innerText = "Next";
      let svgCode =
        '<svg viewBox="0 0 24 24"> <path d="M5.5 5.5L18.5 18.5M18.5 5.5L5.5 18.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>';

      nextBtn.classList.add("nextButton");
      prevButton.classList.add("prevButton");
      nextBtn.addEventListener("click", function () {
        if (count >= imgs.length - 1) {
          count = 0;
        } else {
          count++;
        }

        imgPreview.src = imgs[count].src;
      });

      prevButton.addEventListener("click", function () {
        if (count === 0) {
          count = imgs.length - 1;
        } else {
          count--;
        }

        imgPreview.src = imgs[count].src;
      });

      closeBtn.classList.add("closeBtn");
      closeBtn.innerHTML = svgCode;
      closeBtn.addEventListener("click", function () {
        openDiv.remove();
      });

      imgPreview.classList.add("imgPreview");
      imgPreview.src = this.src;

      butonsSection.append(prevButton, nextBtn);
      openDiv.append(imgPreview, butonsSection, closeBtn);

      openDiv.classList.add("openDiv");

      document.querySelector("body").append(openDiv);
    }
  });
});

/* ------------------------------------- Portfolio-Image Animation ------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  // IMAGE ANIMATION
  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add("portfolio-animation-img");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("portfolio-animation-img");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".reveal1").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;
      container.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        container.classList.add("fading-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("fading-up");
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll(".fadeup").forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});


/* ------------------------------------- Blog-Image Slider ------------------------------------- */
$(document).ready(function () {
  $(".slider_blog_box_image_list").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "progressive",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:
      '<div class="slick-custom-arrow slick-custom-arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"> <circle cx="30" cy="30" r="29" stroke="white" stroke-width="2"/> <mask id="mask0_414_1433" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="18" y="18" width="24" height="24"> <path d="M18 18H42V42H18V18Z" fill="white"/></mask> <g mask="url(#mask0_414_1433)"> <path d="M23 30H37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M33 34L37 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M33 26L37 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg></div>',
    prevArrow:
      '<div class="slick-custom-arrow slick-custom-arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"> <circle cx="30" cy="30" r="29" stroke="white" stroke-width="2"/> <mask id="mask0_414_1432" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="18" y="18" width="24" height="24"><path d="M18 18H42V42H18V18Z" fill="white"/></mask> <g mask="url(#mask0_414_1432)"><path d="M37 30H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 34L23 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 26L23 30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg></div>',
  });
});

/*------------------------------------- Pagenation Active Class -------------------------------------*/
$(".blog_pagenation_list a").click(function () {
  $(".blog_pagenation_list a").each(function () {
    $(this).parent("li").removeClass("active");
  });
  $(this).parent("li").addClass("active");
});

/* -------------------------------------  Coming-Soon Ball ------------------------------------- */
var mouseDown = false;
var zIndex = 999;
var divSelect;
var svgSelect;
var positionXdown;
var positionYDown;
var decalageX;
var decalageY;

var divs = ["one"]; 
var marginTop;
var marginLeft;
var positionDebut;
var image;
var positionImage;

function positionDebut(){
  for (i=0; i<divs.length; i++){
  }
}
positionDebut();
document.onmouseup = onMouseUp;
function onMouseDown(event, a) {
  mouseDown=true;
  divSelect = a.getAttribute("id");
  zIndex++;
  document.getElementById(divSelect).style.zIndex = zIndex + 1;
  decalageX = ((event.clientX)-(document.getElementById(divSelect).offsetLeft));
  decalageY = ((event.clientY)-(document.getElementById(divSelect).offsetTop));
  positionXdown = event.clientX;
  positionYDown = event.clienY;
}
function onMouseMove(event) {
  if (mouseDown === true) {
    document.getElementById(divSelect).style.top = (event.clientY-decalageY)+'px';
    document.getElementById(divSelect).style.left = (event.clientX-decalageX)+'px';
  }
}
function onMouseUp(){
 mouseDown=false;
}

/* -------------------------------------  Scroll To Top Button ------------------------------------- */
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
