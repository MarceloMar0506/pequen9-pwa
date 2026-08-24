var PrimerS ="";
var NumPulsar = "";
var MLec = "";
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

    if (ResCelda == 0){
        //console.log(e.keyCode);
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
        $("#box1").css("background-color","black");          
        $("#box1").css("color","white");
        pulsada = ""; pulsada = "";} //F

    if (e.keyCode == 105 || e.keyCode == 33) {statusdiv.innerHTML = '1'; number = 1;   
        $("#pbox1").css("background-color","black");          
        $("#pbox1").css("color","white");
        pulsada = ""; pulsada = "pizarra";} //9 tn
    
    if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
        $("#box2").css("background-color","black");          
        $("#box2").css("color","white"); pulsada = "";} //D
    
    if (e.keyCode == 102 || e.keyCode == 39 ) {statusdiv2.innerHTML = '2'; number = 2;
        $("#pbox2").css("background-color","black");          
        $("#pbox2").css("color","white"); pulsada = "pizarra";} //6
    
    if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
        $("#box3").css("background-color","black");          
        $("#box3").css("color","white"); pulsada = "";} //S		

    if (e.keyCode == 99 || e.keyCode == 34 ) {statusdiv3.innerHTML = '3'; number = 3;
        $("#pbox3").css("background-color","black");          
        $("#pbox3").css("color","white"); pulsada = "pizarra";} //3 tn

    if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
        $("#box4").css("background-color","black");          
        $("#box4").css("color","white"); pulsada = "";} //J

    if (e.keyCode == 104 || e.keyCode == 38) {statusdiv4.innerHTML = '4'; number = 4;
        $("#pbox4").css("background-color","black");          
        $("#pbox4").css("color","white"); pulsada = "pizarra";} //4 Tn

    if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
        $("#box5").css("background-color","black");          
        $("#box5").css("color","white"); pulsada = "";} //K

    if (e.keyCode == 101 || e.keyCode == 12) {statusdiv5.innerHTML = '5'; number = 5;
        $("#pbox5").css("background-color","black");          
        $("#pbox5").css("color","white"); pulsada = "pizarra";} //5 tn
        
    if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
        $("#box6").css("background-color","black");          
        $("#box6").css("color","white"); pulsada = "";} //L

    if (e.keyCode == 98 || e.keyCode == 40) {statusdiv6.innerHTML = '6'; number = 6;
        $("#pbox6").css("background-color","black");          
        $("#pbox6").css("color","white"); pulsada = "pizarra";} // 6 tn

    }
    else if (ResCelda == 1){
        if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
            $("#box01").css("background-color","black");          
            $("#box01").css("color","white"); pulsada = "";} //F
        
        if (e.keyCode == 105 || e.keyCode == 33) {statusdiv.innerHTML = '1'; number = 1;   
            $("#pbox01").css("background-color","black");          
            $("#pbox01").css("color","white");
            pulsada = ""; pulsada = "pizarra";} //9 tn

        if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
            $("#box02").css("background-color","black");          
            $("#box02").css("color","white"); pulsada = "";} //D

        if (e.keyCode == 102 || e.keyCode == 39 ) {statusdiv2.innerHTML = '2'; number = 2;
            $("#pbox02").css("background-color","black");          
            $("#pbox02").css("color","white"); pulsada = "pizarra";} //6

        if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
            $("#box03").css("background-color","black");          
            $("#box03").css("color","white"); pulsada = "";} //S
            
        if (e.keyCode == 99 || e.keyCode == 34 ) {statusdiv3.innerHTML = '3'; number = 3;
            $("#pbox03").css("background-color","black");          
            $("#pbox03").css("color","white"); pulsada = "pizarra";} //3 tn

        if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
            $("#box04").css("background-color","black");          
            $("#box04").css("color","white"); pulsada = "";} //J

        if (e.keyCode == 104 || e.keyCode == 38) {statusdiv4.innerHTML = '4'; number = 4;
            $("#pbox04").css("background-color","black");          
            $("#pbox04").css("color","white"); pulsada = "pizarra";} //4 Tn

        if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
            $("#box05").css("background-color","black");          
            $("#box05").css("color","white"); pulsada = "";} //K

        if (e.keyCode == 101 || e.keyCode == 12) {statusdiv5.innerHTML = '5'; number = 5;
            $("#pbox05").css("background-color","black");          
            $("#pbox05").css("color","white"); pulsada = "pizarra";} //5 tn

            
        if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
            $("#box06").css("background-color","black");          
            $("#box06").css("color","white"); pulsada = "";} //L

        if (e.keyCode == 98 || e.keyCode == 40) {statusdiv6.innerHTML = '6'; number = 6;
            $("#pbox06").css("background-color","black");          
            $("#pbox06").css("color","white"); pulsada = "pizarra";} // 6 tn
    
        }
    else if (ResCelda == 2){
            if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
                $("#box001").css("background-color","black");          
                $("#box001").css("color","white"); pulsada = "";} //F

            if (e.keyCode == 105 || e.keyCode == 33) {statusdiv.innerHTML = '1'; number = 1;   
                $("#pbox001").css("background-color","black");          
                $("#pbox001").css("color","white");
                pulsada = ""; pulsada = "pizarra";} //9 tn

            if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
                $("#box002").css("background-color","black");          
                $("#box002").css("color","white"); pulsada = "";} //D

            if (e.keyCode == 102 || e.keyCode == 39 ) {statusdiv2.innerHTML = '2'; number = 2;
                $("#pbox002").css("background-color","black");          
                $("#pbox002").css("color","white"); pulsada = "pizarra";} //6

            if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
                $("#box003").css("background-color","black");          
                $("#box003").css("color","white"); pulsada = "";} //S
                
            if (e.keyCode == 99 || e.keyCode == 34 ) {statusdiv3.innerHTML = '3'; number = 3;
                $("#pbox003").css("background-color","black");          
                $("#pbox003").css("color","white"); pulsada = "pizarra";} //3 tn

            if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
                $("#box004").css("background-color","black");          
                $("#box004").css("color","white"); pulsada = "";} //J

            if (e.keyCode == 104 || e.keyCode == 38) {statusdiv4.innerHTML = '4'; number = 4;
                $("#pbox004").css("background-color","black");          
                $("#pbox004").css("color","white"); pulsada = "pizarra";} //4 Tn

            if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
                $("#box005").css("background-color","black");          
                $("#box005").css("color","white"); pulsada = "";} //K

            if (e.keyCode == 101 || e.keyCode == 12) {statusdiv5.innerHTML = '5'; number = 5;
                $("#pbox005").css("background-color","black");          
                $("#pbox005").css("color","white"); pulsada = "pizarra";} //5 tn

                
            if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
                $("#box006").css("background-color","black");          
                $("#box006").css("color","white"); pulsada = "";} //L

            if (e.keyCode == 98 || e.keyCode == 40) {statusdiv6.innerHTML = '6'; number = 6;
                $("#pbox006").css("background-color","black");          
                $("#pbox006").css("color","white"); pulsada = "pizarra";} // 6 tn

                
            }
    else if (ResCelda == 3){
                if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
                    $("#box0001").css("background-color","black");          
                    $("#box0001").css("color","white"); pulsada = "";} //F

                if (e.keyCode == 105 || e.keyCode == 33) {statusdiv.innerHTML = '1'; number = 1;   
                    $("#pbox0001").css("background-color","black");          
                    $("#pbox0001").css("color","white");
                    pulsada = ""; pulsada = "pizarra";} //9 tn

                if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
                    $("#box0002").css("background-color","black");          
                    $("#box0002").css("color","white"); pulsada = "";} //D

                if (e.keyCode == 102 || e.keyCode == 39 ) {statusdiv2.innerHTML = '2'; number = 2;
                    $("#pbox0002").css("background-color","black");          
                    $("#pbox0002").css("color","white"); pulsada = "pizarra";} //6

                if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
                    $("#box0003").css("background-color","black");          
                    $("#box0003").css("color","white"); pulsada = "";} //S
                    
                if (e.keyCode == 99 || e.keyCode == 34 ) {statusdiv3.innerHTML = '3'; number = 3;
                    $("#pbox003").css("background-color","black");          
                    $("#pbox003").css("color","white"); pulsada = "pizarra";} //3 tn

                if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
                    $("#box0004").css("background-color","black");          
                    $("#box0004").css("color","white"); pulsada = "";} //J

                if (e.keyCode == 104 || e.keyCode == 38) {statusdiv4.innerHTML = '4'; number = 4;
                    $("#pbox0004").css("background-color","black");          
                    $("#pbox0004").css("color","white"); pulsada = "pizarra";} //4 Tn

                if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
                    $("#box0005").css("background-color","black");          
                    $("#box0005").css("color","white"); pulsada = "";} //K

                if (e.keyCode == 101 || e.keyCode == 12) {statusdiv5.innerHTML = '5'; number = 5;
                    $("#pbox0005").css("background-color","black");          
                    $("#pbox0005").css("color","white"); pulsada = "pizarra";} //5 tn

                    
                if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
                    $("#box0006").css("background-color","black");          
                    $("#box0006").css("color","white"); pulsada = "";} //L

                if (e.keyCode == 98 || e.keyCode == 40) {statusdiv6.innerHTML = '6'; number = 6;
                    $("#pbox0006").css("background-color","black");          
                    $("#pbox0006").css("color","white"); pulsada = "pizarra";} // 6 tn
            
                }      


    abajo = true;
});



