$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
      }else{       $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
      }
  });



  var magvideo = document.getElementById("mag"); 

function playPause() { 
  if (magvideo.paused) 
    magvideo.play(); 
  else 
    magvideo.pause(); 
} 
