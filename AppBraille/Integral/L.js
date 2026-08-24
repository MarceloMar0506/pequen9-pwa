var audio = document.createElement('audio');
var rutaAudio = "";
var orden =-1;
var ultimaLetra ="";
var acento=false;
var LetraInicial;
var msgNo ="";
var posL=0;
var palabraD = "hhhhhhhhhhhhhhhh";
var descubiertas = 0;

var SonidoQ = ["guitarra","armónica","burro","caballo","delfín","arpa","elefante","flauta","gato","piano","león","mono","cabra","oveja","perro","rana","tuba","vaca","gong","agua","batería","campana","gallina","lobo","mandolina","oso","pato","redoblante","silbato","trompeta"];
SonidoQ =  shuffle(SonidoQ);
//console.log(SonidoQ);


var SonidoA = ["burro","caballo","delfín","elefante","gato","león","mono","cabra","oveja","perro","rana","vaca","gallina","lobo","oso","pato"];
SonidoA =  shuffle(SonidoA);
console.log(SonidoA);

var SonidoI = ["guitarra","armónica","arpa","flauta","piano","tuba","gong","batería","mandolina","redoblante","trompeta"];
SonidoI =  shuffle(SonidoI);


 var SonidoT = ["armónica","burro","caballo","delfín","elefante","flauta","gato","helicóptero","ibis","jilguero","koala","león","mono","nadar","ñandú","oveja","perro","quena","rana","saxofón","tren","urraca","vaca","wapiti","xilofón","yacaré","zorro","búho"];


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


function Escucha(){
  
  audio.play();
}

