var audio = document.createElement('audio');
var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento=false;
var LetraInicial;
var msgNo ="";

function DictaPalabra()
{ 
  
LetraInicial = PalabraD[posL].substring(0,1).toUpperCase();
//wordIndex=2;
texto = Gres.escribir +  PalabraD[posL];
$("#LetraP").text(PalabraD[posL]);
$(".label").html(texto);
DeterminaMotor(texto);


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

rutaAudio = "/ResB/imgsnd/"+arrayN[0]+".mp3"; 

document.getElementById('myAudio').src =rutaAudio;

 
document.getElementById("mimg").src ="/ResB/imgsnd/"+arrayN[0]+".png";  

              
 //Si no hay imagen muestra imagen en blanco No.png
    document.getElementById('mimg').onerror = function() {
    document.getElementById('mimg').src = "/ResB/imgsnd/N0.png";
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
  msgNo.rate = 0.8;			
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
$("#mimg").attr("src","/ResB/imgsnd/Naranja.png");

if (controlAudio == "con" ) {
rutaAudio = "/ResB/imgsnd/Blep.mp3"; 
audio.src =  rutaAudio;
audio.load();  
}

          

var Texto =  LetrasMin + " " 
  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.rate = 0.8;			
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
//document.getElementById("mimg").src ="/ResB/imgsnd/Manzana.png";
$("#mimg").attr("src","/ResB/imgsnd/Manzana.png");

$("#mimg").attr('src', this.id + "?" + d.getTime());
}

else if (tipo =="impar")
{
//document.getElementById("mimg").src ="/ResB/imgsnd/Naranja.png";      
$("#mimg").attr("src","/ResB/imgsnd/Naranja.png");     

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

