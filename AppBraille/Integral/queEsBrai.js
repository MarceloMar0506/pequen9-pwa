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
    LeeCGB("pulsar barra espaciadora para iniciar");
    return;
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
        QueNumeros();
        PrimeraC = PrimeraC.toUpperCase();
       // //console.log(PrimerS + " ?");
        if (PrimerS == ""){return;}

    //console.log("evalua " + numeros + " primeraC " + PrimeraC +  " resCel " + ResCelda + " error " + errorD.toString());

        //console.log(IndiceFin + " === "  +  nlec)
        
        if (termino == "si")
        {
           if (errorD.length > 1) {
               Lee(Gres.findelap + errorD.length  + " errores.");
           } 
           else if (errorD.length == 1 ){
           Lee(Gres.findelapUn);
           }
           else if (errorD.length == 0 ){
           Lee(Gres.findelapCorr);
           }
           return;
        }
        console.log(numeros + " == "  + PrimeraC + " rescelda: " + ResCelda )
        ///Evalua
        if (ResCelda == 0){
           if (numeros ==  PrimeraC)
              {
                  //ResCelda++;
                
                  PrimerS = "";
               
              //  $("#Segunda elem").css("border","2px solid black");
                $("#mimg").attr("src","./../../ResB/" + SonidoQ[posL] +".png"); 
                $("#palabraD").text(SonidoQ[posL]);
                //playSound();
                var letra =  SonidoQ[posL].substring(0,1);
                var palabra =SonidoQ[posL];
                var dpuntos = PrimeraC.split('');
                dpuntos = dpuntos.toString().replace(/,/g , ", ");
                $("#letraD").text(letra);
                letra= acentos(letra);
                audio.pause();
                LeeConSonido("bien. " + letra + ": " + dpuntos +  ". "  + palabra + ". ");
                console.log("bien ???  " + letra  + ". " + palabra);  
                
                               
            //     var miVar3 = setTimeout(function(){ 
            //    $(".etq").html(''); 
              //  posL++;  
              
            //     DictaSonido();
            //     $("#mimg").attr("src","./../../ResB/QE.png"); 
            //     return;
            //     },5000);  
                
                return;

           
             }
           else if (numeros !=  PrimeraC)
           {
           console.log( numeros + "EEEEEEEEEEEEEEEEEEEEEEEEE  != " +  PrimeraC)
            var dpuntos = PrimeraC.split('');
            dpuntos = dpuntos.toString().replace(/,/g , ", ");
            // $(".teclas .box").css("color","black");
            // $(".teclas .box").css("background-color","white");
            //console.log(DiceL + " no es?")
            $(".box").css("color","black");
            $(".box").css("background-color","white");
            $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
        
            $("#Primera elem").css("border","2px solid black");	
            $("#PPrimera elem").css("border","2px solid black");	
        
            

            DiceL = acentos( SonidoQ[posL].substring(0,1))
            DiceL= acentos(DiceL);
            LeeCGB("no es '" + DiceL + "'. escribir " + dpuntos);    
           //console.log("mal primera ?????????????????? " + NNMLec  +  " " + numeros + " !=  " + PrimeraC);
           //borra los puntos de esta celda mal escritos
        //    $("#Primera elem").css("background-color","white");
        //    $("#Primera elem").css("color","black");

           //graba vector de error con la palabra
           var PDic = $("#Mleccion").text(); 
           if (PDic == ","){PDic = "c"} 
           const arrayP = errorD.toString();
              if (arrayP.indexOf(PDic.toString()) == -1){          
                     errorD.push(" " + PDic);
                   }          
           return; 
           }
           return; 
        }


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

  
//if (document.title == "Qué es"){

    ///fin
    if (alfab.length ==  IndiceL)
    {
        //alert("fin");
     //   ActualizaUsuLec();
        return;
    }

   // vecP =   eval("D" + alfab[IndiceL]);
    vecP = eval("D" +  SonidoQ[posL].substring(0,1));
    console.log(vecP  + " primera letra dictada o::: " + alfab[IndiceL])
    PrimM =  vecP.toString().indexOf("_");    
    if (PrimM > 0){
        PrimeraC = vecP.substring(0,PrimM);
    }
    else {
	  PrimeraC =  vecP;
    }


  //  $("#Mleccion").text(alfab[IndiceL]);//signosT.get(keys[nlec]));//); 
    DiceL = alfab[IndiceL];
//} 

  
   
   // $("#Mleccion").text(keys[IndiceL]);
   // DiceL =  vecP[0];
	// $(".box").css("color","black");
    // $(".box").css("background-color","white");
    // $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");

    // $("#Primera elem").css("border","2px solid black");	
    // $("#PPrimera elem").css("border","2px solid black");	
     

  
   

    PrimM =  vecP.toString().indexOf("_");
    
    if (PrimM > 0){
        PrimeraC = vecP.substring(0,PrimM);
    }
    else {
	  PrimeraC =  vecP;
    }
    SegM =  vecP.toString().indexOf("-");
    
	if (SegM > 0){
		SegundaC = vecP.substring(PrimM + 1,SegM);
//        llamaestilo2();
	}
	else  if (SegM < 0  && PrimM > 0){
         SegundaC = vecP.substring(PrimM + 1);
         $("#Segunda").css("display","grid");
         $("#PSegunda").css("display","grid");
         $("#PSegunda").css("padding-right-","9vw");
         $("#Segunda").css("padding-left","9vw");
        //  //console.log("muestra segunda@@@@?? ");
        //  //console.log("muestra segunda?? " + SegundaC + " " + PrimM);
         $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
        // llamaestilo2();
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