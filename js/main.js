function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

document.addEventListener("DOMContentLoaded", function () {
  var openModalLinks = document.querySelectorAll(".open-modal");

  openModalLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetModalId = link.getAttribute("data-bs-target");

      if (targetModalId) {
        var targetModalElement = document.querySelector(targetModalId);

        if (targetModalElement) {
          var targetModal = new bootstrap.Modal(targetModalElement);
          targetModal.show();
        } else {
          console.error("Modal element not found:", targetModalId);
        }
      }
    });
  });
});

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 1000,
        // delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });
const elements = document.querySelectorAll(".counter");

elements.forEach((el) => {
  IO.observe(el);
});

var activeModal = null;

$(".modal").on("show.bs.modal", function () {
  if (activeModal !== null && activeModal.attr("id") !== $(this).attr("id")) {
    activeModal.modal("hide");
  }

  activeModal = $(this);

  $("body").addClass("modal-open");
});

$(".modal").on("hidden.bs.modal", function (e) {
  if (e && e.which === 27) {
    return;
  }

  $("body").css("padding-right", "");

  $("body").removeClass("modal-open");

  if ($(".modal:visible").length === 0) {
    $(".modal-backdrop").remove();
  }
});

$("#myModal, #myModal2, #myModal3").on("hide.bs.modal", function () {
  if (activeModal !== null) {
    activeModal = null;
  }
});

// $("#myModal").on("hidden.bs.modal", function (e) {
//   if (e && e.which === 27) {
//     return;
//   }

//   $("body").css({
//     overflow: "auto",
//     "padding-right": "",
//   });

//   $(this).modal("dispose");

//   setTimeout(function () {
//     $(".modal-backdrop").remove();
//   }, 2000);

//   // $(this).removeData("bs.modal");
// });

$("#modal1").on("shown.bs.modal", function () {
  if ($(document).height() > $(window).height()) {
    $("body").css("overflow", "hidden");
  }
});

$("#modal1").on("show.bs.modal", function () {
  if ($(".modal-backdrop").length === 0) {
    $("body").append('<div class="modal-backdrop show"></div>');
  }
});

$("#modal1").on("hidden.bs.modal", function (e) {
  if (e && e.which === 27) {
    return;
  }

  $("body").css({
    overflow: "auto",
    "padding-right": "",
  });

  $(this).modal("dispose");

  setTimeout(function () {
    $(".modal-backdrop").remove();
  }, 100);

  $(this).removeData("bs.modal");
});

$("#modal1").on("shown.bs.modal", function () {
  if ($(document).height() > $(window).height()) {
    $("body").css("overflow", "hidden");
  }
});

$("#modal1").on("show.bs.modal", function () {
  if ($(".modal-backdrop").length === 0) {
    $("body").append('<div class="modal-backdrop show"></div>');
  }
});

$("#modal1").on("shown.bs.modal", function () {
  $("body").addClass("modal-open");
  $("body").css("overflow", "hidden");
});
// observes the input's :focus and :focusout event inside the search box and styles its parent element.

$(".searchbox input").focus(function () {
  $(".searchbox .input-group").addClass("focused-border");
});

$(".searchbox input").focusout(function () {
  $(".searchbox .input-group").removeClass("focused-border");
});

// opens and closes the search box.

$(".open-searchbox, .close-searchbox").click(function () {
  $(".searchbox").toggleClass("active");
  $("body").toggleClass("open-menu");
});

// manages the status of the mobile menu.

// document.addEventListener("DOMContentLoaded", function () {
//   var buttonMapaSite = document.querySelector(".button-mapa-site");
//   var collapseMapSite = document.getElementById("collapseMapSite");

//   buttonMapaSite.addEventListener("click", function () {
//     if ($(collapseMapSite).hasClass("show")) {
//       collapseMapSite.addEventListener("hidden.bs.collapse", function () {
//         collapseMapSite.style.height = "";
//         collapseMapSite.style.transition = "";
//       });

//       $(collapseMapSite).collapse("hide");
//     } else {
//       collapseMapSite.addEventListener("show.bs.collapse", function () {
//         collapseMapSite.style.height = "auto";
//         collapseMapSite.style.transition = "height 0.3s ease-out";
//       });

//       collapseMapSite.addEventListener("shown.bs.collapse", function () {
//         collapseMapSite.style.transition = "";
//       });

//       $(collapseMapSite).collapse("show");
//     }
//   });
// });

$(".toggle-mobile-menu").click(function () {
  $(".mobile-menu-div").toggleClass("active");
  $(".header").toggleClass("open-menu");
  $("body").toggleClass("open-menu");
});

$(".button-mapa-site").click((e) => {
  $(".button-mapa-site").toggleClass("active");
});

