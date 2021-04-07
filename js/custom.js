$(document).ready(function() {




    setTimeout(function() {
        /*$(window).on("load", function() {*/
            $("body").addClass("preloader_done");
        /*});*/
    }, 3800);






    $(".hamburger").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $("nav , .nav").stop(true, true).toggleClass("active");
        $(".main_nav").stop(true, true).toggleClass("active");
        $(".head_r_sec").stop(true, true).toggleClass("active");
        $("body").stop(true, true).toggleClass("active");

    });




    $('.content_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.icon_slide'
    });
    $('.icon_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.content_slider',
        dots: true,
        focusOnSelect: true
    });



    $("#particles-js").jParticle({
        background: "#fff",
        color: "rgba(0, 88, 149, .15)",
    });

    //	wow js	
    new WOW().init();

    //END: WOW//
    //=====SET: SVG JQUERY=====//
    /**
     * Replace all SVG images with inline SVG
     */
    jQuery('img.white, .preloader .preloader_svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    //=====END: SVG JQUERY=====//


    $(document).on('click', 'a[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });


    $('header li').has('ul').addClass('menu-item-has-children');
    $('header li.menu-item-has-children').append('<span class="drop_arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></span>');

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $("header").addClass("darkHeader");
            $("header .logo img").attr("src", "images/color-logo.svg");
        } else {
            $("header").removeClass("darkHeader");
            $("header .logo img").attr("src", "images/logo.svg");
        }
    });

    $(".main_header").sticky({
        topSpacing: 0
    });


    if ($(window).width() <= 991) {

        $(".top_header").appendTo(".nav");
        $(".nav").children().wrapAll("<div class='nav_wrapper'></div>");

    }


    //    $(".menu-item-has-children .drop_arrow").on("click",function(){
    //        $(this).children("i").toggleClass("fa-angle-up");
    //         $(".menu-item-has-children").children(" > ul.sub-menu").toggle();
    //        $(this).siblings("ul.sub-menu").slideToggle();
    //       
    //    });

    $("header ul>li.menu-item-has-children .drop_arrow").click(function() {
        $(this).parent(".menu-item-has-children").find(">.sub-menu").slideToggle();
        $(this).parent(".menu-item-has-children").toggleClass("show");
        $(this).parent(".menu-item-has-children").siblings('.menu-item-has-children').find('>.sub-menu').slideUp();
        $(this).parent(".menu-item-has-children").siblings('.menu-item-has-children').removeClass("show");
    });



});