jQuery(function ($) {

// $(".sidebar-dropdown > a").click(function() {
//   alert("clicked index.js")
//   $(".sidebar-submenu").slideUp(200);
//   if (
//     $(this)
//       .parent()
//       .hasClass("active")
//   ) {
//     $(".sidebar-dropdown").removeClass("active");
//     $(this)
//       .parent()
//       .removeClass("active");
//   } else {
//     $(".sidebar-dropdown").removeClass("active");
//     $(this)
//       .next(".sidebar-submenu")
//       .slideDown(200);
//     $(this)
//       .parent()
//       .addClass("active");
//   }
// });

$(".open-modal").click(function() {
  $( "<div class='modal-backdrop fade show'></div>" ).appendTo( "#content" );
  $( "<div class='modal-backdrop fade show'></div>" ).css("z-index", "2")
});

$(".close").click(function() {
  $( ".modal-backdrop.fade" ).css("opacity","0").css("z-index", "-1");
}); 

$(".btn-danger").click(function() {
  $( ".modal-backdrop.fade" ).css("opacity","0").css("z-index", "-1");
}); 

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

//$('[data-toggle="tooltip"]').tooltip();

//$("button").tooltip();
if($(window).width() < 767) { 
  $(".container-fluid").removeClass("d-flex");
  $(".bg-custom").removeClass("d-flex");
  $(".logo").parent().removeClass("h-100");
  $(".row").removeClass("h-100")
  $(".logo").removeClass("w-100").addClass("w-50 m-auto pt-5 pb-5");
  $("#Login .text-muted").addClass("text-center");
  $(".nav-link").removeClass("d-flex"); 
  $(".img-responsive.w-100").removeClass("d-none");
  $(".form-group").removeClass("w-75");
}

// Toggle the side navigation
$("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
  $(".nav-link").toggleClass("d-flex");   
  $("body").toggleClass("sidebar-toggled");
  $(".sidebar").toggleClass("toggled");
  if ($(".sidebar").hasClass("toggled")) {
    $('.sidebar .collapse').collapse('hide');
  };
});
  
// Close any open menu accordions when window is resized below 768px
$(window).resize(function() {
  if ($(window).width() < 768) {
    $('.sidebar .collapse').collapse('hide');
  };
});

// Prevent the content wrapper from scrolling when the fixed side navigation hovered over
$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
  if ($(window).width() > 768) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  }
});

// Scroll to top button appear
$(document).on('scroll', function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

// Smooth scrolling using jQuery easing
$(document).on('click', 'a.scroll-to-top', function(e) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top)
  }, 1000, 'easeInOutExpo');
  e.preventDefault();
});


// accordian 
function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('fa-plus fa-minus ');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon); 

$(document).on('click', '#tab1Next', function(e) {  
  $(".wizard-container").find(".tab-1").parent().parent().removeClass("active"); 
  $(".wizard-container").find(".tab-2").addClass("bg-success").addClass("tab-2-done");
  $(".wizard-container").find(".tab-2 .text-xs").removeClass("text-muted").addClass("text-white");
  $(".wizard-container").find(".tab-2 i").removeClass("text-success").addClass("text-white"); 
}); 

$(document).on('click', '#tab2Next', function(e) { 
  $(".wizard-container").find(".tab-3").addClass("bg-danger").addClass("tab-3-done");
  $(".wizard-container").find(".tab-3 .text-xs").removeClass("text-muted").addClass("text-white");
  $(".wizard-container").find(".tab-3 i").removeClass("text-danger").addClass("text-white");  
});

$(document).on('click', '#tab3Next', function(e) {   
  $(".wizard-container").find(".tab-4").addClass("bg-warning").addClass("tab-4-done");
  $(".wizard-container").find(".tab-4 .text-xs").removeClass("text-muted").addClass("text-white");
  $(".wizard-container").find(".tab-4 i").removeClass("text-warning").addClass("text-white");
  
}); 


$(document).on('click', '#tab4prev', function(e) {   
  $(".wizard-container").find(".tab-4").removeClass("bg-warning").removeClass("tab-4-done");
  $(".wizard-container").find(".tab-4 .text-xs").addClass("text-muted").removeClass("text-white");
  $(".wizard-container").find(".tab-4 i").addClass("text-warning").removeClass("text-white");  
}); 

$(document).on('click', '#tab3prev', function(e) {   
  $(".wizard-container").find(".tab-3").removeClass("bg-danger").removeClass("tab-3-done");
  $(".wizard-container").find(".tab-3 .text-xs").addClass("text-muted").removeClass("text-white");
  $(".wizard-container").find(".tab-3 i").addClass("text-danger").removeClass("text-white");  
});

$(document).on('click', '#tab2prev', function(e) {   
  $(".wizard-container").find(".tab-2").removeClass("bg-success").removeClass("tab-2-done");
  $(".wizard-container").find(".tab-2 .text-xs").addClass("text-muted").removeClass("text-white");
  $(".wizard-container").find(".tab-2 i").addClass("text-success").removeClass("text-white");  
});

$(document).on('click', '#sidebarToggle', function(e) {   
  $(".sidebar-brand-icon img").toggleClass("d-none");  
}); 

});
 