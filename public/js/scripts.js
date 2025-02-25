$(document).ready(function(){
    $('#slider').fadeIn('slow').delay(200);
    $("#sticker").sticky({topSpacing:0});
  });

  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {  
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  
  //FIXED MENU COLORS
  $(document).ready(function(){
    $(window).trigger('scroll');
    $(window).bind('scroll', function () {
      var pixels = 50;
      if ($(window).scrollTop() > pixels) {
        $('.nav').addClass('fixed');
        $('.menu a').css({"color":"#354757"});
        $('.logo').css({"color":"#354757"});
      } else {
        $('.nav').removeClass('fixed');
        $('.menu a').css({"color":"#BABCBD"});
        $('.logo').css({"color":"#BABCBD"});
      }
    }); 
  });
  