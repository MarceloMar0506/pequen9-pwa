var TextoF = "";
var posL = -1;
var ultimotexto = "";
var Tex = "";
var Nvoz = 0;
var vozselec=[];


$(document).ready(function(){
  $('.CTexto').focus();
}); 

   
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
 if(event.keyCode == 38)
 {/*
  event.preventDefault();
  window.speechSynthesis.cancel();
  Larriba();
  return;
  */}
  if(event.keyCode == 40)
  {/*
    event.preventDefault();
    window.speechSynthesis.cancel();
    Labajo();
    return;
  */}   
}
);


$(window).keyup(function(event) 
{ 
if(event.keyCode == 13){
Dicta=0;//Resetea el contador Inicia con A
 document.getElementById('EtiquetaUno').innerHTML = "";// Muestra la letra que hay que escribir                           
 document.getElementById('EtiquetaUnoTexto').innerHTML = "";// Muestra lo que dice Pequén

 DictarNuevaL();
 }
    
    if(event.keyCode == 32)
      {
       event.preventDefault();

	    document.getElementById('EtiquetaUnoTexto').innerHTML = document.getElementById('EtiquetaUnoTexto').innerHTML + " ";
      document.getElementById('EtiquetaUno').innerHTML = "_"
      msgNo = new SpeechSynthesisUtterance('espacio');
      msgNo.voice = speechSynthesis.getVoices()[Voz];
      msgNo.rate = 0.8;			   
      //window.speechSynthesis.speak(msgNo);
      sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
        var valor = $('.CTexto').val();	                 
        $('.CTexto').val('');
	  }    
});



function MostrarBraille(TextoE) {
//alert(event.keyCode);
event.preventDefault();
//F1 Ayuda 
if (event.keyCode==112) {
return;
}

 

var Num = 0;

var Letras=(TextoE.value).toLowerCase();

var n = Letras.length;

for (var i = 0; i < n ; i++)
   {

   var res = Letras.substr(i, 1);

   Num = Num +  parseInt(Letras.charCodeAt(i));
    
  }

  /// devuelve la suma e los ascii alert(Num)

var found = vPosible.find(function(element) {
return element == Num;
});

//existe esa combinacion
if (found == Num && Num != 106 && Num != 108) 
{
   Existe(Num);
 }
 // 106 J 108 L
 if (Num == 106  || Num == 108) 
{
    $('.CTexto').val('');
   return;

 }

 
 
//si no es un signo braille o tecla esperada
else if (found == undefined) 
{
 if (Num != 0) {
   
   NoExiste();
  }
}


}



function Existe(numero) {
          event.preventDefault();
          
          Nvar = eval('V'+ numero.toString());
if (Nvar == alfab[Dicta]){
                //Puntos Braille
                Pb = eval("Pb"+Nvar);

              document.getElementById('EtiquetaUno').innerHTML = Nvar;// eval(Nvar)[contador];                           
              document.getElementById('EtiquetaUnoTexto').innerHTML = "Bien " + alfab[Dicta];    
                        
              
              Dice = Nvar;
              
                if (Nvar == "Á") { Dice = "a. acentuada"; }
                else if (Nvar == "É") { Dice = "e. acentuada"; }
                else if (Nvar == "Í") { Dice = "i. acentuada"; }
                else if (Nvar == "Ó") { Dice = "o. acentuada"; }
                else if (Nvar == "Ú") { Dice = "u. acentuada"; }
                //else if (Nvar == "V") { Dice = "v"; }
               //else if (Nvar == "W") { Dice = "doble ve"; }
               else if (Nvar == "Y") { Dice = "i griega"; }
             Dice = "bien, " + Dice; 
			   msgNo = new SpeechSynthesisUtterance(Dice);
			   msgNo.voice = speechSynthesis.getVoices()[Voz];
               msgNo.rate = 0.8;			   
              // window.speechSynthesis.speak(msgNo);
               sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); v

            

            var regex = /(\d+)/g;
            Pb = Pb.match(regex);

            Pb = Pb.toString();
             arrayN = Pb.split(",");

  
              
               for (var i=0; i < arrayN.length; i++) {
                var elemento = "P"+arrayN[i];
                var elementoT = "T"+arrayN[i];
                var valorE = arrayN[i];
                valorE = valorE.trim();
                valorE = parseInt(valorE);
                valorE = valorE.toString();
                document.getElementById(elemento).src="./Letras/Punto"+valorE+".png";
                document.getElementById(elementoT).src="./Letras/TSi.png";
               // alert("./Letras/Punto"+valorE+".png");
              }
                //document.getElementById("mimg").src ="./Letras/T"+ Nvar +".png";
                var valor = $('.CTexto').val();             
                $('.CTexto').val('');
                
                Dicta = Dicta +1;
                //alert("no nueva palabra");
                DictarNuevaL();

             return;
            }//fin de bien escrito
      
