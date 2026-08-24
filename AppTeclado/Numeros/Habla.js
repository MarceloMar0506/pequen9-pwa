var UsuarioActual;
var primeravez = true;
var Dice = "";
var TextoLargo = [];
var indEs = 0;
var number = 0;


var ssu = window.speechSynthesis;
var arrayMotores = [];
var arrayLnMotores = [];
var Veloz =1;
var Motor;
var Tono = 1;
var Voz =0;
var movil = 0; //Variable que detectará si se usa un móvil Va a pasar a 1!!


//resaltar texto al hablar
var wordIndex = 0;
var global_words = [];

var LeeAyuda = "no";
var Nnumero = "";
var NUsuario = "";
var IndiceUsuario;
var iL = 0;
var todos = "";
var nomUs = "";
var cargadaBd = false;
var termino = "no";
 
function DeterminaMotor()
{ 
var ln = x=window.navigator.language||navigator.browserLanguage;
ln = ln.toString().substring(0,2);
langB = ln;

isTouchDevice();
var ssu = window.speechSynthesis;
var ssu = new SpeechSynthesisUtterance(); 
tts = speechSynthesis.getVoices();   
var textnode = "";
var contadorEsp = 0;
   
    for (var i = 0; i < tts.length -1; i++) 
       {
          var langTTs = tts[i].lang;
          langTTs = langTTs.toString().substring(0,2);         
      if (langTTs == langB) { 
      	  var node = document.createElement("LI");
       		textnode = document.createTextNode(i+ '/' + tts[i].name);
       		arrayMotores[contadorEsp]=i +";"+tts[i].name;
       		arrayLnMotores[contadorEsp]=i;
       		contadorEsp++;
			    node.appendChild(textnode);
			    ssu.voice = tts[i];
          ssu.lang =  tts[i].lang; 
       }
      }  
   ////console.log(langB + arrayLnMotores[0]);   
Voz =  arrayLnMotores[0];//El primero
////console.log(Voz + " voz " + tts[Voz].name );
MotorActual = Voz;
Tono = "1";
Veloz = "1";
indiceColor = "0";

// var espa = tts[Voz].name.includes("español");
// var Span = tts[Voz].name.includes("Spanish");

 
// if (espa === false && Span === false){
//   window.open("/ResB/OtroIdioma.html","_self");
// }


}



var Nusuario = "";
//var amISpeaking;// = synth.speaking; // will return true if utterance 1 or utterance 
$(window).keydown(function(event) 
{   
  if(event.keyCode == 112)
  {
   return false;
  }
  
  });


  function LeeSonido()
  { 
    $(".label").css('display','block');
    $(".label").css('visibility','visible');
    aud.pause();
    //console.log("dicebien");
    //Dice Bien y llama a DictaSonido cuando termina
    
    //if ( Dice == "muy bien '" +  LetraInicial + "'. " + SonidoQ[posL-1]+"." ){return}
    window.speechSynthesis.cancel();
    Dice = "muy bien '" +  LetraInicial + "', " + SonidoQ[posL-1]+"." ;
    $(".label").html(Dice);
    $(".label").css("visibility","visible");

  $(".label").html(Dice);
  $(".label").css("visibility","visible");
  ////console.log(texto);
  if (Dice == ""){ 
    $(".label").css("visibility","hidden");
    return;
  }
  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Dice);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
 
  $(".label").html(Dice);
  msgNo.rate =Veloz;	
  msgNo.pitch = Tono;
  
  msgNo.onend = function(event) { 
    EsperaAnimHide();
    //console.log(pulsada + " antes de dictaSonido");
    DictaSonido();
  EsperaAnim();
  primerEnter =false;
  }
  HablaAnim();
  sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
  } 

function Lee(texto)
{ 
indEs=10000;
$(".label").html(texto);

$(".label").css("visibility","visible");
////console.log(texto);
if (texto == ""){ 
  $(".label").css("visibility","hidden");
  return;
}
$(".label").css('display','block');
$(".label").css('visibility','visible');

window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance( texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
$(".label").html(texto);
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) { 
EsperaAnim();
primerEnter =false;
}
HablaAnim();
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
} 



function LeeCGB(texto)
{ 
  window.speechSynthesis.cancel();
  TextoLargo[0] = texto;
  indEs=0;
  TextoLargo = texto.split(". ");

$(".label").html(TextoLargo[0]);
$('.label').css('text-align','left');  
$('#label').css('text-align','left'); 
$(".label").css("visibility","visible");
$(".label").css('display','block');
$(".label").css('visibility','visible');

msgNo = new SpeechSynthesisUtterance(TextoLargo[0]);
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate = Veloz;	
msgNo.pitch = Tono;
 msgNo.onboundary = function(event) { 
 }	
  
 msgNo.onend = function(event) {
 var amISpeaking = speechSynthesis.speaking; 
if (TextoLargo.length > 0)
 {
 indEs ++;
 LeeSiguiente();
 return;
 }
EsperaAnim();
}
window.speechSynthesis.speak(msgNo);
HablaAnim();
} 

function LeeSiguiente()
{
if (TextoLargo[indEs] == undefined){return}

$(".label").html(TextoLargo[indEs]);
$('.label').css('text-align','left');  
$('#label').css('text-align','left'); 
if (document.title == "Ayuda"){
//console.log(TextoLargo[indEs]);
if (TextoLargo[indEs].indexOf("referencia para la ubicación") > 0 ){ 
  $(".imgA").css("display","none");
  $("#imgAyudaFJ").css("display","block");   
  //console.log("2 A virtual")   
}else if (TextoLargo[indEs].indexOf("un teclado Qwerty") > 0 ){ 
  $(".AyudaV").css("display","block");
  $(".imgA").css("display","none");
  $("#imgAyudaCN").css("display","block");
  //console.log(" 1 A puntos braille")  
}else if (TextoLargo[indEs].indexOf("mediante su teclado numérico") > 0 ){ 
  $(".AyudaV").css("display","block");
  $(".imgA").css("display","none");  
  $("#imgAyudaPZ").css("display","block");
}else if (TextoLargo[indEs].indexOf("al cual se le adicionaron") > 0 ){ 
  $(".AyudaV").css("display","block");
  $(".imgA").css("display","none");
  $("#imgTactil").css("display","block");
}
else if (TextoLargo[indEs].indexOf("finDA") > -1 ){  
  $(".label").html('');
  $(".label").css("visibility","hidden");
  $(".AyudaV").css("display","none");  
  return;   
 }
}
else{
  if (TextoLargo[indEs].indexOf("finDA") > -1 ){ 
    return; 
 }
}

msgNo = new SpeechSynthesisUtterance($(".label").text());
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.onboundary = function(event) { 
  }	
  
msgNo.onend = function(event) {
if (TextoLargo.length > indEs )
 {
 indEs ++;
 LeeSiguiente();
 }
EsperaAnim();
}
HablaAnim();
window.speechSynthesis.speak(msgNo);    
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
    function isTouchDevice(){
      return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  }
  
  if(isTouchDevice()===true) {
     movil = 1;
     //console.log(movil);
  }
  else {
      movil = 0;      
  }

 