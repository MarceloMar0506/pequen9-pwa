// var audio = document.createElement('audio');
// var rutaAudio = "./../ResB/piano_C2-E5.mp3";// + nota + ".mp3";
// audio.src =  rutaAudio;
// audio.preload ="auto ";
//audio.load(); // 

var NuevoNumero = "";
var mN = 0;
var nota;
var Mlec;
var nlec = -1;
var desempenio = "";
var Sr = "134";
var Sb = "136";
var Sn = "1236";
var Sc = "1346";


var NSr = "134";
var NSb = "136";
var NSn = "1236";
var NSc = "1346";

var NPRIMERA = "4";
var NSEGUNDA = "45";
var NTERCERA = "456";
var NCUARTA = "5";
var NQUINTA = "46";
var NSEXTA = "56";
var NSEPTIMA = "6";

var O1 = "4";
var O2 = "45";
var O3 = "456";
var O4 = "5";
var O5 = "46";
var O6 = "56";
var O7 = "6";

var N13456 = "DO REDONDA";
var N1356 = "RE REDONDA";
var N12346 = "MI REDONDA";
var N123456 = "FA REDONDA";
var N12356 = "SOL REDONDA";
var N2346 = "LA REDONDA";
var N23456 = "SI REDONDA";

var DOREDONDA   = "13456";
var REREDONDA   = "1356";
var MIREDONDA   = "12346";
var FAREDONDA   = "123456";
var SOLREDONDA  = "12356";
var LAREDONDA   = "2346";
var SIREDONDA   = "23456";

var N1345 = "DO BLANCA";
var N135 = "RE BLANCA";
var N1234 = "MI BLANCA";
var N12345 = "FA BLANCA";
var N1235 = "SOL BLANCA";
var N234 = "LA BLANCA";
var N2345 = "SI BLANCA";

var DOBLANCA = "1345";
var REBLANCA = "135";
var MIBLANCA = "1234";
var FABLANCA = "12345";
var SOLBLANCA = "1235";
var LABLANCA = "234";
var SIBLANCA = "2345";

var N1456 = "DO NEGRA";
var N156 = "RE NEGRA";
var N1246 = "MI NEGRA";
var N12456 = "FA NEGRA";
var N1256 = "SOL NEGRA";
var N246 = "LA NEGRA";
var N2456 = "SI NEGRA";
var N2356 = "SIGNO DE REPETICIÓN";

var DONEGRA = "1456";
var RENEGRA = "156";
var MINEGRA = "1246";
var FANEGRA = "12456";
var SOLNEGRA = "1256";
var LANEGRA = "246";
var SINEGRA = "2456";

var N145 = "DO CORCHEA";
var N15 = "RE CORCHEA";
var N124 = "MI CORCHEA";
var N1245 = "FA CORCHEA";
var N125 = "SOL CORCHEA";
var N24 = "LA CORCHEA";
var N245 = "SI CORCHEA";

var SOSTENIDO = "146";
var BEMOL = "126";
var BECUADRO = "16";

var NSOSTENIDO = "146";
var NBEMOL = "126";
var NBECUADRO = "16";

var DOCORCHEA = "145"; 
var RECORCHEA = "15"; 
var MICORCHEA = "124"; 
var FACORCHEA = "1245"; 
var SOLCORCHEA = "125"; 
var LACORCHEA = "24"; 
var SICORCHEA = "245"; 
var REPETICION = "2356";

var N3 = "PUNTILLO";
var pun = "3";

var Compas1 = ["DOS CUARTOS","12","256"];
var Compas2 = ["TRES CUARTOS","14","256"];
var Compas3 = ["CUATRO CUARTOS","145","256"];
var Compas4 = ["SEIS CUARTOS","124","256"];
var Compas5 = ["DOS MEDIOS","12","23"];
var Compas6 = ["TRES MEDIOS","14","23"];
var Compas7 = ["SEIS OCTAVOS","124","236"];
var Compas8 = ["NUEVE OCTAVOS","24","236"];
var Compas9 = ["DOCE OCTAVOS","1","12","236"]; 
var bir = ["BARRA INICIO DE REPETICIÓN","126","2356"]; 
var bfr = ["BARRA FIN DE REPETICIÓN","126","23"]; 
var lma = ["LIGADURA MAYOR ABRIENDO","56","12"]; 
var lmc = ["LIGADURA MAYOR CERRANDO","45","23"]; 
var lmp = ["LIGADURA DE PROLONGACIÓN","4","14"]; 
//var pun = ["PUNTILLO","3"];
var SignoN  = "3456";
var lig = "14";

