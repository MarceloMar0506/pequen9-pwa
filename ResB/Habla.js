var habla =false;
var UsuarioActual;
var primeravez = true;
var Dice = "";
var TextoLargo = [];
var indEs = 0;
var number = 0;

var ssu = window.speechSynthesis;
var arrayMotores = [];
var arrayLnMotores = [];
var Veloz = 1;
var Motor;
var Tono = 0;
var Volumen = 1;
var Voz;
var controlAudio="con";
var movil = 0; //Variable que detectará si se usa un móvil Va a pasar a 1!!
var nueVoz = 0;

var synth = window.speechSynthesis;
var tts =  ssu.getVoices()//   speechSynthesis.getVoices(); 
  

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
let a = 0.2;
var ultimoDialogo = "";
var ultimoD = "";
 
function DeterminaMotor(mensaje)
{
tts =  ssu.getVoices(); 
Voz = localStorage.getItem("Voz");
controlAudio = localStorage.getItem("controlAudio");

if (controlAudio === null) {controlAudio = "con"}

//console.log("local???? "  +  controlAudio);
Veloz = localStorage.getItem("Veloz");
Tono = localStorage.getItem("Tono");
Volumen = localStorage.getItem("Volumen");



const container = document.querySelector("#pequenG");
const label = document.createElement("label");
label.textContent="";
label.id="labelCtrl";

container.appendChild(label);

if(controlAudio != "sin" && document.title != "Dactilografía" ){
  $("#labelCtrl").html("[ctrl] <br> Desactivar audio");
}else if(controlAudio == "sin"  && document.title != "Dactilografía"  && document.title != "¿Qué Es?" && document.title != "Juego de Pares" ){ 
  $("#labelCtrl").html("[ctrl] <br> Activar audio");
}




if (Veloz === null) {Veloz = 1}
if (Tono === null){Tono = 1}
if (Volumen === null){Volumen = 1}
if (controlAudio == "sin" && document.title != "¿Qué Es?" && document.title != "Juego de Pares") {Volumen = 0}

if (Voz === null){ 
  //console.log("Entró en when " +  Veloz + " Tono " + Tono + " Voz Nulll " + Voz  );
  $.when(verQueVoz()).then(LeeCGB(mensaje)); 
}else{
  //console.log("Motor solucionado " +  Veloz + " Tono " + Tono + " Voz No es Null es " + Voz + " titulo " +  document.title  );
  sayTimeout = setTimeout(function () { LeeCGB(mensaje);}, 500); 
  
}
}




var Nusuario = "";
$(window).keydown(function(event) 
{

  //console.log(event.keyCode)
  if(event.keyCode == 17)
  {
    if (document.title == "Dactilografía"){return}
    if (document.title == "¿Qué Es?"){return}
    if (document.title == "Juego de Pares"){return}

    console.log(controlAudio + "controlAudioooooooooooo")
    if (controlAudio == "con"){
      localStorage.setItem("controlAudio","sin");
      controlAudio="sin"
      Lee("se desactivó el audio");
      Volumen = 0;
      $("#labelCtrl").html("[ctrl] <br> Activar audio");
    }else if (controlAudio != "con"){
      localStorage.setItem("controlAudio","con");
      $("#labelCtrl").html("[ctrl] <br> Desactivar audio");
      controlAudio="con"
      Volumen = localStorage.getItem("Volumen");
      Lee("se activó el audio");
    }
     
  }


  if(event.keyCode != 32)
  {
    localStorage.setItem("Pulsador","false"); 
  }
  
 if(event.keyCode != 123 && event.keyCode != 116  && event.keyCode != 117  && event.keyCode != 70  ){ 
   event.preventDefault();
 }
  
  if(event.keyCode == 112)
  {
   return false;
  }


  //f2 
  if(event.keyCode == 113  )
  {
  Velocidad();
  }

 //f3 o F Voz
 if(event.keyCode == 114  ) 
 {
  MotoresConfig();
 }

 //f4 Tono
 if(event.keyCode == 115  ) 
 {
 TonoConfig();
 }

  //f8 Volumen
  if(event.keyCode == 119  ) 
  {
   VolumenV();
  }
 
  
  });

