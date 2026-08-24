//var audio = document.getElementById("General");
var rutaAudio = "";
var Mlec;
var nlec = -1;
var Nt = "";
var notaSrc =""; 

var PrimerS ="";
var P145 = "d";
var P15 = "e";
var P124 = "f";
var P1245 = "g";
var P125 = "h";
var P24 = "i";
var P245 = "j";


var N13456 = "DO REDONDA";
var N1356 = "RE REDONDA";
var N12346 = "MI REDONDA";
var N123456 = "FA REDONDA";
var N12356 = "SOL  REDONDA";
var N2346 = "LA REDONDA";
var N23456 = "SI REDONDA";

var N1345 = "DO BLANCA";
var N135 = "RE BLANCA";
var N1234 = "MI BLANCA";
var N12345 = "FA BLANCA";
var N1235 = "SOL  BLANCA";
var N234 = "LA BLANCA";
var N2345 = "SI BLANCA";

var N1456 = "DO NEGRA";
var N156 = "RE NEGRA";
var N1246 = "MI NEGRA";
var N12456 = "FA NEGRA";
var N1256 = "SOL  NEGRA";
var N246 = "LA NEGRA";
var N2456 = "SI NEGRA";

var N145 = "DO CORCHEA";
var N15 = "RE CORCHEA";
var N124 = "MI CORCHEA";
var N1245 = "FA CORCHEA";
var N125 = "SOL  CORCHEA";
var N24 = "LA CORCHEA";
var N245 = "SI CORCHEA";

var N3 = "PUNTILLO";

// DO - Si
var figurasT = ["2","1","0.5","0.25","0"];
var Nd4 = "0";
var Nd3 = "6";
var Nd2 = "3";
var Nd1 = "36";

var Sr = "134";
var Sb = "136";
var Sn = "1236";
var Sc = "1346";

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

        if (t == "c"){t=0.25}
        if (t == "n"){t=0.50}
        if (t == "b"){t=1}
        if (t == "r"){t=2}

          rutaAudio = "./../ResB/" + nota + ".mp3"
          audio.src =  rutaAudio;
          audio.load();
          audio.play();
      }           
    };

});



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
       // //console.log(PrimerS + " ?");
        if (PrimerS == ""){return;}

    // const noteSound = document.getElementById(eval("P"+ numeros));

    // noteSound.currentTime = 0;
    // noteSound.play(); 
    try {
        if (eval("N"+numeros)){
            //console.log("si");
        } 
        else{
          //console.log("no")};
    
        let numeroP = numeros.split('');
        //console.log(numeroP);
        $(".box").css("background-color","white");
        $(".box").css("color","black");
              
        for (let index = 0; index < numeroP.length; index++) {
            
            $("#box" + numeroP[index] ).css("color","white");
            $("#box" + numeroP[index] ).css("background-color","black");
            
        }
      }
        $("#nota").html(eval("N"+numeros));
        Lee($("#nota").text());

    } catch (error) {
        
    }
    
       

    }

         