function DictaSonido()
{
	  $(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");

    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	

    $("#letraD").text("");
    $("#Primera").css("display","grid");
    $("#palabraD").text("");

console.log("dicta " + posL + " " + SonidoQ.length + "  " + SonidoQ[posL]);
var palabraD =  SonidoQ[posL];
$("#vecPalabra").css("grid-template-columns","repeat(" + palabraD.length + ", 1fr)"); 
for (let i = 0; i < palabraD.length; i++) {
  $("#l"+ (i+1)).css("display","block"); 
  $("#l"+ (i+1) ).text(palabraD[i]);

  
}

if ( posL ==  SonidoQ.length){

  LeeCGB("fin de la actividad. resolviste todos los sonidos");
  return;
}
LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
//console.log(LetraInicial);
wordIndex=2;
// if (0 == 0)
// {
console.log(posL);
// if (posL > 1){
//    LeeCGB("con el teclado virtual braille pulsar el signo correspondiente a la letra que identifica este sonido. ")
//   }
//     else {
//   LeeCGB("ahora escucha y pulsa el signo correspondiente.");
//   }


  LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
  //console.log(LetraInicial +  " dictada????  " + posL)
  rutaAudio = "./../../ResB/"+ SonidoQ[posL] +".mp3"; 

  audio.src =rutaAudio;
  console.log(SonidoQ[posL] + " " + rutaAudio + "  posL  "  + posL);
  audio.volume=0.2
  audio.load();
  
  audio.play();

  audio.onended = function() {
    if (posL >  0){
   //  LeeCGB("pulsar el signo correspondiente a la letra que identifica el sonido escuchado. ")   
      console.log(posL); 
      LeeCGB("pulsa el signo correspondiente al sonido escuchado.");
    }
  }

 // posL++;

 

// return;

//}
// else if (posL > 0)
// {
// var texto = "con el teclado virtal braille pulsar el signo correspondiente a la letra que lo identifica";

// $('.Lt').css("background-color","white");

// $(".label").html(texto);
// window.speechSynthesis.cancel();

// //console.log(SonidoQ[posL] + " ??????????????????????????????????? " + rutaAudio + "  posL  "  + posL);

// msgNo = new SpeechSynthesisUtterance(texto);
// msgNo.voice = speechSynthesis.getVoices()[Voz];
// msgNo.volume=Volumen;
// msgNo.rate =Veloz;	
// msgNo.pitch = Tono;

// msgNo.onend = function(event) {
// EsperaAnimHide();
// document.getElementById('EtiquetaUno').innerHTML = "&zwnj;";
// document.getElementById('EtiquetaDos').innerHTML = "&zwnj;";
// $("#mimg").attr("src","./../../ResB/QE.png"); 

// //Sonido
// LetraInicial = SonidoQ[posL].substring(0,1).toUpperCase();
// rutaAudio = "./../../ResB/"+ SonidoQ[posL] +".mp3"; 
// audio.src =rutaAudio;
// console.log(SonidoQ[posL] + " " + rutaAudio + "  posL  "  + posL);
// audio.load();

// audio.play();
// posL++;

// window.speechSynthesis.speak(msgNo);

// }



// //pulsada =false;
// }

// HablaAnimShow();	





}



function MostrarLetra(TextoE) {
  console.log("mostrar Letra??????????????????????")
event.preventDefault();
  var valor = $('.CTexto').val(); 
  
//F1 Ayuda 
if (event.keyCode==112) {
//alert("Ayuda");
return;
}

var Letras= valor.toUpperCase();
var LetrasMin=valor.toLowerCase();

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


if ($.isNumeric(Letras) == false)
{
//alert(Letras);
 Nvar = eval("L"+Letras);
 Nvar = Nvar.toString();
 arrayN = Nvar.split(",");
//orden = orden +1; 

//if(arrayN.length <= orden){ orden=0; }  
rutaAudio = "./../../ResB/"+arrayN[0]+".mp3"; 
// audio.src =  rutaAudio;
// audio.load(); 
document.getElementById('myAudio').src =rutaAudio;

 
 document.getElementById("mimg").src ="./../../ResB/"+arrayN[0]+".png";  
//document.getElementById('EtiquetaUnoTexto').innerHTML = arrayN[0];
              
 //Si no hay imagen muestra imagen en blanco No.png
    document.getElementById('mimg').onerror = function() {
    document.getElementById('mimg').src = "./../../ResB/N0.png";
     }
var Texto = LetrasMin + " " + arrayN[0].toString();

if(LetrasMin == "á" ) { Texto =  "a acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "é" ) { Texto =  "e acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "í" ) { Texto =  "i acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "ó" ) { Texto =  "o acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "ú" ) { Texto =  "u acentuada! !" + arrayN[0].toString(); }
if(LetrasMin == "y" ) { Texto =  "y griega! !" + arrayN[0].toString(); }




  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.volume=Volumen;
  msgNo.rate = Veloz;	
  msgNo.pitch = Tono;		
  msgNo.onend = function(event) {
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio
document.getElementById('myAudio').play();
 //audio.play();

  }
 //window.speechSynthesis.speak(msgNo);
} //fin de es letra


//"es número"
if ($.isNumeric(Letras) == true)
{
$("#mimg").attr("src","./../../ResB/Naranja.png");
rutaAudio = "./../../ResB/Blep.mp3"; 
audio.src =  rutaAudio;
audio.load();  


          

var Texto =  LetrasMin + " " 
  window.speechSynthesis.cancel();
  msgNo = new SpeechSynthesisUtterance(Texto);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  msgNo.volume=Volumen;
  msgNo.rate = Veloz;	
  msgNo.pitch = Tono;		
  msgNo.onend = function(event) {
  EsperaAnimHide();
//  document.getElementById('EtiquetaInicio').innerHTML = ""; //borra texto inicio

//var i;
var Valor = parseInt(Letras);

var count =0;

audio.play();
     
//$("#mimg").attr('src', this.id + "?" + d.getTime());


audio.onended = function() {
 
    if(count <= Valor -2){
      count++;
      this.play();
 var tipo=(count%2)? "par" : "impar";
//alert(tipo);
if (tipo =="par")
{
//document.getElementById("mimg").src ="./../../ResB/Manzana.png";
$("#mimg").attr("src","./../../ResB/Manzana.png");

$("#mimg").attr('src', this.id + "?" + d.getTime());
}

else if (tipo =="impar")
{
//document.getElementById("mimg").src ="./../../ResB/Naranja.png";      
$("#mimg").attr("src","./../../ResB/Naranja.png");     

$("#mimg").attr('src', this.id + "?" + d.getTime());
 
}
  }

};





//for (i = 0; i < Valor; i++)
// { 

//setTimeout(function() {audio.play(); }, 100);

/*setTimeout(function() {
          audio.play();
        } ,1000);





}//fin de For*/





  }
  
  

  // audio.play();

 // HablaAnimShow();
 //window.speechSynthesis.speak(msgNo);
 //sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 




}





// <!--Limpia input-->
//  var valor = $('.CTexto').val();
//  $('.CTexto').val('');
} 

//Fin Mostrar Letra

