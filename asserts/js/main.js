(function ($) {
  window.onscroll = (e) => {
    if (scrollY > 0) $("header").addClass("active");
    else $("header").removeClass("active");
  };
  window.onresize = () => {
    if (window.innerWidth > 960) {
      $(".btn_sub_menu").removeClass("active");
      $(".side_menu").slideUp(100);
    }
  };
  /*Page_Main*/
  $(".btn_menu").click(() => {
    $(".btn_menu").toggleClass("active");
    $(".nav_wrap").stop().slideToggle(300);
  });

  /*Page_Culture*/
  $(".menu")
    .mouseenter(function () {
      $(this).children("ul").stop().slideDown(300);
    })
    .mouseleave(function () {
      $(this).children("ul").stop().slideUp(300);
    });

  $(".btn_sub_menu").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) $(".side_menu").stop().slideDown();
    else $(".side_menu").stop().slideUp();
  });

  /*Page_Hoam*/
  $(".btn_family").click(() => {
    $(".btn_family").children("ul").toggleClass("active");
  });
})(jQuery);
