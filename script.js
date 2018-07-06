$(document).ready(function() {

  $(".btn1").click(function() {
    first = Math.ceil(Math.random() * 99);
    $(this).text(first);
  })
  // section

  $(".btn2").click(function() {
    seckond = Math.ceil(Math.random() * 99);
    $(this).text(seckond);
  })

  // section
  $(".btn3").click(function() {
    third = Math.ceil(Math.random() * 99);
    $(this).text(third);
  })

});
