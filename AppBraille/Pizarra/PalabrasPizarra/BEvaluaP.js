var TextoF = "";
var posL = -1;
var ultimotexto = "";
var Tex = "";
var Nvoz = 0;
var vozselec=[];
var Num = 0;
var error = 0;
var Deletrear;


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





$(window).keyup(function(event) 
{ 
  
  //Enter Nueva leccion
   if(event.keyCode == 13)
  {
    
     if (termino == "si") 
     {    
           event.preventDefault();
           window.open("./Lista.html","_self");
	}    
    }    

//Escape regersa 
   if(event.keyCode == 27)
  {
    //event.preventDefault();
     if (termino == "si") 
     {   
         event.preventDefault();  
         window.open("./Lista.html","_self");
       //  window.open("../../InicioPequenBraille/index.html","_self");  
        
	}    
	
	if (termino == "no") 
     {    //alert(termino + " sale");
           event.preventDefault();           
           window.open("./Lista.html","_self");
           return;
	}    
    }    
  
  //Control calla la voz
  if(event.keyCode == 17){
  event.preventDefault();
  window.speechSynthesis.cancel();
  }
  
   //Cambia la voz
   if(event.keyCode == 18){
      event.preventDefault();
      Nvoz = Nvoz + 1;
      //alert(arrayMotores.length);
      if (Nvoz +1 > arrayMotores.length){Nvoz = 0}
      var utterance  = new SpeechSynthesisUtterance();     
      vozselec = arrayMotores[Nvoz].split(";");     
      utterance.lang =  tts[vozselec[0]].lang; 
      Voz = vozselec[0];
      
      utterance.voice = speechSynthesis.getVoices()[Voz];
      utterance.rate = 0.8;

      msgH = new SpeechSynthesisUtterance(vozselec[1]);
        
      msgH.voice = speechSynthesis.getVoices()[Voz];
      msgH.rate = 0.8;


       
      HablaAnim(); 
       //window.speechSynthesis.speak(msgH);  
       sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgH);}, 250); 


     }

    
    
});



function MostrarBraille(TextoE) {
  //console.log(TextoE.value);
if (TextoE.value.length == 0 ) {return}
event.preventDefault();

Num = 0;

var Letras=(TextoE.value).toLowerCase();
// las teclas presionadas  alert(Letras + "  letra??" );
var n = Letras.length;


//F1 Ayuda 
if (event.keyCode==112) {
return false;
}

if (event.keyCode == 32) {
return;
}




for (var i = 0; i < n ; i++)
   {

   var res = Letras.substr(i, 1);

   Num = Num +  parseInt(Letras.charCodeAt(i));
    
  }
//alert(event.keyCode + "  "  + Num + TextoE.value.length); 
  /// devuelve la suma e los ascii alert(Num)
//alert(Num);

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
          
          letraPedida = palabra[Dicta].substring(lb,lb+1);
          
          
          
      //    alert(letraPedida + " >> " +  lb.toString()  +  " de" + palabra[Dicta]  +  " mide " +  palabra[Dicta].length.toString()    +  " Letra " +  palabra[Dicta].substring(1,1) );
//alert(Nvar + " ==  " + letraPedida);
if (Nvar.toUpperCase() == letraPedida.toUpperCase()){
 
                //Puntos Braille
                Pb = eval("Pb"+Nvar);

              document.getElementById('EtiquetaUno').innerHTML = Nvar;// eval(Nvar)[contador];                           
             // document.getElementById('EtiquetaUnoTexto').innerHTML = letraPedida;    
              document.getElementById('EtiquetaEscrito').innerHTML += Nvar.toLowerCase();          
              
              Dice = Nvar;
              
                if (Nvar == "Á") { Dice = "a. acentuada"; }
                else if (Nvar == "É") { Dice = "e. acentuada"; }
                else if (Nvar == "Í") { Dice = "i. acentuada"; }
                else if (Nvar == "Ó") { Dice = "o. acentuada"; }
                else if (Nvar == "Ú") { Dice = "u. acentuada"; }
                //else if (Nvar == "V") { Dice = "v"; }
               //else if (Nvar == "W") { Dice = "doble ve"; }
               else if (Nvar == "Y") { Dice = "i griega"; }
             Dice =  Dice; 
		/*	   msgNo = new SpeechSynthesisUtterance(Dice);
			   msgNo.voice = speechSynthesis.getVoices()[Voz];
               msgNo.rate = 0.8;			   
               sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 

*/
Lee(Dice); 
  Limpia();              

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
                document.getElementById(elemento).src="../../ResB/Punto"+valorE+".png";
                document.getElementById(elementoT).src="../../ResB/TSi.png";
               // alert("./Letras/Punto"+valorE+".png");
              }

            

               
                //document.getElementById("mimg").src ="./Letras/T"+ Nvar +".png";
                var valor = $('.CTexto').val();             
                $('.CTexto').val('');
                
               

                
                if ( lb +1 == palabra[Dicta].length)
                {
 Dice =palabra[Dicta] + ". Muy bien" ; 
 msgNo = new SpeechSynthesisUtterance(Dice);
 msgNo.voice = speechSynthesis.getVoices()[Voz];
 wordIndex=2;
$(".label").html(Dice);
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.onend = function(event) {
$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
   
    wordIndex++;
    //event.charIndex el indice de la palabra que lee
  }   
 ColorGlobo();		   
		
  msgNo.onend = function(event) {
    EsperaAnim(); 
   for (var i=1; i < 7; i++) {
        $('#P'+i).attr('src', '../../ResB/Punto.png');
        $('#T'+i).attr('src', '../../ResB/TNo.png');        
     } 
      Dicta = Dicta +1;   
      
                DictarNuevaL();
                //inicia primera letra
                lb = 0;
document.getElementById('EtiquetaUno').innerHTML = "_";//alfab[Dicta];// Muestra la letra que hay que escribir                           
document.getElementById("EtiquetaUno").innerHTML ="_";
  }               
  HablaAnim();   
                sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);                 
               
                return;
                }
                //siguiente letra
                  lb = lb +1;
                

             return;
            }//fin de bien escrito
      