function Velocidad(){
  Veloz =parseFloat(Veloz) + parseFloat(a);
  if (Veloz > 2){    
    Veloz = 0;
  }
  //console.log(Veloz);
  var diceV = Veloz.toFixed(1).toString();
  diceV = diceV.replace(".",",");
    Lee("velocidad de voz " + diceV );    
  localStorage.setItem("Veloz",Veloz);
}  
function TonoConfig(){
  Tono++;
  if (Tono== 3 ){
   Tono = 0;
   }
  Lee("Tono de voz personal");   
 localStorage.setItem("Tono",Tono);
 
}

function VolumenV(){
  Volumen =parseFloat(Volumen) + parseFloat(a);
  


  if (Volumen > 1 ){

    Volumen = 0.2;
  Lee("Volumen mínimo" );   
  localStorage.setItem("Volumen",Volumen);  
   return;
   }
  
   var diceV = Volumen.toFixed(1).toString();
   diceV = diceV.replace(".",",");
  
   console.log(Volumen + " que volumen?? " + diceV)

   if (diceV == "1,0"){
    Lee("Volumen de voz máximo");   
   }else if (diceV == "0,8"){
    Lee("Volumen de voz 80%");   
   }else if (diceV == "0,6"){
    Lee("Volumen de voz 60%");   
   }
   else if (diceV == "0,4"){
    Lee("Volumen de voz 40%");   
   }
   else{
    Lee("Volumen de voz " + diceV );   
   }
   
   
   localStorage.setItem("Volumen",Volumen);
  
 
}