function atras(){
    window.speechSynthesis.cancel();    
  nlec--;
  if (nlec  < 0 ) {    
    nlec=0
  } 
  if (nlec  < 4 ) {    
    var MLec = figurasT[nlec];
    t = parseFloat(MLec);
    if (t == 0.25) {Nt =  Nd4; notaSrc ="./../ResB/CORCHEA.mp3"  }
    if (t == 0.50) {Nt =  Nd3; notaSrc ="./../ResB/NEGRA.mp3"}
    if (t == 1) {Nt =  Nd2; notaSrc ="./../ResB/BLANCA.mp3"}
    if (t == 2) {Nt =  Nd1; notaSrc ="./../ResB/REDONDA.mp3"}  
    //console.log(MLec + " Figura " + figurasT[nlec] + " tiempo " + t + " src " + notaSrc);   

    if (t == 0.25) {Nt =  Nd4 }
    if (t == 0.50) {Nt =  Nd3}
    if (t == 1) {Nt =  Nd2}
    if (t == 2) {Nt =  Nd1} 
    //console.log("t " + t + " Nt " + Nt)  
     let numeroP = Nt.split('');
     Nd= Nt;
     //console.log(numeroP);
     Qfigura();

     $(".box").css("background-color","white");
     $(".box").css("color","black");                      
     for (let index = 0; index < numeroP.length; index++) {          
         $("#box" + numeroP[index] ).css("color","white");
         $("#box" + numeroP[index] ).css("background-color","black");          
     }
   }
     else if (nlec  == 4 ) {
    

      $(".box").css("background-color","white");
      $(".box").css("color","black");                      


       $("#box3").css("color","white");
       $("#box3").css("background-color","black");
       $("#nota").html("PUNTILLO");  

       LeeCGB("PUNTILLO  PUNTO 3");  
     }

   else if (nlec > 4){

       if (nlec == 5) {Nt =  Sr }
       if (nlec == 6) {Nt =  Sb }
       if (nlec == 7) {Nt =  Sn }
       if (nlec == 8) {Nt =  Sc }
       
       //console.log( " Silencio " + Nt)  
        let numeroP = Nt.split('');
        Nd= Nt;
        //console.log(numeroP);
        //Qfigura();
  
        $(".box").css("background-color","white");
        $(".box").css("color","black");                      
        for (let index = 0; index < numeroP.length; index++) {          
            $("#box" + numeroP[index] ).css("color","white");
            $("#box" + numeroP[index] ).css("background-color","black");          
        }
     
        if (nlec == 5) {
           var NMLec = Nd.split('');
           NMLec = NMLec.toString().replace(/,/g,", " );
           $("#nota").html("SILENCIO DE REDONDA O SEMICORCHEA " );
           LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
        }
        else if (nlec == 6) {
           var NMLec = Nd.split('');
           NMLec = NMLec.toString().replace(/,/g,", " );
           $("#nota").html("SILENCIO DE BLANCA O FUSA " );
           LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
        }
        else if (nlec == 7) {
           var NMLec = Nd.split('');
           NMLec = NMLec.toString().replace(/,/g,", " );
           $("#nota").html("SILENCIO DE NEGRA O SEMIFUSA " );
           LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
        }
        else if (nlec == 8) {
           var NMLec = Nd.split('');
           NMLec = NMLec.toString().replace(/,/g,", " );
           $("#nota").html("SILENCIO DE CORCHEA O GARRAPATEA " );
           LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
        }
}
}
function adelante(){  
    window.speechSynthesis.cancel();
   // $("#nota").html('_<br>_');             
     nlec++;
     if (nlec  > 8 ) {nlec = 8 }     
     
     if (nlec  < 4 ) {

     var MLec = figurasT[nlec];
     t = parseFloat(MLec);
     if (t == 0.25) {
      Nt =  Nd4;
        notaSrc = "./../ResB/CORCHEA.mp3" 
       }
     if (t == 0.50) {Nt =  Nd3; notaSrc ="./../ResB/NEGRA.mp3"}
     if (t == 1) {Nt =  Nd2; notaSrc ="./../ResB/BLANCA.mp3"}
     if (t == 2) {Nt =  Nd1; notaSrc ="./../ResB/REDONDA.mp3"}  
     //console.log(MLec + " Figura " + figurasT[nlec] + " tiempo " + t + " src " + notaSrc);   

     if (t == 0.25) {Nt =  Nd4 }
     if (t == 0.50) {Nt =  Nd3}
     if (t == 1) {Nt =  Nd2}
     if (t == 2) {Nt =  Nd1} 
     //console.log("t " + t + " Nt " + Nt)  
      let numeroP = Nt.split('');
      Nd= Nt;
      //console.log(numeroP);
      Qfigura();

      $(".box").css("background-color","white");
      $(".box").css("color","black");                      
      for (let index = 0; index < numeroP.length; index++) {          
          $("#box" + numeroP[index] ).css("color","white");
          $("#box" + numeroP[index] ).css("background-color","black");          
      }
    }
      else if (nlec  == 4 ) {

        
        $(".box").css("background-color","white");
        $(".box").css("color","black"); 

        $("#box3").css("color","white");
        $("#box3").css("background-color","black");
        $("#nota").html("PUNTILLO");  
        Lee("PUNTILLO  PUNTO 3");  
      }

    else if (nlec > 4){

        if (nlec == 5) {Nt =  Sr }
        if (nlec == 6) {Nt =  Sb }
        if (nlec == 7) {Nt =  Sn }
        if (nlec == 8) {Nt =  Sc }
        
        //console.log( " Silencio " + Nt)  
         let numeroP = Nt.split('');
         Nd= Nt;
         //console.log(numeroP);
         //Qfigura();
   
         $(".box").css("background-color","white");
         $(".box").css("color","black");                      
         for (let index = 0; index < numeroP.length; index++) {          
             $("#box" + numeroP[index] ).css("color","white");
             $("#box" + numeroP[index] ).css("background-color","black");          
         }
      
         if (nlec == 5) {
          var NMLec = Nd.split('');
          NMLec = NMLec.toString().replace(/,/g,", " );
          $("#nota").html("SILENCIO DE REDONDA O SEMICORCHEA " );
          LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
       }
       else if (nlec == 6) {
          var NMLec = Nd.split('');
          NMLec = NMLec.toString().replace(/,/g,", " );
          $("#nota").html("SILENCIO DE BLANCA O FUSA " );
          LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
       }
       else if (nlec == 7) {
          var NMLec = Nd.split('');
          NMLec = NMLec.toString().replace(/,/g,", " );
          $("#nota").html("SILENCIO DE NEGRA O SEMIFUSA " );
          LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
       }
       else if (nlec == 8) {
          var NMLec = Nd.split('');
          NMLec = NMLec.toString().replace(/,/g,", " );
          $("#nota").html("SILENCIO DE CORCHEA O GARRAPATEA " );
          LeeCGB($("#nota").text() + ".  PUNTOS " + NMLec );
       }
    }

//console.log(nlec + " " +  $("#nota").text());

}


