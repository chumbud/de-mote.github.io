$(document).ready(function(){
     $("#dropdown").click(function(){
          $(".dropdown-menu").fadeToggle(200);
     });
});
$(window).scroll(function () {
     var nav = $('nav'),
         ul = $('nav ul a'),
         logo = $('.logo'),
         dropdown = $('.dropdown-menu'),
         propic = $('.pic img'),
         scroll = $(window).scrollTop();

     if (scroll >= 300)
          nav.addClass('nav-resize'),
               logo.addClass('resize'),
               dropdown.addClass('dropdown-resize'),
               ul.addClass('resize');
     else
          nav.removeClass('nav-resize'),
               logo.removeClass('resize'),
               dropdown.removeClass('dropdown-resize'),
               ul.removeClass('resize');
});
