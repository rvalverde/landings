	
	$("#top a").click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	
	$(window).scroll(function() {
		$('#container').css({'background-position':'center -' + $(window).scrollTop() / 2 + 'px'});
	});
	
	var offset = 220;
	var duration = 500;
	$(window).scroll(function () {
		if ($(this).scrollTop() > offset) {
			$('#top a').fadeIn(duration);
		} else {
			$('#top a').fadeOut(duration);
		}
	});
	