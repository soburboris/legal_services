$(document).ready(function() {


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});



	$("#modal>#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "form.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#modal #form").trigger("reset");
			
			setTimeout(function() {
				// Done Functions
				$.fancybox.close()
				
				
			}, 1000);

		});
		return false;
	});
	
});