// Código responsável por fazer o collapse das tables.

//$('.table:not(.table-not-break)').basictable({
//  breakpoint: 767
//});

// Animações para aparecer o elemento
AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

var swiper = new Swiper(".mySwiper", {
  // effect: "fade",
  loop: true,
  spaceBetween: "10",
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

/* Hover do menu */
function changeImage(imagePath) {
  var image = document.getElementById("tabImage");

  image.classList.add("fade-out");

  setTimeout(function () {
    image.src = imagePath;

    image.offsetHeight;

    image.classList.remove("fade-out");
  }, 100);
}

$(
  ".header .nav-menu-header .header-navigation-item > .dropdown-toggle"
).removeAttr("data-bs-toggle");

document
  .querySelectorAll(".header .nav-menu-header .header-navigation-item")
  .forEach((i) => {
    const dropdown = i.querySelector(".dropdown-menu");
    const toggle = i.querySelector(".dropdown-toggle");

    i.addEventListener("mouseover", () => {
      dropdown.classList.add("show");
      toggle.classList.add("active");
      setTimeout(() => {
        dropdown.style.opacity = "1";
      }, 10);
    });

    i.addEventListener("mouseleave", () => {
      dropdown.style.opacity = "0";
      toggle.classList.remove("active");
      dropdown.classList.remove("show");
    });
  });

/* Carousels */

$(document).ready(function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // Slick Banner Home
    $("#destaques-home .box-destaques").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    // Slick Banner Home
    $(".destaques-carousel-home").slick({
      slide: ".item-destaque-home:not(.ignoreMe)",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 700,
      fade: false,
      responsive: [
        {
          breakpoint: 475,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  $(".timeline-content-historia").slick({
    asNavFor: ".nav-timeline",
    slidesToShow: 1,
    slidesToScroll: 1,

    fade: false,
    arrows: false,
    infinite: false,
    useTransform: true,
    adaptiveHeight: true,
    draggable: true,
  });

  $(".nav-timeline").slick({
    asNavFor: ".timeline-content-historia",
    slidesToShow: 6,
    slidesToScroll: 1,

    dots: false,
    arrows: true,
    useTransform: true,
    infinite: false,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".nav-central-result-destaque").slick({
    slidesToScroll: 1,
    asNavFor: ".list-central-result-home",
    dots: false,
    arrows: true,
    slidesToShow: 1,
    infinite: false,
    focusOnSelect: true,
  });

  $(".list-central-result-home").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    infinite: false,
    asNavFor: ".nav-central-result-destaque",
  });

  $(".carousel-timeline-content").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,

    arrows: false,
    asNavFor: ".carousel-timeline-nav",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".carousel-timeline-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,

    dots: false,
    centerMode: false,
    focusOnSelect: true,

    asNavFor: ".carousel-timeline-content",
  });

  $(".carousel-timeline-nav .slick-next").on("click", () => {
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".slick-next.slick-disabled").attr("disabled", "disabled");
    }
  });

  $(".carousel-timeline-nav .slick-prev").on("click", () => {
    $(".slick-next").removeAttr("disabled");
  });
});

/* Focus no input */

// function activeInputsFocus(){
//   const inputs = document.querySelectorAll('.div-input input, .div-input select, .div-input textarea');

//   inputs.forEach(input => {
//     if(input.value != ""){
//       input.parentNode.classList.add("focus")
//     }
//     input.addEventListener('focus', (e) => {
//       input.parentNode.classList.add("focus")
//     })
//     input.addEventListener('blur', (e) => {
//       if(input.value == ""){
//         input.parentNode.classList.remove("focus")
//       }
//     })
//   })
// }

// activeInputsFocus();

/* Parar o vídeo quando fechar o modal */

function stopVideo() {
  let leg = $("#modalVideo iframe").attr("src");
  $("#modalVideo iframe").attr("src", leg);
}
if ($("modalVideo")) {
  $("#modalVideo").on("click", () => {
    setTimeout(() => {
      if (!$("#modalVideo").hasClass("show")) {
        stopVideo();
      }
    }, 200);
  });
}

/* Scroll to accordion */
$(document).ready(function () {
  let buttonAccordions = document.querySelectorAll(
    ".accordion:not(#accordionMenuMobile) button.accordion-button"
  );
  buttonAccordions.forEach((i) => {
    i.addEventListener("click", () => {
      setTimeout(() => {
        if (!i.classList.contains("collapsed")) {
          const id = i.getAttribute("data-bs-target");
          const section = $(id);
          const topo = section.offset().top;
          window.scrollTo({
            top: topo - 230,
            behavior: "smooth",
          });
        }
      }, 410);
    });
  });
});

const storys = new PrismaStories("slide", "openStorys", "closeStorys");
storys.init();
