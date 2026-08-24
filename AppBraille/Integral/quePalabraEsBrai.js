var audio = document.createElement('audio');
var PrimerS ="";
var NumPulsar = "";
var MLec = "";
var DiceL ="";
var nlec=0;
var soloNumeros1TVB = "";
var soloNumeros2TVB = "";
var indices = [];
var errorD = [];
var ResCelda= 0;
var yapulsado = 0;
var abajo = false;
var IndiceFin = 0;
var PracticaActual ="0";
var UsuarioActual = "";
var PDic ="";
var MLec;
var IndiceL = "0";
var PrimM;
var PrimeraC="";
var SegM;  
var SegundaC="";
var TerceraC="";
var TerM;
var CuarM;
var CuartoC="";
var pulsada = "";
var vecP = "";
var NNMLec="";
var descubiertasLetras = "";

//var map = {68: false, 83: false, 70: false}; 
$(document).keydown(function(e) { 

    if(e.keyCode != 83 && e.keyCode != 68 && e.keyCode != 70 && e.keyCode != 74 && e.keyCode != 75 && e.keyCode != 76 &&  e.keyCode != 32  &&  e.keyCode != 27 )
        {
         LeeCGB("Usar el teclado virtual Braille");
         return;
        }


    if (ResCelda == 0){
        //console.log(e.keyCode);
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
        $("#box1").css("background-color","black");          
        $("#box1").css("color","white");
        pulsada = ""; pulsada = "";} //F

    
    
    if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
        $("#box2").css("background-color","black");          
        $("#box2").css("color","white"); pulsada = "";} //D
    
   
    
    if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
        $("#box3").css("background-color","black");          
        $("#box3").css("color","white"); pulsada = "";} //S		

   

    if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
        $("#box4").css("background-color","black");          
        $("#box4").css("color","white"); pulsada = "";} //J



    if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
        $("#box5").css("background-color","black");          
        $("#box5").css("color","white"); pulsada = "";} //K

  
        
    if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
        $("#box6").css("background-color","black");          
        $("#box6").css("color","white"); pulsada = "";} //L


    }
  


    abajo = true;
});



$(document).keyup(function(e) { 
  e.preventDefault();

 if (e.keyCode == 112){
    return;
 } 

 if (inicio == false){
   // LeeCGB("pulsar barra espaciadora para iniciar");
   // return;
 }


    $("#braille").css("display","grid");
    $("#Pbraille").css("display","none");
   // coloresPizarra();

  abajo = false;     
	 d.innerHTML =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     $(".etq").html('');

     evaluaQesBraille(PrimerS); 

});


