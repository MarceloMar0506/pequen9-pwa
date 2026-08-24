var audio = document.createElement('audio');
var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento=false;
var LetraInicial;
var msgNo ="";


function DictaSonido()
{ 
  var miVar2 = setTimeout(function(){ 
  if (estado =="completo")
    {estado = "nueva"}
  else if (estado =="nueva")
    {return}
  indiceS = 1;
  //console.log(indiceS  + " dicta " + posL + " " + SonidoQ.length);
if ( posL == SonidoQ.length)
{

  LeeT(Gres.FinActividad);
  return;
}

LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
//console.log(LetraInicial+ " " + posL)
if (posL == 0)
{
 var texto = Gres.ArmaPalabra0;
}
else if (posL > 0)
{
 var texto = "¡" + Gres.MuyBien + "! '" + SonidoQ[posL - 1]  + "' ahora hay que " + Gres.ArmaPalabra1;
}


$(".label").html(texto);
//$(".label").css({"height":"100%","max-width":"80%","box-sizing":"inherit","padding":"3vh","padding-bottom":"16vh"});
$(".label").css('display','block');
$(".label").css('visibility','visible');
window.speechSynthesis.cancel();

msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
//alert(Veloz + " Despues de Uno  " + Tono);
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
EsperaAnimHide();
$("#mimg").attr("src","../../ResB/imgsnd/" + SonidoQ[posL]+ ".png"); 
$("#grillaTapa").css("width",$("#mimg").css("width"));
$("#grillaTapa").css("left",$("#mimg").css("left"));
$("#A1").text('');
$("#A2").text('');
$("#A3").text('');
$("#A4").text('');

var palabra = SonidoQ[posL];
var arraypalabra = palabra.split('');

var rString = shuffle([1,2,3,4])

for (let index = 0; index < palabra.length; index++) {
  letra = palabra.substr(index,1).toLocaleUpperCase();
   $("#A" + parseInt(index+1)).data('id', letra); 
   $("#L" + rString[index]).data('id', letra);
   $("#L" + rString[index]).text(letra);
   $("#A" + parseInt(index+1)).css('visibility','visible');
   $("#A" + parseInt(index+1)).text('_');
}

desordenado[0] = $("#L1").text();
desordenado[1] = $("#L2").text();
desordenado[2] = $("#L3").text();
desordenado[3] = $("#L4").text();

cuantas = palabra.length;
letra = palabra.substring(0,1);
indiceLetra = 0;

//recorrer desordenado para encontrar la letra
for (let index = 0; index < desordenado.length; index++) {
if(desordenado[index] == letra.toUpperCase()){
 indiceLetra = index;
}  
}


$("#L1").draggable({revert:  true});
$("#L2").draggable({revert:  true});
$("#L3").draggable({revert:  true});
$("#L4").draggable({revert:  true});
// $("#L5").draggable({revert:  true});
// $("#L6").draggable({revert:  true});

var pl = $("#L"+  (indiceLetra + 1) );
var offsetL = pl.offset();
var OfL = offsetL.left;

var G2 = $("#L4");
var offsetL = G2.offset();
var GL = offsetL.left;

if (OfL == GL)
{
  posH = cuantas+1;
}
else {posH = 0}

$("#Palabra").css('grid-template-columns','repeat('+cuantas +',1fr');
$("#grillaTapa").css('grid-template-columns','repeat('+cuantas +',1fr');
$("#grillaTapa div").css('opacity', '0.95');

$("#grillaTapa div").css('visibility','hidden');
for (let index = 1; index < 5; index++) {
  $("#cut" + index).css('visibility','visible');
  $("#cut" + index).css('opacity','0.95');
  $("#L" + index).css('visibility','visible');
  $("#L" + index).css('left','initial');
  $("#L" + index).css('top','initial'); 
}

//Sonido
LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
rutaAudio = "../../ResB/imgsnd/"+ SonidoQ[posL] +".mp3"; 
posL++

document.getElementById('myAudio').src =rutaAudio;
document.getElementById('myAudio').play();

pulsada =false;

}
//$(".label").css({"top": "2%","margin-left":"10%","height":"13vh","width":"80%"});
window.speechSynthesis.speak(msgNo);

}, 100); 

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function LeeL(texto)
{ 
indEs=10000;
$(".label").html('');
$(".label").css("visibility","hidden");
// $(".label").html(texto);
// $(".label").css("visibility","visible");
////console.log(texto);
if (texto == ""){
  //console.log("retornaL" + texto + "<") 
  $(".label").css("visibility","hidden");
  return;
}
//$(".label").css({"top":"auto","bottom": "3vh","margin-left":"10%","height":"1vh","width":"auto","padding-bottom":"11vh"});

// $(".label").css('display','block');
// $(".label").css('visibility','visible');
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance( texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
//$(".label").html(texto);
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) { 
EsperaAnim();
primerEnter =false;
}
HablaAnim();
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
} 
function LeeT(texto)
{ 
indEs=10000;
$(".label").html(texto);
//$(".label").css({"height":"10%","max-width":"80%","box-sizing":"inherit","padding":"3vh","padding-bottom":"6vh"});
$(".label").css("visibility","visible");
////console.log(texto);
if (texto == ""){ 
  //console.log("retorna" + texto + "<")
  $(".label").css("visibility","hidden");
  return;
}
// $(".label").css({"top": "2%","margin-left":"10%","height":"13vh","width":"80%"});
//$(".label").css({"top": "2%","margin-left":"10%","max-height":"13vh","max-width":"80%"});

// $(".label").css('display','block');
// $(".label").css('visibility','visible');
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
//$(".label").html(texto);
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) { 
EsperaAnim();
primerEnter =false;
}
HablaAnim();
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
} 
