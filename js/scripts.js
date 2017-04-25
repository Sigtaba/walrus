$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable-sloth").click(function() {
    $("#sloth-showing").slideToggle();
    $("#sloth-hidden").slideToggle();
  });
  $("#unicorn").click(function() {
    $("#unicorn").slideUp();
  });
});
