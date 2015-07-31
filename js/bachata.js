$(document).ready(function(){
    $(".album-title").click(function() {
      var addheight = $(this).parent().find(".song-list").height()-75;
      $(this).parent().find(".song-list").slideToggle("slow");
      var flag = $(this).data('flag');
      $(this).parent().parent().animate({height: flag ? '450' : '+='+addheight}, 100);
      $(this).data('flag', !flag);
    });
});
