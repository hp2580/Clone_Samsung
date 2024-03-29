(function ($) {
  let screen = window.scrollY + window.innerHeight;
  let upper960;
  let lower960;

  function clearClass(elements, name) {
    $(elements).removeClass(name);
  }

  function addOn_scroll() {
    setTimeout(() => {
      $(".scroll").map((current) => {
        let center =
          $(".scroll").eq(current).offset().top +
          $(".scroll").eq(current).innerHeight() / 2;
        if (center < screen) $(".scroll").eq(current).addClass("on");
        else $(".scroll").eq(current).removeClass("on");
      });
    });
  }

  window.onload = () => {
    addOn_scroll(0.85);
    if (scrollY > 0) $("header").addClass("active");
    if (window.innerWidth > 960) {
      upper960 = true;
      lower960 = false;
    } else {
      upper960 = false;
      lower960 = true;
    }
    let swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
      },
    });
  };
  window.onscroll = () => {
    screen = window.scrollY + window.innerHeight;
    if (scrollY > 0) $("header").addClass("active");
    else $("header").removeClass("active");
    if (window.innerWidth > 960) addOn_scroll();
    else addOn_scroll();
  };

  window.onresize = () => {
    screen = window.scrollY + window.innerHeight;
    if (window.innerWidth > 960) {
      $(".btn_sub_menu").removeClass("active");
      $(".side_menu").slideUp(100);
      if (upper960 == false) {
        upper960 = true;
        lower960 = false;
        clearClass($(".scroll"), "on");
      }
    } else {
      if (lower960 == false) {
        upper960 = false;
        lower960 = true;
        clearClass($(".scroll"), "on");
      }
    }
    addOn_scroll();
  };

  /*Page_Main*/
  $(".btn_menu").click(() => {
    $(".btn_menu").toggleClass("active");
    $(".nav_wrap").stop().slideToggle(300);
  });

  /*Page_Common*/
  $(".menu")
    .mouseenter(function () {
      $(this).children("ul").stop().slideDown(300);
    })
    .mouseleave(function () {
      $(this).children("ul").stop().slideUp(300);
    });

  $(".btn_sub_menu").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".side_menu").stop().slideDown();
      if (window.innerWidth < 960) {
        $(document.body).css("overflow", "hidden");
      }
    } else {
      $(".side_menu").stop().slideUp();
      if (window.innerWidth < 960) {
        $(document.body).css("overflow", "");
      }
    }
  });

  $(".f_btn_family").click(function () {
    $(this).toggleClass("active");
    $(".f_family_list").toggleClass("active");
  });

  /*Page_Hoam*/
  $(".btn_family").click(() => {
    $(".btn_family").children("ul").toggleClass("active");
  });
})(jQuery);
