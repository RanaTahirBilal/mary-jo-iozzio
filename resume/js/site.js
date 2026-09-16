/* Mary Jo Iozzio. Replaces the MegaOne resume demo script, which initialises
   Slider Revolution, cubePortfolio, owlCarousel, parallaxie and a Google map,
   none of which this build uses. Leaving the demo script in would throw on the
   first missing plugin and stop everything after it. */
(function ($) {
  "use strict";
  $(window).on("load", function () { $("#mj-loader").fadeOut(360); });
  setTimeout(function () { $("#mj-loader").fadeOut(360); }, 3500);

  $(function () {
    $("#mj-year").text(new Date().getFullYear());
    if (typeof WOW === "function") { new WOW({ mobile: false, offset: 60 }).init(); }

    $("#sidemenu_toggle").on("click", function () {
      $(".side-menu").removeClass("hidden").addClass("side-menu-active");
      $("#close_side_menu").addClass("side-menu-active");
    });
    $("#btn_sideNavClose, #close_side_menu").on("click", function () {
      $(".side-menu, #close_side_menu").removeClass("side-menu-active");
    });

    $("a.scroll").on("click", function (e) {
      var t = $(this).attr("href");
      if (!t || t.charAt(0) !== "#" || t.length < 2) { return; }
      var $t = $(t); if (!$t.length) { return; }
      e.preventDefault();
      $(".side-menu, #close_side_menu").removeClass("side-menu-active");
      $("html, body").animate({ scrollTop: $t.offset().top - 74 }, 620);
    });
  });
})(jQuery);
