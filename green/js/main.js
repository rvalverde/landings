	
	$(document).ready(function () {
	
		$("#accordion .title").click(function(e) {
			e.preventDefault();
			if($(this).next("div").is(":visible")){
				$(this).next("div").slideUp("slow");
			} else {
				$("#accordion .content").slideUp("slow");
				$(this).next("div").slideToggle("slow");
			}
			$('#accordion .title.active').removeClass('active');
			$(this).addClass('active');
		});
		$("#accordion .title:eq(0)").trigger('click');
		
		$("#tabs > ul li a").click(function(event) {
			event.preventDefault();
			$(this).parent().addClass("active");
			$(this).parent().siblings().removeClass('active');
			var tab = $(this).attr("href");
			$("#tabs > .content").not(tab).css("display", "none");
			$(tab).fadeIn();
		});
		$("#tabs > ul li a:eq(0)").trigger('click');
		
		$('#nav').tinyNav({
			active: 'selected',
			indent: '?'
		});
		
	});