$(window).on('load', function() {
         $('.front-select').click(function(){
              $(this).toggleClass('show-box');
           });
            $('.elipsis-icon').click(function(){
                $(this).parents('li').toggleClass('show-list');
            });
            $(window).scroll(function() {    
         var scroll = $(window).scrollTop();
         
         if (scroll >= 20) {
         $(".site-header").addClass("header-shrik");
         } else {
         $(".site-header").removeClass("header-shrik");
         }
         });
           //TOGGLING NESTED ul
$(".drop-down .selected a").click(function() {
    $(".drop-down .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function() {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").hide();
}); 


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("drop-down"))
        $(".drop-down .options ul").hide();
});


$('.dashboard-brokers-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 ]
});

$('.sidebar-toggle-btn').click(function(){
  $('.sidebar-row').toggleClass('active-sidebar');
  $('.sidebar-row').hasClass('active-sidebar')
{
  $('.sidebar-toggle-btn').toggleClass('align-toggle-btn');
}

});

         });