function evaluaQesBraille(numeros)
    { 
       // QueNumeros();
        PrimeraC = PrimeraC.toUpperCase();
       // //console.log(PrimerS + " ?");
        if (PrimerS == ""){return;}

        try {
          var prueba =  eval("P"+numeros)
        } catch (error) {
            LeeCGB("no es una letra");
            var miVar3 = setTimeout(function(){ 
                $(".etq").html('');  
                $(".box").css("color","black");
                $(".box").css("background-color","white");            
               },1000);  
            return;
        }

    console.log("evalua " + numeros + " Palabra: " +  palabraD + " " + PrimeraC  );
   var cuentaIguales = 0;
   var letra= "";
   var quePletra= "";

    for (let i = 0; i < palabraD.length; i++) {
      
        if (palabraD[i] == eval("P"+numeros) &&  $("#l"+ i ).data("lista") != "si"){
            cuentaIguales++;
            descubiertas++;            
            $("#l"+ i ).text(palabraD[i]);
            $("#l"+ i ).data("lista","si");
            letra = palabraD[i];
            if (letra == 'á'){letra = 'a acentuada'}
            if (letra == 'é'){letra = 'e acentuada'}
            if (letra == 'í'){letra = 'i acentuada'}
            if (letra == 'ó'){letra = 'o acentuada'}
            if (letra == 'ú'){letra = 'u acentuada'}
            if (letra == 'y'){letra = 'i griega'}
            if (letra == 'ü'){letra = 'u con diéresis'}   
          
            quePletra+=  (i+1).toString() + ", ";
                      
        }else  if (palabraD[i] == eval("P"+numeros) &&  $("#l"+ i ).data("lista") == "si"){
            letra = palabraD[i];
            if (letra == 'á'){letra = 'a acentuada'}
            if (letra == 'é'){letra = 'e acentuada'}
            if (letra == 'í'){letra = 'i acentuada'}
            if (letra == 'ó'){letra = 'o acentuada'}
            if (letra == 'ú'){letra = 'u acentuada'}
            if (letra == 'y'){letra = 'i griega'}
            if (letra == 'ü'){letra = 'u con diéresis'}               

            if (eval("P"+numeros) == "o" && palabraD.includes("ó")){
                LeeCGB( "ya  está la letra:  " +  eval("P"+numeros) + ", en esta palabra. pero también se debe escribir la letra o acentuada " ); 
                console.log("pero si o acentuada??");}
           if (eval("P"+numeros) == "i" && palabraD.includes("í")){
                    LeeCGB( "ya  está la letra:  " +  eval("P"+numeros) + ", en esta palabra. pero también se debe escribir la letra i acentuada " ); 
                    console.log("pero si i acentuada??");    
            } else{
                LeeCGB("ya está " + letra);  
            } 
            
            return;
        }
      

    }

    if ( quePletra.length == 3){
       LeeCGB("letra: " + quePletra  + ". " + letra);           
    }
    else if ( quePletra.length > 3){
        quePletra = quePletra.replace(/,/g , ",");
        console.log(quePletra.trim() + "/ " + quePletra.length)
        let cadenaCorregida = quePletra.trim().substring(0, quePletra.trim().length - 1);
        LeeCGB("letras: " + cadenaCorregida  + ". " + letra);           
    }
     
    //Bien
    var quedan = ". Quedan: " + (palabraD.length - descubiertas) + " letras por descubir"; 
    if ((palabraD.length - descubiertas) == 0){             
      
        if ((palabraD.length - descubiertas) == 0){
            LeeCGB("muy bien palabra " +  palabraD + " encontrada ")
          var miVar2 = setTimeout(function(){  
       
            if (Qpalabra == "Animal"){  
            $("#mimg").attr("src","./../../ResB/" +SonidoA[posL] +".png"); 
            rutaAudio = "./../../ResB/"+SonidoA[posL] +".mp3"; 
            }else  if (Qpalabra == "Instrumento"){  
                $("#mimg").attr("src","./../../ResB/" +SonidoI[posL] +".png"); 
                rutaAudio = "./../../ResB/"+SonidoI[posL] +".mp3"; 
            }
                 
            audio.src =rutaAudio;
          
            audio.volume=0.2
            audio.load();  
            audio.play();
          },4000);       
            audio.onended = function() {            
             LeeCGB( "pulsar barra espaciadora para descubrir otra");
             var miVar3 = setTimeout(function(){ 
                    $("#mimg").attr("src","./../../ResB/QE.png"); 
                    $(".etq").html('');  
                    $(".box").css("color","black");
                    $(".box").css("background-color","white"); 
                    for (let i = 0; i < palabraD.length; i++) {
                        $("#l"+ i ).text("") ;
                    } 
            },3000);       
             }
         return;   

           
        }else if ((palabraD.length - descubiertas) == 1){
           quedan = ". Queda una letra por descubir";
        }       
       if (cuentaIguales > 1){
           LeeCGB("hay " + cuentaIguales + ",  " +  letra + quedan );
       }else if (cuentaIguales == 1){
           LeeCGB(letra + ". " + quedan);  
       }   
     }
    else if (cuentaIguales ==  0){
        if (eval("P"+numeros) == "i" && palabraD.includes("í")){
            LeeCGB( "no está la letra:  " +  eval("P"+numeros) + ", en esta palabra. Escribe la letra i acentuada " );     
        }
        else if (eval("P"+numeros) == "o" && palabraD.includes("ó")){
            LeeCGB( "no está la letra:  " +  eval("P"+numeros) + ", en esta palabra. Escribe la letra o acentuada " ); 
           console.log("pero si o acentuada??");
        }  
        else{
            LeeCGB( "no está la letra:  " +  eval("P"+numeros) + ", en esta palabra" );
        }
        
    }

           var miVar3 = setTimeout(function(){ 
             $(".etq").html('');  
             $(".box").css("color","black");
             $(".box").css("background-color","white");            
            },1000);            




   

    }

   