var errorD = [];
//Notas y figuras
var TituloM0 ="NOTAS FIGURAS Y SILENCIOS";
var Melodia0 =["C_4c","D_4c","E_4c","F_4c","G_4c","A_4c","B_4c","Spa","C_4n","D_4n","E_4n","F_4n","G_4n","A_4n","B_4n","Spa","C_4b","D_4b","E_4b","F_4b","G_4b","A_4b","B_4b","Spa","C_4r","D_4r","E_4r","F_4r","G_4r","A_4r","B_4r","Spa","Sr","Sb","Sn","Sc"];
var Melodia0E = ["C4c","D4c","E4c","F4c","G4c","A4c","B4c","A4c","G4c","F4c","E4c","D4c","C4r"];

var TituloM1 ="OTROS SIGNOS";
var Melodia1 =["pun","O1","O2","O3","O4","O5","O6","O7","Spa","rep","bir","bfr","Spa","Sos","Vem","Vec","Spa","lma","lig","lmp","lmc","Spa","Compas1","Compas2","Compas3","Compas4","Compas5","Compas6","Compas7","Compas8"];
var Melodia1E =  ["C4c","D4c","E4c","F4c","G4c","A4c","B4c","A4c","G4c","F4c","E4c","D4c","C4r"];


var TituloM2 ="Himno de la alegría";
var Melodia2 =["Compas1","salto","O4","B_4n","B_4n","C_5n","D_5n","Spa","D_5n","C_5n","B_4n","A_4n","Spa","G_4n","G_4n","A_4n","B4_n","Spa","B_4n","pun","A_4c","A_4b","Spa","B_4n","B_4n","C_5n","D_5n","Spa","D_5n","C_5n","B_4n","A_4n","Spa","G_4n","G_4n","A_4n","B4_n","Spa","A_4n","pun","G_4c","G_4b"];

var Melodia2E =["B4n","B4n","C5n","D5n","D5n","C5n","B4n","A4n","G4n","G4n","A4n","B4n","B4n","A4c","A4b","B4n","B4n","pun","C5n","D5n","D5n","C5n","B4n","A4n","G4n","G4n","A4n","B4n","A4n","pun","G4c","G4b"];

//Campanero
var TituloM3 ="Campanero";
var Melodia3 =["Compas1","salto","O4","C_4n","D_4n","E_4n","C_4n","Spa","rep","Spa","E_4n","F_4n","G_4b","Spa","rep","Spa","G_4c","A_4c","G_4c","F_4c","E_4n","C_4n","Spa","rep","Spa","D_4n","O3","G_3n","O4","C_4b","Spa","rep"];
var Melodia3E =["C4n","D4n","E4n","C4n","C4n","D4n","E4n","C4n","E4n","F4n","G4b","E4n","F4n","G4b","G4c","A4c","G4c","F4c","E4n","C4n","G4c","A4c","G4c","F4c","E4n","C4n","D4n","G3n","C4b","D4n","G3n","C4b"];

//Feliz Cumpleaños
var TituloM4 ="Feliz Cumpleaños";
var Melodia4 =["Compas2","salto","O3","C_3c","C_3c","Spa","D_3n","C_3n","F_3n","Spa","E_3b","C_3c","C_3c","Spa","D_3n","C_3n","G_3n","Spa","F_3b","C_3c","C_3c","Spa","O4","C_4n","A_3n","F_3n","Spa","E_3n","D_3b","Vem","O3","B_3c","B_3c","Spa","A_3n","F_3n","G_3n","Spa","F_3b"];
var Melodia4E =["C3n","C3n","D3n","C3c","F3n","E3b","C3c","C3c","D3n","C3n","G3n","F3b","C3c","C3c","C4n","A3n","F3n","E3n","D3n","A#3c","A#3c","A3n","F3n","G3n","F3b"];

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


var Nd = "145";
var Ne = "15";
var Nf = "124";
var Ng = "1245";
var Nh = "125";
var Ni = "24";
var Nj = "245";




