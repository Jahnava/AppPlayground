$(document).ready(function() {
   $("#target1").css("color", "red");
  //  $("button").addClass("animated shake");
   $("#target1").css("color", "red");
   $("#target4").html("<em>#target4");
   $("#target2").appendTo("#right-well");
   $("#target3").clone().appendTo("#left-well");
   $("#target1").parent().css("background-color","blue");
   $("#target4").parent().css("background-color","red");
   $("#right-well").children().css("background-color","orange");
   $("#left-well").children().css("background-color","orange");
   $(".target:nth-child(1)").addClass("animated bounce");
   $(".target:even").addClass("animated shake");
   $("body").addClass("animated hinge");
 });
