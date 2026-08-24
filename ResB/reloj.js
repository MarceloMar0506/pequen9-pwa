var interval;
var indiceS = 1;
var Npractica = 1;

function IniciaTimer()
{
setTimeout(function() { 
  
if (termino == "si") {return;}
  var time = 60;
  var initialOffset = '440';
  var i = 1
  var mi ="";
  var mmi ="00";
  var minutos = 0;
  $('h2').text( "00:00");
   clearInterval(interval);
  interval = setInterval(function() {
  mi = i;
  if (mi < 10) {mi = "0"+i;}
  if (minutos == 0) {mmi = "00";}
  if (minutos > 0 && minutos < 10) {mmi = "0" + minutos;}
  if (minutos > 9) {mmi = minutos;}
 
 // //console.log(termino);
  if (termino == "si") {return;}

      $('h2').text(mmi + ":" + mi);

        tiempoEvalua = $('h2').text();
      
      if (i == time) {  	
       
      // clearInterval(interval);
        i = 1;
        minutos = minutos +1;
      
        return;
      }
      //$('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
      i++;  
  }, 1000);

}, 0)

}




function collidesWith (element1, element2) {
  var Element1 = {};
  var Element2 = {};
  Element1.top = $(element1).offset().top;
  Element1.left = $(element1).offset().left;
  Element1.right = Number($(element1).offset().left) + Number($(element1).width()/2);
  Element1.bottom = Number($(element1).offset().top) + Number($(element1).height());

  Element2.top = $(element2).offset().top;
  Element2.left = $(element2).offset().left;
  Element2.right = Number($(element2).offset().left) + Number($(element2).width());
  Element2.bottom = Number($(element2).offset().top) + Number($(element2).height());
  
 // //console.log(Element2.left + " " + Element1.left);

  if (Element1.right > Element2.left && Element1.left < Element2.right ){
    return true;  
    // Do your stuff here
  }
}