$(document).keyup(function(e) { 
  e.preventDefault();

if (e.keyCode == 32)
{
    Lee(Gres.escribir + " " + $("#Mleccion").text());
    return;
}

if (pulsada == "pizarra"){
    Lee("la pizarra no está habilitada en esta práctica");
    return;    
    $("#Pbraille").css("display","inline-flex");
    $("#braille").css("display","none");

    EvaluaPizarra();   
}

else if (pulsada != "pizarra"){
    $("#braille").css("display","inline-flex");
    $("#Pbraille").css("display","none");
    coloresPizarra();

  abajo = false;     
	 d.innerHTML =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     $(".etq").html('');
     evaluaTVB(PrimerS); 
}
});



function evaluaTVB(numeros)
    { 
        
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

        ///Evalua
        if (ResCelda == 0){
           if (numeros ==  PrimeraC)
              {
                  ResCelda++;
                  Lee("");
                  PrimerS = "";
                $(".etq").html('');
                $("#Segunda elem").css("border","2px solid black");
                
                //console.log("bien primera aaaa " + ResCelda);
               if (SegundaC == ""){
                    //console.log("BIEN");
                    $("#PSegunda").css("display","none");
                    $(".box").css("background-color","white");
                    $(".box").css("color","black");
                    ResCelda = 0;
                    PrimerS = "";
                    $(".etq").html('');
                    //Siguiente
                    IndiceL++;
                    QueNumeros();                    

                }
                return;
                  
                //   //console.log("bien primera " + ResCelda);
                //   return;
              }
           else if (numeros !=  PrimeraC)
           {
            var dpuntos = PrimeraC.split('');
            dpuntos = dpuntos.toString().replace(/,/g , ", ");
            $(".teclas .box").css("color","black");
            $(".teclas .box").css("background-color","white");
            Lee(Gres.escribir + NNMLec + " ' " + dpuntos + " '");    
           //console.log("mal primera " + numeros + " !=  " + PrimeraC);
           //borra los puntos de esta celda mal escritos
           $("#Primera elem").css("background-color","white");
           $("#Primera elem").css("color","black");

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

        if (ResCelda == 1){
           
            if (numeros ==  SegundaC)
               {
                   
                ResCelda++;
                Lee("");
                PrimerS = "";
                $(".etq").html('');
                $("#Tercera elem").css("border","2px solid black");
                
                //console.log("bien segunda " + ResCelda);
                if (TerceraC == ""){
                    $("#PSegunda").css("display","none");
                    $("#Segunda").css("display","none");
                    //console.log("BIEN");
                    $(".box").css("background-color","white");
                    $(".box").css("color","black");
                    ResCelda = 0;
                    PrimerS = "";
                    $(".etq").html('');
                    //Siguiente
                    IndiceL++;
                    QueNumeros();                    

                }
                return;
               }
            else if (numeros !=  SegundaC)
            {
            //console.log("mal segunda " + ResCelda);
            var dpuntos = SegundaC.split('');
            dpuntos = dpuntos.toString().replace(/,/g , ", ");
            Lee("Segundo signo. " + Gres.escribir + " " + dpuntos);
                       //borra los puntos de esta celda mal escritos
           $("#Segunda elem").css("background-color","white");
           $("#Segunda elem").css("color","black");

           //graba vector de error con la palabra
           var PDic = $("#Mleccion").text();  
           if (PDic == ","){PDic = "c"} 
           const arrayP = errorD.toString();
              if (arrayP.indexOf(PDic.toString()) == -1){          
                     errorD.push(" " + PDic);
                   }   
            return; 
            }
         } 

     //Tercera
     if (ResCelda == 2){
        //console.log("Tercera??? " + ResCelda);
        if (numeros ==  TerceraC )
           {
            ResCelda++;
            Lee("");
            PrimerS = "";
            $(".etq").html('');
            $("#Cuarta elem").css("border","2px solid black");
            
            if (CuartoC  == ""){
                //console.log("BIEN");
                $(".box").css("background-color","white");
                $(".box").css("color","black");
                ResCelda = 0;
                PrimerS = "";
                $(".etq").html('');
                //Siguiente
                IndiceL++;
                QueNumeros();                    

            }
            return;
           }
        else if (numeros !=  TerceraC)
        {
        //console.log("mal tercera");
        var dpuntos = TerceraC.split('');
        dpuntos = dpuntos.toString().replace(/,/g , ", ");
        Lee("Tercer signo. " + Gres.escribir + " " + dpuntos);
                   //borra los puntos de esta celda mal escritos
       $("#Tercera elem").css("background-color","white");
       $("#Tercera elem").css("color","black");

       //graba vector de error con la palabra
       var PDic = $("#Mleccion").text(); 
       if (PDic == ","){PDic = "c"}  
       const arrayP = errorD.toString();
          if (arrayP.indexOf(PDic.toString()) == -1){          
                 errorD.push(" " + PDic);
               }   
        return; 
        }
     } 

   //Cuarta
   if (ResCelda == 3){
    //console.log("Cuarta??? " + ResCelda);
    if (numeros ==  CuartoC )
       {
        ResCelda = 0;
        PrimerS = "";
        $(".etq").html('');
        //Siguiente
        IndiceL++;
        QueNumeros();    
        
        return;
       }
    else if (numeros !=  CuartoC)
    {
    //console.log("mal cuarta");
    var dpuntos = CuartaC.split('');
	dpuntos = dpuntos.toString().replace(/,/g , ", ");
	Lee("Cuarto signo. " + Gres.escribir + " " + dpuntos);
               //borra los puntos de esta celda mal escritos
   $("#Cuarta elem").css("background-color","white");
   $("#Cuarta elem").css("color","black");

   //graba vector de error con la palabra
   
   if (PDic == ","){PDic = "c"}   
   const arrayP = errorD.toString();
      if (arrayP.indexOf(PDic.toString()) == -1){          
             errorD.push(" " + PDic);
           }   
    return; 
    }
 } 



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
function ActualizaUsuLec()
{
    var nkey;       
    if (document.title == "Práctica Uno"){nkey = "Alfabeto"}
    if (document.title == "Práctica Signos Ortográficos"){nkey = "Signos"}
    if (document.title == "Práctica Signos Matemáticos"){nkey = "Matematicos"}


    var Dactilo = {};
   termino = "si";
   KEY = UsuarioActual + nkey;
   get().then(function (value) {

  

// var DactiloM = {};
// DactiloM["Leccion"+leccion]=errorD.toString();

// //DactiloM = {'Leccion' + leccion + ': ' + errorD.toString()};
// var DactiloAc = Object.assign(Dactilo, DactiloM);

KEY ="UsuarioActual";
get().then(function (value) {
   KEY = value + nkey;
   VALUE = errorD.toString();// DactiloAc;   
   set();});


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

function EvaluaPizarra()
{

    coloresBraille();

    PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
    ///Evalua
    if (PrimerS == ""){return;}
 
 if (ResCelda == 0){
        //console.log(PrimerS);
        if (incluye(PrimeraC,PrimerS))
        //if (PrimeraC.includes(PrimerS))
            {	
                //console.log(PrimeraC + " == " + PrimerS);	
            if (PrimeraC == PrimerS){
             ResCelda++;
             Lee("");
             PrimerS = "";
             $(".etq").html('');
             $("#PSegunda elem").css("border","2px solid black");
             //siguiente celda
             $(".etq").html('');
             if (SegundaC == ""){
                //console.log("BIEN");
                $("#PSegunda").css("display","none");
                $(".box").css("background-color","white");
                $(".box").css("color","black");
                ResCelda = 0;
                //Siguiente
                PrimerS = "";
                $(".etq").html('');
                IndiceL++;
                
                QueNumeros();
            }
             


             return;
            }		   
     }
     else //if (!PrimeraC.includes(PrimerS))
     {
     ////console.log("va mal limpiar");
     var dpuntos = PrimeraC.split('');
     dpuntos = dpuntos.toString().replace(/,/g , ", ");
     Lee(Gres.escribir + " " + dpuntos);
     $(".etq").html('');
     //borra los puntos de esta celda mal escritos
     $("#PPrimera elem").css("background-color","white");
     $("#PPrimera elem").css("color","black");
     //graba vector de error con la palabra
     var PDic = $("#Mleccion").text();  
     if (PDic == ","){PDic = "c"} 
     const arrayP = errorD.toString();
        if (arrayP.indexOf(PDic.toString()) == -1){          
               errorD.push(" " + PDic);
             }          
     return; 
 }
 }//fin evalua primera
 
 //Evalua Segunda
 if (ResCelda == 1){
     ////console.log(PrimerS + "Pulsado en segunda??");
     if (incluye(SegundaC,PrimerS))
     //if (SegundaC.includes(PrimerS))
         {//console.log("va bien");
         if (SegundaC == PrimerS){
          ResCelda++;
          Lee("");
          $("#PTercera elem").css("border","2px solid black");
          PrimerS = "";
          $(".etq").html('');
          //siguiente tercera
          //console.log("pasa a tercera " + ResCelda);
          if (TerceraC == ""){
             $("#PSegunda").css("display","none");
             $("#Segunda").css("display","none");
             //console.log("BIEN");
             $(".box").css("background-color","white");
             $(".box").css("color","black");
             ResCelda = 0;
             //Siguiente
             PrimerS = "";
             $(".etq").html('');
             IndiceL++;
             
             QueNumeros();
         }
          return;
         }		   
  }
  else //if (!SegundaC.includes(PrimerS))
  {
      //console.log(SegundaC +  "va mal Pizarra limpiar segunda" + PrimerS + "?");
      var dpuntos = SegundaC.split('');
      dpuntos = dpuntos.toString().replace(/,/g , ", ");
      Lee("Segundo signo. " + Gres.escribir + " " + dpuntos);
  $(".etq").html('');
  //borra los puntos de esta celda mal escritos
  $("#PSegunda elem").css("background-color","white");
  $("#PSegunda elem").css("color","black");
  //graba vector de error con la palabra
  var PDic = $("#Mleccion").text(); 
  if (PDic == ","){PDic = "c"}  
  const arrayP = errorD.toString();
     if (arrayP.indexOf(PDic.toString()) == -1){          
            errorD.push(" " + PDic);
          }          
  return; 
 }
 }//fin evalua Segunda
 
 
 
 //Evalua Tercera
 if (ResCelda == 2){
     //console.log(PrimerS + "Pulsado en Tercera??");
     if (incluye(TerceraC,PrimerS))
     //if (TerceraC.includes(PrimerS))
         {//console.log("va bien");
         if (TerceraC == PrimerS){
             //siguiente celda	
            ResCelda++;
            Lee("");
            PrimerS = "";
            $(".etq").html('');
            $("#PCuarta elem").css("border","2px solid black");
            $(".etq").html('');
 
          if (CuartoC == ""){
             //console.log("BIEN");
             $(".box").css("background-color","white");
             $(".box").css("color","black");
             ResCelda = 0;
             PrimerS = "";
             $(".etq").html('');
             //Siguiente
             IndiceL++;
             QueNumeros();
         }
         
         return;
             
         }		   
  }
  else //if (!TerceraC.includes(PrimerS))
  {
      ////console.log(TerceraC +  "va mal limpiar tercera" + PrimerS + "?");
      var dpuntos = TerceraC.split('');
      dpuntos = dpuntos.toString().replace(/,/g , ", ");
      Lee("Tercer signo. " + Gres.escribir + " " + dpuntos);
  $(".etq").html('');
  //borra los puntos de esta celda mal escritos
  $("#PTercera elem").css("background-color","white");
  $("#PTercera elem").css("color","black");
  //graba vector de error con la palabra
  var PDic = $("#Mleccion").text();
  if (PDic == ","){PDic = "c"}    
  const arrayP = errorD.toString();
     if (arrayP.indexOf(PDic.toString()) == -1){          
            errorD.push(" " + PDic);
          }          
 // return; 
 }
 }//fin evalua Tercera
 
 //Evalua Cuarta
 if (ResCelda == 3){
     //console.log(PrimerS + "Pulsado en Cuarta??");
     if (incluye(CuartoC,PrimerS))
     //if (CuartoC.includes(PrimerS))
         {//console.log("va bien");
         if (CuartoC == PrimerS){
     
             //console.log("BIEN");
             $(".box").css("background-color","white");
             $(".box").css("color","black");
             ResCelda = 0;
             //Siguiente
             PrimerS = "";
             $(".etq").html('');
             IndiceL++;
             QueNumeros();
         
         // return;
         }		   
  }
  else //if (!CuartoC.includes(PrimerS))
  {
  ////console.log(CuartoC +  "va mal limpiar Cuarta" + PrimerS + "?");
  var dpuntos = CuartoC.split('');
  dpuntos = dpuntos.toString().replace(/,/g , ", ");
  Lee("Cuarto signo. " + Gres.escribir + " " + dpuntos);
  $(".etq").html('');
  //borra los puntos de esta celda mal escritos
  $("#PCuarta elem").css("background-color","white");
  $("#PCuarta elem").css("color","black");
  //graba vector de error con la palabra
  var PDic = $("#Mleccion").text(); 
  if (PDic == ","){PDic = "c"}   
  const arrayP = errorD.toString();
     if (arrayP.indexOf(PDic.toString()) == -1){          
            errorD.push(" " + PDic);
          }          
  //return; 
 }
 }//fin evalua Cuarta
 
}

function coloresPizarra()
{  


    $("#pbox1").css("background-color",$("#box1").css("background-color"));
    $("#pbox1").css("color",$("#box1").css("color"));
    $("#pbox2").css("background-color",$("#box2").css("background-color"));
    $("#pbox2").css("color",$("#box2").css("color"));
    $("#pbox3").css("background-color",$("#box3").css("background-color"));
    $("#pbox3").css("color",$("#box3").css("color"));
    $("#pbox4").css("background-color",$("#box4").css("background-color"));
    $("#pbox4").css("color",$("#box4").css("color"));
    $("#pbox5").css("background-color",$("#box5").css("background-color"));
    $("#pbox5").css("color",$("#box5").css("color"));
    $("#pbox6").css("background-color",$("#box6").css("background-color"));
    $("#pbox6").css("color",$("#box6").css("color"));

    //segunda
    $("#pbox01").css("background-color",$("#box01").css("background-color"));
    $("#pbox01").css("color",$("#box01").css("color"));
    $("#pbox02").css("background-color",$("#box02").css("background-color"));
    $("#pbox02").css("color",$("#box02").css("color"));
    $("#pbox03").css("background-color",$("#box03").css("background-color"));
    $("#pbox03").css("color",$("#box03").css("color"));
    $("#pbox04").css("background-color",$("#box04").css("background-color"));
    $("#pbox04").css("color",$("#box04").css("color"));
    $("#pbox05").css("background-color",$("#box05").css("background-color"));
    $("#pbox05").css("color",$("#box05").css("color"));
    $("#pbox06").css("background-color",$("#box06").css("background-color"));
    $("#pbox06").css("color",$("#box06").css("color"));


    //tercera
    $("#pbox001").css("background-color",$("#box001").css("background-color"));
    $("#pbox001").css("color",$("#box001").css("color"));
    $("#pbox002").css("background-color",$("#box002").css("background-color"));
    $("#pbox002").css("color",$("#box002").css("color"));
    $("#pbox003").css("background-color",$("#box003").css("background-color"));
    $("#pbox003").css("color",$("#box003").css("color"));
    $("#pbox004").css("background-color",$("#box004").css("background-color"));
    $("#pbox004").css("color",$("#box004").css("color"));
    $("#pbox005").css("background-color",$("#box005").css("background-color"));
    $("#pbox005").css("color",$("#box005").css("color"));
    $("#pbox006").css("background-color",$("#box006").css("background-color"));
    $("#pbox006").css("color",$("#box006").css("color"));

     //cuarta
     $("#pbox0001").css("background-color",$("#box0001").css("background-color"));
     $("#pbox0001").css("color",$("#box0001").css("color"));
     $("#pbox0002").css("background-color",$("#box0002").css("background-color"));
     $("#pbox0002").css("color",$("#box0002").css("color"));
     $("#pbox0003").css("background-color",$("#box0003").css("background-color"));
     $("#pbox0003").css("color",$("#box0003").css("color"));
     $("#pbox0004").css("background-color",$("#box0004").css("background-color"));
     $("#pbox0004").css("color",$("#box0004").css("color"));
     $("#pbox0005").css("background-color",$("#box0005").css("background-color"));
     $("#pbox0005").css("color",$("#box0005").css("color"));
     $("#pbox0006").css("background-color",$("#box0006").css("background-color"));
     $("#pbox0006").css("color",$("#box0006").css("color"));


}

function coloresBraille()
{
 

    $("#box1").css("background-color",$("#pbox1").css("background-color"));
    $("#box1").css("color",$("#pbox1").css("color"));
    $("#box2").css("background-color",$("#pbox2").css("background-color"));
    $("#box2").css("color",$("#pbox2").css("color"));
    $("#box3").css("background-color",$("#pbox3").css("background-color"));
    $("#box3").css("color",$("#pbox3").css("color"));
    $("#box4").css("background-color",$("#pbox4").css("background-color"));
    $("#box4").css("color",$("#pbox4").css("color"));
    $("#box5").css("background-color",$("#pbox5").css("background-color"));
    $("#box5").css("color",$("#pbox5").css("color"));
    $("#box6").css("background-color",$("#pbox6").css("background-color"));
    $("#box6").css("color",$("#pbox6").css("color"));

    //segunda
    $("#box01").css("background-color",$("#pbox01").css("background-color"));
    $("#box01").css("color",$("#pbox01").css("color"));
    $("#box02").css("background-color",$("#pbox02").css("background-color"));
    $("#box02").css("color",$("#pbox02").css("color"));
    $("#box03").css("background-color",$("#pbox03").css("background-color"));
    $("#box03").css("color",$("#pbox03").css("color"));
    $("#box04").css("background-color",$("#pbox04").css("background-color"));
    $("#box04").css("color",$("#pbox04").css("color"));
    $("#box05").css("background-color",$("#pbox05").css("background-color"));
    $("#box05").css("color",$("#pbox05").css("color"));
    $("#box06").css("background-color",$("#pbox06").css("background-color"));
    $("#box06").css("color",$("#pbox06").css("color"));


    //tercera
    $("#box001").css("background-color",$("#pbox001").css("background-color"));
    $("#box001").css("color",$("#pbox001").css("color"));
    $("#box002").css("background-color",$("#pbox002").css("background-color"));
    $("#box002").css("color",$("#pbox002").css("color"));
    $("#box003").css("background-color",$("#pbox003").css("background-color"));
    $("#box003").css("color",$("#pbox003").css("color"));
    $("#box004").css("background-color",$("#pbox004").css("background-color"));
    $("#box004").css("color",$("#pbox004").css("color"));
    $("#box005").css("background-color",$("#pbox005").css("background-color"));
    $("#box005").css("color",$("#pbox005").css("color"));
    $("#box006").css("background-color",$("#pbox006").css("background-color"));
    $("#box006").css("color",$("#pbox006").css("color"));

     //cuarta
     $("#box0001").css("background-color",$("#pbox0001").css("background-color"));
     $("#box0001").css("color",$("#pbox0001").css("color"));
     $("#box0002").css("background-color",$("#pbox0002").css("background-color"));
     $("#box0002").css("color",$("#pbox0002").css("color"));
     $("#box0003").css("background-color",$("#pbox0003").css("background-color"));
     $("#box0003").css("color",$("#pbox0003").css("color"));
     $("#box0004").css("background-color",$("#pbox0004").css("background-color"));
     $("#box0004").css("color",$("#pbox0004").css("color"));
     $("#box0005").css("background-color",$("#pbox0005").css("background-color"));
     $("#box0005").css("color",$("#pbox0005").css("color"));
     $("#box0006").css("background-color",$("#pbox0006").css("background-color"));
     $("#box0006").css("color",$("#pbox0006").css("color"));
}

function QueNumeros()
{
    window.speechSynthesis.cancel();
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

    var DiceL = MLec;
//Práctica Signos Matemáticos
if (document.title == "Práctica Signos Matemáticos"){

    ///fin
    //console.log(signosM.length + " == "  + IndiceL);
    if (signosM.length ==  IndiceL)
    {
        //alert("fin");
        ActualizaUsuLec();
        return;
    }

    vecP =   eval("M" + signosM[IndiceL]);
    PrimM =  vecP.toString().indexOf("_");    
    if (PrimM > 0){
        PrimeraC = vecP.substring(0,PrimM);
    }
    else {
	  PrimeraC =  vecP;
    }


    $("#Mleccion").text(MuestrasignosM[IndiceL]); 
}   

else if (document.title == "Práctica Uno"){

    ///fin
    if (alfab.length ==  IndiceL)
    {
        //alert("fin");
        ActualizaUsuLec();
        return;
    }

    vecP =   eval("D" + alfab[IndiceL]);
    PrimM =  vecP.toString().indexOf("_");    
    if (PrimM > 0){
        PrimeraC = vecP.substring(0,PrimM);
    }
    else {
	  PrimeraC =  vecP;
    }


    $("#Mleccion").text(alfab[IndiceL]); 
}   
else if (document.title == "Práctica Signos Ortográficos"){
    //console.log(signos.length + " >= " + IndiceL);

    ///fin
    if (signos.length ==  IndiceL)
    {
       // alert("fin");

        ActualizaUsuLec();
        return;
    }

    vecP =   eval("S" + signos[IndiceL]);
    PrimM =  vecP.toString().indexOf("_");    
    if (PrimM > 0){
        PrimeraC = vecP.substring(0,PrimM);
    }
    else {
	  PrimeraC =  vecP;
    }
     
    if (Muestrasignos[IndiceL] == "c"){$("#Mleccion").text(",")}
    else {$("#Mleccion").text(Muestrasignos[IndiceL]);}
}   
    DiceL =  vecP[0];
	$(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
     

    if (document.title == "Práctica Uno"){
        NNMLec =  "'" + alfab[IndiceL] + "'";      
        Lee(Gres.escribir + "'" + alfab[IndiceL] + "'" );
    }   
    else if (document.title == "Práctica Signos Ortográficos"){
        NNMLec = signos[IndiceL];
        NNMLec = NNMLec.trim();        
        if (NNMLec == "pcoma"){NNMLec = "punto y coma"}
        if (NNMLec == "dosp"){NNMLec = "dos puntos"}
        if (NNMLec == "interroga"){NNMLec = "interrogación"}
        if (NNMLec == "admira"){NNMLec = "admiración"}
        if (NNMLec == "abrep"){NNMLec = "abre paréntesis"}
        if (NNMLec == "cierrap"){NNMLec = "cierra paréntesis"}
        if (NNMLec == "abrecor"){NNMLec = "abre corchete"}
        if (NNMLec == "cierracor"){NNMLec = "cierra corchete"}
        if (NNMLec == "abrellav"){NNMLec = "abre llave"}
        if (NNMLec == "cierrallav"){NNMLec = "cierrallave"}
        if (NNMLec == "guion"){NNMLec = "guión"}
        if (NNMLec == "barrao"){NNMLec = "barra oblicua"}
        if (NNMLec == "M"){NNMLec = "mayúscula"}

        Lee(Gres.escribir + "'" +  NNMLec + "'" );      
    }
    else if (document.title == "Práctica Signos Matemáticos"){
        NNMLec = signosM[IndiceL];
        NNMLec = NNMLec.trim();        
        if (NNMLec == "pmay"){NNMLec = "mayor"}
        if (NNMLec == "pmen"){NNMLec = "menor"}
        if (NNMLec == "interroga"){NNMLec = "interrogación"}
        if (NNMLec == "admira"){NNMLec = "admiración"}
        if (NNMLec == "abrep"){NNMLec = "abre paréntesis"}
        if (NNMLec == "cierrap"){NNMLec = "cierra paréntesis"}
        if (NNMLec == "abrecor"){NNMLec = "abre corchete"}
        if (NNMLec == "cierracor"){NNMLec = "cierra corchete"}
        if (NNMLec == "abrellav"){NNMLec = "abre llave"}
        if (NNMLec == "cierrallav"){NNMLec = "cierrallave"}
        if (NNMLec == "barrao"){NNMLec = "barra oblicua"}
        if (NNMLec == "may"){NNMLec = "mayúscula"}
        if (NNMLec == "M"){NNMLec = "mayúscula"}
        //console.log(NNMLec);
        Lee(Gres.escribir + "'" +  NNMLec + "'" );      
    }   
    
    if (document.title == "Práctica Uno"){
        PrimeraC =  eval("D" + alfab[IndiceL]);
        Lee(Gres.escribir + "'" + alfab[IndiceL] + "'" );
    }   
    else if (document.title == "Práctica Signos Ortográficos"){
        PrimeraC =  eval("S" + signos[IndiceL]); 
    }
    else if (document.title == "Práctica Signos Matemáticos"){
        PrimeraC =  eval("M" + signosM[IndiceL]); 
    }    

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
	}
	

//     MLec = alfab[nlec];    	 
//     soloNumeros1TVB =  eval("D" + alfab[nlec]);// soloNumeros1TVB.toString().match(regex);
//     //console.log(soloNumeros1TVB + " ?? " + MLec);
//   indices = [];
// for(var i = 0; i < MLec.toString().length; i++) {
    
//     if (MLec.toString().substring(i, i + 1)  === "P") 
//     {
//     indices.push(i);
//     }
// }
// //console.log(MLec + " Puntos?  " + indices.length);
// if (indices.length > 1)
// {
//     $("#gridcontenedor").css("grid-template-columns", "46% 8% 46%");
//     $(".gridPlantillaP").css("justify-items","end");
//     $(".gridPlantillaP").css("margin-left","6vw");  
//     $("#Segunda").css("visibility","visible");    
    
//     soloNumeros2TVB = myArray[2];
//     var regex = /(\d+)/g;
//     soloNumeros2TVB = soloNumeros2TVB.toString().match(regex);
//     soloNumeros2TVB = soloNumeros2TVB.toString().replace(/,/g , "");
//     yapulsado = 0; 

// }
// else if (indices.length == 1)
// {
//     $("#gridcontenedor").css("grid-template-columns", "1fr"); 
//     $(".gridPlantillaP").css("justify-items", "center");
//     $(".gridPlantillaP").css("margin-left","4vw");  
//    //$("#Primera").css("margin-left","0");

// }
}