$(document).keydown(function(e) {  
   
    if (e.keyCode == 112 ){return}
   
   if (Celda == 0){   
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
   //Si celda = 2
   else   if (Celda == 1){   
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
        $("#box01").css("background-color","black");          
        $("#box01").css("color","white");
        pulsada = ""; pulsada = "";} //F

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

   //Si celda = 3
   else   if (Celda == 2){   
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
        $("#box001").css("background-color","black");          
        $("#box001").css("color","white");
        pulsada = ""; pulsada = "";} //F

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
   

       

    abajo = true;
});
$(document).mouseup(function(e) { 
    fueKUp=false;
});

$(document).keyup(function(e) { 
  e.preventDefault();
  if (e.keyCode == 27) {    
    return; 
}

 //Ayuda
 if (e.keyCode == 112) {   
    movil = 0;
   // TecladoQ(); 
    Ayuda();
    return; 
}

 // //console.log(e.keyCode);
  //imprime melodois actual en braille
  //F6
  if (e.keyCode == 117){
      Lee("imprimir en braille, si es necesario continuar con lector de pantallas");
      Imprime();
      return;
  }
    $("#braille").css("display","inline-flex");
    $("#Pbraille").css("display","none");
    abajo = false;
    fueKUp =true;
    PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;   
    console.log(PrimerS + " a1) numeros pulsados ");      
   

     $(".etq").html('');  
     if (e.keyCode == 13){
        console.log("Pulso Enter");
        Celda = 0;
        PrimerS ="salto";
        evaluaTNota(PrimerS);
     }
     

     if (e.keyCode == 32){
        PrimerS ="Spa";
        evaluaTNota(PrimerS);
     }else{
     
        if (PrimerS == ""){return}
        
      if (Celda == 0){   
        console.log(PrimerS + " numeros pulsados ");      
         punto(PrimerS);        
      }
      else if (Celda == 1){
       if (PrimerS.trim()== ""){return}
        punto2(PrimerS);
      }
      if (Celda == 2){       
        punto3(PrimerS);
      }
     }
     
}
)


function evaluaTNota(numeros)
    { 
//numeros = numeros.toString();
        NuevoNumero = "";
        
        console.log("numeros:" + numeros + "/____/"  +  palabra[Dicta] + "/");
       
          //evalua salto
        
         if(numeros == "salto" && palabra[Dicta] == "salto"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
      
         else if(numeros != "salto" && palabra[Dicta] == "salto"){
             error++;
            Lee("no es Enter");            
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
       
        //evalua PUNTILLO
        if(numeros == 3  && palabra[Dicta] == "pun"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != 3  && palabra[Dicta] == "pun"){
             error++;
            Lee("no es el signo de \'puntillo\' pulsar \'3\'");            
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }

         //evalua ligadura menor
        if(numeros == "14" && palabra[Dicta] == "lig"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != "14" && palabra[Dicta] == "lig"){
             error++;
            Lee("no es el signo de \'ligadura menor\' pulsar \'1, 4\'");            
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }


        //evalua sostenido
        if(numeros == "146" && palabra[Dicta] == "Sos"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != "146" && palabra[Dicta] == "Sos"){
             error++;
            Lee("no es el signo de \'sostenido\' pulsar \'1, 4, 6,\'");            
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
     //evalua Bemol
     if(numeros == "126" && palabra[Dicta] == "Vem"){
        $(".box").css("background-color","white");
        $(".box").css("color","black")
        //bien dicta siguiente
        Dicta++;
        DictarNuevaL();
        return;
    }
     else if(numeros != "126" && palabra[Dicta] == "Vem"){
         error++;
        Lee("no es el signo de \'bemol\' pulsar \'1, 2, 6,\'");            
        $(".box").css("background-color","white");
        $(".box").css("color","black");
        //console.log("error");
        return;
    }
         //evalua Becuadro
        /// Vec"){letra.innerHTML = "♮"}
         if(numeros == "16" &&      palabra[Dicta] == "Vec"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != "16" && palabra[Dicta] == "Vec"){
             error++;
            Lee("no es el signo de \'Becuadro\' pulsar \'1, 6,\'");            
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        //evalua espacio
        if(numeros == "Spa" && palabra[Dicta] == "Spa"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
      
         else if(numeros != "Spa" && palabra[Dicta] == "Spa"){
             error++;
            Lee("no es \'separador de compás\' pulsar barra epaciadora");            
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        //evalua enter
        if(numeros == "salto" && palabra[Dicta] == "salto"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
        else if(numeros != "salto" && palabra[Dicta] == "salto"){
            error++;
           Lee("no es \'salto de línea\' pulsar enter");            
           $(".box").css("background-color","white");
           $(".box").css("color","black");
           //console.log("error");
           return;
       }


        ////Silencios        
         if(numeros == Sr && palabra[Dicta] == "Sr"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != Sr && palabra[Dicta] == "Sr"){
             error++;
            Lee("no es el signo de \'silencio de redonda\' pulsar \'1, 3, 4,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        console.log(numeros + " Sbbbbbbbbbbbbb??? "  )
        if(numeros == Sb && palabra[Dicta] == "Sb"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != Sb && palabra[Dicta] == "Sb"){
             error++;
            Lee("no es el signo de \'silencio de blanca\' pulsar \'1, 3, 6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        if(numeros == Sn && palabra[Dicta] == "Sn"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != Sn && palabra[Dicta] == "Sn"){
             error++;
            Lee("no es el signo de \'silencio de negra\' pulsar \'1, 2, 3, 6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        if(numeros == Sc && palabra[Dicta] == "Sc"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != Sc && palabra[Dicta] == "Sc"){
             error++;
            Lee("no es el signo de \'silencio de corchea\' pulsar \'1, 3, 4, 6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        ///fin silencios

  
        if(numeros == NSEGUNDA && palabra[Dicta] == "O2"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != NSEGUNDA && palabra[Dicta] == "O2"){
             error++;
            Lee("no es el signo de \'segunda octava\' pulsar \'4, 5,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        if(numeros == NTERCERA && palabra[Dicta] == "O3"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != NTERCERA && palabra[Dicta] == "O3"){
             error++;
            Lee("no es el signo de \'tercera octava\' pulsar \'4, 5, 6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        if(numeros == NCUARTA && palabra[Dicta] == "O4"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != NCUARTA && palabra[Dicta] == "O4"){
             error++;
            Lee("no es el signo de \'cuarta octava\' pulsar \'5\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        if(numeros == NQUINTA && palabra[Dicta] == "O5"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiete 
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != NQUINTA && palabra[Dicta] == "O5"){
             error++;
            Lee("no es el signo de \'quinta octava\' pulsar \'4, 6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
        if(numeros == NSEXTA && palabra[Dicta] == "O6"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != NSEXTA && palabra[Dicta] == "O6"){
             error++;
            Lee("no es el signo de \'sexta octava\' pulsar \'5, 6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }

        if(numeros == NSEPTIMA && palabra[Dicta] == "O7"){
            $(".box").css("background-color","white");
            $(".box").css("color","black")
            //bien dicta siguiente
            Dicta++;
            DictarNuevaL();
            return;
        }
         else if(numeros != NSEPTIMA && palabra[Dicta] == "O7"){
             error++;
            Lee("no es el signo de \'septima octava\' pulsar \'6,\'");           
            $(".box").css("background-color","white");
            $(".box").css("color","black");
            //console.log("error");
            return;
        }
     
        if (valorO != ""){            
            //console.log(PrimerS + " ?" + numeros + " " + valorO + " " + eval("N"+valorO));
            if(numeros == eval("N"+valorO)){
                $(".box").css("background-color","white");
                $(".box").css("color","black")
                //bien dicta siguiente
                Dicta++;
                DictarNuevaL();
            }
             else{
                error++;
                Lee("no es el signo de '" + valorO + " octava'. pulsar " +  eval("N"+valorO));            
                $(".box").css("background-color","white");
                $(".box").css("color","black");
                //console.log("error??");
                return;
            }
        }
        //es una nota    
        else if (valorO == ""){

            if (palabra[Dicta].substring(0,1)== "C"){ notaD = "DO"}
            else if (palabra[Dicta].substring(0,1)== "D"){ notaD = "RE"}
            else if (palabra[Dicta].substring(0,1)== "E"){ notaD = "MI"}
            else if (palabra[Dicta].substring(0,1)== "F"){ notaD = "FA"}
            else if (palabra[Dicta].substring(0,1)== "G"){ notaD = "SOL"}
            else if (palabra[Dicta].substring(0,1)== "A"){ notaD = "LA"}
            else if (palabra[Dicta].substring(0,1)== "B"){ notaD = "SI"}
        
                 if (palabra[Dicta].substring(3,4) == "r"){ notaD = notaD + "REDONDA"}
            else if (palabra[Dicta].substring(3,4) == "b"){ notaD = notaD + "BLANCA"}
            else if (palabra[Dicta].substring(3,4) == "n"){ notaD = notaD + "NEGRA"}
            else if (palabra[Dicta].substring(3,4) == "c"){ notaD = notaD + "CORCHEA"}
             
           // //console.log(eval(notaD) + "?????nota" + numeros + "<<<<" + palabra[Dicta] );
            if (numeros == eval(notaD))
            {
                $(".box").css("background-color","white");
                $(".box").css("color","black")
                //bien dicta siguiente
                Dicta++;   
               // //console.log(numeros +  " bien == " + eval(notaD));             
                DictarNuevaL();
            }
             else if(numeros != eval(notaD)){
                error++;
                //console.log(numeros + "!= " + eval(notaD));
                let puntos =  eval(notaD).split('');
                puntos = puntos.toString().replace(/,/g,", " );
                //console.log( "mal " + eval("N" +eval(notaD)));
                Lee("no es " + eval("N" +eval(notaD)) + ". pulsar " +  puntos);            
                $(".box").css("background-color","white");
                $(".box").css("color","black")
            }
        
        }       
}



