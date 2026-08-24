var desempenio = "";
      
var  acentoPulsado = false;
var TextoF = "";
var posL = 0;
var ultimotexto = "";
var Tex = "";
var Nvoz = 0;
var vozselec=[];
var Deletrear = "";
var NLetra="";
var ANLetra = [];
var Qe = [];
var error=0;
var ld = "";
var miVar2;
var miVar3;
var Tpulsada="";

   
function Enfocar()
{
 $(".CTexto").focus(); 
}

function Limpiar()
{  
  $('.CTexto').focus();
  $('.CTexto').val('');
}  
 
 
/* //Evitar eco del teclado
function validar(e,txt) { 
  tecla = (document.all) ? e.keyCode : e.which;
  tecla = String.fromCharCode(tecla);  
  //console.log(tecla);
  return (txt.indexOf(tecla)==-1);
}
*/
$(window).keydown(function(event) 
{ 
//Acento agudo
 if(event.keyCode == 222)
 {
  event.preventDefault();
  acentoPulsado = true;
  window.speechSynthesis.cancel();
  if (LLetras[posL]  == "Á")
      { Dice = "Acento! pulsar la letra a"; }
  if (LLetras[posL]  == "É")
      { Dice = "Acento! pulsar la letra e"; }
  if (LLetras[posL]  == "Í")
      { Dice = "Acento! pulsar la letra i"; }
  if (LLetras[posL]  == "Ó")
      { Dice = "Acento! pulsar la letra o"; }
  if (LLetras[posL]  == "Ú")
      { Dice = "Acento! pulsar la letra u"; }
      HablaAnim();
  msgNo = new SpeechSynthesisUtterance(Dice);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
   wordIndex=2;
$(".label").html(Dice);
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.onend = function(event) {
EsperaAnim();
//$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
    
  }   
  HablaAnim();
  //window.speechSynthesis.speak(msgNo);
  sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
  $(".CTexto").focus();
  acento=true;
  return;
  }
}
);


$(window).keyup(function(event) 
{ 
    if(event.keyCode == 32 || event.keyCode == 38)
      {
      Dice =Gres.Pulsar + ". "  +   LLetras[posL]  +  ". " + Object.values(eval( LLetras[posL]))[2]; 
     
if (LLetras[posL].toUpperCase() != "Á" && LLetras[posL].toUpperCase() != "É" && LLetras[posL].toUpperCase() != "Í" && LLetras[posL].toUpperCase() != "Ó" && LLetras[posL].toUpperCase() != "Ú" )
{
Dice =Gres.Pulsar + ". "  +   LLetras[posL]  +  ". " + Object.values(eval( LLetras[posL]))[2];
}

if (LLetras[posL].toUpperCase() == "Á")
{ 
Dice =Gres.Pulsar + ". a acentuada. " + Object.values(eval( LLetras[posL]))[2];
}

if (LLetras[posL].toUpperCase() == "É" )
{ 
Dice =Gres.Pulsar + ". e acentuada.<br/> " + Object.values(eval( LLetras[posL]))[2];
}
if (LLetras[posL].toUpperCase() == "Í" )
{ 
Dice =Gres.Pulsar + ". i acentuada.<br/>" + Object.values(eval( LLetras[posL]))[2];
}
if (LLetras[posL].toUpperCase() == "Ó" )
{ 
Dice =Gres.Pulsar + ". o acentuada.<br/> " + Object.values(eval( LLetras[posL]))[2];
}
if (LLetras[posL].toUpperCase() == "Ú" )
{ 
Dice =Gres.Pulsar + ". u acentuada.<br/> " + Object.values(eval( LLetras[posL]))[2];
}

if (LLetras[posL].toUpperCase() == "Y" )
{ 
Dice =Gres.Pulsar + ". i griega.";
}
     
      LeeCGB(Dice);
     

  
      }    

  //Control calla la voz
  if(event.keyCode == 17){
  event.preventDefault();
  window.speechSynthesis.cancel();
  }
    
});






function Existe(numero) {}

        //return ;
  // fin Existe!!
  // }
 
 function NoExiste()
    {}
		
function Labajo(){
   event.preventDefault();

 $('.CTexto').val(document.getElementById('EtiquetaDos').innerHTML);

    
}


