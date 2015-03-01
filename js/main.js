$(document).ready(function(){
  $(".submit").click(function(){
    $("#popup").fadeToggle( "slow" );
  });

  // Fade not working
  $("a").click(function(){
    $("#popup").fadeToggle( "slow" );
  });

});
