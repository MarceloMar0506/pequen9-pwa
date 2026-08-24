var  acentoPulsado = false;
var Dice = "preparando";
var primeravez = true;
var hayQueAcentuar="";
var termino = "no";

var TextoF = "";
var posL = 0;
var Leccion = "";
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
var LLetras=0;
var IndiceU=0;
var ListaEvaluacion=[];      
var ListaUsuario=[];
var LeccionV = ""; 
var DactiloAc;
var DactiloM;
Nusuario ="";
 var nuevoI =0;
 var PracticaA =0;

$(window).keydown(function(event) 
{ 

   if(event.keyCode == 112)
  {
   return false;
  }

  
var ac = document.getElementById('EtiquetaUno').innerHTML;

//Acento agudo
 if(event.keyCode == 222 || event.keyCode == 186 || event.keyCode == 192)
 { 
  ////console.log("acento " + event.keyCode + String.fromCharCode(event.keyCode)); 
  event.preventDefault();
  acentoPulsado = true;
  
  if (hayQueAcentuar != "si") {return;}
  
  window.speechSynthesis.cancel();
  
  
   if( eval("L" + Leccion)[posL] == "á")
       {
       msgNo = new SpeechSynthesisUtterance("Acento, pulsa A");
        $(".label").html("Acento, pulsa A");
       hayQueAcentuar="";
       }
       
      if( eval("L" + Leccion)[posL] == "é")
       {
       msgNo = new SpeechSynthesisUtterance("Acento,  pulsa E");
       $(".label").html("Acento, pulsa E");
       hayQueAcentuar="";
       }
       
      if( eval("L" + Leccion)[posL] == "í")
       {
       msgNo = new SpeechSynthesisUtterance("Acento,  pulsa I");
       $(".label").html("Acento, pulsa i");
       hayQueAcentuar="";
       }
       
    if( eval("L" + Leccion)[posL] == "ó")
       {
       msgNo = new SpeechSynthesisUtterance("Acento,  pulsa O");
       $(".label").html("Acento, pulsa O");
       hayQueAcentuar="";
       }  
       
        if( eval("L" + Leccion)[posL] == "ú")
       {
       msgNo = new SpeechSynthesisUtterance("Acento,  pulsa U");
       $(".label").html("Acento, pulsa U");
       hayQueAcentuar="";
       }
       
  msgNo.voice = speechSynthesis.getVoices()[Voz];
  //msgNo.rate = 0.8;			   
  msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.volume = Volumen;

HablaAnim();
window.speechSynthesis.speak(msgNo);
//sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
  acento="true";
  
  return;
  }


 //Enter Nueva leccion
   if(event.keyCode == 13)
  {
    
     if (termino == "si") 
     {    
           event.preventDefault();
           window.open("../Dactilografia/Lista.html","_self");
	}    
    }    

//Escape regersa a Pequen.info/rompecabezas
   if(event.keyCode == 27)
  { 
     if (termino == "si") 
     {   
    Regresar();
    return; 
	
	}    
	
	if (termino == "no") 
     {    
           event.preventDefault();           
           window.open("../Dactilografia/Lista.html","_self");
           return;
	}    
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
  
   //Cambia la voz
   if(event.keyCode == 18){}

    //retoceso
    if(event.keyCode == 8){
    event.preventDefault();    
    }
    //borra todo
    if(event.keyCode == 46){
    event.preventDefault();
    }     
    
    if(event.keyCode == 17)
      {
       event.preventDefault();
 //console.log(termino + " termino")
if (termino == "nn"){
  termino = "no";
  IniciaTimer();
}

if (Dice  == "preparando")
{
Lee("Cargando la aplicación");
return;
}


 Dice =  eval("L" + Leccion)[posL].toUpperCase();


if (eval("L" + Leccion)[posL].toUpperCase() == "Á")
{ 
Dice ="pulsa. <br/> a acentuada. " + Object.values(Á)[2];
}

if (eval("L" + Leccion)[posL].toUpperCase() == "É" )
{ 
Dice ="pulsa.<br/> e acentuada.<br/> " + Object.values(É)[2];
}
if (eval("L" + Leccion)[posL].toUpperCase() == "Í" )
{ 
Dice ="pulsa.<br/> i acentuada.<br/>" + Object.values(Í)[2];
}
if (eval("L" + Leccion)[posL].toUpperCase() == "Ó" )
{ 
Dice ="pulsa.<br/> o acentuada.<br/> " + Object.values(Ó)[2];
}
if (eval("L" + Leccion)[posL].toUpperCase() == "Ú" )
{ 
Dice ="pulsa.<br/> u acentuada.<br/> " + Object.values(Ú)[2];
}

if (eval("L" + Leccion)[posL].toUpperCase() == "Y" )
{ 
  Dice ="pulsa.<br/> Y";
  LeeCGBD(Dice);
  return;
}
       Lee(Dice);            
	  }    

    
});




function EvaluaLetra(event) {
event.preventDefault();
var x = event.keyCode; 
var xE = event.key; 
//console.log(x +  " keyCode " + String.fromCharCode(x) + " " + xE)

if (x == 13){return;}


if (x == 112)
{

return;
}
//acento return
//console.log(eval("L" + Leccion)[posL] + " acento??? ");
if ( eval("L" + Leccion)[posL] == "á" ||  eval("L" + Leccion)[posL] == "é" ||  eval("L" + Leccion)[posL] == "í" ||  eval("L" + Leccion)[posL] == "ó" ||  eval("L" + Leccion)[posL] == "ú" ){
//console.log(eval("L" + Leccion)[posL] + " acento??? ");
 if (x == 222){return;}
 if (x == 186){return;}
 if (x == 192){return;}
}

//Shift
if (x == 16){return;}


letras_latinas = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ´\\:;,._\\]+$/;

var Texto = xE; // String.fromCharCode(x);
//console.log(x + " xxx " + Texto);

if (x == 32) {Texto = "_"}
//console.log(x + " xxxAAA " + Texto);
if (Texto.match(letras_latinas))
 {

}
else 
{
if (Texto ==  undefined)
{
  //console.log("es acentuada?? " + Texto);
EsAcentuada();
return;
}

}




//Texto = Texto + "_";
// if (Texto == " ") {

// Texto = Texto + "espacio";
// }

if (Texto == ","){Texto = "coma"}
if (Texto == "."){Texto = "punto"}
if (Texto == "-"){Texto = "guion"}

//if (Texto ==  "32"){Texto="_"} 

Tpulsada = Texto.keyCode;


//console.log(Texto + " espacio??? " + Tpulsada);
if (Tpulsada == ",") {Tpulsada = "COMA"; 
document.getElementById('EtiquetaUno').innerHTML ="," }
if (Tpulsada == ".") {Tpulsada = "PUNTO";
document.getElementById('EtiquetaUno').innerHTML ="."}
if (Tpulsada == ";") {Tpulsada = "PUNTOYCOMA";
document.getElementById('EtiquetaUno').innerHTML =";"}
if (Tpulsada == ":") {Tpulsada = "DOSPUNTOS";
document.getElementById('EtiquetaUno').innerHTML =":"}
if (Tpulsada == "-") {Tpulsada = "GUION";
document.getElementById('EtiquetaUno').innerHTML ="-"}
if (Tpulsada == " ") {Tpulsada = "_";
document.getElementById('EtiquetaUno').innerHTML ="_"}

//console.log( eval("L" + Leccion)[posL].toLowerCase() + " == " + Texto.toLowerCase() + " || " +  (eval("L" + Leccion)[posL]  + " == " + Tpulsada));

if (acentoPulsado == true &&  Texto == "a" && eval("L" + Leccion)[posL].toUpperCase()  == "Á") {Tpulsada = "á";}
if (acentoPulsado == true &&  Texto == "e" &&  eval("L" + Leccion)[posL].toUpperCase()  == "É") {Tpulsada = "é";}
if (acentoPulsado == true &&  Texto == "i" &&  eval("L" + Leccion)[posL].toUpperCase()  == "Í" ) {Tpulsada = "í";}
if (acentoPulsado == true &&  Texto == "o" &&  eval("L" + Leccion)[posL].toUpperCase()  == "Ó") {Tpulsada = "ó";}
if (acentoPulsado == true &&  Texto == "u" && eval("L" + Leccion)[posL].toUpperCase() == "Ú") {Tpulsada = "ú";}

//$("#Pie").text(x + " <<<<<<<<<<< " + eval("L" + Leccion)[posL] + "  ==  " + Texto );

//para qwerty Android
if (Texto == ";") {Texto = "ñ"}
//Bien
if ( eval("L" + Leccion)[posL].toLowerCase() == Texto.toLowerCase() || (eval("L" + Leccion)[posL]  == Tpulsada))//Bien

{
event.preventDefault();
window.speechSynthesis.cancel();
Lee('');
 acentoPulsado = false;
$("#EtiquetaUno").attr('style',  'color:black');
if (Texto.length == 1)
{
document.getElementById('EtiquetaUno').innerHTML =  Texto;
} 
 window.speechSynthesis.cancel();
 msgNo = new SpeechSynthesisUtterance(" ");//"Bien "  + Texto );
 if (document.getElementById('EtiquetaUno').innerHTML == "Y" )
 {
 msgNo = new SpeechSynthesisUtterance(" ");// Bien i griega");
 }
 
 msgNo.voice = speechSynthesis.getVoices()[Voz];
 msgNo.rate =Veloz;	
 msgNo.pitch = Tono;
 msgNo.volume = Volumen;
 
 msgNo.onend = function(event) {
 EsperaAnim();
posL = posL +1;
if (LLetras > posL )  
 {
  Dictar();
var audio = new Audio('./../../ResB/Ding.mp3');
audio.volume=Volumen;
 audio.play();
 audio.onended = (event) => {
// Dictar();
}; 
  
 }
 
if (LLetras == posL )  
 {
   
     if ((error*100)/LLetras == 0){ desempenio = "Excelente";}
     if ((error*100)/LLetras < 11 && (error*100)/LLetras > 0  ){ desempenio = "Muy buena";}
     if ((error*100)/LLetras < 26 && (error*100)/LLetras > 10){ desempenio = "Buena";}
     if ((error*100)/LLetras > 25){ desempenio = "Continuar practicando";}
     //console.log(desempenio);
     termino = "si";
     ActualizaUsuLec();
     return;
     
 }
 
 }

 HablaAnim();
 window.speechSynthesis.speak(msgNo); 
}


//Mal
//else if (  eval("L" + Leccion)[posL].toLowerCase() !=  Texto &&  eval("L" + Leccion)[posL].toUpperCase() !=  Texto )// Mal
else
{
  if (Texto =="Control"){return}
  if (Texto =="Escape"){return}

//console.log(eval("L" + Leccion)[posL].toLowerCase() + " != "  + Texto);
event.preventDefault();

if (eval("L" + Leccion)[posL].toUpperCase() == "Á" || eval("L" + Leccion)[posL].toUpperCase() == "É" || eval("L" + Leccion)[posL].toUpperCase() == "Í" || eval("L" + Leccion)[posL].toUpperCase() == "Ó" ||  eval("L" + Leccion)[posL].toUpperCase() == "Ú" )
{
 error = error +1;
 hayQueAcentuar = "si";
 acentoPulsado = false;
 
 if (eval("L" + Leccion)[posL].toUpperCase() == "Á")
{ 

Dice ="pulsa nuevamente a acentuada. " + Object.values(Á)[2];
//Muestra ="Pulsa "  +   eval("L" + Leccion)[posL]  + Object.values(eval( eval("L" + Leccion)[posL]))[2]; 
}

if (eval("L" + Leccion)[posL].toUpperCase() == "É" )
{ 
Dice ="pulsa nuevamente, e acentuada. " + Object.values(É)[2];
//estra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
if (eval("L" + Leccion)[posL].toUpperCase() == "Í" )
{ 
Dice ="pulsa nuevamente, i acentuada. " + Object.values(Í)[2];
//dstra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
if (eval("L" + Leccion)[posL].toUpperCase() == "Ó" )
{ 
Dice ="pulsa nuevamente, o acentuada. " + Object.values(Í)[2];
//Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
if (eval("L" + Leccion)[posL].toUpperCase() == "Ú" )
{ 
Dice ="pulsa nuevamente, u acentuada. " + Object.values(Ú)[2];
//Muestra ="Pulsa "  +   LLetras[posL]  + Object.values(eval( LLetras[posL]))[2]; 
}
var audio = new Audio('./../../ResB/Blep.mp3');
audio.volume=Volumen;
audio.play();
audio.onended = (event) => {
Lee(Dice);
}
 return;
}





var x = event.keyCode; 

if( eval("L" + Leccion)[posL] == "PUNTOYCOMA")
       {
        Lee("para escribir Punto y coma, Pulsa mayúscula y coma");
        // $('.CTexto').val('');   
       return;
       }
       
 if( eval("L" + Leccion)[posL] == "DOSPUNTOS")
       {
        Lee("para escribir Dos Puntos, Pulsa mayúscula y punto");
        // $('.CTexto').val('');   
       return;
       }
   
 if( eval("L" + Leccion)[posL] == "_")
       {
        Lee("espacio, pulsa barra espaciadora");
        // $('.CTexto').val('');   
       return;
       }
   
       


if (hayQueAcentuar == "si") {
EsAcentuada();
//Lee("pulsa acento y luego la letra ");
return;
}

//F4
if (x == 116){return;}
//acento
if (x == 222){return;}
if (x == 192){return;}

if (x == 113 || x == 114 || x == 115 || x == 119 ){return}		 

if (Texto.includes("espacio")) {
 Texto= "";
 return;
 }


var donde="";
var LetraAp =  eval("L" + Leccion)[posL].toUpperCase();
var Tpulsada = Texto.toUpperCase();

if (Tpulsada == ",") {Tpulsada = "COMA"}
if (Tpulsada == ".") {Tpulsada = "PUNTO"}
if (Tpulsada == ";") {Tpulsada = "PUNTOYCOMA"}
if (Tpulsada == ":") {Tpulsada = "DOSPUNTOS"}
if (Tpulsada == "-") {Tpulsada = "GUION"}
if (Tpulsada == "_") {Tpulsada = "ESPACIO"}

if (LetraAp == "Á" &&   Tpulsada == "´" )
{
Lee("pulsa nuevamente acento y luego A");
Texto= "";
return;
}

if (LetraAp == "É" &&   Tpulsada == "´" )
{
Lee("pulsa nuevamente acento y luego E");
Texto= "";
return;
}

if (LetraAp == "Í" &&   Tpulsada == "´" )
{
Lee("pulsa nuevamente acento y luego I");
Texto= "";
return;
}

if (LetraAp == "Ó" &&   Tpulsada == "´" )
{
Lee("pulsa nuevamente acento y luego o");
Texto= "";
return;
}

if (LetraAp == "Ú" &&   Tpulsada == "´" )
{
Lee("pulsa nuevamente acento y luego U");
Texto= "";
return;
}
try {

  if (Object.values(eval(LetraAp))[0]  ==  Object.values(eval(Tpulsada))[0]) 
{ donde =Gres.EnLaMisma;}

var FilaDonde = Object.values(eval(LetraAp))[0];
var FilaPulsada = Object.values(eval(Tpulsada))[0];

if (FilaDonde ==  FilaPulsada) { donde = Gres.EnLaMisma;}
if (FilaPulsada - FilaDonde == 1)   {  donde = Gres.MasArriba } 
if (FilaPulsada - FilaDonde == 2)   {  donde = Gres.MasArriba2} 
if (FilaPulsada - FilaDonde == -1)   {  donde = Gres.MasAbajo} 
if (FilaPulsada - FilaDonde == -2)   {  donde = Gres.MasAbajo2} 

if(donde == Gres.EnLaMisma)
{ 
if (Object.values(eval(LetraAp))[1]   >  Object.values(eval(Tpulsada))[1]) 
{donde = Gres.EnLaMisma + Gres.Mderecha; }

if (Object.values(eval(LetraAp))[1]  < Object.values(eval(Tpulsada))[1])
{donde = Gres.EnLaMisma + Gres.Mizquierda; }
}
donde = donde + ". " + Object.values(eval(LetraAp))[2];

 error = error +1 ;
 
  window.speechSynthesis.cancel();
  Dice=Nusuario + ". No es  " + eval("L" + Leccion)[posL] + ". " + donde;
  //$(".label").html(Dice);
 // msgNo = new SpeechSynthesisUtterance($(".label").text());
Dice = Nusuario + ". No es  " + eval("L" + Leccion)[posL] + ". " + donde;
 // $(".label").html(Dice);  
 if ( eval("L" + Leccion)[posL]  == "y" )
 {
 //msgNo = new SpeechSynthesisUtterance(Nusuario + " No es i griega " + ". " + donde);
Dice = Nusuario + " No es i griega " + ". " + donde;
 } 
  
} catch (error) {  
  donde =  Object.values(eval(LetraAp))[2];
  Dice = Nusuario + ". No es  " + eval("L" + Leccion)[posL] + ". " + donde + ". ";
}
 
var audio = new Audio('./../../ResB/Blep.mp3');
  audio.volume=Volumen;   
  audio.play();
  audio.onended = (event) => {
  LeeCGB(Dice);
}

return;
}
}


function LeeLeccion()
{

 
//if (primeravez == false) {return};

var miVar2 = setTimeout(function(){
//if (primeravez == false) {return};
primeravez = false;

KEY = 'Practica';
get().then(function (value) {
PracticaA = value;
});


KEY = UsuarioActual + 'Dactilografia';
get().then(function (value) {

if (PracticaA == 1){$("#nprac").html("LÍNEA DEL MEDIO")}
if (PracticaA == 2){$("#nprac").html("DEDO ÍNDICE")}
if (PracticaA == 3){$("#nprac").html("DEDO MEDIO")}
if (PracticaA == 4){$("#nprac").html("DEDO ANULAR")}
if (PracticaA == 5){$("#nprac").html("DEDO MEÑIQUE")}
if (PracticaA == 6){$("#nprac").html("ACENTOS")}

Nusuario = UsuarioActual;
Leccion = PracticaA;


var arr;
var res = eval("L" + Leccion);
arr = res.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

$("#letras").html("LETRAS: " + arr);
LLetras =  eval("L" + Leccion).length;
//console.log(eval("L" + Leccion).toString());
//Inicio

  if (Leccion == 1){
    Dice=  Gres.dactilografia;
  }
  else if (Leccion == 2){
    Dice= Gres.dIndice;
  }
  else if (Leccion == 3){
    Dice= Gres.dMedio;
  }
  else if (Leccion == 4){
    Dice= Gres.dAnular;
  }
  else if (Leccion == 5){
    Dice= Gres.dMeñique;
  }
  else if (Leccion == 6){
    Dice= Gres.dAcentos;
  }


$(".label").css('display','block');
$(".label").css('visibility','visible');
//console.log(Leccion + " " + Dice);

Dictar();

}).catch(function(err) {
    
  //console.log(Leccion + " Error " + Dice + " " + err);
});

}, 10); 


}



function ActualizaUsuLec()
    {
     //console.log(tiempoEvalua + " tiempoEvalua");
     var Dactilo = {};
    termino = "si";   
    KEY = UsuarioActual + 'Dactilografia';
    get().then(function (value) {
      try {
      
Dactilo = {
Practica1:value.Practica1,
Practica2:value.Practica2,
Practica3:value.Practica3,
Practica4:value.Practica4,
Practica5:value.Practica5,
Practica6:value.Practica6,
Practica7:value.Practica7,
Practica8:value.Practica8,
Practica9:value.Practica9,
Practica10:value.Practica10,
Practica11:value.Practica11,
Practica12:value.Practica12,
Practica13:value.Practica13,
Practica14:value.Practica14,
Practica15:value.Practica15,
Practica16:value.Practica16,
Practica17:value.Practica17,
Practica18:value.Practica18,
Practica19:value.Practica19,
Practica20:value.Practica20,
Practica21:value.Practica21,
Practica22:value.Practica22,
};

var DactiloM = [];

dice = tiempoEvalua;

if (dice.includes(":") ) {
  dice = dice + " segundos";
}

if (dice.includes("01:") )
 {
    dice = dice.replace("01:", " un minuto ");
 } 
 else if (!dice.includes("01:") && !dice.includes("00:"))
 { 
   dice = dice.replace(":", " minutos ");
 }

    DactiloM["Practica" + PracticaA]= desempenio + ", " + dice;
    var DactiloAc = Object.assign(Dactilo, DactiloM);

    ///Actualiza Bd
    KEY = UsuarioActual + 'Dactilografia';
    VALUE = DactiloAc;   
    set().then(function (value) {

    });
  } catch (error) {

    //console.log(error); 
    var DactiloM = [];

    dice = tiempoEvalua;

if (dice.includes(":") ) {
  dice = dice + " segundos";
}

if (dice.includes("01:") )
 {
    dice = dice.replace("01:", " un minuto ");
 }

 if (!dice.includes("01:") && !dice.includes("00:"))
 { 
   dice = dice.replace(":", " minutos ");
 }

    DactiloM["Practica" + PracticaA]= desempenio + ", " + dice;
    var DactiloAc = Object.assign(Dactilo, DactiloM);
    ///Actualiza Bd    
    KEY = UsuarioActual + 'Dactilografia';
    VALUE = DactiloAc;   
    set().then(function (value) { 
    

  });
}

});



progressBar(100);

dice = tiempoEvalua;
//console.log(dice) + " tiempo evalua??";

//console.log(dice);
if (dice.includes(":") ) {
  dice = dice + " segundos";
}
if (dice.includes("00:") )
 {
    dice = dice.replace("00:", " ");
 }

if (dice.includes("01:") )
 {
    dice = dice.replace("01:", " un minuto ");
 }

 if (!dice.includes("01:") && !dice.includes("00:"))
 { 
   dice = dice.replace(":", " minutos ");
 }

if (desempenio == "Continuar practicando")
{
  Lee("práctica finalizada. pulsa escape para salir");
}

if (desempenio != "Continuar practicando")
{
   Lee(desempenio + " práctica tiempo: " +  dice + ". escape para salir");
  //Lee("¡" + UsuarioActual + ", " + desempenio + " práctica! tiempo: " +  ". escape para salir");
}
     
}



function EsAcentuada()
{
if (event.keyCode == 32){return}
if (event.keyCode == 116){return}


var LetraAp =  eval("L" + Leccion)[posL].toUpperCase();
// var Tpulsada =  $('.CTexto').val().toUpperCase();

if (LetraAp == "Á" )
{
Lee("pulsa nuevamente acento y luego A");
// $('.CTexto').val("");
hayQueAcentuar="si";
return;
}

if (LetraAp == "É"  )
{
Lee("pulsa nuevamente acento y luego E");
// $('.CTexto').val("");
hayQueAcentuar="si";
return;
}

if (LetraAp == "Í"  )
{
Lee("pulsa nuevamente acento y luego I");
// $('.CTexto').val("");
hayQueAcentuar="si";
return;
}

if (LetraAp == "Ó")
{
Lee("pulsa nuevamente acento y luego o");
// $('.CTexto').val("");
hayQueAcentuar="si";
return;
}

if (LetraAp == "Ú" )
{
Lee("pulsa nuevamente acento y luego U");
// $('.CTexto').val("");
hayQueAcentuar="si";
return;
}

}


function SaleClickLeccion()
{

     if (termino == "si") 
     {   
    Regresar();
    return; 
	
	}    
	
	if (termino == "no") 
     {    
           event.preventDefault();           
           window.open("../Dactilografia/Lista.html","_self");
           return;
	}    
    

}



function Dictar()
{
  $(".label").css("visibility","visible");
  $(".label").css('display','block');
  //console.log(LLetras + " == " +   posL)
if (LLetras  ==   posL) {return;}

//LLetras =  eval("L" + Leccion).length;

window.speechSynthesis.cancel();
hayQueAcentuar="";
document.getElementById('EtiquetaUno').innerHTML = "_";
//$("#EtiquetaUno").fadeTo( "slow", 0 );
var   Dice =  eval("L" + Leccion)[posL] ;

 ////console.log( eval("L" + Leccion)[posL]);
$(".col").css({'border': 'none'});
$(".col").css({'box-shadow': 'none' });
$("#" + eval( "L" + Leccion)[posL]).css({'border': '2px solid blue','border-radius': '6px' });
$("#" + eval( "L" + Leccion)[posL]).css({'box-shadow': '5px 5px 16px -1px rgba(14,66,179,1)' });
//$("#EtiquetaUno").text(eval("L" + Leccion)[posL]);
Muestra ="Pulsa: "  +   eval("L" + Leccion)[posL];

if( eval("L" + Leccion)[posL] == "COMA")
{
Dice =",   coma" ;
Muestra ="Pulsa: Coma";
}

if( eval("L" + Leccion)[posL] == "PUNTO")
{
Dice =",   punto" ;
Muestra ="Pulsa: Punto";
}
 if( eval("L" + Leccion)[posL] == "PUNTOYCOMA")
{
Dice =", ,  punto y coma" ;
Muestra ="Pulsa: Punto y coma";
}
  if( eval("L" + Leccion)[posL] == "DOSPUNTOS")
{
Dice =", ,  dos puntos" ;
Muestra ="Pulsa: dos puntos";
}
       
if( eval("L" + Leccion)[posL] == "GUION")
  {
  Dice =", ,  guión" ;
  Muestra ="Pulsa: guión";
  }
  
  if( eval("L" + Leccion)[posL] == "_")
 {
 Dice =", ,  espacio" ;
 Muestra ="Pulsa: ESPACIO";
 }       
  if( eval("L" + Leccion)[posL] == "y")
 {
 Dice =", ,  i griega" ;
 Muestra ="Pulsa: y";
 }
 
  if( eval("L" + Leccion)[posL] == "á")
 {
 Dice =", ,  A acentuada" ;
 Muestra ="Pulsa: Á";
 hayQueAcentuar = "si";
 }
 
  if( eval("L" + Leccion)[posL] == "é")
 {
 Dice =", ,  E acentuada" ;
 Muestra ="Pulsa: É";
 hayQueAcentuar = "si";
 }
 
  if( eval("L" + Leccion)[posL] == "í")
 {
 Dice =", ,  I acentuada" ;
 Muestra ="Pulsa: Í";
 hayQueAcentuar = "si";
 }
 
  if( eval("L" + Leccion)[posL] == "ó")
 {
 Dice =", ,  O acentuada" ;
 Muestra ="Pulsa: Ó";
 hayQueAcentuar = "si";
 } 
  if( eval("L" + Leccion)[posL] == "ú")
 {
 Dice =", ,  U acentuada" ;
 Muestra ="Pulsa: Ú";
 hayQueAcentuar = "si";
 }
 if ( posL == 0 ){Dice = "Pulsa " + Dice}
  msgNo = new SpeechSynthesisUtterance(Dice);
  msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.volume = Volumen;

var porcen =Math.round((posL * 100) / LLetras);
////console.log(porcen);
progressBar(porcen);  
  //msgNo.rate = 0.8;	
  HablaAnim();
  window.speechSynthesis.speak(msgNo);
  //sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
  $(".label").html(Muestra);

if (termino == "nn"){
  termino = "no";
  IniciaTimer();
}

}