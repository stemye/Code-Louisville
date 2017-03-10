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

$(function(){
    $("#myHeader").load("header.html");
});

//Hide all my content except the home-welcome text
$(".about").hide();
$(".wiki").hide();
$(".download").hide();
$(".contact").hide();

$("#home").click(function(){
    $(".home").show("slow");
    $(".about").hide("slow");
    $(".wiki").hide("slow");
});

$("#about").click(function(){
    $(".about").show("slow");
    $(".home").hide("slow");
    $(".wiki").hide("slow");
});

$("#wiki").click(function(){
    $(".wiki").show("slow");
    $(".home").hide("slow");
    $(".about").hide("slow");
});
