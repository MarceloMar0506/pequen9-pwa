
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
  //Control calla la voz
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
  // //console.log(LetraInicial + " que sonido ?" );
  // Lee(Gres.Escucha); 
  //aud.pause();
  //aud.currentTime = 0;
  //aud.play();
  document.getElementById('myAudio').play();

}



function DiceBien()
{

aud.pause();
//console.log("dicebien");
//Dice Bien y llama a DictaSonido cuando termina

if ( Dice == "!muy bien! '" +  LetraInicial + "'. " + SonidoQ[posL-1]+"." ){return}
window.speechSynthesis.cancel();
Dice = "!muy bien! '" +  LetraInicial + "'. " + SonidoQ[posL-1]+"." ;
$(".label").html(Dice);
$(".label").css("visibility","visible");
  msgNo = new SpeechSynthesisUtterance($(".label").text());
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  wordIndex=2;

msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
EsperaAnimHide();
//console.log(pulsada + " antes de dictaSonido");
DictaSonido();
}
   
   //$('.CTexto').val('');     
   HablaAnimShow();
  // window.speechSynthesis.speak(msgNo);
  sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 

}




