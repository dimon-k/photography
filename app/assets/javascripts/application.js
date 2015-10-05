// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//-----------------------------------------------------------------
// Allows #menu_nav to scroll horizontally, and fixes it vertically
$(window).scroll(function(){
  $('#menu_nav').css('left',-$(window).scrollLeft());
});

// Allows footer to scroll horizontally, and fixes it vertically
$(window).scroll(function(){
  $('footer').css('left',-$(window).scrollLeft());
});


//-----------------------------------------------------------------
// 1 - Function (variable) that makes menu hover possible
var menu_ready = function() {
  
//set opacity to 0 for all of the elements in the class  
//opacity = 1 - completely opaque  
//opacity = 0 - invisible  
  
$('.menu_hover').css('opacity', 0);  
  
// when hover over the selected image change the opacity to 1  
$('.menu_hover').hover(function() {  
      $(this).stop(true).fadeTo(700, 1);  
   },  
   function(){  
      $(this).stop(true).fadeTo(700, 0);  
   });  
  
};

// 2 - Function (function itself) that makes menu hover possible
$(document).ready(menu_ready);
$(document).on('page:load', menu_ready);


//-----------------------------------------------------------------
// 1 - Portfolio Slider (variable)
var slider_ready = function() {

$(document).ready(function() {
	$(".box_skitter_large").skitter({
			  theme: "square",
    		controls: true, 
    		controls_position: "leftTop", 
    		progressbar: true, 
    		enable_navigation_keys: true,
    		numbers: false,
    		animation: 'random',
    		interval: 5000,
    		label: false,
    		progressbar_css: { backgroundColor: '#FF9A35' },
    		stop_over: false,
    		velocity: 0.5,
        show_randomly: true
			});
	});

};

// 2 - Portfolio Slider (function)
$(document).ready(slider_ready);
$(document).on('page:load', slider_ready);

//-----------------------------------------------------------------