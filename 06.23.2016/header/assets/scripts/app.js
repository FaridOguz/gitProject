function openWindow() {
  document.getElementById("image_src").click
}
$(document).ready(function() {
  $("#twit_input_one").focus(function() {
    $("#twitwrite").removeClass("i_twitWrite").addClass(
      "i_twitWrite_onfocus")
  })

  $(".fa-camera").click(function() {
    $("#image_src").click();
  });

  $("#twit_input_one").focusout(function() {
    $("#twitwrite").addClass(
      "i_twitWrite").removeClass(
      "i_twitWrite_onfocus")
  })



})
