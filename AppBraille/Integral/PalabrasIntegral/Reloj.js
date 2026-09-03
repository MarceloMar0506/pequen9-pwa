function IniciaTimer()
{
setTimeout(function() { 
if (termino == "si") {return;}
$(".CTexto").focus();
  var time = 60; /* how long the timer will run (seconds) */
  var initialOffset = '440';
  var i = 1
  var mi ="";
  var mmi ="00";
  var minutos = 0;
  $('h2').text( "00:00");


  /* Need initial run as interval hasn't yet occured... */
  $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

  var interval = setInterval(function() {
  mi = i;
  if (mi < 10) {mi = "0"+i;}
  if (minutos == 0) {mmi = "00";}
  if (minutos > 0 && minutos < 10) {mmi = "0" + minutos;}
  if (minutos > 9) {mmi = minutos;}

  
      $('h2').text(mmi + ":" + mi);
        tiempoEvalua = $('h2').text();
      
      if (i == time) {  	
       
      // clearInterval(interval);
        i = 1;
        minutos = minutos +1;
      
        return;
      }
      $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
      i++;  
  }, 1000);

}, 0)

}