function MotoresConfig(){
  verMotores();
  nueVoz++;  
  console.log("nueVoz " + nueVoz.toString());
  if (nueVoz > arrayLnMotores.length -1 ){
   nueVoz =0;
   }
 
   var ssu = window.speechSynthesis;
   tts =  ssu.getVoices();
   tts = speechSynthesis.getVoices();  
   Voz =  arrayLnMotores[nueVoz];
   console.log("numero de voz " +  Voz + " " + nueVoz + " de " + arrayLnMotores.length  );

  Lee("Nueva voz " + tts[Voz].name); 

  localStorage.setItem("Voz",Voz);
}

 
function verMotores(){ 

var  langB = "es";
var ssu = window.speechSynthesis;
var ssu = new SpeechSynthesisUtterance(); 
var tts = speechSynthesis.getVoices(); 

var textnode = "";
var contadorEsp = 0;
   
    for (var i = 0; i < tts.length -1; i++) 
       {
          var langTTs = tts[i].lang;
          langTTs = langTTs.toString().substring(0,2);       
      if (langTTs == langB && !tts[i].name.includes("Online")) { 
        //console.log( tts[i].lang + "  " + i + " Motor  " + tts[i].name);
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
   
 }
  

function verQueVoz(){ 

 var  langB = "es";
var ssu = window.speechSynthesis;
var ssu = new SpeechSynthesisUtterance(); 
var tts = speechSynthesis.getVoices();   
var textnode = "";
var contadorEsp = 0;

  for (var i = 0; i < tts.length -1; i++) 
  {
     var langTTs = tts[i].lang;
     langTTs = langTTs.toString().substring(0,2);  
 
 if (langTTs == langB && !tts[i].name.includes("Online")) { 
   //console.log( tts[i].lang + "  " + i + " Motor  " + tts[i].name);
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
 Voz =  arrayLnMotores[0];
 //console.log("en ver que voz " +  Veloz + " Tono " + Tono + " Voz " + Voz  );
 localStorage.setItem("Voz",Voz);
}


function Lee(texto, callback)
{ 
 if (typeof texto !== "string") {
        console.warn("Lee(): texto inválido →", texto);
        texto = "";
    }

indEs=10000;
$(".label").html(texto);
$(".label").css("visibility","visible");
$(".label").css('display','block');

if (texto == ""){
  $(".label").css("visibility","hidden");  
  return;
}
$(".label").html(texto);
if (texto.includes("<br>")){texto = texto.replace(/<br>/g," ")}
if (texto.includes("<br/>")){texto = texto.replace(/<br\/>/g," ")}

texto  = texto.replace(/QWERTY/g,"cuérti");
texto  = texto.replace(/escape/g,"escápe");

window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate=Veloz;
msgNo.pitch = Tono;
msgNo.volume = Volumen;

msgNo.onstart = function (event) {
  t = event.timeStamp;
  habla=true;
};
msgNo.onend = function (event) {
  t = event.timeStamp - t;
  EsperaAnim();
  habla=false;
  primerEnter =false;
  if (typeof callback === "function") callback(); // ← agregado
};
	
window.speechSynthesis.speak(msgNo);
HablaAnim();
}


function LeeCGB(texto)
{
// console.log(texto);  
ultimoD=ultimoDialogo;  
ultimoDialogo = texto; 
window.speechSynthesis.cancel();
TextoLargo[0] = texto;
indEs=0;
TextoLargo = texto.split(". ");
habla=true;


$(".label").html(TextoLargo[0]);
$('.label').css('text-align','left');  
$('#label').css('text-align','left'); 

if (document.title != "Pequén Cocina" ){ 
   $(".label").css("visibility","visible");
}

var frase=  TextoLargo[0];
frase  = frase.replace(/QWERTY/g,"cuérti");
frase  = frase.replace(/escape/g,"escápe");

frase  = frase.replace(/ESCAPE/g,"escápe");

//console.log(frase + "  [0]  ");
frase  = frase.replace(/brioche/g,"brió chée");
frase  = frase.replace(/BRIOCHE/g,"brió chée");

if (frase == "t"){ 
 frase  = frase.replace(/t/g,"Tée");
}


//console.log(frase + "  [1]  ");

msgNo = new SpeechSynthesisUtterance(frase);
msgNo.voice = speechSynthesis.getVoices()[Voz]; 
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.volume = Volumen;

msgNo.onend = function(event) {
 //var amISpeaking = speechSynthesis.speaking; 
 habla=false;
 EsperaAnim(); 
if (TextoLargo.length > 0)
 {
 indEs ++;
 
 LeeSiguiente();
 return;
 }

//$("#pequen").attr("src","Peque.png");
}  

window.speechSynthesis.speak(msgNo);
HablaAnim();




} 

function LeeSiguiente()
{

  HablaAnim();
if (TextoLargo[indEs] == undefined){
  EsperaAnim();
  Lee("")
  return }
habla=true;
//console.log(TextoLargo[indEs]+"  Ultimo D e"  + ultimoDialogo + " " + document.title );
//
//console.log(TextoLargo[indEs] + " 22222 ");   

$(".label").html(TextoLargo[indEs]);
//$('.label').css('fontSize','2vw'); 
$('.label').css('text-align','left');  
$('.label').css('text-align','left'); 
if (document.title == "Información sobre Pequén"){
//console.log(TextoLargo[indEs]);
if (TextoLargo[indEs].indexOf("En los dispositivos móviles y tabletas") > -1 ){
  $(".AyudaV").css("display","block"); 
  $("#imgAyudaFJ").css("display","block");
  $("#imgAyudaCN").css("display","none");
  $("#imgAyudaPZ").css("display","none"); 
  //$(".imgAyudaFJ").show();
  //console.log( " F y J 2 A virtual")   
}else if (TextoLargo[indEs].indexOf("Dichas teclas corresponden") > -1 ){ 
  $(".AyudaV").css("display","block");
  $("#imgAyudaCN").css("display","block");
  $("#imgAyudaPZ").css("display","none"); 
  $("#imgAyudaFJ").css("display","none");
  //console.log(" Dichas teclas corresponden")  
}else if (TextoLargo[indEs].indexOf("sector derecho") > -1 ){ 
  $(".AyudaV").css("display","block");
  $("#imgAyudaCN").css("display","none");
  $("#imgAyudaFJ").css("display","none");
  $("#imgAyudaPZ").css("display","block");
  //console.log("sector derecho");
}else if (TextoLargo[indEs].indexOf("teclado qwerty accesorio") > 0 ){ 
  $(".AyudaV").css("display","block");
  $("#imgAyudaCN").css("display","none");
  $("#imgAyudaFJ").css("display","none");
  $("#imgAyudaPZ").css("display","none");
  $("#imgTactil").css("display","block");
  //console.log("teclado qwerty accesorio");
}
else if (TextoLargo[indEs].indexOf("finDA") > -1 ){ 
  //console.log("finda"); 
  // $(".AyudaV").css("display","block");  
  $("#imgTactil").css("display","none");
  $("#imgAyudaPZ").css("display","none");
  $("#imgAyudaCN").css("display","none");
  $("#imgAyudaFJ").css("display","none");
  $(".label").html('');
  $(".label").css("visibility","hidden");
  $(".AyudaV").css("display","none"); 
  //console.log("finda 1 ");
  
  return; 
  // 
 }
 else if (TextoLargo[indEs].indexOf("Todas las pantalla tienen") > -1 ){ 
  $("#imgTactil").css("display","none");
  $("#imgAyudaPZ").css("display","none");
  $("#imgAyudaCN").css("display","none");
  $("#imgAyudaFJ").css("display","none");
  $(".AyudaV").css("display","none");
 }
 

}
else{
  if (TextoLargo[indEs].indexOf("finDA") > -1 ){ 
    $("#imgTactil").css("display","none");
    $("#imgAyudaPZ").css("display","none");
    $("#imgAyudaCN").css("display","none");
    $("#imgAyudaFJ").css("display","none");
    $(".label").html('');
    $(".label").css("visibility","hidden");
    $(".AyudaV").css("display","none");     
    return; 
 }
}
////console.log(TextoLargo[indEs] +  " es finda "+  TextoLargo[indEs].indexOf("finDA"));
var frase=  $(".label").text();
frase  = frase.replace(/QWERTY/g,"cuérti");
frase  = frase.replace(/brioche/g,"brióche");

frase  = frase.replace(/escape/g,"escápe");
frase  = frase.replace(/ESCAPE/g,"escápe");

if (frase == "t"){ 
  frase  = frase.replace(/t/g,"Tée");
 }
//console.log("/" + frase + "/leegb Sig  ");
msgNo = new SpeechSynthesisUtterance(frase);
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.volume = Volumen;
	
 msgNo.onboundary = function(event) { 
  habla = true;
 // console.log("Está hablando " + habla);
  EsperaAnim();
    //event.charIndex el indice de la palabra que lee
  }	
  
 msgNo.onend = function(event) {
  habla=false;
  EsperaAnim();
   

if (TextoLargo.length > indEs )
 {
 indEs ++;
 
 LeeSiguiente();
 }
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
//HablaAnim();

//sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
//msgNo.rate =10;	

window.speechSynthesis.speak(msgNo);  




}





function ColorGloboNo()
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



function QueColorNo()
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
     // alert('Touch Device'); //your logic for touch device
     movil = 1;
     //console.log(movil);
  }
  else {
      //alert('Not a Touch Device'); //your logic for non touch device
      movil = 0;
      //console.log(movil);
  }

  function LeeCGBD(texto)
  { 

  window.speechSynthesis.cancel();
  TextoLargo[0] = texto;
  indEs=0;
  TextoLargo = texto.split(". ");
  $(".label").html(TextoLargo[0]);
  $('.label').css('text-align','left');  
  $('#label').css('text-align','left'); 
  $(".label").css("visibility","visible");
 //Veloz =10;
const  msgNo = new SpeechSynthesisUtterance(TextoLargo[0]);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.rate = Veloz;	
  msgNo.pitch = Tono;
  msgNo.volume = Volumen;

  msgNo.onboundary = function(event) { 
    }	
   msgNo.onend = function(event) {
   var amISpeaking = speechSynthesis.speaking; 
  if (TextoLargo.length > 0)
   {
   indEs ++;
   LeeSiguienteD();
   return;
   }
  EsperaAnim();
  }

  var texto = $(".label").text();
  if (texto.includes("'Y")){
    texto = texto.replace("'Y'","i griega")
  }  
  

  window.speechSynthesis.speak(msgNo);
  HablaAnim();
  
  } 
  
  function LeeSiguienteD()
  {
 // if (TextoLargo[indEs] == undefined){return}
  
  $(".label").html(TextoLargo[indEs]);  
  $('.label').css('text-align','left');  
  $('#label').css('text-align','left'); 
 var texto = $(".label").text();
 if (texto.includes("'Y")){
   texto = texto.replace("'Y'","i griega")
 } 
 
 texto  = texto.replace(/QWERTY/g," cuérti ");
 texto  = texto.replace(/escape/g,"escápe");

 const msgNo = new SpeechSynthesisUtterance(texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  //msgNo.rate =10;	
  msgNo.pitch = Tono;
  msgNo.volume = Volumen;
    
   msgNo.onend = function(event) {
    
    indEs ++;

    if (TextoLargo[indEs] != undefined)
    {    
    LeeSiguienteD();
    }
    else{
    EsperaAnim();
    Dictar();
   }
  }
  HablaAnim();
  window.speechSynthesis.speak(msgNo);    
  }
  
  function NoecladoQ()
  {
   (function(document, tag) {
     var scriptTag = document.createElement(tag), // create a script tag
         firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
     scriptTag.src = './../../F1/Generales.js'; // set the source of the script to your script
     firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
 }(document, 'script'));
  }


  function LeeSinGB(texto)
  { 

  window.speechSynthesis.cancel();
  TextoLargo[0] = texto;
  indEs=0;
  TextoLargo = texto.split(". ");
  $(".label").html(TextoLargo[0]);
  $('.label').css('text-align','left');  
  $('#label').css('text-align','left'); 
  $(".label").css("visibility","hidden");
 
const  msgNo = new SpeechSynthesisUtterance(TextoLargo[0]);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.rate = Veloz;	
  msgNo.pitch = Tono;
  msgNo.volume = Volumen;

  msgNo.onboundary = function(event) { 
    }	
   msgNo.onend = function(event) {
   var amISpeaking = speechSynthesis.speaking; 
  if (TextoLargo.length > 0)
   {
   indEs ++;
   LeeSiguienteDS();
   return;
   }
  EsperaAnim();
  }
  window.speechSynthesis.speak(msgNo);
  HablaAnim();
  
  } 
  
  function LeeSiguienteDS()
  {
  
  $(".label").html(TextoLargo[indEs]);  
  $('.label').css('text-align','left');  
  $('#label').css('text-align','left'); 
 var texto = $(".label").text();
 if (texto.includes("'Y")){
   texto = texto.replace("'Y'","i griega")
 }  
 const msgNo = new SpeechSynthesisUtterance(texto);
 msgNo.voice = speechSynthesis.getVoices()[Voz];
 msgNo.rate = Veloz;	
 msgNo.pitch = Tono;
 msgNo.volume = Volumen;
    
   msgNo.onend = function(event) {
    
    indEs ++;

    if (TextoLargo[indEs] != undefined)
    {    
    LeeSiguienteD();
    }
    else{
    EsperaAnim(); 
   }
  }
  HablaAnim();
  window.speechSynthesis.speak(msgNo);    
  }


 