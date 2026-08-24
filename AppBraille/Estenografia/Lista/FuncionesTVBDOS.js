var audio = document.createElement('audio');
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
var IndiceFin = "0";
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

$(document).keydown(function(e) { 
    
   if(e.keyCode != 83 && e.keyCode != 68 && e.keyCode != 70 && e.keyCode != 74 && e.keyCode != 75 && e.keyCode != 76 &&  e.keyCode != 32 )
   {
    Lee("Usar el teclado virtual Braille");
    return;
   }

    if (ResCelda == 0){        
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
        $("#box1").css("background-color","black");          
        $("#box1").css("color","white");
        pulsada = ""; pulsada = "";} //F

    if (e.keyCode == 105 || e.keyCode == 33 || e.keyCode == 57) {statusdiv.innerHTML = '1'; number = 1;   
        $("#pbox1").css("background-color","black");          
        $("#pbox1").css("color","white");
        pulsada = ""; pulsada = "pizarra";} //9 tn
    
    if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
        $("#box2").css("background-color","black");          
        $("#box2").css("color","white"); pulsada = "";} //D
    
    if (e.keyCode == 102 || e.keyCode == 39  || e.keyCode == 54 ) {statusdiv2.innerHTML = '2'; number = 2;
        $("#pbox2").css("background-color","black");          
        $("#pbox2").css("color","white"); pulsada = "pizarra";} //6
    
    if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
        $("#box3").css("background-color","black");          
        $("#box3").css("color","white"); pulsada = "";} //S		

    if (e.keyCode == 99 || e.keyCode == 34 || e.keyCode == 51 ) {statusdiv3.innerHTML = '3'; number = 3;
        $("#pbox3").css("background-color","black");          
        $("#pbox3").css("color","white"); pulsada = "pizarra";} //3 tn

    if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
        $("#box4").css("background-color","black");          
        $("#box4").css("color","white"); pulsada = "";} //J

    if (e.keyCode == 104 || e.keyCode == 38 || e.keyCode == 56) {statusdiv4.innerHTML = '4'; number = 4;
        $("#pbox4").css("background-color","black");          
        $("#pbox4").css("color","white"); pulsada = "pizarra";} //4 Tn

    if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
        $("#box5").css("background-color","black");          
        $("#box5").css("color","white"); pulsada = "";} //K

    if (e.keyCode == 101 || e.keyCode == 12 || e.keyCode == 53) {statusdiv5.innerHTML = '5'; number = 5;
        $("#pbox5").css("background-color","black");          
        $("#pbox5").css("color","white"); pulsada = "pizarra";} //5 tn
        
    if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
        $("#box6").css("background-color","black");          
        $("#box6").css("color","white"); pulsada = "";} //L

    if (e.keyCode == 98 || e.keyCode == 40 || e.keyCode == 50) {statusdiv6.innerHTML = '6'; number = 6;
        $("#pbox6").css("background-color","black");          
        $("#pbox6").css("color","white"); pulsada = "pizarra";} // 6 tn

    }
    else if (ResCelda == 1){
        if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
            $("#box01").css("background-color","black");          
            $("#box01").css("color","white"); pulsada = "";} //F
        
        if (e.keyCode == 105 || e.keyCode == 33 || e.keyCode == 57) {statusdiv.innerHTML = '1'; number = 1;   
            $("#pbox01").css("background-color","black");          
            $("#pbox01").css("color","white");
            pulsada = ""; pulsada = "pizarra";} //9 tn

        if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
            $("#box02").css("background-color","black");          
            $("#box02").css("color","white"); pulsada = "";} //D

        if (e.keyCode == 102 || e.keyCode == 39  || e.keyCode == 54 ) {statusdiv2.innerHTML = '2'; number = 2;
            $("#pbox02").css("background-color","black");          
            $("#pbox02").css("color","white"); pulsada = "pizarra";} //6

        if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
            $("#box03").css("background-color","black");          
            $("#box03").css("color","white"); pulsada = "";} //S
            
        if (e.keyCode == 99 || e.keyCode == 34 || e.keyCode == 51 ) {statusdiv3.innerHTML = '3'; number = 3;
            $("#pbox03").css("background-color","black");          
            $("#pbox03").css("color","white"); pulsada = "pizarra";} //3 tn

        if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
            $("#box04").css("background-color","black");          
            $("#box04").css("color","white"); pulsada = "";} //J

        if (e.keyCode == 104 || e.keyCode == 38 || e.keyCode == 56) {statusdiv4.innerHTML = '4'; number = 4;
            $("#pbox04").css("background-color","black");          
            $("#pbox04").css("color","white"); pulsada = "pizarra";} //4 Tn

        if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
            $("#box05").css("background-color","black");          
            $("#box05").css("color","white"); pulsada = "";} //K

        if (e.keyCode == 101 || e.keyCode == 12 || e.keyCode == 53) {statusdiv5.innerHTML = '5'; number = 5;
            $("#pbox05").css("background-color","black");          
            $("#pbox05").css("color","white"); pulsada = "pizarra";} //5 tn

            
        if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
            $("#box06").css("background-color","black");          
            $("#box06").css("color","white"); pulsada = "";} //L

        if (e.keyCode == 98 || e.keyCode == 40 || e.keyCode == 50) {statusdiv6.innerHTML = '6'; number = 6;
            $("#pbox06").css("background-color","black");          
            $("#pbox06").css("color","white"); pulsada = "pizarra";} // 6 tn
    
        }
    else if (ResCelda == 2){
            if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
                $("#box001").css("background-color","black");          
                $("#box001").css("color","white"); pulsada = "";} //F

            if (e.keyCode == 105 || e.keyCode == 33 || e.keyCode == 57) {statusdiv.innerHTML = '1'; number = 1;   
                $("#pbox001").css("background-color","black");          
                $("#pbox001").css("color","white");
                pulsada = ""; pulsada = "pizarra";} //9 tn

            if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
                $("#box002").css("background-color","black");          
                $("#box002").css("color","white"); pulsada = "";} //D

            if (e.keyCode == 102 || e.keyCode == 39  || e.keyCode == 54 ) {statusdiv2.innerHTML = '2'; number = 2;
                $("#pbox002").css("background-color","black");          
                $("#pbox002").css("color","white"); pulsada = "pizarra";} //6

            if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
                $("#box003").css("background-color","black");          
                $("#box003").css("color","white"); pulsada = "";} //S
                
            if (e.keyCode == 99 || e.keyCode == 34 || e.keyCode == 51 ) {statusdiv3.innerHTML = '3'; number = 3;
                $("#pbox003").css("background-color","black");          
                $("#pbox003").css("color","white"); pulsada = "pizarra";} //3 tn

            if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
                $("#box004").css("background-color","black");          
                $("#box004").css("color","white"); pulsada = "";} //J

            if (e.keyCode == 104 || e.keyCode == 38 || e.keyCode == 56) {statusdiv4.innerHTML = '4'; number = 4;
                $("#pbox004").css("background-color","black");          
                $("#pbox004").css("color","white"); pulsada = "pizarra";} //4 Tn

            if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
                $("#box005").css("background-color","black");          
                $("#box005").css("color","white"); pulsada = "";} //K

            if (e.keyCode == 101 || e.keyCode == 12 || e.keyCode == 53) {statusdiv5.innerHTML = '5'; number = 5;
                $("#pbox005").css("background-color","black");          
                $("#pbox005").css("color","white"); pulsada = "pizarra";} //5 tn

                
            if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
                $("#box006").css("background-color","black");          
                $("#box006").css("color","white"); pulsada = "";} //L

            if (e.keyCode == 98 || e.keyCode == 40 || e.keyCode == 50) {statusdiv6.innerHTML = '6'; number = 6;
                $("#pbox006").css("background-color","black");          
                $("#pbox006").css("color","white"); pulsada = "pizarra";} // 6 tn

                
            }
    else if (ResCelda == 3){
                if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
                    $("#box0001").css("background-color","black");          
                    $("#box0001").css("color","white"); pulsada = "";} //F

                if (e.keyCode == 105 || e.keyCode == 33 || e.keyCode == 57) {statusdiv.innerHTML = '1'; number = 1;   
                    $("#pbox0001").css("background-color","black");          
                    $("#pbox0001").css("color","white");
                    pulsada = ""; pulsada = "pizarra";} //9 tn

                if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
                    $("#box0002").css("background-color","black");          
                    $("#box0002").css("color","white"); pulsada = "";} //D

                if (e.keyCode == 102 || e.keyCode == 39  || e.keyCode == 54 ) {statusdiv2.innerHTML = '2'; number = 2;
                    $("#pbox0002").css("background-color","black");          
                    $("#pbox0002").css("color","white"); pulsada = "pizarra";} //6

                if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
                    $("#box0003").css("background-color","black");          
                    $("#box0003").css("color","white"); pulsada = "";} //S
                    
                if (e.keyCode == 99 || e.keyCode == 34 || e.keyCode == 51 ) {statusdiv3.innerHTML = '3'; number = 3;
                    $("#pbox003").css("background-color","black");          
                    $("#pbox003").css("color","white"); pulsada = "pizarra";} //3 tn

                if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
                    $("#box0004").css("background-color","black");          
                    $("#box0004").css("color","white"); pulsada = "";} //J

                if (e.keyCode == 104 || e.keyCode == 38 || e.keyCode == 56) {statusdiv4.innerHTML = '4'; number = 4;
                    $("#pbox0004").css("background-color","black");          
                    $("#pbox0004").css("color","white"); pulsada = "pizarra";} //4 Tn

                if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
                    $("#box0005").css("background-color","black");          
                    $("#box0005").css("color","white"); pulsada = "";} //K

                if (e.keyCode == 101 || e.keyCode == 12 || e.keyCode == 53) {statusdiv5.innerHTML = '5'; number = 5;
                    $("#pbox0005").css("background-color","black");          
                    $("#pbox0005").css("color","white"); pulsada = "pizarra";} //5 tn

                    
                if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
                    $("#box0006").css("background-color","black");          
                    $("#box0006").css("color","white"); pulsada = "";} //L

                if (e.keyCode == 98 || e.keyCode == 40 || e.keyCode == 50) {statusdiv6.innerHTML = '6'; number = 6;
                    $("#pbox0006").css("background-color","black");          
                    $("#pbox0006").css("color","white"); pulsada = "pizarra";} // 6 tn
            
                }      


    abajo = true;
});



