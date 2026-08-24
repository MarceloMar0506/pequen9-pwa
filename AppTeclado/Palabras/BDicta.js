
var TextoF = "";
var posL = 0;
var indiceL =0;
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
var fin = false;
var desempenio ="";
var LLetras =0;

 
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
        //console.log(PalabraD[posL] + " " + posL + " de " + PalabraD.length)
        if ($("#parte").text().length > 0 ){
          let parte = $("#parte").text().split('');
          parte = parte.toString().replace(/,/g,", ");
           Lee("palabra dictada " + parseInt(posL + 1) + " de " +  PalabraD.length + ". '" + $("#LetraP").text() + ",'<br> se escribió '" + parte + ",'" );
        }else if ($("#parte").text().length == 0 ){
          Lee("palabra dictada " + parseInt(posL + 1) + " de " +  PalabraD.length + ". " +  $("#LetraP").text());
       }
      }    

    
});


function EvaluaLetra(Texto) {

 if (fin == true){
   Lee(Gres.finDictado);
   return;
 }

 var FilaDonde = Object.values(eval(LetraInicial))[0];
 var FilaPulsada = Object.values(eval(Tpulsada.toUpperCase()))[0];
 //console.log(FilaDonde + " " + Texto + " letra Inicial?? " + LetraInicial)

  //$('.col').css("background-color","white");
 $('.col').css({"border":"none"});
 $('.col').css({"box-shadow": "0px 0px 0px blue"});

 try {
  var TECLA =Texto.toString().toLowerCase();
  $('#'+TECLA).css({"border":"4px solid black"});
  $('#'+TECLA).css({"box-shadow": "10px 10px 20px blue"});
  //console.log(TECLA);
 } catch (error) {
   
 }

Tpulsada = Texto.toUpperCase();
if (Texto == "") {return;}
if (Texto == 0) {return;}


if (LetraInicial  == Tpulsada)//Bien
{ 
  LLetras++;
$("#parte").text($("#parte").text() + Tpulsada);
 
Lee(LetraInicial);
// //console.log(Tpulsada + " " + PalabraD[posL]);
// //console.log(PalabraD.length + "== Fin " + posL)
indiceL++;
if (PalabraD[posL].length == indiceL)
{
  var miVarA = setTimeout(function(){ 
    if (controlAudio == "con" ) {
    rutaAudio = "./../../ResB/Ding.mp3"
    audio.src =  rutaAudio;
    audio.load();       
   audio.play();
   }
  },1000);

  var miVarA = setTimeout(function(){ 
  //console.log("fin palabra");
  posL++;
  var porcen =Math.round((posL * 100) / PalabraD.length);
  //console.log(porcen + " porcen? Esta: " +  posL + " todas: " +  PalabraD.length);
  progressBar(porcen); 

  if (PalabraD.length == posL){
    //console.log("errores " + error + " LLetras pulsadas " + LLetras + " " + (error * 100)/LLetras);
    //Lee(Gres.finDictado);
    if ((error) == 0)
    {desempenio = Gres.Excelente;}   
    else if ((error * 100)/LLetras < 11 && (error * 100)/LLetras > 0  )
    {desempenio = Gres.MuyBueno;}
    else if ((error * 100) / LLetras < 26 && (error * 100) / LLetras > 10)
    {desempenio = Gres.Bueno;}
    else if ((error * 100) / LLetras > 25)
    {
    desempenio = Gres.Continua;}
// alert(LLetras +  "   errores: "  + error)    
if (desempenio != Gres.Continua)
{
 Lee(Gres.finDictado + Gres.TuDesempenio + desempenio + Gres.escape);// Math.round((error*100)/LLetras) + "% de errores " + desempenio  + "  "  + error);
}
if (desempenio == Gres.Continua)
{
 Lee(Gres.finDictado + desempenio + Gres.escape);// Math.round((error*100)/LLetras) + "% de errores " + desempenio  + "  "  + error);
}
console.log(desempenio);

    fin = true; 
    return;
  }
  indiceL = 0;
  $("#parte").text('');
  DictaPalabra();
  },2000);
  
  return;
}

LetraInicial = PalabraD[posL].substring(indiceL,indiceL+1).toUpperCase();
//console.log("escribe ahora " + LetraInicial);
return;
}

//Mal
else if (LetraInicial != Tpulsada)// Mal
{

if (LetraInicial == "Á" ||LetraInicial == "É" ||LetraInicial == "Í" ||LetraInicial == "Ó" ||LetraInicial == "Ú" )
{
 error = error +1 ;

 if (LetraInicial == "Á")
{ 
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

 return;
}

var donde="";
donde = Object.values(eval(LetraInicial))[2];
try {
 // var FilaDonde = Object.values(eval(LetraInicial))[0];
//  var FilaPulsada = Object.values(eval(Tpulsada.toUpperCase()))[0];
  if (Object.values(eval(LetraInicial))[0]  ==  Object.values(eval(Tpulsada))[0]) 
  { donde =Gres.EnLaMisma;}
  
 // var FilaDonde = Object.values(eval(LetraInicial))[0];
 // var FilaPulsada = Object.values(eval(Tpulsada))[0];  
  
  if (FilaDonde ==  FilaPulsada) { donde = Gres.EnLaMisma }
  if (FilaPulsada - FilaDonde == 1)   {  donde = Gres.MasArriba } 
  if (FilaPulsada - FilaDonde == 2)   {  donde =Gres.MasArriba2} 
  if (FilaPulsada - FilaDonde == -1)   {  donde = Gres.MasAbajo} 
  if (FilaPulsada - FilaDonde == -2)   {  donde = Gres.MasAbajo2} 
  //console.log(FilaPulsada + "  -  " + FilaDonde + " " + Dice + " ¿¿¿¿Donde???  " + donde) ;
  
  if(donde == Gres.EnLaMisma)
  { 
  
    if (Object.values(eval(LetraInicial))[1]   >  Object.values(eval(Tpulsada))[1]) 
        {donde = Gres.EnLaMisma + Gres.Mderecha; }
    
    if (Object.values(eval(LetraInicial))[1]  < Object.values(eval(Tpulsada))[1])
      {donde = Gres.EnLaMisma + Gres.Mizquierda; }
  
  } 
} catch (error) {
  //console.log(error)
  //console.log(Object.values(eval(LetraInicial))[2]);
}


error = error +1 ;

var Dletra =  Tpulsada;//Texto.value;

if (Dletra == "Y")
{
Dletra = "i griega";
}
if (Dletra == "V")
{
Dletra = "v";
}

if (LetraInicial  != "COMA" && LetraInicial  != "PUNTO")
{

Dice =  "No es '" + LetraInicial + "', " + donde;
}
if ( LetraInicial  == "COMA" || LetraInicial  == "PUNTO")
{
Dice = "No es el signo " + LetraInicial + ". " +donde;
}

if ( LetraInicial  == "Y")
{
Dice = "No es i griega, " +donde;
}
//console.log(LetraInicial + " != " + Tpulsada + " " + Dice + " Donde???  " + donde) ;
Lee(Dice);
$(".label").css("display","block");
 
}

}
