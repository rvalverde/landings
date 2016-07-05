	
	$(function() {
		
		$("#top a").click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1000);
			return false;
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
		
		$(window).scroll(function() {
			var windscroll = $(window).scrollTop();
			if (windscroll >= 100) {
				$('#container .page').each(function(i) {
					if ($(this).position().top <= windscroll - 250) {
						
						$("#menu .logo .item").hide();
						$('#menu .logo .item').eq(i).show();
						
						$('#menu li.active').removeClass('active');
						$('#menu li').eq(i).addClass('active');
					}
				});
			}
		}).scroll();
  
		$("#menu li").click(function(e) {
			e.preventDefault();
			$("#menu li").removeClass("active");
			var item = $(this),
				link = item.attr('data-menu'),
				data = $('[data-content="' + link + '"]');
				item.addClass("active");
			$('html,body').animate({ 
				scrollTop: $(data).offset().top
			}, 1000);
		});
		
		$('.content .vamos').viewportChecker({
			classToAdd	: 'animated fadeInLeft',
			offset		: 1,
			repeat		: true
		});
		
		$('.content .product').viewportChecker({
			classToAdd	: 'animated fadeInRight',
			offset		: 1,
			repeat		: true
		});

		$('#menu ul').clone().appendTo('#responsive .menu');
		$('#logum img').clone().appendTo('#responsive .logo');
		
		$("#responsive .open").click(function(e) {
			e.preventDefault();
			$("html, body").toggleClass("hidden");
			$(this).parent().toggleClass("active");
			$(this).find("span").toggleClass("active");
			if ($(this).find("span").hasClass('active')) {
				$(this).parent().find(".menu").slideDown(800);
			} else {
				$(this).parent().find(".menu").slideUp(300);
			}
		});
		
		$("#responsive .menu li").click(function(e) {
			e.preventDefault();
			$("html, body").removeClass("hidden");
			$(this).parent().parent().parent().removeClass("active");
			$(this).parent().parent().parent().find("span").removeClass("active");
			$("#responsive .menu").slideUp(300);
			
			var item = $(this),
				link = item.attr('data-menu'),
				data = $('[data-content="' + link + '"]');
				item.addClass("active");
			$('html,body').animate({ 
				scrollTop: $(data).offset().top
			}, 1000);
		});
		
	});