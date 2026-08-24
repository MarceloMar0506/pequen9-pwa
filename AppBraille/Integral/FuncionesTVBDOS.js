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
  
  //if (document.title == "Qué es"){return;}
  

if (e.keyCode == 32)
{
    if (document.title == "Práctica otros Signos"){
   
    Informe();
    }else {
        if (document.title == "Qué es"){return;}
        var letra = acentos($("#Mleccion").text());
        Lee(Gres.escribir + "  " +  letra );// $("#Mleccion").text() + " " +
    }
    return;
}

if (pulsada == "pizarra"){
    
    Lee("la pizarra no está habilitada en esta práctica");
    return;

    $("#Pbraille").css("display","grid");
    $("#braille").css("display","none");

    EvaluaPizarra();   
}

else if (pulsada != "pizarra"){
    $("#braille").css("display","grid");
    $("#Pbraille").css("display","none");
   // coloresPizarra();
  abajo = false;     
	 d.innerHTML =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     $(".etq").html('');

     if (document.title == "Qué es")
     {        
        evaluaQesBraille(PrimerS); 
       
     }
     else{
        evaluaTVB(PrimerS); 
     }
     
}
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
                //playSound();
                var letra =  SonidoQ[posL].substring(0,1);
                var palabra =SonidoQ[posL];

                Lee("bien " + letra + ". " + palabra + ". ");
                console.log("bien ???  " + letra  + ". " + palabra);  
                               
                var miVar3 = setTimeout(function(){ 
               $(".etq").html(''); 
               posL++;  
              
                DictaSonido();
                $("#mimg").attr("src","./../../ResB/QE.png"); 
                return;
                },5000);  
                
                return;

                //console.log("bien primera aaaa " + ResCelda);
            //    if (SegundaC == ""){                    
            //         $("#PSegunda").css("display","none");
            //         $(".box").css("background-color","white");
            //         $(".box").css("color","black");
            //         ResCelda = 0;
            //         PrimerS = "";
            //         $(".etq").html('');
            //         //Siguiente
            //         IndiceL++;
            //        // QueNumeros();                    
            //        posL++;                   
            //        DictaSonido();

            //     }
             //   return;
                  
                //   //console.log("bien primera " + ResCelda);
                //   return;
              }
           else if (numeros !=  PrimeraC)
           {
           console.log( numeros + "EEEEEEEEEEEEEEEEEEEEEEEEE  != " +  PrimeraC)
            var dpuntos = PrimeraC.split('');
            dpuntos = dpuntos.toString().replace(/,/g , ", ");
            $(".teclas .box").css("color","black");
            $(".teclas .box").css("background-color","white");
            //console.log(DiceL + " no es?")
            DiceL = acentos( SonidoQ[posL].substring(0,1))
            Lee("no esssssssssssss '" + DiceL + "'. escribir " + dpuntos);    
           //console.log("mal primera ?????????????????? " + NNMLec  +  " " + numeros + " !=  " + PrimeraC);
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

//         if (ResCelda == 1){
           
//             if (numeros ==  SegundaC)
//                {
                   
//                 ResCelda++;
//                 Lee("");
//                 PrimerS = "";
//                 $(".etq").html('');
//                 $("#Tercera elem").css("border","2px solid black");
                
//                 //console.log("bien segunda " + ResCelda);
//                 if (TerceraC == ""){
//                     $("#PSegunda").css("display","none");
//                     $("#Segunda").css("display","none");
//                     //console.log("BIEN");
//                     $(".box").css("background-color","white");
//                     $(".box").css("color","black");
//                     ResCelda = 0;
//                     PrimerS = "";
//                     $(".etq").html('');
//                     //Siguiente
//                     IndiceL++;
//                    // QueNumeros();                    
//                    posL++;                   
//                    DictaSonido();

//                 }
//                 return;
//                }
//             else if (numeros !=  SegundaC)
//             {
//             //console.log("mal segunda " + ResCelda);
//             var dpuntos = SegundaC.split('');
//             dpuntos = dpuntos.toString().replace(/,/g , ", ");
//             Lee("segunda celda. " + Gres.escribir + " " + dpuntos);
//                        //borra los puntos de esta celda mal escritos
//            $("#Segunda elem").css("background-color","white");
//            $("#Segunda elem").css("color","black");

//            //graba vector de error con la palabra
//            var PDic = $("#Mleccion").text();  
//            if (PDic == ","){PDic = "c"} 
//            const arrayP = errorD.toString();
//               if (arrayP.indexOf(PDic.toString()) == -1){          
//                      errorD.push(" " + PDic);
//                    }   
//             return; 
//             }
//          } 

//      //Tercera
//      if (ResCelda == 2){
//         //console.log("Tercera??? " + ResCelda);
//         if (numeros ==  TerceraC )
//            {
//             ResCelda++;
//             Lee("");
//             PrimerS = "";
//             $(".etq").html('');
//             $("#Cuarta elem").css("border","2px solid black");
            
//             if (CuartoC  == ""){
//                 //console.log("BIEN");
//                 $(".box").css("background-color","white");
//                 $(".box").css("color","black");
//                 ResCelda = 0;
//                 PrimerS = "";
//                 $(".etq").html('');
//                 //Siguiente
//                 IndiceL++;
//                 QueNumeros();                    

//             }
//             return;
//            }
//         else if (numeros !=  TerceraC)
//         {
//         //console.log("mal tercera");
//         var dpuntos = TerceraC.split('');
//         dpuntos = dpuntos.toString().replace(/,/g , ", ");
//         Lee("Tercer signo. " + Gres.escribir + " " + dpuntos);
//                    //borra los puntos de esta celda mal escritos
//        $("#Tercera elem").css("background-color","white");
//        $("#Tercera elem").css("color","black");

//        //graba vector de error con la palabra
//        var PDic = $("#Mleccion").text(); 
//        if (PDic == ","){PDic = "c"}  
//        const arrayP = errorD.toString();
//           if (arrayP.indexOf(PDic.toString()) == -1){          
//                  errorD.push(" " + PDic);
//                }   
//         return; 
//         }
//      } 

//    //Cuarta
//    if (ResCelda == 3){
//     //console.log("Cuarta??? " + ResCelda);
//     if (numeros ==  CuartoC )
//        {
//         ResCelda = 0;
//         PrimerS = "";
//         $(".etq").html('');
//         //Siguiente
//         IndiceL++;
//         QueNumeros();    
        
//         return;
//        }
//     else if (numeros !=  CuartoC)
//     {
//     //console.log("mal cuarta");
//     var dpuntos = CuartaC.split('');
// 	dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	Lee("Cuarto signo. " + Gres.escribir + " " + dpuntos);
//                //borra los puntos de esta celda mal escritos
//    $("#Cuarta elem").css("background-color","white");
//    $("#Cuarta elem").css("color","black");

//    //graba vector de error con la palabra
   
//    if (PDic == ","){PDic = "c"}   
//    const arrayP = errorD.toString();
//       if (arrayP.indexOf(PDic.toString()) == -1){          
//              errorD.push(" " + PDic);
//            }   
//     return; 
//     }
//  } 



    }