//Está mal      
      if (Nvar != alfab[Dicta]){
                var valor = $('.CTexto').val();             
                $('.CTexto').val('');

                //Puntos Braille
                
                Pb = eval("Pb"+alfab[Dicta]);
               Dice = "No es la letra " + alfab[Dicta] + " pulsar " +  Pb;
                document.getElementById('EtiquetaUnoTexto').innerHTML = Dice;  
               msgNo = new SpeechSynthesisUtterance(Dice);
			   msgNo.voice = speechSynthesis.getVoices()[Voz];
               msgNo.rate = 0.8;			   
               //window.speechSynthesis.speak(msgNo);
               sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
              // alert("si");

       }
            
  }//fin de Existe

  
 
 function NoExiste()
    { event.preventDefault();

              for (var i=1; i < 7; i++) {
                document.getElementById("P"+i).src="./Letras/Punto.png"; 
               // document.getElementById("T"+i).src="./Letras/TNo.png"; 
               Limpiar();
              }          
       

Lee(Gres.usaTVB);
              
               //document.getElementById("mimg").src ="./Letras/T"+ Nvar +".png";
                var valor = $('.CTexto').val();             
                $('.CTexto').val('');       

		}
		
		
		
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     for (var i=0; i < arrayN.length; i++) 
              {
                var elemento = "P"+arrayN[i];
                var elementoT = "T"+arrayN[i];
                var valorE = arrayN[i];
                valorE = valorE.trim();
                valorE = parseInt(valorE);
                valorE = valorE.toString();      
	            $('#P'+valorE).attr('src', './Letras/Punto'+valorE+'.png');
                $('#'+elementoT).attr('src', './Letras/TSi.png');
              }
     end = new Date().getTime();
  }
}		
		
		
function Labajo(){
   event.preventDefault();

 
    posL = posL+1;
    if (posL > alfab.length-2 ) {
       posL = 0;
    }
     //Puntos Braille
     Pb = eval("Pb"+alfab[posL]);
     NPb = Pb;
     var regex = /(\d+)/g;
     Pb = Pb.match(regex);
     Pb = Pb.toString();
     arrayN = Pb.split(",");
    

  //Limpiar
  for (var i=1; i < 7; i++) {
    document.getElementById("P"+i).src="./Letras/Punto.png"; 
    document.getElementById("T"+i).src="./Letras/TNo.png"; 
   }  
   
     for (var i=0; i < arrayN.length; i++) {
      var elemento = "P"+arrayN[i];
      var elementoT = "T"+arrayN[i];
      var valorE = arrayN[i];
      valorE = valorE.trim();
      valorE = parseInt(valorE);
      valorE = valorE.toString();
      document.getElementById(elemento).src="./Letras/Punto"+valorE+".png";
      document.getElementById(elementoT).src="./Letras/TSi.png";
    }

      fstChar = alfab[posL];//[0];//.charAt(0);
      //alert(fstChar);
      fstChar = fstChar.toUpperCase();
     
      Dice = fstChar;
                if (fstChar == "Á") { Dice = "a. acentuada"; }
                else if (fstChar == "É") { Dice = "e. acentuada"; }
                else if (fstChar == "Í") { Dice = "i. acentuada"; }
                else if (fstChar == "Ó") { Dice = "o. acentuada"; }
                else if (fstChar == "Ú") { Dice = "u. acentuada"; }
                //else if (Nvar == "V") { Dice = "v"; }
               //else if (Nvar == "W") { Dice = "doble ve"; }
               else if (fstChar == "Y") { Dice = "i griega"; }

  
     TextoF = Dice+", "+NPb;//+fstChar;//" ,"+ eval(alfab[posL])[0];  
     document.getElementById("EtiquetaUnoTexto").innerHTML = "";
     document.getElementById("EtiquetaUno").innerHTML = fstChar;
     
setTimeout(function () {
     if (ultimotexto != TextoF)
     {
      //msgNo = new SpeechSynthesisUtterance(TextoF);
      //window.speechSynthesis.speak(msgNo);
     msgNo = new SpeechSynthesisUtterance(TextoF);
     msgNo.voice = speechSynthesis.getVoices()[Voz];
     msgNo.rate = 0.8;			   
     //window.speechSynthesis.speak(msgNo);
     sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 

      ultimotexto = TextoF; 
      }
 // });
}, 500);
 
    
}

