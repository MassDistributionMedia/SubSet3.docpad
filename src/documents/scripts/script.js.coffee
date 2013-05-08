$ ->
	$("#hack-wiki, #hello-world_wiki, #donate-home-popover, #help-home-popover").popover()

	$(window).scroll ->
		if $(this).scrollTop() > 77
			$(".close-header").css "opacity", "1"
		else
			$(".close-header").css "opacity", "0"
			$(".navbar").css "position", "fixed"

	$(".close-header").click ->
		$(".navbar").css "position", "relative"
		$(".close-header").css "opacity", "0"