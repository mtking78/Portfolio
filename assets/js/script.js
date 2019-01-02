$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + scroll-link chevrons
  $(".navbar a, .scroll-link").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
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
    } // End if
  });

  // Auto close navbar menu upon selection
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

  // Script for css thumbnail animations.
  $(window).scroll(function() {
    $('.thumbnail').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
          $(this).addClass("fadeIn");
        }
    });
  });

})