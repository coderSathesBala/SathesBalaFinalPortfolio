var scroll_start = 0;
//Scroll Function
$(document).ready(function() {
  $("#projects").on("click", function() {
    var answer = $(".projectWholeLeft").offset().top
      window.scroll({
        top: answer - 100,
        behavior: 'smooth'
      })
  })
  $("#contact").on("click", function() {
      window.scroll({
        top: 9000,
        behavior: 'smooth'
      })
  })
})
