$(function(){
	$(".slider_inner, .news__slider-inner").ready(function(){
		$('.slider_inner, .news__slider-inner').slick({

		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,
		dots: true,
		dotsClass: "dots-style",
		});




	})
	

		
	
	

	$('select').styler();

	$(".header_btn-menu").ready(function(){
		$(".header_btn-menu").click(function () {
			$(".menu ul").slideToggle("slow");
		});

	})
	








});































document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
