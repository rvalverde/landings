	
	$(document).ready(function() {
		$("#navigation a").click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top - 95
			}, 800);
			return false;
		});
   
		$("#nav").menutron({
			maxScreenWidth: 750,
			menuTitle: 'Select menu'
		});
		
		$.fn.fullscreen = function () {
			var viewportHeight = $(window).height();
			var viewportWidth = $(window).width();
			$(this).css({
				'min-height': viewportHeight - 100,
				'min-width': viewportWidth
			});
		};
		
		$.fn.middle = function () {
			$(this).each(function() {
				var viewportHeight = $(window).height() - 103;
				var div = $(this).height();
				var middile = (viewportHeight - div ) / 2;
				var heightimg = $(this).find(".image img").height();
				var image = $(this).find(".subpage").css({'min-height': heightimg});
				$(this).css({
				'position': 'relative',
				'top': middile
			});
			});
		};
		
		$("#gear .gear").middle();
		$("#gear").fullscreen();
		
		$(window).resize(function () {
			$("#gear .width").middle();
			$("#gear").fullscreen();
		});
		$(window).trigger('resize');
		
		$(window).scroll(function () {
			if ($(this).scrollTop() >= 100) {
				$('#navigation').addClass('fix');
				$('#logo a').addClass('fixed');
			} else {
				$('#navigation').removeClass('fix');
				$('#logo a').removeClass('fixed');
			}
		});
		
	
	});