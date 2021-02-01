$(function () {
    'use strict';


    // Menu fix js start
    var menu_fix = $("#menu_part").offset().top;
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > menu_fix) {
            $("#menu_part").addClass("menu_fix");
        } else {
            $("#menu_part").removeClass("menu_fix");
        }
    });
    // Menu fix js start

    //Slider Start Hear 
    $('.big_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.sm-slider'
    });
    $('.sm-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big_slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: 0,
        autoplay: true,

    });

    // Counter Up Js
    $('.carche').counterUp({
        delay: 10,
        time: 1000
    });

    // Service Slider
    $('.service_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // Testimonial Silder
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });







});