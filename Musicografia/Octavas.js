var mN = 0;
var nota;
var PrimerS ="";
var P145 = "d";
var P15 = "e";
var P124 = "f";
var P1245 = "g";
var P125 = "h";
var P24 = "i";
var P245 = "j";

var N145 = "Do";
var N15 = "Re";
var N124 = "Mi";
var N1245 = "Fa";
var N125 = "Sol";
var N24 = "La";
var N245 = "Si";

var NPRIMERA = "4";
var NSEGUNDA = "45";
var NTERCERA = "456";
var NCUARTA = "5";
var NQUINTA = "46";
var NSEXTA = "56";
var NSEPTIMA = "6";


var Mlec;
var nlec = -1;

var Soctava = ["PRIMERA","SEGUNDA","TERCERA","CUARTA","QUINTA","SEXTA","SEPTIMA"];

//var map = {68: false, 83: false, 70: false}; 
$(document).keydown(function(e) { 

 
        //console.log(e.keyCode);
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;   
        pulsada = ""; pulsada = "";} //F

    
    if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
         pulsada = "";} //D
    
    if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
         pulsada = "";} //S		

    if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
         pulsada = "";} //J

    if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
         pulsada = "";} //K
        
    if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
        pulsada = "";} //L 

    abajo = true;
});



$(document).keyup(function(e) { 
  e.preventDefault();

if (e.keyCode == 32)
{
    Lee(Gres.escribir + " " + $("#Mleccion").text());
    return;
}

if (e.keyCode == 37 || e.keyCode == 40 )
{
    atras();
    return;
}
if (e.keyCode == 39 || e.keyCode == 38)
{
    adelante();
    return;
}


 
    $("#braille").css("display","inline-flex");
    $("#Pbraille").css("display","none");
    //coloresPizarra();

  abajo = false;     
	 d.innerHTML =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     $(".etq").html(''); 
    // //console.log(PrimerS); 
     evaluaTNota(PrimerS);
}
);

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





/////////Evalua para tocar nota

function evaluaTNota(numeros)
    { 
    if (PrimerS == ""){return;}
    
    let numeroP = numeros.split('');
    //console.log(numeroP);
    $(".box").css("background-color","white");
    $(".box").css("color","black");
          
    for (let index = 0; index < numeroP.length; index++) {
        
        $("#box" + numeroP[index] ).css("color","white");
        $("#box" + numeroP[index] ).css("background-color","black");
        
    }
       
}

         
function atras(){                
  nlec--;
  if (nlec < 0){
   nlec = 0;
  }
  var MLec = eval("N" + Soctava[nlec]);
  //console.log(MLec + " letra " + Soctava[nlec]);
  let numeroP = MLec.split('');
  //console.log(numeroP);
  $(".box").css("background-color","white");
  $(".box").css("color","black");                      
  for (let index = 0; index < numeroP.length; index++) {
      
      $("#box" + numeroP[index] ).css("color","white");
      $("#box" + numeroP[index] ).css("background-color","black");
      
  }
  var NMLec = MLec.split('');
  NMLec = NMLec.toString().replace(/,/g,", " );
  if (Soctava[nlec] != "SEPTIMA" && Soctava[nlec] != "PRIMERA" && Soctava[nlec] != "CUARTA"){
    $("#nota").text( Soctava[nlec] +  " OCTAVA " );
    LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec);
  }
  else if (Soctava[nlec] == "PRIMERA" || Soctava[nlec] == "CUARTA"){
    $("#nota").text( Soctava[nlec] +  " OCTAVA");
    LeeCGB($("#nota").text() + ". PUNTO " + NMLec);
  }
 else if (Soctava[nlec] == "SEPTIMA"){
      $("#nota").text("SÉPTIMA OCTAVA");
      LeeCGB($("#nota").text() + ". PUNTO " + NMLec);
  }
  
}
function adelante(){                
    nlec++;
    if (nlec + 1 > Soctava.length ) {nlec = Soctava.length -1 }                
    var MLec = eval("N" + Soctava[nlec]);
    //console.log(MLec + " letra " + Soctava[nlec]);
    let numeroP = MLec.split('');
    //console.log(numeroP);
    $(".box").css("background-color","white");
    $(".box").css("color","black");                      
    for (let index = 0; index < numeroP.length; index++) {
        
        $("#box" + numeroP[index] ).css("color","white");
        $("#box" + numeroP[index] ).css("background-color","black");
        
    }
    var NMLec = MLec.split('');
    NMLec = NMLec.toString().replace(/,/g,", " );
    if (Soctava[nlec] != "SEPTIMA" && Soctava[nlec] != "PRIMERA" && Soctava[nlec] != "CUARTA"){
      $("#nota").text( Soctava[nlec] +  " OCTAVA " );
      LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec);
    }
    else if (Soctava[nlec] == "PRIMERA" || Soctava[nlec] == "CUARTA"){
      $("#nota").text( Soctava[nlec] +  " OCTAVA");
      LeeCGB($("#nota").text() + ". PUNTO " + NMLec);
    }
   else if (Soctava[nlec] == "SEPTIMA"){
        $("#nota").text("SÉPTIMA OCTAVA");
        LeeCGB($("#nota").text() + ". PUNTO " + NMLec);
    } 
}

