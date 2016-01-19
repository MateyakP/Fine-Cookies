$(document).ready(function(){
  $('article img, .hoverBtn').hover(

    function(){
      $(this).stop().fadeTo('slow',0.6);
    },
    function(){
      $(this).stop().fadeTo('slow',1);
    }); 
});