//Está mal      
      if (Nvar.toUpperCase() != letraPedida.toUpperCase()){
        alert("mal");
                var valor = $('.CTexto').val();             
                $('.CTexto').val('');

                //Puntos Braille
                
                //Pb = eval("Pb"+alfab[Dicta]);
                var Nlep = letraPedida;
                Nlep = palabra[Dicta].substring(lb,lb+1);
               // alert(Nlep);
                 Pb = eval("Pb"+Nlep.toUpperCase());

               Dice = "No es la letra " + Nlep + ". pulsar " +  Pb;
                error++;// = error +1 ;
               // document.getElementById('EtiquetaUnoTexto').innerHTML = Dice;  
              /* msgNo = new SpeechSynthesisUtterance(Dice);
			   msgNo.voice = speechSynthesis.getVoices()[Voz];
               msgNo.rate = 0.8;			   
               sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
*/
 Lee(Dice);
       }
            
  }//fin de Existe

  
 
 function NoExiste()
    { 
    
    event.preventDefault();

              for (var i=1; i < 7; i++) {
                document.getElementById("P"+i).src="../../ResB/Punto.png"; 
               // document.getElementById("T"+i).src="./Letras/TNo.png"; 
               Limpiar();
              }         
//               Pb = eval("Pb"+letraPedida);
//               Dice = "No es la letra " + letraPedida + ". pulsar " +  Pb;
                     var Nlep = letraPedida;
                     var Nlb = lb;
                Nlep = palabra[Dicta].substring(Nlb,Nlb+1);
                //alert(Nlep + " bbb");
                 Pb = eval("Pb"+Nlep.toUpperCase());
               error = error +1 ;
               Dice = "con el teclado virtual braille.<br> Escribe la letra " + Nlep + ".<br> pulsa " +  Pb;

               
 Lee(Dice);
 
              
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
	            $('#P'+valorE).attr('src', '../../ResB/Punto'+valorE+'.png');
                $('#'+elementoT).attr('src', '../../ResB/TSi.png');
              }
     end = new Date().getTime();
  }
}