function Dictar()
{

document.getElementById('EtiquetaUno').innerHTML = "&zwnj;";
document.getElementById('EtiquetaDos').innerHTML = "&zwnj;"; 
document.getElementById("mimg").src =  "./../../../ResB/transparente.png"; 
$('.Lt').css("background-color","white");

  window.speechSynthesis.cancel();

if (LLetras[posL].toUpperCase() != "Á" && LLetras[posL].toUpperCase() != "É" && LLetras[posL].toUpperCase() != "Í" && LLetras[posL].toUpperCase() != "Ó" && LLetras[posL].toUpperCase() != "Ú" )
{
if (movil == 0){
  Dice = Gres.Pulsar +  ". "  +   LLetras[posL]  +  ". " + Object.values(eval( LLetras[posL]))[2];
}
else if (movil == 1){
  Dice = Gres.Pulsar + ". "  +   LLetras[posL];
}

}
//console.log(Dice);
if (LLetras[posL].toUpperCase() == "Á")
{ 
Dice =Gres.Pulsar + ". a acentuada. " + Object.values(eval( LLetras[posL]))[2];
}

if (LLetras[posL].toUpperCase() == "É" )
{ 
Dice =Gres.Pulsar + ". e acentuada. " + Object.values(eval( LLetras[posL]))[2];
}
if (LLetras[posL].toUpperCase() == "Í" )
{ 
Dice =Gres.Pulsar + ". i acentuada." + Object.values(eval( LLetras[posL]))[2];
}
if (LLetras[posL].toUpperCase() == "Ó" )
{ 
Dice =Gres.Pulsar + ". o acentuada. " + Object.values(eval( LLetras[posL]))[2];
}
if (LLetras[posL].toUpperCase() == "Ú" )
{ 
Dice =Gres.Pulsar + ". u acentuada. " + Object.values(eval( LLetras[posL]))[2];
}

if (LLetras[posL].toUpperCase() == "Y" )
{ 
Dice =Gres.Pulsar + ". i griega.";
}
 
var porcen =Math.round((posL * 100) / LLetras.length);
//alert(Math.round(porcen));

progressBar(porcen, $('#progressBar'));
var TECLA =LLetras[posL].toUpperCase();
$('#'+ TECLA).css("background-color","#1883ba");	
 
LeeCGB(Dice);
}

