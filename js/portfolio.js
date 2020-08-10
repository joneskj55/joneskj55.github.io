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

//-------DATE & TIME----------//
    var currentTime = new Date();
    var year = currentTime.getFullYear();

    function share() {
        var winWidth = $(window).width();
        if (winWidth > 999 ) {
            var docHeight = $(document).height();
            var top = $(document).scrollTop();
            if (top > docHeight - 1740 ) {
                $('.share-box').fadeOut(200);
            } else {
                $('.share-box').fadeIn(200);
            }
        } else {
            $('.share-box').hide();
        }
    }

    $(window).scroll(function () {
        share();
    });
});