function Qfigura()
 {
  
  var NMLec = Nd.split('');
        NMLec = NMLec.toString().replace(/,/g,", " );
        var Qf ="";
        if (t == 0.25) {Qf ="CORCHEA O GARRAPATEA"}
        if (t == 0.50) {Qf ="NEGRA O SEMIFUSA"}
        if (t == 1) {Qf ="BLANCA O FUSA"}
        if (t == 2) {Qf ="REDONDA O SEMICORCHEA"}
       
        if (t == 2) {
           $("#nota").html(Qf);
           LeeF(Qf +   " LOS PUNTOS DE  LA NOTA CON LOS PUNTOS " + NMLec );
        }
        else if (t == 0.5 ||  t == 1) {
           $("#nota").html(Qf);
           LeeF(Qf +   " LOS PUNTOS DE  LA NOTA CON EL PUNTO " + NMLec);
        }                        
        else if (t == 0.25 ) {
           $("#nota").html(Qf);
           LeeF(Qf +   " LOS PUNTOS DE  LA NOTA SIN PUNTOS ADICIONALES ")
        }                        
           

 }

 function LeeF(texto)
 { 
 $(".label").html(texto);
 $(".label").css("visibility","visible");
 if (texto == ""){
   $(".label").css("visibility","hidden");
   return;
 }
 window.speechSynthesis.cancel();
 msgNo = new SpeechSynthesisUtterance(texto);
 msgNo.voice = speechSynthesis.getVoices()[Voz];
 msgNo.rate =Veloz;	
 msgNo.pitch = Tono;
 msgNo.volume = Volumen;
 msgNo.onend = function(event) {
 EsperaAnim();
 primerEnter =false;
 }
		   
 HablaAnim();
 window.speechSynthesis.speak(msgNo);
 msgNo.onend = function(event) {
    const noteSound = document.getElementById("d");
    if (controlAudio == "con" ) {
    noteSound.pause();
    noteSound.src=notaSrc;
    noteSound.currentTime = 0;     
    noteSound.play();   
    }
 }
     
 } 
 

