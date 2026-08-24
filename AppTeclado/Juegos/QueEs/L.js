var audio = document.createElement('audio');
var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento=false;
var LetraInicial;
var msgNo ="";

function Escucha(){
  
  audio.play();
}

function DictaSonido()
{
//console.log("dicta " + posL + " cuantos " + SonidoQ.length);
if ( SonidoQ.length  == posL){
  Lee("Juego resuelto. ya descubriste todos los sonidos. pulsa escape para salir");
  return;
}
LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
//console.log(LetraInicial);
wordIndex=2;
if (posL == 0)
{
  

  LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
  //console.log(LetraInicial +  " dictada????  " + posL)
  rutaAudio = "./../../../ResB/"+ SonidoQ[posL] +".mp3"; 
  audio.src =rutaAudio;
  //console.log(SonidoQ[posL] + " " + rutaAudio + "  posL  "  + posL);
  audio.volume=0.2
  audio.load();
  
  audio.play();
 // posL++;



}
else if (posL > 0)
{
var texto = "Escuchar el sonido y pulsar la letra correspondiente";

$('.Lt').css("background-color","white");

$(".label").html(texto);
window.speechSynthesis.cancel();

//console.log(SonidoQ[posL] + " ??????????????????????????????????? " + rutaAudio + "  posL  "  + posL);

msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
EsperaAnimHide();
document.getElementById('EtiquetaUno').innerHTML = "&zwnj;";
document.getElementById('EtiquetaDos').innerHTML = "&zwnj;";
$("#mimg").attr("src","./../../../ResB/QE.png"); 

//Sonido
LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
rutaAudio = "./../../../ResB/"+ SonidoQ[posL] +".mp3"; 
audio.src =rutaAudio;
//console.log(SonidoQ[posL] + " " + rutaAudio + "  posL  "  + posL);
audio.load();

audio.play();
posL++;
}



//pulsada =false;
}

HablaAnimShow();	

window.speechSynthesis.speak(msgNo);



}



function MostrarLetra(TextoE) {
event.preventDefault();
  var valor = $('.CTexto').val(); 
  
//F1 Ayuda 
if (event.keyCode==112) {
//alert("Ayuda");
return;
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
rutaAudio = "./../../../ResB/"+arrayN[0]+".mp3"; 
// audio.src =  rutaAudio;
// audio.load(); 
document.getElementById('myAudio').src =rutaAudio;

 
 document.getElementById("mimg").src ="./../../../ResB/"+arrayN[0]+".png";  
//document.getElementById('EtiquetaUnoTexto').innerHTML = arrayN[0];
              
 //Si no hay imagen muestra imagen en blanco No.png
    document.getElementById('mimg').onerror = function() {
    document.getElementById('mimg').src = "./../../../ResB/N0.png";
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
  msgNo.rate = Veloz;	
  msgNo.pitch = Tono;		
  msgNo.onend = function(event) {
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio
document.getElementById('myAudio').play();
 //audio.play();

  }
 //window.speechSynthesis.speak(msgNo);
} //fin de es letra


//"es número"
if ($.isNumeric(Letras) == true)
{
$("#mimg").attr("src","./../../../ResB/Naranja.png");
rutaAudio = "./../../../ResB/Blep.mp3"; 
audio.src =  rutaAudio;
audio.load();  


          

var Texto =  LetrasMin + " " 
  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.volume=Volumen;
  msgNo.rate = Veloz;	
  msgNo.pitch = Tono;		
  msgNo.onend = function(event) {
  EsperaAnimHide();
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio

//var i;
var Valor = parseInt(Letras);

var count =0;

audio.play();
     
//$("#mimg").attr('src', this.id + "?" + d.getTime());


audio.onended = function() {
    if(count <= Valor -2){
      count++;
      this.play();
 var tipo=(count%2)? "par" : "impar";
//alert(tipo);
if (tipo =="par")
{
//document.getElementById("mimg").src ="./../../../ResB/Manzana.png";
$("#mimg").attr("src","./../../../ResB/Manzana.png");

$("#mimg").attr('src', this.id + "?" + d.getTime());
}

else if (tipo =="impar")
{
//document.getElementById("mimg").src ="./../../../ResB/Naranja.png";      
$("#mimg").attr("src","./../../../ResB/Naranja.png");     

$("#mimg").attr('src', this.id + "?" + d.getTime());
 
}
  }

};





//for (i = 0; i < Valor; i++)
// { 

//setTimeout(function() {audio.play(); }, 100);

/*setTimeout(function() {
          audio.play();
        } ,1000);





}//fin de For*/





  }
  
  

  // audio.play();

  HablaAnimShow();
 //window.speechSynthesis.speak(msgNo);
 //sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 




}





// <!--Limpia input-->
//  var valor = $('.CTexto').val();
//  $('.CTexto').val('');
} 

//Fin Mostrar Letra