function evaluaTVB(numeros)
    { 
        
      // console.log(Primer + " ?");
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
                playSound();                
                //console.log("bien primera aaaa " + ResCelda);
               if (SegundaC == ""){                    
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
            //console.log(DiceL + " no es?")
            DiceL = acentos(DiceL)
            Lee("no es '" + DiceL + "'. escribir " + dpuntos);    
           //console.log("mal primera ?????????????????? " + NNMLec  +  " " + numeros + " !=  " + PrimeraC);
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
            Lee("segunda celda. " + Gres.escribir + " " + dpuntos);
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
    if (document.title == "Práctica otros Signos"){nkey = "Signos"}
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

// function EvaluaPizarra()
// {
//     //console.log(pulsada);

   
//     coloresBraille();

//     PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
//     ///Evalua
//     if (PrimerS == ""){return;}
 
//  if (ResCelda == 0){
//         //console.log(PrimerS);
//         if (incluye(PrimeraC,PrimerS))
//         //if (PrimeraC.includes(PrimerS))
//             {	
//                 //console.log(PrimeraC + " == " + PrimerS);	
//             if (PrimeraC == PrimerS){
//              ResCelda++;
//              Lee("");
//              PrimerS = "";
//              $(".etq").html('');
//              $("#PSegunda elem").css("border","2px solid black");
//              //siguiente celda
//              $(".etq").html('');
//              if (SegundaC == ""){
//                 //console.log("BIEN");
//                 $("#PSegunda").css("display","none");
//                 $(".box").css("background-color","white");
//                 $(".box").css("color","black");
//                 ResCelda = 0;
//                 //Siguiente
//                 PrimerS = "";
//                 $(".etq").html('');
//                 IndiceL++;
                
//                 QueNumeros();
//             }
             


//              return;
//             }		   
//      }
//      else //if (!PrimeraC.includes(PrimerS))
//      {
//      ////console.log("va mal limpiar");
//      var dpuntos = PrimeraC.split('');
//      dpuntos = dpuntos.toString().replace(/,/g , ", ");
//      Lee(Gres.escribir + " " + dpuntos);
//      $(".etq").html('');
//      //borra los puntos de esta celda mal escritos
//      $("#PPrimera elem").css("background-color","white");
//      $("#PPrimera elem").css("color","black");
//      //graba vector de error con la palabra
//      var PDic = $("#Mleccion").text();  
//      if (PDic == ","){PDic = "c"} 
//      const arrayP = errorD.toString();
//         if (arrayP.indexOf(PDic.toString()) == -1){          
//                errorD.push(" " + PDic);
//              }          
//      return; 
//  }
//  }//fin evalua primera
 
//  //Evalua Segunda
//  if (ResCelda == 1){
//      ////console.log(PrimerS + "Pulsado en segunda??");
//      if (incluye(SegundaC,PrimerS))
//      //if (SegundaC.includes(PrimerS))
//          {//console.log("va bien");
//          if (SegundaC == PrimerS){
//           ResCelda++;
//           Lee("");
//           $("#PTercera elem").css("border","2px solid black");
//           PrimerS = "";
//           $(".etq").html('');
//           //siguiente tercera
//           //console.log("pasa a tercera " + ResCelda);
//           if (TerceraC == ""){
//              $("#PSegunda").css("display","none");
//              $("#Segunda").css("display","none");
//              //console.log("BIEN");
//              $(".box").css("background-color","white");
//              $(".box").css("color","black");
//              ResCelda = 0;
//              //Siguiente
//              PrimerS = "";
//              $(".etq").html('');
//              IndiceL++;
             
//              QueNumeros();
//          }
//           return;
//          }		   
//   }
//   else //if (!SegundaC.includes(PrimerS))
//   {
//       //console.log(SegundaC +  "va mal Pizarra limpiar segunda" + PrimerS + "?");
//       var dpuntos = SegundaC.split('');
//       dpuntos = dpuntos.toString().replace(/,/g , ", ");
//       Lee("segunda celda. " + Gres.escribir + " " + dpuntos);
//   $(".etq").html('');
//   //borra los puntos de esta celda mal escritos
//   $("#PSegunda elem").css("background-color","white");
//   $("#PSegunda elem").css("color","black");
//   //graba vector de error con la palabra
//   var PDic = $("#Mleccion").text(); 
//   if (PDic == ","){PDic = "c"}  
//   const arrayP = errorD.toString();
//      if (arrayP.indexOf(PDic.toString()) == -1){          
//             errorD.push(" " + PDic);
//           }          
//   return; 
//  }
//  }//fin evalua Segunda
 
 
 
//  //Evalua Tercera
//  if (ResCelda == 2){
//      //console.log(PrimerS + "Pulsado en Tercera??");
//      if (incluye(TerceraC,PrimerS))
//      //if (TerceraC.includes(PrimerS))
//          {//console.log("va bien");
//          if (TerceraC == PrimerS){
//              //siguiente celda	
//             ResCelda++;
//             Lee("");
//             PrimerS = "";
//             $(".etq").html('');
//             $("#PCuarta elem").css("border","2px solid black");
//             $(".etq").html('');
 
//           if (CuartoC == ""){
//              //console.log("BIEN");
//              $(".box").css("background-color","white");
//              $(".box").css("color","black");
//              ResCelda = 0;
//              PrimerS = "";
//              $(".etq").html('');
//              //Siguiente
//              IndiceL++;
//              QueNumeros();
//          }
         
//          return;
             
//          }		   
//   }
//   else //if (!TerceraC.includes(PrimerS))
//   {
//       ////console.log(TerceraC +  "va mal limpiar tercera" + PrimerS + "?");
//       var dpuntos = TerceraC.split('');
//       dpuntos = dpuntos.toString().replace(/,/g , ", ");
//       Lee("Tercer signo. " + Gres.escribir + " " + dpuntos);
//   $(".etq").html('');
//   //borra los puntos de esta celda mal escritos
//   $("#PTercera elem").css("background-color","white");
//   $("#PTercera elem").css("color","black");
//   //graba vector de error con la palabra
//   var PDic = $("#Mleccion").text();
//   if (PDic == ","){PDic = "c"}    
//   const arrayP = errorD.toString();
//      if (arrayP.indexOf(PDic.toString()) == -1){          
//             errorD.push(" " + PDic);
//           }          
//  // return; 
//  }
//  }//fin evalua Tercera
 
//  //Evalua Cuarta
//  if (ResCelda == 3){
//      //console.log(PrimerS + "Pulsado en Cuarta??");
//      if (incluye(CuartoC,PrimerS))
//      //if (CuartoC.includes(PrimerS))
//          {//console.log("va bien");
//          if (CuartoC == PrimerS){
     
//              //console.log("BIEN");
//              $(".box").css("background-color","white");
//              $(".box").css("color","black");
//              ResCelda = 0;
//              //Siguiente
//              PrimerS = "";
//              $(".etq").html('');
//              IndiceL++;
//              QueNumeros();
         
//          // return;
//          }		   
//   }
//   else //if (!CuartoC.includes(PrimerS))
//   {
//   ////console.log(CuartoC +  "va mal limpiar Cuarta" + PrimerS + "?");
//   var dpuntos = CuartoC.split('');
//   dpuntos = dpuntos.toString().replace(/,/g , ", ");
//   Lee("Cuarto signo. " + Gres.escribir + " " + dpuntos);
//   $(".etq").html('');
//   //borra los puntos de esta celda mal escritos
//   $("#PCuarta elem").css("background-color","white");
//   $("#PCuarta elem").css("color","black");
//   //graba vector de error con la palabra
//   var PDic = $("#Mleccion").text(); 
//   if (PDic == ","){PDic = "c"}   
//   const arrayP = errorD.toString();
//      if (arrayP.indexOf(PDic.toString()) == -1){          
//             errorD.push(" " + PDic);
//           }          
//   //return; 
//  }
//  }//fin evalua Cuarta

// }

// function coloresPizarra()
// {  


//     $("#pbox1").css("background-color",$("#box1").css("background-color"));
//     $("#pbox1").css("color",$("#box1").css("color"));
//     $("#pbox2").css("background-color",$("#box2").css("background-color"));
//     $("#pbox2").css("color",$("#box2").css("color"));
//     $("#pbox3").css("background-color",$("#box3").css("background-color"));
//     $("#pbox3").css("color",$("#box3").css("color"));
//     $("#pbox4").css("background-color",$("#box4").css("background-color"));
//     $("#pbox4").css("color",$("#box4").css("color"));
//     $("#pbox5").css("background-color",$("#box5").css("background-color"));
//     $("#pbox5").css("color",$("#box5").css("color"));
//     $("#pbox6").css("background-color",$("#box6").css("background-color"));
//     $("#pbox6").css("color",$("#box6").css("color"));

//     //segunda
//     $("#pbox01").css("background-color",$("#box01").css("background-color"));
//     $("#pbox01").css("color",$("#box01").css("color"));
//     $("#pbox02").css("background-color",$("#box02").css("background-color"));
//     $("#pbox02").css("color",$("#box02").css("color"));
//     $("#pbox03").css("background-color",$("#box03").css("background-color"));
//     $("#pbox03").css("color",$("#box03").css("color"));
//     $("#pbox04").css("background-color",$("#box04").css("background-color"));
//     $("#pbox04").css("color",$("#box04").css("color"));
//     $("#pbox05").css("background-color",$("#box05").css("background-color"));
//     $("#pbox05").css("color",$("#box05").css("color"));
//     $("#pbox06").css("background-color",$("#box06").css("background-color"));
//     $("#pbox06").css("color",$("#box06").css("color"));


//     //tercera
//     $("#pbox001").css("background-color",$("#box001").css("background-color"));
//     $("#pbox001").css("color",$("#box001").css("color"));
//     $("#pbox002").css("background-color",$("#box002").css("background-color"));
//     $("#pbox002").css("color",$("#box002").css("color"));
//     $("#pbox003").css("background-color",$("#box003").css("background-color"));
//     $("#pbox003").css("color",$("#box003").css("color"));
//     $("#pbox004").css("background-color",$("#box004").css("background-color"));
//     $("#pbox004").css("color",$("#box004").css("color"));
//     $("#pbox005").css("background-color",$("#box005").css("background-color"));
//     $("#pbox005").css("color",$("#box005").css("color"));
//     $("#pbox006").css("background-color",$("#box006").css("background-color"));
//     $("#pbox006").css("color",$("#box006").css("color"));

//      //cuarta
//      $("#pbox0001").css("background-color",$("#box0001").css("background-color"));
//      $("#pbox0001").css("color",$("#box0001").css("color"));
//      $("#pbox0002").css("background-color",$("#box0002").css("background-color"));
//      $("#pbox0002").css("color",$("#box0002").css("color"));
//      $("#pbox0003").css("background-color",$("#box0003").css("background-color"));
//      $("#pbox0003").css("color",$("#box0003").css("color"));
//      $("#pbox0004").css("background-color",$("#box0004").css("background-color"));
//      $("#pbox0004").css("color",$("#box0004").css("color"));
//      $("#pbox0005").css("background-color",$("#box0005").css("background-color"));
//      $("#pbox0005").css("color",$("#box0005").css("color"));
//      $("#pbox0006").css("background-color",$("#box0006").css("background-color"));
//      $("#pbox0006").css("color",$("#box0006").css("color"));


// }

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

    console.log("queNumeros??????")
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


    $("#Mleccion").text(alfab[IndiceL]);//signosT.get(keys[nlec]));//); 
    DiceL = alfab[IndiceL];
}  

else if (document.title == "Qué es"){

    ///fin
    if (alfab.length ==  IndiceL)
    {
        //alert("fin");
        ActualizaUsuLec();
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


    $("#Mleccion").text(alfab[IndiceL]);//signosT.get(keys[nlec]));//); 
    DiceL = alfab[IndiceL];
} 

else if (document.title == "Práctica otros Signos"){
    //console.log(keys.length + " >= " + IndiceL);

    ///fin
    if (keys.length ==  IndiceL)
    {
       // alert("fin");

        ActualizaUsuLec();
        return;
    }

    vecP =   signosT.get(keys[IndiceL]);   //eval("S" + signos[IndiceL]);
    //console.log(vecP.split(',').length )
    if (vecP.split(',').length == 1){llamaestilo1()}
    if (vecP.split(',').length == 2){llamaestilo2()}
    if (vecP.split(',').length == 3){llamaestilo3()}
    if (vecP.split(',').length == 4){llamaestilo4()}
    //agregar "_" en lugar de ","
    vecP = vecP.replace(",","_");

    PrimM =  vecP.toString().indexOf("_");    
    if (PrimM > 0){
        PrimeraC = vecP.substring(0,PrimM);
        $("#Segunda").css("display","grid");
        $("#PSegunda").css("display","grid");
        $("#PSegunda").css("padding-right-","9vw");
        $("#Segunda").css("padding-left","9vw");
       //  //console.log("muestra segunda@@@@?? ");
       //  //console.log("muestra segunda?? " + SegundaC + " " + PrimM);
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
       // llamaestilo2();
    }
    else {
	  PrimeraC =  vecP;
    }
     
    $("#Mleccion").text(keys[IndiceL]);//signosT.get(keys[nlec]));//); 
    DiceL = keys[IndiceL];
    //if (Muestrasignos[IndiceL] == "c"){$("#Mleccion").text(",")}
    //else {$("#Mleccion").text(keys[IndiceL]);}
   
   }    
   
   // $("#Mleccion").text(keys[IndiceL]);
   // DiceL =  vecP[0];
	$(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
   // llamaestilo2();
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
     

     if (document.title == "Práctica otros Signos"){
        //NNMLec = signos[IndiceL];
        NNMLec =   keys[IndiceL];
        nlec = IndiceL;
        NNMLec = NNMLec.trim();  
        //console.log("dicta "+ NNMLec);      
        queDice();
        

       DeterminaMotor(Gres.escribir + ". " +  DiceL + ". " );      
    }
    
    if (document.title == "Práctica Uno"){
        llamaestilo1();
        PrimeraC =  eval("D" + alfab[IndiceL]);
        var letra = acentos(alfab[IndiceL])
        DeterminaMotor(Gres.escribir + "'" + letra  + "'" );

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