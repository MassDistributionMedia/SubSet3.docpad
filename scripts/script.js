(function() {
  $(function() {
    $("#hack-wiki, #hello-world_wiki, #donate-home-popover, #help-home-popover, #blog-title").popover();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 77) {
        return $(".close-header").css("opacity", "1");
      } else {
        $(".close-header").css("opacity", "0");
        return $(".navbar").css("position", "fixed");
      }
    });
    return $(".close-header").click(function() {
      return $(".navbar").toggle();
    });
  });

}).call(this);
