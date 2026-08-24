var audio = document.createElement('audio');
var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento=false;


function MostrarLetra(TextoE) {
event.preventDefault();

$('.Lt').css("background-color","white");
			 
var TECLA =TextoE.toString().toUpperCase();
$('#'+ TECLA).css("background-color","#1883ba");	

  var valor = $('.CTexto').val(); 
  
//F1 Ayuda 
if (keyCode == 112){
  var miVarA = setTimeout(function(){ 
    movil=0;
  $.getScript('/F1/Generales.js', function() {
  },100);
  var miVarA2 = setTimeout(function(){ 
  Ayuda();
  return;
  },300);
});
}

var Letras= valor.toUpperCase();
var LetrasMin=valor.toLowerCase();

if(Letras.length == 1){
document.getElementById('EtiquetaDos').innerHTML =LetrasMin;
document.getElementById('EtiquetaUno').innerHTML =Letras;
}
else if(Letras.length > 1){
//la ultima letra
Letras=Letras.slice(-1).toUpperCase();
LetrasMin=Letras.slice(-1).toLowerCase();
document.getElementById('EtiquetaDos').innerHTML =LetrasMin;
document.getElementById('EtiquetaUno').innerHTML =Letras;
}


if ($.isNumeric(Letras) == false)
{
//alert(Letras);
 Nvar = eval("L"+Letras);
 Nvar = Nvar.toString();
 arrayN = Nvar.split(",");
//orden = orden +1; 

//if(arrayN.length <= orden){ orden=0; }  

rutaAudio = "../../ResB/"+arrayN[0]+".mp3"; 
audio.src =  rutaAudio;
if (controlAudio == "con" ) {
  audio.volume=0.2;
}else {
  audio.volume=0;
}
audio.load(); 

 
 document.getElementById("mimg").src ="../../ResB/"+arrayN[0]+".png";  
document.getElementById('EtiquetaUnoTexto').innerHTML = arrayN[0];
              
 //Si no hay imagen muestra imagen en blanco No.png
    document.getElementById('mimg').onerror = function() {
    document.getElementById('mimg').src = "../../ResB/N0.png";
     }
var Texto = LetrasMin + " " + arrayN[0].toString();

if(LetrasMin == "á" ) { Texto =  "a acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "é" ) { Texto =  "e acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "í" ) { Texto =  "i acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "ó" ) { Texto =  "o acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "ú" ) { Texto =  "u acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "y" ) { Texto =  "y griega! !" + arrayN[0].toString(); }


  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.volume=Volumen;
  msgNo.rate =Veloz;	
  msgNo.pitch = Tono;			
  msgNo.onend = function(event) {
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio
audio.volume=0.2;
 audio.play();

  }
 //window.speechSynthesis.speak(msgNo);
} //fin de es letra


//"es número"
if ($.isNumeric(Letras) == true)
{
$("#mimg").attr("src","../../ResB/Naranja.png");
//if (controlAudio == "con" ) {
rutaAudio = "../../ResB/Blep.mp3"; 
audio.src =  rutaAudio;
if (controlAudio == "con" ) {
audio.volume=0.2;
}
else{
  audio.volume=0;
}
audio.load();  
//}


          

var Texto =  LetrasMin + " " 
  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.volume=Volumen;
  msgNo.rate =Veloz;	
  msgNo.pitch = Tono;			
  msgNo.onend = function(event) {
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio

//var i;
var Valor = parseInt(Letras);

var count =0;
audio.volume=0.2;
audio.play();
     
//$("#mimg").attr('src', this.id + "?" + d.getTime());


audio.onended = function() {
    if(count <= Valor -2){
      count++;
      audio.volume=0.2;
      this.play();
 var tipo=(count%2)? "par" : "impar";
//alert(tipo);
if (tipo =="par")
{
//document.getElementById("mimg").src ="../../ResB/Manzana.png";
$("#mimg").attr("src","../../ResB/Manzana.png");

$("#mimg").attr('src', this.id + "?" + d.getTime());
}

else if (tipo =="impar")
{
//document.getElementById("mimg").src ="../../ResB/Naranja.png";      
$("#mimg").attr("src","../../ResB/Naranja.png");     

$("#mimg").attr('src', this.id + "?" + d.getTime());
 
}
  }

};




  }
  
  
 window.speechSynthesis.speak(msgNo);



}



//Limpia input
 var valor = $('.CTexto').val();
 $('.CTexto').val('');
}  //Fin Mostrar Letra

