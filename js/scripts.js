var main = function(){
  (function blink() {
    $('.blink_me').fadeOut(850).fadeIn(850, blink);
  })();
  $('.barvalue').hide();
  $('.barpercent').hide();
  // Add smooth scrolling to all links

$('[id="submit"]').on('click',function(event){
  //event.preventDefault();
  $('[id = "InputName"]').val("");
  $('[id = "InputEmail"]').val("");
  $('[id = "InputSubject"]').val("");
  $('[id = "InputMessage"]').val("");
});
$("a").on('click', function(event) {

  if($(this).text().trim()!="[PDF]" && $(this).text().trim()!= "VLDB 2016"&&$(this).text().trim() != "Previous" && $(this).text().trim() != "Next" && $(this).attr("class") != "icon" && $(this).attr("class") != "btn btn-warning" && $(this).attr("class") != "btn btn-info pull-right"){
// Prevent default anchor click behavior

  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
  }
});

}






$(document).ready(main);
