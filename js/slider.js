$( document ).ready(function() {
$('body').each(function() {
  var $this = $(this);
  var $group = $this.find('#slider_wrapper');
  var $slides = $this.find('.slider_item');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateTop, slideTop;
    
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideTop = '100%';
      animateTop = '-100%';
    } else {
      slideTop = '-100%';
      animateTop = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      top: slideTop , 
        opacity: 1

    });
    $group.animate({
      top: animateTop
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none', 
        opacity: 0

      });
      
      currentIndex = newIndex;
    });
  }
  
  
  
  $('#next').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('#prev').on('click', function() {
    if (currentIndex !== 0 ) {
      
      Math.abs(move(currentIndex - 1));
    } else {
      move(1);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">' + (index + 1) +'</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }


    
    $button.on('click', function() {
      move(index);
    }).appendTo('.slider_nav');
    bulletArray.push($button);
    


	  

	
  
  });
});

});
