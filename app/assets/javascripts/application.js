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
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .
//= require turbolinks

$(document).ready(function() {
	$("#title").click(function(){
		window.location.href = "/"
	})
	$("#home").click(function(){
		// $("#home").attr("class","selectednav")
		window.location.href = "/"
	})
	$("#videos").click(function(){
		window.location.href = "/videos"
	})
	$("#lesson").click(function(){
		window.location.href = "/lessonschedule"
	})
	$("#mp").click(function(){
		window.location.href = "/mp3files"
	})
	$("#contact").click(function(){
		window.location.href = "/contactme"
	})
	
	var nav = $('#navbar');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
})