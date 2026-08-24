var UsuarioActual;
var primeravez = true;
var Dice = "";
var TextoLargo = [];
var indEs = 0;
var number = 0;
var Tono = 1;

//resaltar texto al hablar
var wordIndex = 0;
var global_words = [];
var LeeAyuda = "no";
var Nnumero = "";
//

var Nusuario = "";
//var amISpeaking;// = synth.speaking; // will return true if utterance 1 or utterance 
$(window).keydown(function(event) 
{ 

  if(event.keyCode==112)
  {
   return false;
  }
  
  });




function  Lee(texto)
{
indEs=10000;
$(".label").html(texto);
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance( texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
$(".label").html(texto);
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
    //event.charIndex el indice de la palabra que lee
  }   
 		   
HablaAnim();
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
    
} 

function  LeeCGB(texto)
{

TextoLargo[0] = texto;
if (texto.length > 5)
{//cortar en punto espacio ". "
indEs=0;
TextoLargo = texto.split(". ");
}
$(".label").html(TextoLargo[0]);
$('.label').css('fontSize','2vw'); 
$('.label').css('text-align','left');  
$('#label').css('text-align','left');   
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance($(".label").text());
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate = Veloz;	
msgNo.pitch = Tono;
	
 msgNo.onboundary = function(event) { 
    
    //event.charIndex el indice de la palabra que lee
  }	
  
 msgNo.onend = function(event) {
if (TextoLargo.length > 0)
 {
 indEs ++;
 LeeSiguiente();
 }
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
HablaAnim();   
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
} 

function LeeSiguiente()
{

$(".label").html(TextoLargo[indEs]);
$('.label').css('fontSize','2vw'); 
$('.label').css('text-align','left');  
$('#label').css('text-align','left');   
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance($(".label").text());
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate =Veloz;
msgNo.pitch = Tono;
	
 msgNo.onboundary = function(event) { 
 
    //event.charIndex el indice de la palabra que lee
  }	
  
 msgNo.onend = function(event) {
if (TextoLargo.length > indEs )
 {
 indEs ++;
 LeeSiguiente();
 }
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
HablaAnim();
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
}



function ColorGlobo()
{
$('.label').css('fontSize','2.5vw'); 
$('.label').css('text-align','left');   

if (indiceColor == 0 || indiceColor == -1){ 
 $(".label").css("color","black");
$(".label").css("background-color","#8FABB5"

);
$("#label").css("background-color","#8FABB5"

);
 }

if (indiceColor == 2){ 
$(".label").css("background-color","black");
$("#label").css("background-color","black");
$(".label").css("color","white");
}

 if (indiceColor == 1){ 
 $(".label").css("color","black");
$("#label").css("background-color","white");
$(".label").css("background-color","white");
}
}



function QueColor()
{
$('.label').css('fontSize','2.5vw'); 
$('.label').css('text-align','left');   

if (indiceColor == 0){ 
 $(".label").css("color","black");
$(".label").css("background-color","#8FABB5"

);
$("#label").css("background-color","#8FABB5"

);
 }

if (indiceColor == 2){ 
$(".label").css("background-color","black");
$("#label").css("background-color","black");
$(".label").css("color","white");
}

 if (indiceColor == 1){ 
 $(".label").css("color","black");
$("#label").css("background-color","white");
$(".label").css("background-color","white");
}

}



function ColorFondo()
{

if (indiceColor == 0 || indiceColor == -1){ 
document.body.style.backgroundColor  = "#8FABB5";
$(".etiqueta").css("background-color","#8FABB5");
$(".etiqueta").css("color","black");
$("#Pie").css("background-color","#8FABB5");
$("#Pie").css("color","black");
 $(".label").css("color","black");
$(".label").css("background-color","#8FABB5");
$("#label").css("background-color","#8FABB5");


 }

if (indiceColor == 2){ 
document.body.style.backgroundColor  = "black";
$(".etiqueta").css("background-color","black");
$(".etiqueta").css("color","white");
$("#Pie").css("background-color","black");
$("#Pie").css("color","white");
 $(".label").css("color","white");
$(".label").css("background-color","black");
$("#label").css("background-color","black");
}

 if (indiceColor == 1){ 
document.body.style.backgroundColor = "white";
$(".etiqueta").css("background-color","white");
$(".etiqueta").css("color","black");
$("#Pie").css("background-color","white");
$("#Pie").css("color","black");
 $(".label").css("color","black");
$(".label").css("background-color","white");
$("#label").css("background-color","white");
}
}
