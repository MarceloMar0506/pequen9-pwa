var TextoF = "";
var posL = -1;
var ultimotexto = "";
var Tex = "";
var Nvoz = 0;
var vozselec=[];
var Deletrear = "";
var NletraValor=0;


 
 //Evitar eco del teclado
function validar(e,txt) { 
  tecla = (document.all) ? e.keyCode : e.which;
  tecla = String.fromCharCode(tecla);  
  return (txt.indexOf(tecla)==-1);
}


$(window).keydown(function(event) 
{ 
pulsado=true;
//Acento agudo
 if(event.keyCode == 2222)
 {

  event.preventDefault();
  window.speechSynthesis.cancel();
  var texto = "acento pulsar una vocal";
  msgNo = new SpeechSynthesisUtterance(texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
     wordIndex=2;
    $(".label").html(texto);
     msgNo.voice = speechSynthesis.getVoices()[Voz];
     msgNo.rate =Veloz;	
msgNo.pitch = Tono;
	
 msgNo.onboundary = function(event) { 
    try{
      if (wordIndex  % 2 == 0 ){$("#pequen").attr("src","Peque1H.png");}
      if (wordIndex  % 2 != 0 ){$("#pequen").attr("src","Peque2H.png");}
      ////console.log( wordIndex + "  " +  event.charIndex);
    }catch(e){}
    wordIndex++;
    //event.charIndex el indice de la palabra que lee
  }  
			   
  sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);
  acento="true";
  return;
  }

}
);
function Imprenta(){
  $('#LetraP').css("font-family","Arial");
  $('#EtiquetaDos').css("font-family","Arial");
  $('#EtiquetaUno').css("font-family","Arial");  
  $('#LetraP').removeClass('capitalise');
  $('#LetraP').addClass('capital');
  Lee("fuente imprenta");
}

function Manuscrita()
{   
 $('#LetraP').css("font-family","Kunstler-Script");
 $('#LetraP').removeClass('capital');
 $('#LetraP').addClass('capitalise');
 $('#EtiquetaDos').css("font-family","Kunstler-Script");
 $('#EtiquetaUno').css("font-family","Kunstler-Script");
 $('#EtiquetaUno').css("font-style","normal");
 $('#EtiquetaDos').css("font-style","normal");
 Lee("fuente manuscrita");
}


$(window).keyup(function(event) 
{   
  //Control calla la voz
  if(event.keyCode == 17){
  event.preventDefault();
  window.speechSynthesis.cancel();
  }
  if(event.keyCode == 13)
  {
  event.preventDefault();
  if ($("#suena").css("visibility") == "visible"){
    queHace();
  }
   return;
   }


 if(event.keyCode == 38)
 {
 event.preventDefault();
Manuscrita();
  return;
  }
  if(event.keyCode == 40)
  {
    event.preventDefault();
    Imprenta();
    return;
  }   
  //flecha izquierda
   if(event.keyCode == 37)
  {
   Vaaizquierda();
    return;
  }   
  
  //flecha derecha
   if(event.keyCode == 39)
  {
   Vaaderecha();
    return;
  }   
 //espacio deletrea
   if(event.keyCode == 32)
  {
    event.preventDefault();
    Vaadeletrear();
    return;
  }   
    //retoceso
    if(event.keyCode == 8){
    event.preventDefault();
    window.speechSynthesis.cancel();
    var Tex = document.getElementById('LetraP').innerHTML;
    //var Br = Tex.substring(Tex.length -1);
     var texto = 'retroceso';
     msgNo = new SpeechSynthesisUtterance(texto);
     wordIndex=2;
    $(".label").html(texto);
     msgNo.voice = speechSynthesis.getVoices()[Voz];
     msgNo.rate =Veloz;	
msgNo.pitch = Tono;
	
 msgNo.onboundary = function(event) { 
    try{
      if (wordIndex  % 2 == 0 ){$("#pequen").attr("src","Peque1H.png");}
      if (wordIndex  % 2 != 0 ){$("#pequen").attr("src","Peque2H.png");}
      ////console.log( wordIndex + "  " +  event.charIndex);
    }catch(e){}
    wordIndex++;
    //event.charIndex el indice de la palabra que lee
  }  


		   
     sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);

     var r = Tex.substring(0,Tex.length -1);
      //alert(r);
    document.getElementById('LetraP').innerHTML = r;

 
   
    document.getElementById('EtiquetaUno').innerHTML ="_";
    // var valor = $('.CTexto').val();
     //$('.CTexto').val('');

    }
    //borra todo
    if(event.keyCode == 46){
    event.preventDefault();  
      msgH = new SpeechSynthesisUtterance('borró todo');        
      msgH.voice = speechSynthesis.getVoices()[Voz];
      msgH.rate = 0.8;   
    document.getElementById('LetraP').innerHTML = ""; 
    document.getElementById('EtiquetaUno').innerHTML ="_";   
    }
  
    
    
    if(event.keyCode == 32)
      {
        Vaadeletrear();
      }    
});


		
function Labajo(){
   event.preventDefault();    
}

function Larriba(){
   event.preventDefault();
//$('.CTexto').val(document.getElementById('EtiquetaDos').innerHTML);
}


async function DeletreaPalabra(){
  var text = Deletrear;
LeeDeletreo(Deletrear);

}

function Vaadeletrear()
{
  //console.log("deleetrear");
      //no deletrea numeros
if ($.isNumeric(document.getElementById('EtiquetaUno').innerHTML)) {return} ;
var texto = "deletreo";
Deletrear =  document.getElementById('LetraP').innerHTML;
window.speechSynthesis.cancel();
msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
 wordIndex=2;
$(".label").html(texto);
$(".label").css("visibility","visible");
 msgNo.voice = speechSynthesis.getVoices()[Voz];
 msgNo.rate =Veloz;
 msgNo.pitch = Tono;
 msgNo.volume=Volumen;
	
msgNo.onboundary = function(event) { 
try{
  if (wordIndex  % 2 == 0 ){$("#pequen").attr("src","Peque1H.png");}
  if (wordIndex  % 2 != 0 ){$("#pequen").attr("src","Peque2H.png");}
  ////console.log( wordIndex + "  " +  event.charIndex);
}catch(e){}
wordIndex++;    
}  			
msgNo.onend = function(event) {
var Valor = Deletrear.lenght;
var count =1;
DeletreaPalabra();
}  
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);
}

function Vaaderecha()
{
 
  if (pulsado == true){
    pulsado=false;
  
  window.speechSynthesis.cancel();
  var qL = document.getElementById('LetraP').innerHTML.toString().substring(0,1);
  NletraValor =  alfab.indexOf(qL.toUpperCase());
  NletraValor++;
  //console.log(NletraValor + " derecha " + qL + " === ? " +  alfab[NletraValor]); 

  MostrarLetra(alfab[NletraValor].toLowerCase());
  }  
}
function Vaaizquierda(){
  //console.log(pulsado + " izquierda");
  if (pulsado == true){
    pulsado=false;
    var qL = document.getElementById('LetraP').innerHTML.toString().substring(0,1);
    NletraValor =  alfab.indexOf(qL.toUpperCase());
  NletraValor--;
  MostrarLetra(alfab[NletraValor].toLowerCase());
}
}