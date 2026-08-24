var audio = document.createElement('audio');
audio.setAttribute("id", "General");
var mN = 0;
var nota;

audio.addEventListener("timeupdate", function() { 

    if (audio.currentTime >t){
        mN++;
        if(mN < Scampanero.length ){
        nota = Scampanero[mN].substring(0,2);
        t = Scampanero[mN].substring(2,3);
       // //console.log(nota + " " + t);
        if (t == "c"){t=0.25}
        if (t == "n"){t=0.50}
        if (t == "b"){t=1}
        //console.log(nota + " " + t);

        //console.log(mN + "  < " + Scampanero.length +  " "  + nota + ".mp3");
       
          rutaAudio = "./../ResB/Notas/" + nota + ".mp3"
          audio.src =  rutaAudio;
          audio.load();
          audio.play();
      }           
    };

});

//var audio = document.getElementById("General");
var rutaAudio = "";

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
var N2356 ="SIGNO DE REPETICIÓN";

var Nd = "145";
var Ne = "15";
var Nf = "124";
var Ng = "1245";
var Nh = "125";
var Ni = "24";
var Nj = "245";
var Nr = "2356";

var Mlec;
var nlec = -1;
var errorD = [];
var Scampanero =["C4c","D4c","E4c","C4c","C4c","D4c","E4c","C4c","E4c","F4c","G4n","E4c","F4c","G4n","G4c","A4c","G4c","F4c","E4c","C4c","G4c","A4c","G4c","F4c","E4c","C4c","E4c","C4c","C4b","E4n","C4c","C4b"];




//notas Do - Si
var alfab = ["d","e","f","g","h","i","j"];

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
try {
    const noteSound = document.getElementById(eval("P"+ numeros));
    noteSound.currentTime = 0;
    noteSound.play(); 
    let numeroP = numeros.split('');
    //console.log(numeroP);
    $(".box").css("background-color","white");
    $(".box").css("color","black");         
    for (let index = 0; index < numeroP.length; index++) {        
        $("#box" + numeroP[index] ).css("color","white");
        $("#box" + numeroP[index] ).css("background-color","black");        
    }
} catch (error) {
    
}
       
}
         
function atras(){                
  nlec--;
  if (nlec < 0){
   nlec = 6;
  }
  var MLec = eval("N" + alfab[nlec]);
  //console.log(MLec + " letra " + alfab[nlec]);
  if (nlec  < parseInt(alfab.length)){
    const noteSound = document.getElementById(alfab[nlec]);
    noteSound.currentTime = 0;
    noteSound.play();
   }
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
   $("#nota").text("'" + eval("N"+ MLec)  + "'  " );
   if (nlec == 7){
       let textor =". se utiliza para indicar la repetición inmediata de un compás completo o de un fragmento del mismo musicalmente coherente. La repetición puede ser un simple acorde o un grupo de notas bien definido"
   // }
   // if (nlec  == parseInt(alfab.length - 1)){
        Lee($("#nota").text() +  NMLec + textor);
   }
   Lee($("#nota").text() +  ". " +  NMLec);
   
}
function adelante(){                
    nlec++;
    if (nlec + 1 > alfab.length) {nlec = 0 }                
    var MLec = eval("N" + alfab[nlec]);
    //console.log(MLec + " letra " + alfab[nlec] + " Nlec" + nlec  + "  < " +  parseInt(alfab.length - 1));
    if (nlec  < parseInt(alfab.length)){
     const noteSound = document.getElementById(alfab[nlec]);
     noteSound.currentTime = 0;
     noteSound.play();
    }
   
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
    $("#nota").text("'" + eval("N"+ MLec)  + "'  " );
    if (nlec == 7){
        let textor =". se utiliza para indicar la repetición inmediata de un compás completo o de un fragmento del mismo musicalmente coherente. La repetición puede ser un simple acorde o un grupo de notas bien definido"
    // }
    // if (nlec  == parseInt(alfab.length - 1)){
         Lee($("#nota").text() +  NMLec + textor);
    }
    Lee($("#nota").text() + ". " +  NMLec);
  
}

