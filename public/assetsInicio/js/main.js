!function(e){"use strict";jQuery(document).on("ready",function(){e(window).on("scroll",function(){e(this).scrollTop()>120?e(".navbar-area").addClass("is-sticky"):e(".navbar-area").removeClass("is-sticky")}),jQuery(".mean-menu").meanmenu({meanScreenWidth:"991"}),e("select").niceSelect(),e(".odometer").appear(function(a){e(".odometer").each(function(){var a=e(this).attr("data-count");e(this).html(a)})}),e(".popup-youtube").magnificPopup({disableOn:320,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});var a=e(".feedback-slides .client-feedback>div"),o=e(".client-thumbnails>div");a.slick({speed:300,slidesToShow:1,slidesToScroll:1,cssEase:"linear",fade:!0,autoplay:!0,draggable:!0,asNavFor:".client-thumbnails>div",prevArrow:".client-feedback .prev-arrow",nextArrow:".client-feedback .next-arrow"}),o.slick({speed:300,slidesToShow:5,slidesToScroll:1,cssEase:"linear",autoplay:!0,centerMode:!0,draggable:!1,focusOnSelect:!0,asNavFor:".feedback-slides .client-feedback>div",prevArrow:".client-thumbnails .prev-arrow",nextArrow:".client-thumbnails .next-arrow"});var n=e(".feedback-slides .caption"),t=e(".client-feedback .slick-current img").attr("alt");function i(e){""===e&&(e="&nbsp;"),n.html(e),n.removeClass("hide")}i(t),a.on("beforeChange",function(e,a,o,t){n.addClass("hide")}),a.on("afterChange",function(a,o,n,l){i(t=e(".client-feedback .slick-current img").attr("alt"))}),e(function(){e(".accordion").find(".accordion-title").on("click",function(){e(this).toggleClass("active"),e(this).next().slideToggle("fast"),e(".accordion-content").not(e(this).next()).slideUp("fast"),e(".accordion-title").not(e(this)).removeClass("active")})}),e(function(){e(window).on("scroll",function(){var a=e(window).scrollTop();a>600&&e(".go-top").addClass("active"),a<600&&e(".go-top").removeClass("active")}),e(".go-top").on("click",function(){e("html, body").animate({scrollTop:"0"},500)})})}),e(window).on("load",function(){e(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:20,mobile:!0,live:!0}).init()}),jQuery(window).on("load",function(){e(".preloader").fadeOut()})}(jQuery);