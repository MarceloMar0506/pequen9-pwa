
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
 
 
 //Evitar eco del teclado
function validar(e,txt) { 
  tecla = (document.all) ? e.keyCode : e.which;
  tecla = String.fromCharCode(tecla);  
  return (txt.indexOf(tecla)==-1);
}


$(window).keydown(function(event) 
{ 

// alert(event.keyCode);
//Acento agudo
 if(event.keyCode == 222)
 {
  event.preventDefault();

  window.speechSynthesis.cancel();
  //alert(LetraInicial +  " que vocal?");
  if (LetraInicial  == "Á")
      { Dice = "Acento! pulsar la letra a"; }
  if (LetraInicial  == "É")
      { Dice = "Acento! pulsar la letra e"; }
  if (LetraInicial  == "Í")
      { Dice = "Acento! pulsar la letra i"; }
  if (LetraInicial  == "Ó")
      { Dice = "Acento! pulsar la letra o"; }
  if (LetraInicial  == "Ú")
      { Dice = "Acento! pulsar la letra u"; }
      
  msgNo = new SpeechSynthesisUtterance(Dice);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
   wordIndex=2;
$(".label").html(Dice);
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.onend = function(event) {
EsperaAnimHide();
//$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
    
    //event.charIndex el indice de la palabra que lee
  }   
HablaAnimShow();			   
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
  if(event.keyCode == 17){
  event.preventDefault();
  window.speechSynthesis.cancel();
  }
    
   if(event.keyCode == 32)
      {
        Repite();
      }    

    
});

function Repite()
{      
  // LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
  Lee("escucha"); 
  audio.pause();
  audio.currentTime = 0;
  audio.volume=0.2;    
  audio.play();

}




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


function EvaluaLetra(Texto) {
  //console.log(Texto + " ????????????????????????????? ")

  $('.Lt').css("background-color","white");
			 
  var TECLA =Texto.toString().toUpperCase();
  $('#'+ TECLA).css("background-color","#1883ba");	

 Tpulsada = Texto.toUpperCase();

if (Texto == "") {return;}
if (Texto == 0) {return;}

if (LetraInicial  == Tpulsada)//Bien
{  
  if (posL == 0 ){posL =1}

 $("#mimg").attr("src","./../../../ResB/"+ SonidoQ[posL-1] + ".png");  
 //console.log( SonidoQ[posL-1]);
document.getElementById('EtiquetaDos').innerHTML =SonidoQ[posL-1].substring(0,1).toLowerCase();
document.getElementById('EtiquetaUno').innerHTML =SonidoQ[posL-1].substring(0,1).toUpperCase();

LeeSonido();
return;
}

//Mal
if (LetraInicial != Tpulsada)// Mal
{

//alert(LetraInicial + " !=  " + Tpulsada + "  textoVal " +  $('.CTexto').val()  );
event.preventDefault();
if (LetraInicial == "Á" ||LetraInicial == "É" ||LetraInicial == "Í" ||LetraInicial == "Ó" ||LetraInicial == "Ú" )
{
 error = error +1 ;
 //Lee("Pulsar nuevamente " +LetraInicial);
 if (LetraInicial == "Á")
{ 
//alert(Tpulsada + " mal  " +LetraInicial)

Dice ="pulsa nuevamente. a acentuada. " + Object.values(eval( LetraInicial))[2];
Muestra ="Pulsa "  +   LetraInicial  + Object.values(eval( LetraInicial))[2]; 
}

if (LetraInicial == "É" )
{ 
Dice ="pulsa nuevamente. e acentuada. " + Object.values(eval( LetraInicial))[2];
Muestra ="Pulsa "  +   LetraInicial  + Object.values(eval( LetraInicial))[2]; 
}
if (LetraInicial == "Í" )
{ 
Dice ="pulsa nuevamente. i acentuada. " + Object.values(eval( LetraInicial))[2];
Muestra ="Pulsa "  +   LetraInicial  + Object.values(eval( LetraInicial))[2]; 
}
if (LetraInicial == "Ó" )
{ 
Dice ="pulsa nuevamente. o acentuada. " + Object.values(eval( LetraInicial))[2];
Muestra ="Pulsa "  +   LetraInicial  + Object.values(eval( LetraInicial))[2]; 
}
if (LetraInicial == "Ú" )
{ 
Dice ="pulsa nuevamente. u acentuada. " + Object.values(eval( LetraInicial))[2];
Muestra ="Pulsa "  +   LetraInicial  + Object.values(eval( LetraInicial))[2]; 
}
Lee(Dice);
//console.log(LetraInicial + " ?????????????!= " + Tpulsada)
 return;
}

var donde="";
var FilaDonde = Object.values(eval(LetraInicial))[0];
var FilaPulsada = Object.values(eval(Tpulsada.toUpperCase()))[0];

if (FilaDonde ==  FilaPulsada) { donde = Gres.EnLaMisma;}
if (FilaPulsada - FilaDonde == 1)   {  donde = Gres.MasArriba } 
if (FilaPulsada - FilaDonde == 2)   {  donde = Gres.MasArriba2} 
if (FilaPulsada - FilaDonde == -1)   {  donde = Gres.MasAbajo} 
if (FilaPulsada - FilaDonde == -2)   {  donde = Gres.MasAbajo2} 

if(donde == Gres.EnLaMisma)
{ 
if (Object.values(eval(LetraInicial))[1]   >  Object.values(eval(Tpulsada.toUpperCase()))[1]) 
{donde = Gres.EnLaMisma + Gres.Mderecha; }

if (Object.values(eval(LetraInicial))[1]  < Object.values(eval(Tpulsada.toUpperCase()))[1])
{donde = Gres.EnLaMisma + Gres.Mizquierda; }



}


 error = error +1 ;
 
//window.speechSynthesis.cancel();
var Dletra =  Tpulsada;//Texto.value;

if (Dletra == "Y")
{
Dletra = "i griega";
}
if (Dletra == "V")
{
//Dletra = "v";
}

if (LetraInicial  != "COMA" && LetraInicial  != "PUNTO")
{
//alert(Dletra + " aaa");
Dice = "Letra pulsada, '" +  Dletra + "', No es la letra '" + LetraInicial + "', " + donde;
}
if ( LetraInicial  == "COMA" || LetraInicial  == "PUNTO")
{
Dice = "Letra pulsada, " +  Dletra + ". No es el signo " + LetraInicial + ". " +donde;
}

if ( LetraInicial  == "Y")
{
Dice = "Letra pulsada, '" +  Dletra + "', No es la letra i griega, " +donde;
}
//console.log(LetraInicial + " != " + Tpulsada + " " + Dice) ;
Lee(Dice);
$(".label").css("display","block");
 
}
}


function LeeSonido()
{ 
  $(".label").css('display','block');
  $(".label").css('visibility','visible');
  audio.pause();
  //console.log("dicebien");
  //Dice Bien y llama a DictaSonido cuando termina
  
  
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
msgNo.volume=Volumen;
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