function EvaluaLetra(Texto) { 
 //para qwerty Android
  if (Texto == ";") {Texto = "ñ"}
  LeeCGB("");
  window.speechSynthesis.cancel();
  $('.Lt').css("background-color","white");
			 
var TECLA =Texto.toString().toUpperCase();
$('#'+ TECLA).css("background-color","#1883ba");	

if (Tpulsada == "ESCAPE"){return}
if (acento == true) {
 //alert(acento + "  " + Tpulsada + "  es ==  "  + LLetras[posL].toLowerCase()  );

acento = false;
// if (Tpulsada  ==  LLetras[posL].toLowerCase()){}  
 return ;
 }
//alert(acentoPulsado +  "   n" + Texto +   "n"   + LLetras[posL] +"n" );
if (acentoPulsado == true &&  Texto == "A" &&  LLetras[posL]  == "Á") {Tpulsada = "Á";}
if (acentoPulsado == true &&  Texto == "E" &&  LLetras[posL]  == "É") {Tpulsada = "É";}
if (acentoPulsado == true &&  Texto == "I" &&  LLetras[posL]  == "Í" ) {Tpulsada = "Í";}
if (acentoPulsado == true &&  Texto == "O" &&  LLetras[posL]  == "Ó") {Tpulsada = "Ó";}
if (acentoPulsado == true &&  Texto == "U" &&  LLetras[posL]  == "Ú") {Tpulsada = "Ú";}

if (Texto == "") {return;}
if (Texto == 0) {return;}

//alert(LLetras[posL]  + "   bien uno " + Tpulsada);

 //$('.CTexto').val(''); 

if (Tpulsada == ",") {Tpulsada = "COMA"}
if (Tpulsada == ".") {Tpulsada = "PUNTO"}

//alert(LLetras[posL]  + "   bien " + Tpulsada);

if (LLetras[posL]  == Tpulsada)//Bien
{
event.preventDefault();

if (Tpulsada == "COMA" || Tpulsada == "PUNTO") {

if (Tpulsada == "COMA") 
{
  document.getElementById("mimg").src ="./../../../ResB/coma.png"; 
  miVar2 = setTimeout(function(){LeeCGB("Muy bien! Coma"); 
 }, 10);    
 }
 
 if ( Tpulsada == "PUNTO") {  
document.getElementById("mimg").src ="./../../../ResB/punto.png"; 
miVar2 = setTimeout(function(){LeeCGB("Muy bien! Punto"); 
 }, 10);    
}
 
miVar3 = setTimeout(function(){     

posL = posL +1;
//alert(Letras.length + " >= " + posL);
if (LLetras.length > posL )  
 {
     Dictar();
 }
 }, 3000); 
return;

 }
 acentoPulsado = false;
 Nvar = eval("L"+ Tpulsada.toUpperCase());

 Nvar = Nvar.toString();
 arrayN = Nvar.split(",");

rutaAudio = "./../../../ResB/"+arrayN[0]+".mp3"; 
audio.src =  rutaAudio;
if (controlAudio == "con" ) {
   audio.volume=0.2;
}
else{
  audio.volume=0;
}
audio.load(); 
 

audio.onerror = function(event) {
// Error no hay audio      cargar nuevo audio

 rutaAudio = "./../../../ResB/Plop.mp3"; 
 audio.src =  rutaAudio;
 if (controlAudio == "con" ) {
   audio.volume=0.2;
 }else{
  audio.volume=0;
 }
 audio.load(); 

 //  
  }

 
document.getElementById("mimg").src ="./../../../ResB/"+arrayN[0]+".png";  
//document.getElementById('EtiquetaUnoTexto').innerHTML = arrayN[0];
document.getElementById('EtiquetaUno').innerHTML = Tpulsada;
document.getElementById('EtiquetaDos').innerHTML = Tpulsada; 
Dice = Tpulsada;
 if ( LLetras[posL]  == "Y")
{
Dice = "i griega";
}

 Dice="¡Muy bien! "  + Dice + ": " +  arrayN[0];
 $("#Palabra").text(arrayN[0]);
$(".label").html(Dice);
 msgNo = new SpeechSynthesisUtterance($(".label").text());
 msgNo.voice = speechSynthesis.getVoices()[Voz];
  wordIndex=2;
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
			
  msgNo.onend = function(event) {
    
    if (controlAudio == "con" ) {
      audio.volume=0.2;
    }else{
     audio.volume=0;
    }
   audio.play();
audio.onended = function() {  
$("#Palabra").text('');
posL = posL +1;
//alert(Letras.length + " >= " + posL);
if (LLetras.length > posL )  
 {
     Dictar();
     return;
 } 
if (LLetras.length == posL )  
 {
    //Terminó!!
    progressBar(100, $('#progressBar'));
     if ((error * 100)/LLetras.length == 0)
     {desempenio = Gres.Bueno;}
     if ((error * 100)/LLetras.length < 11 && (error * 100)/LLetras.length > 0  )
     {desempenio = Gres.MuyBueno;}
     if ((error * 100) / LLetras.length < 26 && (error * 100) / LLetras.length > 10)
     {desempenio = Gres.Bueno;}
     if ((error * 100) / LLetras.length > 25)
     {
     desempenio = Gres.Continua;}
// alert(LLetras.length +  "   errores: "  + error)    
if (desempenio != Gres.Continua)
{
  LeeCGB(Gres.FinDictado + Gres.TuDesempenio + desempenio);// Math.round((error*100)/LLetras.length) + "% de errores " + desempenio  + "  "  + error);
}
if (desempenio == Gres.Continua)
{
  LeeCGB(Gres.FinDictado + desempenio);// Math.round((error*100)/LLetras.length) + "% de errores " + desempenio  + "  "  + error);
}


    
 }

 }// fin oend audio
 
 }// fin oend speak
HablaAnim();
window.speechSynthesis.speak(msgNo);

 //document.getElementById('EtiquetaUnoTexto').innerHTML = "Muy Bien! "  + Tpulsada  + " " + arrayN[0]; //muestra lo que dice pequén
 
}

//Mal
if ( LLetras[posL].toUpperCase() != Tpulsada)// Mal
{

//alert( LLetras[posL].toUpperCase() + " !=  " + Tpulsada + "  textoVal " +  $('.CTexto').val()  );
event.preventDefault();
if (LLetras[posL].toUpperCase() == "Á" || LLetras[posL].toUpperCase() == "É" ||LLetras[posL].toUpperCase() == "Í" ||LLetras[posL].toUpperCase() == "Ó" ||LLetras[posL].toUpperCase() == "Ú" )
{
 error = error +1 ;
 //LeeCGB("Pulsar nuevamente " + LLetras[posL].toUpperCase());
 if (LLetras[posL].toUpperCase() == "Á")
{ 
//alert(Tpulsada + " mal  " + LLetras[posL].toUpperCase())

Dice ="pulsa nuevamente. a acentuada. " + Object.values(eval( LLetras[posL]))[2];
Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}

if (LLetras[posL].toUpperCase() == "É" )
{ 
Dice ="pulsa nuevamente. e acentuada. " + Object.values(eval( LLetras[posL]))[2];
Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
if (LLetras[posL].toUpperCase() == "Í" )
{ 
Dice ="pulsa nuevamente. i acentuada. " + Object.values(eval( LLetras[posL]))[2];
Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
if (LLetras[posL].toUpperCase() == "Ó" )
{ 
Dice ="pulsa nuevamente.<br/> o acentuada. " + Object.values(eval( LLetras[posL]))[2];
Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
if (LLetras[posL].toUpperCase() == "Ú" )
{ 
Dice ="pulsa nuevamente. u acentuada. " + Object.values(eval( LLetras[posL]))[2];
Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
LeeCGB(Dice);
 return;
}

var donde="";
var FilaDonde = Object.values(eval(LLetras[posL]))[0];
var FilaPulsada = Object.values(eval(Tpulsada.toUpperCase()))[0];
//alert(FilaPulsada - FilaDonde);
if (FilaDonde ==  FilaPulsada) { donde = Gres.EnLaMisma;}
if (FilaPulsada - FilaDonde == 1)   {  donde = Gres.MasArriba } 
if (FilaPulsada - FilaDonde == 2)   {  donde =Gres.MasArriba2} 
if (FilaPulsada - FilaDonde == -1)   {  donde = Gres.MasAbajo} 
if (FilaPulsada - FilaDonde == -2)   {  donde = Gres.MasAbajo2} 


if(donde == Gres.EnLaMisma)
{ 

if (Object.values(eval( LLetras[posL]))[1]  >  Object.values(eval(Tpulsada.toUpperCase()))[1]) 
{donde = Gres.EnLaMisma + Gres.Mderecha; }


if (Object.values(eval( LLetras[posL]))[1] < Object.values(eval(Tpulsada.toUpperCase()))[1])
{donde = Gres.EnLaMisma + Gres.Mizquierda; }

}


 error = error +1 ;
 
window.speechSynthesis.cancel();
var Dletra =  Tpulsada;//Texto.value;

if (Dletra == "Y")
{
Dletra = "i griega";
}
if (Dletra == "V")
{
Dletra = "v";
}

if (LLetras[posL]  != "COMA" && LLetras[posL]  != "PUNTO")
{
//alert(Dletra + " aaa");
Dice = "Pulsaste. " +  Dletra + ". No es la letra " + LLetras[posL] + "." + donde;
}
if ( LLetras[posL]  == "COMA" || LLetras[posL]  == "PUNTO")
{
Dice = "Pulsaste. " +  Dletra + ". No es el signo " + LLetras[posL] + "." +donde;
}

if ( LLetras[posL]  == "Y")
{
Dice = "Pulsaste. " +  Dletra + ". No es la letra i griega." +donde;
}

$(".label").css('display','block');
$(".label").css('visibility','visible');
$(".label").html(Dice);
HablaAnim();

//   msgNo = new SpeechSynthesisUtterance($(".label").text());
//   msgNo.voice = speechSynthesis.getVoices()[Voz];
//   wordIndex=2;

// msgNo.rate =Veloz;	
// msgNo.pitch = Tono;
// msgNo.onend = function(event) {
// EsperaAnim();
// //$("#pequen").attr("src","Peque.png");
// }          
//    $('.CTexto').val('');   
//    HablaAnim();  
//    //window.speechSynthesis.speak(msgNo);
//    sayTimeout = setTimeout(function () { 
  
//     window.speechSynthesis.speak(msgNo);}, 500); 
LeeCGB($(".label").text());

}



 
}

