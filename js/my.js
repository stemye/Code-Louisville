$("#dropdown").click(function(){
    $(".menu").toggle("slow");
});

$(window).resize(function() {
 if ($(window).width() > 768) {
    $(".menu").show();
    $("nav").css({"display": "flex"});
 }

 if ($(window).width() < 768) {
    $("nav").css({"display": "none"});
 }

});