function Larriba(){
 event.preventDefault();

 
  
  posL = posL-1;
  if (posL < 0 ) {
     posL = alfab.length-2;
  }
   //Puntos Braille
   Pb = eval("Pb"+alfab[posL]);
   NPb = Pb;
   var regex = /(\d+)/g;
   Pb = Pb.match(regex);
   Pb = Pb.toString();
   arrayN = Pb.split(",");
  

//Limpiar
for (var i=1; i < 7; i++) {
  document.getElementById("P"+i).src="./Letras/Punto.png"; 
  document.getElementById("T"+i).src="./Letras/TNo.png"; 
 }  
 
   for (var i=0; i < arrayN.length; i++) {
    var elemento = "P"+arrayN[i];
    var elementoT = "T"+arrayN[i];
    var valorE = arrayN[i];
    valorE = valorE.trim();
    valorE = parseInt(valorE);
    valorE = valorE.toString();
    document.getElementById(elemento).src="./Letras/Punto"+valorE+".png";
    document.getElementById(elementoT).src="./Letras/TSi.png";
  }
  
   fstChar = alfab[posL];//[0];//.charAt(0);
      //alert(fstChar);
      Dice = fstChar.toUpperCase();


  
                if (fstChar == "Á") { Dice = "a. acentuada"; }
                else if (fstChar == "É") { Dice = "e. acentuada"; }
                else if (fstChar == "Í") { Dice = "i. acentuada"; }
                else if (fstChar == "Ó") { Dice = "o. acentuada"; }
                else if (fstChar == "Ú") { Dice = "u. acentuada"; }
                //else if (Nvar == "V") { Dice = "v"; }
               //else if (Nvar == "W") { Dice = "doble ve"; }
               else if (fstChar == "Y") { Dice = "i griega"; }

  
    TextoF = Dice+", "+NPb;//+fstChar;//" ,"+ eval(alfab[posL])[0];    
    document.getElementById("EtiquetaUnoTexto").innerHTML = "";

     document.getElementById("EtiquetaUno").innerHTML = fstChar;
    
   setTimeout(function () {
     if (ultimotexto != TextoF)
     {
     msgNo = new SpeechSynthesisUtterance(TextoF);
     msgNo.voice = speechSynthesis.getVoices()[Voz];
     msgNo.rate = 0.8;			   
     //window.speechSynthesis.speak(msgNo);
     sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
      ultimotexto = TextoF; 
      }
},500);
              
}

