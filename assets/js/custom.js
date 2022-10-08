jQuery(function ($) {
    'use strict';
    // Home Slider
    $('.banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots: false,
        nav:true,
        autoplay: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    })
    $('.feedback-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots: true,
        nav:false,
        autoplay: true,
        navText: ["<i class='fa-solid fa-angles-left'></i>", "<i class='fa-solid fa-angles-right'></i>"]
    })

    // Logo Slider
    $('.logo-slider').owlCarousel({
        loop:true,
        margin:30,
        dots: false,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            992:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
   
}(jQuery));
 //Get the button
 var mybutton = document.getElementById("myBtn");


 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }