$(function(){
	$(".slider_inner, .news__slider-inner").ready(function(){
		$('.slider_inner, .news__slider-inner').slick({

		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,
		dots: true,
		dotsClass: "dots-style",
		});




	});
	

		
	
	

	$('select').styler();

	$(".header_btn-menu").ready(function(){
		$(".header_btn-menu").click(function () {
			$(".menu ul").slideToggle("slow");
		});

	})
});



 function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", () =>{
    var input4 = document.getElementsByTagName("input")[4];
    input4.addEventListener("input", mask, false);
    input4.focus();
    setCursorPosition(3, input4);

    var input = document.getElementsByTagName("input")[1];
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  });

   






























document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
