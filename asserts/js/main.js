(function ($) {
  /*Page_Main*/
  $(".btn_menu").click(() => {
    $(".btn_menu").toggleClass("active");
  });

  /*Page_Hoam*/
  $(".btn_family").click(() => {
    $(".btn_family").children("ul").toggleClass("active");
  });
})(jQuery);
