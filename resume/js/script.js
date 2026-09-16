/* Mary Jo Iozzio site script.
   Trimmed from the MegaOne resume demo: owl carousel, parallaxie, the count up
   animation (it comma formats years) and the mouse parallax are removed because
   the page no longer uses them. */

$(window).on("load", function () {
    "use strict";
    $('.side-menu').removeClass('hidden');
    setTimeout(function () {
        $('.preloader').fadeOut();
    }, 600);
});

jQuery(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) {
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
        }
        if ($(this).scrollTop() > 500) {
            $('.scroll-top-arrow').fadeIn('slow');
        } else {
            $('.scroll-top-arrow').fadeOut('slow');
        }
    });

    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        var target = $(this.hash);
        if (!target.length) { return; }
        event.preventDefault();
        $("html,body").animate({scrollTop: target.offset().top - 60}, 1000);
    });

    /* Side menu */
    if ($("#sidemenu_toggle").length) {
        var closeMenu = function () {
            $(".side-menu").removeClass("side-menu-active");
            $("#close_side_menu").fadeOut(200);
        };
        $("#sidemenu_toggle").on("click", function () {
            $(".side-menu").addClass("side-menu-active");
            $("#close_side_menu").fadeIn(700);
        });
        $("#close_side_menu, #btn_sideNavClose").on("click", closeMenu);
        $(".side-nav .navbar-nav .nav-link").on("click", closeMenu);
    }

    /* Gallery */
    if ($('#js-grid-mosaic-flat').length) {
        $('#js-grid-mosaic-flat').cubeportfolio({
            layoutMode: 'grid',
            mediaQueries: [
                {width: 1100, cols: 4},
                {width: 800, cols: 3},
                {width: 480, cols: 2},
                {width: 0, cols: 1}
            ],
            defaultFilter: '*',
            animationType: 'quicksand',
            gapHorizontal: 8,
            gapVertical: 8,
            gridAdjustment: 'responsive',
            caption: '',
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title'
        });
    }
});
