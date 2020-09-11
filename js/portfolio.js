//Created by kevinjones on 12/15/16.//

"use strict";
$(document).ready(function () {

//---SMOOTH SCROLLING FROM VIEWPORT TO TARGET--//
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 900);
    });

//-------SIDENAV FADE--------//
    function sidenavFade() {
        let winWidth = $(window).width();
        if (winWidth > 999) {
            let docHeight = $(document).height();
            let top = $(document).scrollTop();
            if (top > docHeight - 1140) {
                $('.sidenav').fadeOut(200);
            } else {
                $('.sidenav').fadeIn(200);
            }
        } else {
            $('.sidenav').hide();
        }
    }

    $(window).scroll(function () {
        sidenavFade();
    });
});

//-------NAV-BAR COLLAPSE ON CLICK--------//
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
