

jQuery(document).ready(function($) {

  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    nav:true,
    margin:10,
    smartSpeed:2000,
    autoplay:true,
    autoplayTimeout:5000
  });
});





$(document).ready(function(){
  $(".nav-trigger").click(function(){
    $("nav").toggleClass('active');
    $(this).toggleClass('active');
  });
});