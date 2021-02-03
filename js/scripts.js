console.log("hello!");

var $one = $("#j1");
var $two = $("#j2");
var $three = $("#j3");

$one.on("click", function(){
    $(this).hide();
   /* $("main, footer, header").css("background-color", "#E8DED1"); */
    $("#a1").show();
});

$("#a1").on("click", function(){
    $(this).hide();
    $("main, footer, header").css("background-color", "#A8A8A8");
    $two.show();
});

$two.on("click", function(){
    $(this).hide();
   /* $("main, footer, header").css("background-color", "#A0816C"); */
    $("#a2").show();
});

$("#a2").on("click", function(){
    $(this).hide();
    $("main, footer, header").css("background-color", "#777777");
    $three.show();
});

$three.on("click", function(){
    $(this).hide();
  /*  $("main, footer, header").css("background-color", "#C8AD7E"); */
    $("#a3").show();
});

$("#a3").on("click", function(){
    $(this).hide();
    $("main, footer, header").css("background-color", "#414141");
    $one.show();
});




