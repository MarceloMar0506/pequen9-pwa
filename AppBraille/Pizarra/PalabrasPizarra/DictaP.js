var Dicta = 0;
var idLetra = 0;
var LetraD = "";
var IndiceU = 0;
var ListaEvaluacion = [];      
var ListaUsuario = [];
var LeccionV = ""; 
var DactiloAc;
var DactiloM;


function DictarPrimera()
 {
document.getElementById('EtiquetaUnoTexto').innerHTML =  palabra[Dicta];
 Dice = ' en la pizarra, escribe la palabra ' + palabra[Dicta] + ' ';
 //console.log(palabra[Dicta].length);
 $("#PTercera").css("display","grid");
 $("#PCuarta").css("display","grid");
 $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr 1fr");
 if (palabra[Dicta].length == 2){
  $("#PTercera").css("display","none");
  $("#PCuarta").css("display","none");
  $("#PQuinta").css("display","none");
  $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr");
}else if (palabra[Dicta].length == 3){  
 $("#PCuarta").css("display","none");
 $("#PQuinta").css("display","none");
 $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr");
}else if (palabra[Dicta].length == 4){    
 $("#PQuinta").css("display","none");
 $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr 1fr");
}else if (palabra[Dicta].length == 5){   
 $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
}

 var letra = document.getElementById('letra');
 letra.innerHTML =  palabra[Dicta].substring(0,1);
 DeterminaMotor(Dice);

}

const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

function syllabify(words) {
    return words.match(syllableRegex);
}


function DictarNuevaL()
 {  
 if (Dicta ==  palabra.length)
 {
 termino = "si";
 progressBar(100, $('#progressBar')); 
  
     if ((error*100)/Dicta == 0){ desempenio = "Excelente";}
     if ((error*100)/Dicta < 11 && (error*100)/Dicta > 0  ){ desempenio = "Muy Buena";}
     if ((error*100)/Dicta < 26 && (error*100)/Dicta > 10){ desempenio = "Buena";}
     if ((error*100)/Dicta > 25){ desempenio = "Continuar practicando";}
    ActualizaUsuLec();
 return;
 }


var porcen =Math.round((Dicta * 100) / Lpalabras);
progressBar(porcen, $('#progressBar'));
if (Dice ==  palabra[Dicta]){return}

  Dice =  palabra[Dicta];
  //console.log(Dice.length + " cantidad de letras");
  $("#PTercera").css("display","grid");
 $("#PCuarta").css("display","grid");
 $("#PQuinta").css("display","grid");
 $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
 if (palabra[Dicta].length == 2){
   $("#PTercera").css("display","none");
   $("#PCuarta").css("display","none");
   $("#PQuinta").css("display","none");
   $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr");
 }else if (palabra[Dicta].length == 3){  
  $("#PCuarta").css("display","none");
  $("#PQuinta").css("display","none");
  $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr");
 }else if (palabra[Dicta].length == 4){    
  $("#PQuinta").css("display","none");
  $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr 1fr");
 }else if (palabra[Dicta].length == 5){   
  $(".gridPlantillaPizarra").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
 }
   sayTimeout = setTimeout(function () { 
  
    window.speechSynthesis.cancel();
      if (Dice.length > 1){
        Lee(Gres.ecribirPizarraP + Dice + " ");
      }
      else if (Dice.length == 1){
        Lee(Gres.ecribirPizarraL + Dice + " ");
      }
   
      var letra = document.getElementById('letra');
      letra.innerHTML =  palabra[Dicta].substring(0,1) + " "; 
      document.getElementById('EtiquetaUnoTexto').innerHTML =  palabra[Dicta]; 
      $('#EtiquetaDosTexto').text("");
    }, 100); 




  }


function Limpia()
{ 
 for (var i=1; i < 7; i++) {
  // alert("si");
        $('#P'+i).attr('src', '../../ResB/Punto.png');
        $('#T'+i).attr('src', '../../ResB/TNo.png');
}

}


function waitL(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

