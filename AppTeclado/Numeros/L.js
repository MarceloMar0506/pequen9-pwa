var audio = document.createElement('audio');
var count = 0;
audio.addEventListener("timeupdate", function() { 
//console.log(count+ " <= " +  Valor)
  if (audio.currentTime > 0.25){
    if(count <= Valor -2){
      count++;      
      //console.log(count+ " pasa <= " +  Valor)
     

      mN= count+1;
      $("#EtiquetaDos").text(mN.toString())
      $("#EtiquetaUno").text(mN.toString())
      if (controlAudio == "con" ) {
      rutaAudio = "./../../ResB/" + mN + ".mp3";
      audio.src =  rutaAudio;
      audio.volume= 0.2;
      audio.load();
      audio.play();
      }

$("#mimg").before('<img class="zoomIn" id=M' + count.toString() +  ' src="./../../ResB/nota.png" alt="nota">');
if (Valor > 6){
  $(".zoomIn").css("width","20vh");
  $(".zoomIn").css("height","20vh");  
}

  }
 
    
  };

});


var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento="false";
var NValor=1;
var que;
var resultado ="";

function MostrarLetra(TextoE) {
  ////console.log(TextoE);
  if ($.isNumeric(TextoE) == false){
    Lee("pulsar un número");
    return
  }
  window.speechSynthesis.cancel();
  $("#Numero").css("display","block");
  $("#mimg").css("display","none");
  $("#mimg").css({'width':'0%'});
  $("#mimg").css({'height':'0%'});
  $('.zoomIn').remove();
valor=0;
Valor = parseInt(TextoE);
NValor=Valor;
var tipo=(Valor%2)? "impar" : "par";
var uni = MostrarUnidades(TextoE);
resultado = resultado + TextoE;

var numero = numberWithCommas(resultado);

$("#cifra").text(numero);

$("#Numero").text(TextoE);
$("#EtiquetaUno").text(uni);
$("#EtiquetaDos").text(uni);


var Texto =  TextoE + " " ;
HablaAnim();
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

}
 sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 

}  //Fin Mostrar Letra

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function NumeroS(Valor)
{
  //console.log("a" + Valor + "function NumerosS");
  if (Valor === 0){return}
  else if (Valor === null){return}
  else if (Valor === ''){return}
  else if (Valor === " "){return}
  else{
	//sonido por cada numero	
  $('.zoomIn').remove();
  $("#Numero").css("display","none");
  $("#mimg").css("display","block");
var count =0;
var mN = 1;
if (controlAudio == "con" ) {
rutaAudio = "./../../ResB/1.mp3"; 
audio.src =  rutaAudio;
audio.volume= 0.2;
audio.load();
audio.play();
}

//if (Valor > 2 ){NValor = Valor / 2.2}
if (Valor > 3 ){NValor = Valor / 1.8}  
//console.log( Valor+ "sss");


if (Valor > 6){
  $(".zoomIn").css("width","20vh");
  $(".zoomIn").css("height","20vh");  
}
$("#mimg").before('<img class="zoomIn" id=M' + count.toString() + ' src="./../../ResB/nota.png" alt="nota">');


$("#EtiquetaDos").text("1");
$("#EtiquetaUno").text("1");
}
}

function MostrarUnidades(numero)
   {  
        if (numero == "0" ) {return "CERO"};
        if (numero == "1" ) { return "UNO"};
        if (numero == "2" ) { return "DOS"};
        if (numero == "3" ) { return "TRES"};
        if (numero == "4" ) { return "CUATRO"};
        if (numero == "5" ) { return "CINCO"};
        if (numero == "6" ) { return "SEIS"};
        if (numero == "7" ) { return "SIETE"};
        if (numero == "8" ) { return "OCHO"};
        if (numero == "9" ) { return "NUEVE"};
      // return "";
}


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
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.volume=Volumen;
	
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

function numberFormat(_number, _sep) {
  _number = typeof _number != "undefined" && _number > 0 ? _number : "";
  _number = _number.replace(new RegExp("^(\\d{" + (_number.length%3? _number.length%3:0) + "})(\\d{3})", "g"), "$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim();
  if(typeof _sep != "undefined" && _sep != " ") {
      _number = _number.replace(/\s/g, _sep);
  }
  return _number;
}

