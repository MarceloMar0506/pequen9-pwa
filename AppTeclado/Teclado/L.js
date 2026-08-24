var audio = document.createElement('audio');
var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento="false";
var NValor=1;
var que;


function MostrarLetra(TextoE) {
  window.speechSynthesis.cancel();
  //console.log(TextoE);

  if (TextoE == ";" ) 
  {
  //para teclado qwerty en Android
   TextoE = "ñ";
  }

  //"es número"
 if ($.isNumeric(TextoE) == true)
 {
   Lee("Es un número. Esta aplicación es para letras");
   return;
 }

	$('.Lt').css("background-color","white");
			 
			 var TECLA =TextoE.toString().toUpperCase();
			$('#'+ TECLA).css("background-color","#1883ba");	

if (TextoE == "F5") {return;}
event.preventDefault();
   if(event.keyCode == 32)
      {
      Lee("espacio");
      return;
     }
     //console.log(TextoE);
    // if (TextoE == undefined){return}

var Letras=(TextoE).toString().toUpperCase();
var LetrasMin=(TextoE).toString().toLowerCase();
//console.log(Letras);
if ( event.keyCode == 13) {
 ///// queHace(); 
 //console.log("Enterrrrrrrrrrrrrrrrr");
 let actual = $("#LetraP").text().toLocaleLowerCase();
 var letra = actual.toString().slice(0,1);
 LeeCGB(letra  + ". " + actual );
 document.getElementById('EtiquetaDos').innerHTML =letra.toUpperCase();
 document.getElementById('EtiquetaUno').innerHTML =letra.toLowerCase();
		
  return
}

if (TextoE == "Dead"  ||  TextoE == "Unidentified" || TextoE == "``")
{
Lee("acento, pulsa una vocal")
acento = "true";
return;
}
//alert(acento + " == true && " + TextoE);

if (acento == "true" && TextoE.trim() == "a") 
{
Letras = "Á";
LetrasMin= "á";
acento = "";
}
if (acento == "true" && TextoE.trim() == "e") 
{
Letras = "É";
LetrasMin= "é";
acento = "";
}
if (acento == "true" && TextoE.trim() == "i") 
{
Letras = "Í";
LetrasMin= "í";
acento = "";
}
if (acento == "true" && TextoE.trim() == "o") 
{
Letras = "Ó";
LetrasMin= "ó";
acento = "";
}
if (acento == "true" && TextoE.trim() == "u") 
{
Letras = "Ú";
LetrasMin= "ú";
acento = "";
}
 

//F1 Ayuda 
if (event.keyCode==112) {
//alert("Ayuda");
return;
}



if (event.keyCode != 13) {
$('#mimg').attr('src', './../../ResB/transparente.png');

}

if (event.keyCode == 113)
{event.preventDefault();
 Lee("F2");  document.getElementById('LetraP').innerHTML = "F2"; return;}

if (event.keyCode == 114)
{event.preventDefault();
 Lee("F3");  document.getElementById('LetraP').innerHTML = "F3"; return;}

if (event.keyCode == 115)
{event.preventDefault();
 Lee("F4");  document.getElementById('LetraP').innerHTML = "F4"; return;}

if (event.keyCode == 117)
{event.preventDefault();
 Lee("F6");  document.getElementById('LetraP').innerHTML = "F6"; return;}

if (event.keyCode == 118)
{event.preventDefault();
 Lee("F7");  document.getElementById('LetraP').innerHTML = "F7"; return;}

if (event.keyCode == 119)
{event.preventDefault();
 Lee("F8");  document.getElementById('LetraP').innerHTML = "F8"; return;}

if (event.keyCode == 120)
{event.preventDefault();
 Lee("F9");  document.getElementById('LetraP').innerHTML = "F9"; return;}

if (event.keyCode == 121)
{event.preventDefault();
 Lee("F10");  document.getElementById('LetraP').innerHTML = "F10"; return;}

if (event.keyCode == 122)
{event.preventDefault();
 Lee("F11");  document.getElementById('LetraP').innerHTML = "F11"; return;}

if (event.keyCode == 123)
{event.preventDefault();
 Lee("F12");  document.getElementById('LetraP').innerHTML = "F12"; return;}


if (event.keyCode == 45 ) {
Lee("insertar");
return;}

if (event.keyCode == 36 ) {
Lee("inicio");
return;}

if (event.keyCode == 35 ) {
Lee("fin");
return;}

if (event.keyCode == 33 ) {
Lee("página arriba");
return;}

if (event.keyCode == 34 ) {
Lee("página abajo");
return;}

if (event.keyCode == 46 ) {
Lee("suprimir");
return;}

if (event.keyCode == 44 ) {
Lee("imprimir pantalla");
return;}

if (event.keyCode == 17 ) {
Lee("control");
return;}

if (event.keyCode == 18 ) {
Lee("alt");
return;}

if (event.keyCode == 16 ) {
Lee("mayúscula");
return;}

if (event.keyCode == 20 ) {
Lee("bloqueo de mayúscula");
return;}

if (event.keyCode == 93 ) {
Lee("suprimir"); 
return;}

if (event.keyCode == 9 ) {
Lee("Tab");
return;}



if (Letras.length == 0)
{
Letras = "Z";
LetrasMin= "z";
}

if (Letras == "FIN")
{
Letras = "A";
LetrasMin= "a";
}

//Si cambió de letra
if(ultimaLetra != Letras){
ultimaLetra=Letras;
orden = -1;
}



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

if (Letras == "*" ) 
{document.getElementById('LetraP').innerHTML = "ASTERISCO";
Lee("asterisco o multiplicar");
return;
}

if (Letras == "/" ) 
{document.getElementById('LetraP').innerHTML = "DIVIDIR";
Lee("barra oblícua o dividir");
return;
}

if (Letras == "-" ) 
{document.getElementById('LetraP').innerHTML = "RESTA";
Lee("guión o resta");
return;
}

if (Letras == "+" ) 
{document.getElementById('LetraP').innerHTML = "SUMA";
Lee("suma");
return;
}

if (Letras == "!" ) 
{document.getElementById('LetraP').innerHTML = "CIERRA ADMIRACIÓN";
Lee("cierra admiración");
return;
}

if (Letras == "¡" ) 
{document.getElementById('LetraP').innerHTML = "ABRE ADMIRACIÓN";
Lee("abre admiración");
return;
}

if (Letras == "?" ) 
{document.getElementById('LetraP').innerHTML = "CIERRA INTERROGACIÓN";
Lee("cierra interrogación");
return;
}

if (Letras == "¿" ) 
{document.getElementById('LetraP').innerHTML = "ABRE INTERROGACIÓN";
Lee("abre interrogación");
return;
}

if (Letras == "@" ) 
{document.getElementById('LetraP').innerHTML = "ARROBA";
Lee("arroba");
return;
}

if (Letras == "$" ) 
{document.getElementById('LetraP').innerHTML = "SIGNO PESOS";
Lee("signo pesos");
return;
}

if (Letras == "%" ) 
{document.getElementById('LetraP').innerHTML = "PORCENTAGE";
Lee("porsentage");
return;
}

if (Letras == ")" ) 
{document.getElementById('LetraP').innerHTML = "CIERRA PARÉNTESIS";
Lee("cierra paréntesis");
return;
}

if (Letras == "(" ) 
{document.getElementById('LetraP').innerHTML = "ABRE PARÉNTESIS";
Lee("abre paréntesis");
return;
}

if (Letras == "=" ) 
{document.getElementById('LetraP').innerHTML = "IGUAL";
Lee("igual");
return;
}

if (Letras == "'" ) 
{document.getElementById('LetraP').innerHTML = "COMILLA SIMPLE";
Lee("comilla simple");
return;
}

if (Letras == "\"" ) 
{document.getElementById('LetraP').innerHTML = "COMILLA DOBLE";
Lee("comilla doble");
return;
}




if (Letras == "." ) 
{document.getElementById('LetraP').innerHTML = "PUNTO";
Lee("punto");
return;
}
if (Letras == "," ) 
{document.getElementById('LetraP').innerHTML = "COMA";
Lee("coma");
return;
}

if (Letras == ":" ) 
{document.getElementById('LetraP').innerHTML = "DOS PUNTOS";
Lee("dos puntos");
return;
}



if ($.isNumeric(Letras) == false)
{

  $('.Frutas').remove();
 Nvar = eval(Letras);
 Nvar = Nvar.toString();
 arrayN = Nvar.split(",");
//alert(event.keyCode);
 orden = orden +1; 

if(arrayN.length <= orden){ orden=0; }  
que = arrayN[orden].toString();

if (SonidosA[que] != undefined)
{
  $("#suena").css("visibility","visible")
}

else if (SonidosA[que] == undefined)
{
  $("#suena").css("visibility","hidden")
}

if (controlAudio == "con" ) {
 rutaAudio = "./../../ResB/"+arrayN[orden]+".mp3"; 
 audio.volume= 0.1;
 audio.src =  rutaAudio;
 audio.load(); 
 audio.play();  
}

document.getElementById("mimg").src ="./../../ResB/"+arrayN[orden]+".png";  
HablaAnim();
$(".label").css("visibility","hidden");


document.getElementById('LetraP').innerHTML = arrayN[orden];//.toUpperCase();
  $('#LetraP').css('opacity', '0');
  $("#LetraP").text( $('#LetraP').text())



$('#LetraP').animate(
{
opacity: '1'
}, 3000);

$('#LetraP').animate(
  {
  opacity: '1'
  }, 3000);


              
 //Si no hay imagen muestra imagen en blanco No.png
    document.getElementById('mimg').onerror = function() {
    document.getElementById('mimg').src = "./../../ResB//transparente.png";
     }
var Texto =  LetrasMin + ".  " + arrayN[orden].toString();

if(LetrasMin == "á" ) { Texto =  "a acentuada. " + arrayN[orden].toString(); }
if(LetrasMin == "é" ) { Texto =  "e acentuada. " + arrayN[orden].toString(); }
if(LetrasMin == "í" ) { Texto =  "i acentuada. " + arrayN[orden].toString(); }
if(LetrasMin == "ó" ) { Texto =  "o acentuada. " + arrayN[orden].toString(); }
if(LetrasMin == "ú" ) { Texto =  "u acentuada. " + arrayN[orden].toString(); }
if(LetrasMin == "y" ) { Texto =  "y griega. " + arrayN[orden].toString(); }




  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto); 

  msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
$(".label").html(Texto);
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.onend = function(event) {
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
  // msgNo.onboundary = function(event) { 
 
  // }   
			
  msgNo.onend = function(event) {
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio
EsperaAnim();

 
 // var playPromise =     
  // audio.play();

  if (playPromise !== undefined) {
    playPromise.then(_ => {
     
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
  



  }

 sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
 
} //fin de no el letra


  // audio.play();



}  //Fin Mostrar Letra




function Npulsado(event)
{
event.preventDefault();
var number = String.fromCharCode(event.which);

var keyCode = event.keyCode || event.which;

//blq num
var active = event.getModifierState('NumLock');

if (keyCode == 144)
{
if (active == false){Lee("teclado numérico no habilitado");return;}
if (active == true){Lee("teclado numérico habilitado");return;}
}

}

function  LeeDeletreo(texto)
{
HablaAnim();
TextoLargo[0] = texto;

//cortar en letras
indEs=0;
TextoLargo = texto.split("");

$(".label").html(TextoLargo[0]);
$('.label').css('fontSize','2vw'); 
$('.label').css('text-align','left');  
$('#label').css('text-align','left');   
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance($(".label").text());
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
	
 msgNo.onboundary = function(event) { 
    //event.charIndex el indice de la palabra que lee
  }	
  
 msgNo.onend = function(event) {
if (TextoLargo.length > 0)
 {
 indEs ++;
 LeeSiguienteDeletreo();
 }
else
{
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}

}
document.getElementById('EtiquetaDos').innerHTML =msgNo.text;
document.getElementById('EtiquetaUno').innerHTML =msgNo.text;   
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);    
} 

function LeeSiguienteDeletreo()
{
  $('.label').show();
HablaAnim();
$(".label").html(TextoLargo[indEs]);
$('.label').css('fontSize','2vw'); 
$('.label').css('text-align','left');  
$('#label').css('text-align','left');   
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance($(".label").text());
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

   
 msgNo.onend = function(event) {
if (TextoLargo.length > indEs )
 {


 indEs ++;

 if (TextoLargo.length == indEs )
 {
  Lee(Deletrear);
  return;
 }

 LeeSiguienteDeletreo();
 }

else
{
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
}
document.getElementById('EtiquetaDos').innerHTML =msgNo.text;
document.getElementById('EtiquetaUno').innerHTML =msgNo.text;
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);    
}


// function checkIfFileLoaded(fileName) {
//   $.get(fileName, function(data, textStatus) {
//       if (textStatus == "success") {
//           // execute a success code
//           //console.log("file loaded!");
//       }
//       else{//console.log("no")}
//   });
// }


function queHace()
{	
	
	//console.log(que + " " +  SonidosA[que] +      "Sonidooooooooooooooooooooooooooooooooooooooo");
	 if (SonidosA[que] != undefined)
       {
           
		Lee(SonidosA[que]);
		    
       }
}

function queHaceActual()
{
	let actual = $("#EtiquetaDos").text().toLocaleLowerCase();
	 if (SonidosA[actual] != undefined)
 {
   Lee(SonidosA[actual]);
 }
}