$(document).keyup(function(e) { 
   
    if (e.keyCode == 113 || e.keyCode == 114 || e.keyCode == 115  )
    {return}

    e.preventDefault();
 //Ayuda 


 if (e.keyCode == 112) {
      movil = 0;
      LeeCGB(Gres.PracticaAf);
      return;
  }
else {
    $(".AyudaV").css("display","none");
}

if (e.keyCode == 32)
{
   
    Informe();
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
      if (PrimerS == ""){return;}
  // console.log("evalua " + numeros + " primeraC " + PrimeraC +  " resCel " + ResCelda + " error " + errorD.toString());
    //console.log(IndiceFin + " == "  +  nlec)        
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
                
                //console.log("bien primera " + ResCelda);
                if (SegundaC == ""){
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
           else if (numeros !=  PrimeraC)
           {
            var dpuntos = PrimeraC.split('');
            dpuntos = dpuntos.toString().replace(/,/g , ", ");
            Lee(Gres.escribir + " " + dpuntos);    
           //console.log("mal primera " + numeros + " <> " + PrimeraC);
           //borra los puntos de esta celda mal escritos
           $("#Primera elem").css("background-color","white");
           $("#Primera elem").css("color","black");

           //graba vector de error con la palabra
           var PDic = $("#Mleccion").text();  
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
                playSound();
                //console.log("bien segunda " + ResCelda);
                if (TerceraC == ""){
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
            playSound();
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
        Lee("tercera celda. " + Gres.escribir + " " + dpuntos);
                   //borra los puntos de esta celda mal escritos
       $("#Tercera elem").css("background-color","white");
       $("#Tercera elem").css("color","black");

       //graba vector de error con la palabra
       var PDic = $("#Mleccion").text();  
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
    var dpuntos = CuartoC.split('');
	dpuntos = dpuntos.toString().replace(/,/g , ", ");
	Lee("cuarta celda. " + Gres.escribir + " " + dpuntos);
               //borra los puntos de esta celda mal escritos
   $("#Cuarta elem").css("background-color","white");
   $("#Cuarta elem").css("color","black");

   //graba vector de error con la palabra
   var PDic = $("#Mleccion").text();  
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

		var miVar2 = setTimeout(function(){ 

    KEY = 'UsuarioActual';
    get().then(function (value) {
        UsuarioActual = value;
    });
    KEY = 'Practica';
    get().then(function (value) {
        PracticaActual = value;   
  //console.log("Práctica Atual " +  PracticaActual + " página " + document.title);

  if (document.title == "Práctica Estenografía")
  {

    if (PracticaActual == 1){
        IndiceL =  keysPTC.indexOf("Absolutamente");
        IndiceFin = keysPTC.indexOf("Anteriormente");
    }
    else if (PracticaActual == 2){
        IndiceL =  keysPTC.indexOf("Brevemente");
        IndiceFin = keysPTC.indexOf("Brevemente");
    }    
    else if (PracticaActual == 3){
        IndiceL =  keysPTC.indexOf("Ciegamente");
        IndiceFin = keysPTC.indexOf("Convida");
    }
    else if (PracticaActual == 4){
        IndiceL =  keysPTC.indexOf("Diente");
        IndiceFin = keysPTC.indexOf("Distracción");
        }    
    else if (PracticaActual == 5){
        IndiceL =  keysPTC.indexOf("Efectivamente");
        IndiceFin = keysPTC.indexOf("Exteriormente");
       }        
    else if (PracticaActual == 6){
        IndiceL =  keysPTC.indexOf("Fácilmente");
        IndiceFin = keysPTC.indexOf("Fomento");
    }
    else if (PracticaActual == 7){
        IndiceL =  keysPTC.indexOf("Generalmente");
        IndiceFin = keysPTC.indexOf("Generalmente");
    }
    else if (PracticaActual == 8){
        IndiceL =  keysPTC.indexOf("Igualmente");
        IndiceFin = keysPTC.indexOf("Inyección");
    }
    else if (PracticaActual == 9){
        IndiceL =  keysPTC.indexOf("Largamente");
        IndiceFin = keysPTC.indexOf("Largamente");
    }
    else if (PracticaActual == 10){
        IndiceL =  keysPTC.indexOf("Mayormente");
        IndiceFin = keysPTC.indexOf("Momento");
    }
    else if (PracticaActual == 11){
        IndiceL =  keysPTC.indexOf("Naturalmente");
        IndiceFin = keysPTC.indexOf("Nuevamente");
    }
    else if (PracticaActual == 12){
        IndiceL =  keysPTC.indexOf("Ocasionalmente");
        IndiceFin = keysPTC.indexOf("Oportunamente");
    }                              
    else if (PracticaActual == 13){
        IndiceL =  keysPTC.indexOf("Personalmente");
        IndiceFin = keysPTC.indexOf("Propiamente");
    } 
    else if (PracticaActual == 14){
        IndiceL =  keysPTC.indexOf("Redución");
        IndiceFin = keysPTC.indexOf("Riendo");
    }                             
    else if (PracticaActual == 15){
        IndiceL =  keysPTC.indexOf("Salte");
        IndiceFin = keysPTC.indexOf("Solamente");
    }
    else if (PracticaActual == 16){
        IndiceL =  keysPTC.indexOf("Temporalmente");
        IndiceFin = keysPTC.indexOf("Temporalmente");
    }                                                          
    else if (PracticaActual == 17){
        IndiceL =  keysPTC.indexOf("Últimamente");
        IndiceFin = keysPTC.indexOf("Únicamente");
    }                             
    else if (PracticaActual == 18){
        IndiceL =  keysPTC.indexOf("Vendo");
        IndiceFin = keysPTC.indexOf("Viento");
    }                             
                 

    }
  else if (document.title == "Práctica estenografía dos o más"){
    //console.log(PracticaActual + " practica actual??");
      //a      
      if (PracticaActual == 1){
          IndiceL =  keys.indexOf("abajo");
          IndiceFin = keys.indexOf("aunque");}
      //b
      if (PracticaActual == 2){
        IndiceL =  keys.indexOf("bajo");
        IndiceFin = keys.indexOf("bueno");}
      //c          
	  if (PracticaActual == 3){
        IndiceL =  keys.indexOf("casi");
        IndiceFin = keys.indexOf("cuyo");}
      //d    
	  if (PracticaActual == 4){
        IndiceL =  keys.indexOf("debajo");
        IndiceFin = keys.indexOf("durante");}
       //e   
	   if (PracticaActual == 5){
        IndiceL =  keys.indexOf("Ecuador");
        IndiceFin = keys.indexOf("exterior");}
       //f   
	   if (PracticaActual == 6){
        IndiceL =  keys.indexOf("fácil");
        IndiceFin = keys.indexOf("favor");}
       //g   
	   if (PracticaActual == 7){
        IndiceL =  keys.indexOf("general");
        IndiceFin = keys.indexOf("Guatemala");}
       //h   
	   if (PracticaActual == 8){
        IndiceL =  keys.indexOf("haber");
        IndiceFin = keys.indexOf("Honduras");}
       //i   
	   if (PracticaActual == 9){
        IndiceL =  keys.indexOf("igualdad");
        IndiceFin = keys.indexOf("interioridad");}
       //j   
	   if (PracticaActual == 10){
        IndiceL =  keys.indexOf("joven");
        IndiceFin = keys.indexOf("juventud");}
       //l   
	   if (PracticaActual == 11){
        IndiceL =  keys.indexOf("largo");
        IndiceFin = keys.indexOf("lugar");}
       //m   
	   if (PracticaActual == 12){
        IndiceL =  keys.indexOf("madre");
        IndiceFin = keys.indexOf("mujer");}
        //n   
	   if (PracticaActual == 13){
        IndiceL =  keys.indexOf("nada");
        IndiceFin = keys.indexOf("nunca");}
       //o   
	   if (PracticaActual == 14){
        IndiceL =  keys.indexOf("ocasión");
        IndiceFin = keys.indexOf("otro");}
       //p   
	   if (PracticaActual == 15){
        IndiceL =  keys.indexOf("padre");
        IndiceFin = keys.indexOf("puede");}
       //q   
	   if (PracticaActual == 16){
        IndiceL =  keys.indexOf("qué");
        IndiceFin = keys.indexOf("quién");}
        //r   
	   if (PracticaActual == 17){
        IndiceL =  keys.indexOf("razón");
        IndiceFin = keys.indexOf("retenido");}
       //s   
	   if (PracticaActual == 18){
        IndiceL =  keys.indexOf("sido");
        IndiceFin = keys.indexOf("suyo");}
       //t   
	   if (PracticaActual == 19){
        IndiceL =  keys.indexOf("también");
        IndiceFin = keys.indexOf("tuyo");}
       //u   
	   if (PracticaActual == 20){
        IndiceL =  keys.indexOf("último");
        IndiceFin = keys.indexOf("ustedes");}
       //v   
	   if (PracticaActual == 21){
        IndiceL =  keys.indexOf("veces");
        IndiceFin = keys.indexOf("vuestro");}
    }
  else if (document.title == "Práctica Uno"){
        $("#Segunda").css("display", "none");
       
        //a      
        if (PracticaActual == 1){
            IndiceL =  keysUS.indexOf("al");
            IndiceFin =  keysUS.indexOf("aquél");
        }            
        //b
        if (PracticaActual == 2){
            IndiceL =  keysUS.indexOf("bien");
            IndiceFin =  keysUS.indexOf("bien");}
        //c          
        if (PracticaActual == 3){
            IndiceL =  keysUS.indexOf("cada");
            IndiceFin =  keysUS.indexOf("con");}
        //d    
        if (PracticaActual == 4){
            IndiceL =  keysUS.indexOf("de");
            IndiceFin =  keysUS.indexOf("del");}
         //e   
         if (PracticaActual == 5){
            IndiceL =  keysUS.indexOf("el");
            IndiceFin =  keysUS.indexOf("este");}
         //f   
         if (PracticaActual == 6){
            IndiceL =  keysUS.indexOf("fue");
            IndiceFin =  keysUS.indexOf("fue");}
         //g   
         if (PracticaActual == 7){
            IndiceL =  keysUS.indexOf("grado");
            IndiceFin =  keysUS.indexOf("gran");}
         //h   
         if (PracticaActual == 8){
            IndiceL =  keysUS.indexOf("ha");
            IndiceFin =  keysUS.indexOf("hace");}
         //i   
        
          //j   
          if (PracticaActual == 9){
            IndiceL =  keysUS.indexOf("jamás");
            IndiceFin =  keysUS.indexOf("jamás");}
        //l   
         if (PracticaActual == 10){
            IndiceL =  keysUS.indexOf("la");
            IndiceFin =  keysUS.indexOf("los");}
         //m   
         if (PracticaActual == 11){
            IndiceL =  keysUS.indexOf("más");
            IndiceFin =  keysUS.indexOf("muy");}
         //n   
         if (PracticaActual == 12){
            IndiceL =  keysUS.indexOf("no");
            IndiceFin =  keysUS.indexOf("número");}
         //p   
         if (PracticaActual == 13){
            IndiceL =  keysUS.indexOf("para");
            IndiceFin =  keysUS.indexOf("pues");}
         //q   
         if (PracticaActual == 14){
            IndiceL =  keysUS.indexOf("que");
            IndiceFin =  keysUS.indexOf("que");}
          //s   
         if (PracticaActual == 15){
            IndiceL =  keysUS.indexOf("se");
            IndiceFin =  keysUS.indexOf("su");}
            //t   
         if (PracticaActual == 16){
            IndiceL =  keysUS.indexOf("te");
            IndiceFin =  keysUS.indexOf("te");}
           //u   
         if (PracticaActual == 17){
            IndiceL =  keysUS.indexOf("un");
            IndiceFin =  keysUS.indexOf("un");}
           //v   
        if (PracticaActual == 18){
            IndiceL =  keysUS.indexOf("vez");
            IndiceFin =  keysUS.indexOf("vez");}

        }
  
   else if(document.title == "Práctica Género y Número"){
            IndiceL=0;
            IndiceFin =  keysGN.indexOf("unos");     
    }
    else if(document.title == "Práctica Secuencias"){
      //esta
    if (PracticaActual == 1){
        IndiceL =  keysSec.indexOf("estadio");
        IndiceFin =  keysSec.indexOf("ballesta");
    }            
    //que
    if (PracticaActual == 2){
        IndiceL =  keysSec.indexOf("queda");
        IndiceFin =  keysSec.indexOf("paquete");}
    //para          
    if (PracticaActual == 3){
        IndiceL =  keysSec.indexOf("paraba");
        IndiceFin =  keysSec.indexOf("depara");}
    //ante    
    if (PracticaActual == 4){
        IndiceL =  keysSec.indexOf("canten");
        IndiceFin =  keysSec.indexOf("tanteas");}
    }
     
	   
        

        QueNumeros();
        $(".gridPlantilla").css("justify-items", "center");
        $(".gridPlantilla").css("visibility","visible");
 
    });
     }, 3000);  
	});
function QueNumeros()
{
  
    SegM =-1;  
    SegundaC="";
    TerceraC="";
    TerM = -1;
    CuarM = -1;
    CuartoC="";    
    $(".box").css("border","2px dashed black");
    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");
    if (document.title == "Práctica Uno" || document.title == "Práctica Género y Número" ){      
      $("#Segunda").css("display","none");
      $("#PSegunda").css("display","none");
    }
    else {
        $("#Segunda").css("display","grid");
        $("#PSegunda").css("display","grid");
      }
 
    //console.log((IndiceL + " si es mayor Fin >  " + IndiceFin));
 
    if (parseInt(IndiceL) >  parseInt(IndiceFin)) 
    {
        //console.log((IndiceL + " >  " + IndiceFin));

        KEY ="UsuarioActual";
        get().then(function (value) {
        UsuarioActual = value;
        });
        KEY = 'Practica';
        get().then(function (value) {
        PracticaActual = value;   
        });

        ActualizaUsuLec(UsuarioActual,PracticaActual);
        return;
    }


//Practica Un Signo
if (document.title == "Práctica Uno")  

{
    MLec = signosUS.get(keysUS[IndiceL]);
    var vecP = signosUS.get(keysUS[IndiceL]);
	DiceL =  keysUS[IndiceL];// vecP[0];
    //console.log(DiceL);

	var signosE =  signosUS.get(keysUS[IndiceL]);
	MLec = MLec.toString().replace(/,/g , ", ");
	$(".box").css("color","black");
    $(".box").css("background-color","white");   
    llamaestilo1();
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
    PrimM =  signosUS.get(keysUS[IndiceL]).toString().indexOf("_");
    
    if (PrimM > 0){
        PrimeraC = signosUS.get(keysUS[IndiceL]).substring(0,PrimM);

    }
    else {
	  PrimeraC =  signosUS.get(keysUS[IndiceL]);
    }
//console.log(PrimeraC + " primeraCC " + PrimM + " " + signosUS.get(keysUS[IndiceL]));

    SegM =  signosUS.get(keysUS[IndiceL]).toString().indexOf("-");
    
	if (SegM > 0){
		SegundaC = signosUS.get(keysUS[IndiceL]).substring(PrimM + 1,SegM);
	}
	else  if (SegM < 0  && PrimM > 0){
         SegundaC = signosUS.get(keysUS[IndiceL]).substring(PrimM + 1);
         $("#Segunda").css("display","grid");
         $("#PSegunda").css("display","grid");
         $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
         llamaestilo2();
	}
	
	var TerM =  signosUS.get(keysUS[IndiceL]).toString().indexOf("=");
	
	if (TerM > 0){
	  TerceraC = signosUS.get(keysUS[IndiceL]).substring(SegM + 1,TerM);
	}
	else  if (TerM < 0 && SegM > 0){      
	  TerceraC = signosUS.get(keysUS[IndiceL]).substring(SegM + 1);
      TerM =  signosUS.get(keysUS[IndiceL]).toString().indexOf("-" + TerceraC);

	}

	CuarM =  signosUS.get(keysUS[IndiceL]).toString().indexOf("=");
	
	if (CuarM > 0){
	 CuartoC = signosUS.get(keysUS[IndiceL]).substring(CuarM + 1);
    }
    
    if (TerceraC == ""){
        $("#Tercera").css("display","none");
        $("#PTercera").css("display","none");
    }
    else if (TerceraC.trim() != ""){
        $("#Tercera").css("display","grid");
        $("#PTercera").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr");
        llamaestilo3();
    }
    if (CuartoC == ""){
        $("#Cuarta").css("display","none");
        $("#PCuarta").css("display","none");        
    }
    else if (CuartoC.trim() != ""){
        $("#Cuarta").css("display","grid");
        $("#PCuarta").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr 1fr");
        llamaestilo4();
    }

    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");  
    $("#Mleccion").text(DiceL);
    if ( $("#Mleccion").text() == "ha"){ 
        DiceL = "ha. deletreo. h. a. ";
    }
    if ( $("#Mleccion").text() == "él"){ 
        DiceL = "él con acento ";
    }
    if ( $("#Mleccion").text() == "sí"){ 
        DiceL = "sí con acento ";
    }
  //console.log(IndiceL + "::: " +  DiceL + " Pri " +  PrimeraC + " Seg " + SegundaC + "  Ter" + TerceraC + "Cuar " + CuartoC);
  DeterminaMotor(Gres.escribeE + " "  +  DiceL  );
  MLec = MLec.replace(".","");
  
  
}

//Practica dos o más
if (document.title == "Práctica estenografía dos o más")  

{
    MLec = signosT.get(keys[IndiceL]);
    var vecP = signosT.get(keys[IndiceL]);
	DiceL =  keys[IndiceL];  
	var signosE =  signosT.get(keys[IndiceL]);
	MLec = MLec.toString().replace(/,/g , ", ");
	$(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
    llamaestilo2();
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
    PrimM =  signosT.get(keys[IndiceL]).toString().indexOf("_");
     

    if (PrimM > 0){
        PrimeraC = signosT.get(keys[IndiceL]).substring(0,PrimM);
    }
    else {
	  PrimeraC =  signosT.get(keys[IndiceL]);
    }
    SegM =  signosT.get(keys[IndiceL]).toString().indexOf("-");
    
	if (SegM > 0){
		SegundaC = signosT.get(keys[IndiceL]).substring(PrimM + 1,SegM);
	}
	else  if (SegM < 0  && PrimM > 0){
         SegundaC = signosT.get(keys[IndiceL]).substring(PrimM + 1);
         $("#Segunda").css("display","grid");
         $("#PSegunda").css("display","grid");
         $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
         llamaestilo2();
         
	}
	
	var TerM =  signosT.get(keys[IndiceL]).toString().indexOf("=");
	
	if (TerM > 0){
	  TerceraC = signosT.get(keys[IndiceL]).substring(SegM + 1,TerM);
	}
	else  if (TerM < 0 && SegM > 0){      
	  TerceraC = signosT.get(keys[IndiceL]).substring(SegM + 1);
      TerM =  signosT.get(keys[IndiceL]).toString().indexOf("-" + TerceraC);

	}

	CuarM =  signosT.get(keys[IndiceL]).toString().indexOf("=");
	
	if (CuarM > 0){
	 CuartoC = signosT.get(keys[IndiceL]).substring(CuarM + 1);
    }
    
    if (TerceraC == ""){
        $("#Tercera").css("display","none");
        $("#PTercera").css("display","none");
    }
    else  if (TerceraC.trim() != ""){
        $("#Tercera").css("display","grid");
        $("#PTercera").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr");
        llamaestilo3();
    }
    if (CuartoC == ""){
        $("#Cuarta").css("display","none");
        $("#PCuarta").css("display","none");        
    }
    else if (CuartoC.trim() != ""){
        $("#Cuarta").css("display","grid");
        $("#PCuarta").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr 1fr");
        llamaestilo4();
    }

    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");  
    $("#Mleccion").text(DiceL);
    DiceL =  $("#Mleccion").text()+ " ";
  
    DiceL = DiceL.toString().replace(/cómo /g , "cómo con acento, ");
    DiceL = DiceL.toString().replace(/cuánto /g , "cuánto con acento, ");
    DiceL = DiceL.toString().replace(/dónde /g , "dónde con acento");
    DiceL = DiceL.toString().replace(/cuándo /g , "cuándo con acento ");
    DiceL = DiceL.toString().replace(/cuál /g , "cuál con acento");
    DiceL = DiceL.toString().replace(/qué /g , "qué con acento");
    DiceL = DiceL.toString().replace(/está /g , "está con acento");
    DiceL = DiceL.toString().replace(/quién /g , "quién con acento");
  
    DeterminaMotor(Gres.escribeE + "'" +  DiceL + "'" );
  MLec = MLec.replace(".","");

}

//Practica PTC
if (document.title == "Práctica Estenografía")  

{
    MLec = signosPTC.get(keysPTC[IndiceL]);
    var vecP = signosPTC.get(keysPTC[IndiceL]);
	DiceL =  keysPTC[IndiceL];
    //console.log(DiceL);

	var signosE =  signosPTC.get(keysPTC[IndiceL]);
	MLec = MLec.toString().replace(/,/g , ", ");
	$(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
    llamaestilo2();
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
    PrimM =  signosPTC.get(keysPTC[IndiceL]).toString().indexOf("_");
    
    if (PrimM > 0){
        PrimeraC = signosPTC.get(keysPTC[IndiceL]).substring(0,PrimM);
    }
    else {
	  PrimeraC =  signosPTC.get(keysPTC[IndiceL]);
    }
//console.log(PrimeraC + " primeraCC " + PrimM + " " + signosPTC.get(keysPTC[IndiceL]));

    SegM =  signosPTC.get(keysPTC[IndiceL]).toString().indexOf("-");
    
	if (SegM > 0){
		SegundaC = signosPTC.get(keysPTC[IndiceL]).substring(PrimM + 1,SegM);
	}
	else  if (SegM < 0  && PrimM > 0){
         SegundaC = signosPTC.get(keysPTC[IndiceL]).substring(PrimM + 1);
         $("#Segunda").css("display","grid");
         $("#PSegunda").css("display","grid");
         $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
         llamaestilo2();
	}
	
	var TerM =  signosPTC.get(keysPTC[IndiceL]).toString().indexOf("=");
	
	if (TerM > 0){
	  TerceraC = signosPTC.get(keysPTC[IndiceL]).substring(SegM + 1,TerM);
	}
	else  if (TerM < 0 && SegM > 0){      
	  TerceraC = signosPTC.get(keysPTC[IndiceL]).substring(SegM + 1);
      TerM =  signosPTC.get(keysPTC[IndiceL]).toString().indexOf("-" + TerceraC);

	}

	CuarM =  signosPTC.get(keysPTC[IndiceL]).toString().indexOf("=");
	
	if (CuarM > 0){
	 CuartoC = signosPTC.get(keysPTC[IndiceL]).substring(CuarM + 1);
    }
    
    if (TerceraC.trim() == ""){
        $("#Tercera").css("display","none");
        $("#PTercera").css("display","none");
    }
    else if (TerceraC.trim() != ""){
        $("#Tercera").css("display","grid");
        $("#PTercera").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr");
        llamaestilo3();
    }
    if (CuartoC.trim() == ""){
        $("#Cuarta").css("display","none");
        $("#PCuarta").css("display","none");        
    }
    else  if (CuartoC.trim() != ""){
        $("#Cuarta").css("display","grid");
        $("#PCuarta").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr 1fr");
        llamaestilo4();
    }

    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");     
  //console.log(IndiceL + "::: " +  DiceL + " Pri " +  PrimeraC + " Seg " + SegundaC + "  Ter" + TerceraC + "Cuar " + CuartoC);
  DeterminaMotor(Gres.escribeE + "'" +  DiceL + "'" );
  MLec = MLec.replace(".","");
  $("#Mleccion").text(DiceL);
}

//Practica Genero y numero
if (document.title == "Práctica Género y Número")  

{

    MLec = genNum.get(keysGN[IndiceL]);
    var vecP = genNum.get(keysGN[IndiceL]);
	DiceL =  keysGN[IndiceL];// vecP[0];
    //console.log(DiceL + "??????????????????? GN??");

	var signosE =  genNum.get(keysGN[IndiceL]);
	MLec = MLec.toString().replace(/,/g , ", ");
	$(".box").css("color","black");
    $(".box").css("background-color","white");   
    $("#Segunda").css("display","none");
    llamaestilo1();
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
    PrimM =  genNum.get(keysGN[IndiceL]).toString().indexOf("_");
    //console.log(PrimeraC + " primeraCC " + PrimM + " " + genNum.get(keysGN[IndiceL]));

    if (PrimM > 0){
        PrimeraC = genNum.get(keysGN[IndiceL]).substring(0,PrimM);
    }
    else {
	  PrimeraC =  genNum.get(keysGN[IndiceL]);
    }


    SegM =  genNum.get(keysGN[IndiceL]).toString().indexOf("-");
    
	if (SegM > 0){
        llamaestilo2();
		SegundaC = genNum.get(keysGN[IndiceL]).substring(PrimM + 1,SegM);
	}
	else  if (SegM < 0  && PrimM > 0){
         SegundaC = genNum.get(keysGN[IndiceL]).substring(PrimM + 1);
         $("#Segunda").css("display","grid");
         $("#PSegunda").css("display","grid");
         $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
         llamaestilo2();
	}
	
	var TerM =  genNum.get(keysGN[IndiceL]).toString().indexOf("=");
	
	if (TerM > 0){
	  TerceraC = genNum.get(keysGN[IndiceL]).substring(SegM + 1,TerM);
	}
	else  if (TerM < 0 && SegM > 0){      
	  TerceraC = genNum.get(keysGN[IndiceL]).substring(SegM + 1);
      TerM =  genNum.get(keysGN[IndiceL]).toString().indexOf("-" + TerceraC);

	}

	CuarM =  genNum.get(keysGN[IndiceL]).toString().indexOf("=");
	
	if (CuarM > 0){
	 CuartoC = genNum.get(keysGN[IndiceL]).substring(CuarM + 1);
    }
    
    if (TerceraC.trim() == ""){
        $("#Tercera").css("display","none");
        $("#PTercera").css("display","none");
    }
    else     if (TerceraC.trim() != ""){
        $("#Tercera").css("display","grid");
        $("#PTercera").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr");
        llamaestilo3();
    }
    if (CuartoC == ""){
        $("#Cuarta").css("display","none");
        $("#PCuarta").css("display","none");        
    }
    else     if (CuartoC.trim() != ""){
        $("#Cuarta").css("display","grid");
        $("#PCuarta").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr 1fr");
        llamaestilo4();
    }

    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");  
    DeterminaMotor(Gres.escribeE + "'" +  DiceL + "'" );
  MLec = MLec.replace(".","");
  $("#Mleccion").text(DiceL);
}


//Practica Secuencias
if (document.title == "Práctica Secuencias")  
{
    MLec = secuencias.get(keysSec[IndiceL]);
    var vecP = secuencias.get(keysSec[IndiceL]);
	DiceL =  keysSec[IndiceL];
    
	var signosE =  secuencias.get(keysSec[IndiceL]);
	MLec = MLec.toString().replace(/,/g , ", ");
	$(".box").css("color","black");
    $(".box").css("background-color","white");
    $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
    llamaestilo2();
    $("#Primera elem").css("border","2px solid black");	
    $("#PPrimera elem").css("border","2px solid black");	
    PrimM =  secuencias.get(keysSec[IndiceL]).toString().indexOf("_");
    //console.log(PrimeraC + " primeraCC " + PrimM + " " + secuencias.get(keysSec[IndiceL]));
   

    if (PrimM > 0){
        PrimeraC = secuencias.get(keysSec[IndiceL]).substring(0,PrimM);
    }
    else {
	  PrimeraC =  secuencias.get(keysSec[IndiceL]);
    }


    SegM =  secuencias.get(keysSec[IndiceL]).toString().indexOf("-");
    
	if (SegM > 0){
		SegundaC = secuencias.get(keysSec[IndiceL]).substring(PrimM + 1,SegM);
	}
	else  if (SegM < 0  && PrimM > 0){
         SegundaC = secuencias.get(keysSec[IndiceL]).substring(PrimM + 1);
         $("#Segunda").css("display","grid");
         $("#PSegunda").css("display","grid");
         $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr");
         llamaestilo2();
	}
	
	var TerM =  secuencias.get(keysSec[IndiceL]).toString().indexOf("=");
	
	if (TerM > 0){
	  TerceraC = secuencias.get(keysSec[IndiceL]).substring(SegM + 1,TerM);
	}
	else  if (TerM < 0 && SegM > 0){      
	  TerceraC = secuencias.get(keysSec[IndiceL]).substring(SegM + 1);
      TerM =  secuencias.get(keysSec[IndiceL]).toString().indexOf("-" + TerceraC);

	}

	CuarM =  secuencias.get(keysSec[IndiceL]).toString().indexOf("=");
	
	if (CuarM > 0){
	 CuartoC = secuencias.get(keysSec[IndiceL]).substring(CuarM + 1);
    }
    
    if (TerceraC == ""){
        $("#Tercera").css("display","none");
        $("#PTercera").css("display","none");
    }
    else if (TerceraC.trim() != ""){
        $("#Tercera").css("display","grid");
        $("#PTercera").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr");
        llamaestilo3();
    }
    if (CuartoC.trim() == ""){
        $("#Cuarta").css("display","none");
        $("#PCuarta").css("display","none");        
    }
    else  if (CuartoC.trim() != ""){
        $("#Cuarta").css("display","grid");
        $("#PCuarta").css("display","grid");
        $(".gridPlantillaE").css("grid-template-columns", "1fr 1fr 1fr 1fr");
        llamaestilo4();
    }

    $("#Primera").css("display","grid");
    $("#PPrimera").css("display","grid");  
 
    DeterminaMotor(Gres.escribeE + "'" +  DiceL + "'" );
  MLec = MLec.replace(".","");
  $("#Mleccion").text(DiceL);
}

}

function ActualizaUsuLec(usuario,leccion)
{ 
    var nkey;
    if (document.title == "Práctica estenografía dos o más"){nkey = "EstenDos"}

   
    if (document.title == "Práctica Uno"){nkey = "EstenUnS"}

    if (document.title == "Práctica Estenografía"){nkey = "Esten"}


    if (document.title == "Práctica Género y Número"){       
        nkey = "GeNu"
        leccion = "1"
    }
    if (document.title == "Práctica Secuencias"){
        nkey = "Sec"
        leccion = PracticaActual
       
    }

    var Dactilo = {};
   termino = "si";
   KEY = UsuarioActual + nkey;
   get().then(function (value) {

    try {
      
   Dactilo = {
        Leccion1:value.Leccion1,
        Leccion2:value.Leccion2,
        Leccion3:value.Leccion3,
        Leccion4:value.Leccion4,
        Leccion5:value.Leccion5,
        Leccion6:value.Leccion6,
        Leccion7:value.Leccion7,
        Leccion8:value.Leccion8,
        Leccion9:value.Leccion9,
        Leccion10:value.Leccion10,
        Leccion11:value.Leccion11,
        Leccion12:value.Leccion12,
        Leccion13:value.Leccion13,
        Leccion14:value.Leccion14,
        Leccion15:value.Leccion15,
        Leccion16:value.Leccion16,
        Leccion17:value.Leccion17,
        Leccion18:value.Leccion18,
        Leccion19:value.Leccion19,
        Leccion20:value.Leccion20,
        Leccion21:value.Leccion21,
        Leccion22:value.Leccion22,
        };
    
  } catch (error) {

  }


var DactiloM = {};
DactiloM["Leccion"+leccion]=errorD.toString();

var DactiloAc = Object.assign(Dactilo, DactiloM);

KEY ="UsuarioActual";
get().then(function (value) {
   KEY = value + nkey;
   //console.log(value + nkey + "graba en esta clave "+ errorD.length);
   
   VALUE =  DactiloAc;   
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
     else 
     {
     var dpuntos = PrimeraC.split('');
     dpuntos = dpuntos.toString().replace(/,/g , ", ");
     Lee(Gres.escribir + " " + dpuntos);
     $(".etq").html('');
     //borra los puntos de esta celda mal escritos
     $("#PPrimera elem").css("background-color","white");
     $("#PPrimera elem").css("color","black");
     //graba vector de error con la palabra
     var PDic = $("#Mleccion").text();  
     const arrayP = errorD.toString();
        if (arrayP.indexOf(PDic.toString()) == -1){          
               errorD.push(" " + PDic);
             }          
     return; 
 }
 }//fin evalua primera
 
 //Evalua Segunda
 if (ResCelda == 1){
     if (incluye(SegundaC,PrimerS))
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
  else 
  {
      //console.log(SegundaC +  "va mal Pizarra limpiar segunda" + PrimerS + "?");
      var dpuntos = SegundaC.split('');
      dpuntos = dpuntos.toString().replace(/,/g , ", ");
      Lee("segunda celda. " + Gres.escribir + " " + dpuntos);
  $(".etq").html('');
  //borra los puntos de esta celda mal escritos
  $("#PSegunda elem").css("background-color","white");
  $("#PSegunda elem").css("color","black");
  //graba vector de error con la palabra
  var PDic = $("#Mleccion").text();  
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
  else 
  {      
      var dpuntos = TerceraC.split('');
      dpuntos = dpuntos.toString().replace(/,/g , ", ");
      Lee("tercera celda. " + Gres.escribir + " " + dpuntos);
  $(".etq").html('');
  //borra los puntos de esta celda mal escritos
  $("#PTercera elem").css("background-color","white");
  $("#PTercera elem").css("color","black");
  //graba vector de error con la palabra
  var PDic = $("#Mleccion").text();  
  const arrayP = errorD.toString();
     if (arrayP.indexOf(PDic.toString()) == -1){          
            errorD.push(" " + PDic);
          }           
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
         
         }		   
  }
  else 
  {
   var dpuntos = CuartoC.split('');
  dpuntos = dpuntos.toString().replace(/,/g , ", ");
  Lee("cuarta celda. " + Gres.escribir + " " + dpuntos);
  $(".etq").html('');
  //borra los puntos de esta celda mal escritos
  $("#PCuarta elem").css("background-color","white");
  $("#PCuarta elem").css("color","black");
  //graba vector de error con la palabra
  var PDic = $("#Mleccion").text();  
  const arrayP = errorD.toString();
     if (arrayP.indexOf(PDic.toString()) == -1){          
            errorD.push(" " + PDic);
          }            
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
function playSound(){
    if (controlAudio == "con" ) {
    rutaAudio = "./../../../ResB/Ding.mp3"
    audio.volume=Volumen;
    audio.src =  rutaAudio;
    audio.load();       
    audio.play();
    }
}

function llamaestilo1(){
    $("#linkestilo").attr("href", "./../../../ResB/estilo1.css"); 
}
function llamaestilo2(){
    $("#linkestilo").attr("href", "./../../../ResB/estilo2.css");
    //console.log("llamo estilo 2");
}
function llamaestilo3(){
    $("#linkestilo").attr("href", "./../../../ResB/estilo3.css");
    //console.log("llamo estilo 3");
}
function llamaestilo4(){
    $("#linkestilo").attr("href", "./../../../ResB/estilo4.css");
    //console.log("llamo estilo 4");
}
function Informe()
{
 DiceL = $("#Mleccion").text() + " ";
 if ( $("#Mleccion").text() == "ha"){ 
    DiceL = " deletreo. h. a. ";
} 
if ( $("#Mleccion").text() == "sí"){ 
    DiceL = " sí con acento ";
} 
if ( $("#Mleccion").text() == "él"){ 
    DiceL = " él con acento ";
} 

DiceL = DiceL.toString().replace(/cómo /g , "cómo con acento, ");
DiceL = DiceL.toString().replace(/cuánto /g , "cuánto con acento, ");
DiceL = DiceL.toString().replace(/dónde /g , "dónde con acento");
DiceL = DiceL.toString().replace(/cuándo /g , "cuándo con acento ");
DiceL = DiceL.toString().replace(/cuál /g , "cuál con acento");
DiceL = DiceL.toString().replace(/qué /g , "qué con acento");
DiceL = DiceL.toString().replace(/está /g , "está con acento");
DiceL = DiceL.toString().replace(/quién /g , "quién con acento");


 if (ResCelda == 0 ){LeeCGB(Gres.escribir +    DiceL);}
 else if (ResCelda == 1 ){LeeCGB( DiceL +  ". escribir la segunda celda" );}
 else if (ResCelda == 2 ){LeeCGB( DiceL +  ". escribir la tercera celda" );}
 else if (ResCelda == 3 ){LeeCGB( DiceL +  ". escribir la cuarta celda" );}
}