$(".nav a").on("click", function(){
   $(".navbar-nav").find(".active-link").removeClass("active-link");
   $(this).parent().not(".dropdown").addClass("active-link");
});