function DictaPalabra()
{
	  $(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");

    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	

    $("#letraD").text("");
    $("#Primera").css("display","grid");
    $("#palabraD").text("");

   if (Qpalabra == "Animal"){     
        console.log("dicta " + posL + " " +SonidoA.length + "  " +SonidoA[posL]);
         palabraD =SonidoA[posL];  
         if ( posL ==SonidoA.length){
            LeeCGB("fin de la actividad. resolviste todos los sonidos");
            return;
          }      
   } 
   else if (Qpalabra == "Instrumento"){     
    console.log("dicta " + posL + " " +SonidoI.length + "  " +SonidoI[posL]);
     palabraD =SonidoI[posL];
     if ( posL ==SonidoA.length){
        LeeCGB("fin de la actividad. resolviste todos los sonidos");
        return;
      }
   } 



$("#vecPalabra").css("grid-template-columns","repeat(" + palabraD.length + ", 1fr)"); 
if (Qpalabra == "Animal"){  
   LeeCGB("Escribe. es un animal de " + palabraD.length + " letras");
}else if (Qpalabra == "Instrumento"){  
    LeeCGB("Escribe. es un instrumento de " + palabraD.length + " letras");
 }

for (let i = 0; i < 11; i++) {  
  $("#l"+ (i) ).text("");  
}


//LetraInicial =SonidoA[posL].substring(0,1).toUpperCase();
//console.log(posL);


}





    function LeeConSonido(texto){

        // $("#Primera elem").css("border","2px solid black");	
        /// $("#PPrimera elem").css("border","2px solid black");	
        //$(".label").css("visibility","hidden");  
        $(".label").html(texto);
     window.speechSynthesis.cancel();
     msgNo = new SpeechSynthesisUtterance(texto);
     msgNo.voice = speechSynthesis.getVoices()[Voz];
     msgNo.volume=Volumen;
     msgNo.rate =Veloz;	
     msgNo.pitch = Tono;
     
     msgNo.onend = function(event) {
        posL++;   
        $(".label").html("");
        $(".label").css("width","auto");
        DictaSonido();
        $("#mimg").attr("src","./../../ResB/QE.png");      
     }
     
     window.speechSynthesis.speak(msgNo);
     
     
     
     
     }


    function findValueInArray(value,arr){
        var result = false;       
        for(var i=0; i<arr.length; i++){
          var name = arr[i];
          if(name.trim() == value.trim()){
            result = true;
            break;
          }
        }
      
        return result;
      }

document.addEventListener("DOMContentLoaded",function(event){
    
    });
function ActualizaUsuLecNo()
{
    var nkey;       
    if (document.title == "Práctica Uno"){nkey = "Alfabeto"}
    if (document.title == "Práctica otros Signos"){nkey = "Signos"}
    if (document.title == "Práctica Signos Matemáticos"){nkey = "Matematicos"}


    var Dactilo = {};
   termino = "si";
   KEY = UsuarioActual + nkey;
   get().then(function (value) {

  


KEY ="UsuarioActual";
get().then(function (value) {
   KEY = value + nkey;
   VALUE = errorD.toString();// DactiloAc;   
   set();});

   //console.log(KEY + ">>>>>>>>>>> " + errorD.toString());

if (errorD.length > 1) {
    Lee(Gres.findelap + errorD.length  + " errores.");
} 
else if (errorD.length == 1 ){
Lee(Gres.findelapUn);
}
else if (errorD.length == 0 ){
Lee(Gres.findelapCorr);
}



});

}




function QueNumeros()
{
 return;
    console.log("queNumeros??????")
   // window.speechSynthesis.cancel();
    PrimM = -1;
    SegM = -1;  
    SegundaC="";
    TerceraC="";
    TerM = -1;
    CuarM = -1;
    CuartoC="";
    $(".box").css("border","2px dashed black");
    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");
    $("#Segunda").css("display","none");
    $("#PSegunda").css("display","none");
    $("#Tercera").css("display","none");
    $("#Cuarta").css("display","none");
    $("#PSegunda").css("display","none");
    $("#PTercera").css("display","none");
    $("#PCuarta").css("display","none");


    ///fin
    if (alfab.length ==  IndiceL)
    {
     //   ActualizaUsuLec();
        return;
    }



}

function queDice()
{ 
    //console.log("que dice " +  keys[nlec] )
	if (keys[nlec] == "M")
	{DiceL = "mayúscula. ";
	$("#EtiquetaUnoTexto").css("font-size","8vw");
	 }	 
	else if ( keys[nlec].toString().trim() == ".")
	{
       
        DiceL = "punto ortográfico o apóstrofo. ";
        //console.log(nlec + " /" + keys[nlec]+ "/"  + DiceL);
    }
	else if ( keys[nlec] == ",")
	{DiceL = "coma ortográfica o punto decimal";}
	else if ( keys[nlec] == ";")
	{DiceL = "punto y coma";}
	else if ( keys[nlec] == ":")
	{DiceL = "dos puntos";}
	else if ( keys[nlec] == "?")
	{DiceL = "interrogación";}
	else if ( keys[nlec] == "!")
	{DiceL = "admiración o suma";}
	else if ( keys[nlec] == "(")
	{DiceL = "abre paréntesis";}
	else if ( keys[nlec] == ")")
	{DiceL = "cierra paréntesis";}
	else if ( keys[nlec] == "[")
	{DiceL = "abre corchete";}
	else if ( keys[nlec] == "]")
	{DiceL = "cierra corchete";}
	else if ( keys[nlec] == "{")
	{DiceL = "abre llave";}
	else if ( keys[nlec] == "}")
	{DiceL = "cierra llave";}
	else if ( keys[nlec] == "-")
	{DiceL = "guión medio o resta";}
	else if ( keys[nlec] == "—")
	{DiceL = "guión de diálogo";}
	else if ( keys[nlec] == "_")
	{DiceL = "guión bajo";}
	else if ( keys[nlec] == "*")
	{DiceL = "asterisco o resaltador de texto";}
	else if ( keys[nlec] == "'")
	{DiceL = "apóstrofo";}
	else if ( keys[nlec] == "/")
	{DiceL = "barra oblicua";}	
	else if ( keys[nlec] == "º")
	{DiceL = "grados";}
	else if ( keys[nlec] == "|")
	{DiceL = "barra vertical";}
	else if ( keys[nlec] == "$")
	{DiceL = "signo pesos ";}
	else if ( keys[nlec] == "÷")
	{DiceL = "división";}
	else if ( keys[nlec] == "\"")
	{DiceL = "comillas o multiplicación";}
	else if ( keys[nlec] == "&")
	{DiceL = "ampersand";}
	else if ( keys[nlec] == "÷")
	{DiceL = "división";}
    else if ( keys[nlec] == "&"){DiceL = "ampersand ";}
    else if ( keys[nlec] == "~"){DiceL = "aproximadamente igual ";}
    else if ( keys[nlec] == "≠"){DiceL = "desigual o diferente ";}
    else if ( keys[nlec] == "«"){DiceL = "mucho menor ";}
    else if ( keys[nlec] == "»"){DiceL = "mucho mayor ";}
    else if ( keys[nlec] == "%"){DiceL = "porciento ";}
    else if ( keys[nlec] == "=="){DiceL = "exactamente igual ";}
    else if ( keys[nlec] == "○"){DiceL = "círculo ";}
    else if ( keys[nlec] == "□"){DiceL = "cuadrado ";}
    else if ( keys[nlec] == "▌"){DiceL = "rectángulo ";}
    else if ( keys[nlec] == "⌂"){DiceL = "polígono ";}
    else if ( keys[nlec] == "⊿"){DiceL = "triángulo rectángulo ";}
    else if ( keys[nlec] == "△"){DiceL = "triángulo equilátero ";}
    else if ( keys[nlec] == "/"){DiceL = "barra oblicua ";}
    else if ( keys[nlec] == "@"){DiceL = "arroba o prefijo de minúscula o interruptor estenográfico ";}
    else if ( keys[nlec] == "#"){DiceL = "signo número ";}
    else if ( keys[nlec] == "<"){DiceL = "menor ";}
    else if ( keys[nlec] == ">"){DiceL = "mayor ";}
    else if ( keys[nlec] == "≥"){DiceL = "mayor o igual ";}
    else if ( keys[nlec] == "≤"){DiceL = "menor o igual ";}
    else if ( keys[nlec] == "="){DiceL = "igual ";}
    

}
function acentos(l) {
 if (l == "á"){ return "a con acento";}
 if (l == "é"){ return "e con acento";}
 if (l == "í"){ return "i con acento";}
 if (l == "ó"){ return "o con acento";}
 if (l == "ú"){ return "u con acento";}
 if (l == "ü"){ return "u con diéresis";}
 if (l == "y"){ return "y griega";}
 else {return l }
}



function llamaestilo1(){
    $("#linkestilo").attr("href", "./../../ResB/estilo1.css");
   // //console.log("llamo estilo  1 11111111111111111111111111111111 ");
}
function llamaestilo2(){
    $("#linkestilo").attr("href", "./../../ResB/estilo2.css");
    //console.log("llamo estilo 2");
}
function llamaestilo3(){
    $("#linkestilo").attr("href", "./../../ResB/estilo3.css");
    //console.log("llamo estilo 3");
}
function llamaestilo4(){
    $("#linkestilo").attr("href", "./../../ResB/estilo4.css");
    //console.log("llamo estilo 4");
}
function playSound(){
    if (controlAudio == "con" ) {
    rutaAudio = "./../../ResB/Ding.mp3"
    audio.src =  rutaAudio;
    audio.load();    
    audio.play();
    }
}
function Informe()
{        
 //console.log( "signo escrito?? " + ResCelda + " " + PrimeraC );
 queDice()    
 if (ResCelda == 0 ){Lee( DiceL) ;}
 if (ResCelda == 1 ){Lee( DiceL + ". completar la segunda celda") ;}
 else if (ResCelda == 2 ){Lee( DiceL  + ". completar la tercera celda") ;}
 else if (ResCelda == 3 ){Lee(DiceL + ". completar la cuarta celda") ;}
}