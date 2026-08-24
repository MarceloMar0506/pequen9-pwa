var Dicta = 0;
var idLetra = 0;
var LetraD = "";
var IndiceU = 0;
var ListaEvaluacion = [];      
var ListaUsuario = [];
var LeccionV = ""; 
var DactiloAc;
var DactiloM;
var includeF="";


function DictarPrimera()
 {
  //No dicta compás 
  
  palabra = eval("Melodia" + LeccionActual);
 // console.log(LeccionActual + " " + palabra);

  if (LeccionActual < 1)
   {
     Dicta =1;
     $("#Segundac").css("display","none"); 
     $("#Tercerac").css("display","none"); 
     //$("#Segundac").css("display","none");
     $(".gridPlantilla").css("grid-template-columns","1fr"); 
   }
   else if (LeccionActual == 2)
   {
     Dicta =0;
     $("#Segundac").css("display","grid"); 
     $("#Tercerac").css("display","grid");      
     $(".gridPlantilla").css("grid-template-columns","1fr 1fr 1fr");
     $(".gridPlantilla").css("grid-column-gap","5vw");
   }

   else if (LeccionActual > 2)
   {
     Dicta =0;
     $("#Segundac").css("display","grid"); 
     $("#Tercerac").css("display","grid");      
     $(".gridPlantilla").css("grid-template-columns","1fr 1fr 1fr");
     $(".gridPlantilla").css("grid-column-gap","5vw");
   }
   //style="grid-template-columns: 1fr 1fr 1fr;grid-column-gap: 5vw;"
  // console.log(palabra[Dicta].substring(6,7) + " <<< " +  palabra[Dicta] +  " >>>>>>> " + palabra );
   //console.log(" <<< " +  palabra[Dicta].substring(0,6))
  let Mnota ="";
   valorO ="";
   
   if (palabra[Dicta].substring(0,3) == "Sos")
   {     
     valorO ="SOSTENIDO";  
     $("#pass").html(valorO);  
   }
   if (palabra[Dicta].substring(0,3) == "Vem")
   {     
     valorO ="BEMOL";   
     $("#pass").html(valorO);  
   }
   if (palabra[Dicta].substring(0,3) == "Vec")
   {     
     valorO ="BECUADRO";   
     $("#pass").html(valorO);  
   }
   if (palabra[Dicta].substring(0,3) == "bir")
   {     
     valorO ="BARRA INICIO DE REPETICIÓN"; 
    
   }
   else if (palabra[Dicta].substring(0,1) == "O")
   {
     Mnota = "OCTAVA";
     if (palabra[Dicta].substring(1,2)== "1"){valorO = "PRIMERA "}
     if (palabra[Dicta].substring(1,2)== "2"){valorO = "SEGUNDA "}
     if (palabra[Dicta].substring(1,2)== "3"){valorO = "TERCERA "}
     if (palabra[Dicta].substring(1,2)== "4"){valorO = "CUARTA "}
     if (palabra[Dicta].substring(1,2)== "5"){valorO = "QUINTA "}
     if (palabra[Dicta].substring(1,2)== "6"){valorO = "SEXTA "}
     if (palabra[Dicta].substring(1,2)== "7"){valorO = "SEPTIMA "}
    
   }
   if (palabra[Dicta].substring(0,3) == "lma")
   {     
     valorO ="LIGADURA MAYOR O DE FRASE ABRIENDO";
     $("#pass").html('LIGADURA MAYOR O DE FRASE ABRIENDO');  
     $("#Segundac").css("display","grid"); 
     $(".gridPlantilla").css("grid-template-columns","1fr 1fr");
     $(".gridPlantilla").css("grid-column-gap","1vw");
     $(".gridPlantilla").css("width","32vw");
     $('#FiguraImg').attr("src","./../ResB/LigaduraMayor.png");     
   }  
   else if (palabra[Dicta].substring(0,6) == "Compas")
   {
     if (palabra[Dicta].substring(6,7)== "1"){valorO = "Compás dos cuartos "}
     if (palabra[Dicta].substring(6,7)== "2"){valorO = "Compás tres cuartos "}
     if (palabra[Dicta].substring(6,7)== "3"){valorO = "Compás cuatro cuartos "}
     if (palabra[Dicta].substring(6,7)== "4"){valorO = "Compás seis cuartos "}
     if (palabra[Dicta].substring(6,7)== "5"){valorO = "Compás dos medios "}
     if (palabra[Dicta].substring(6,7)== "6"){valorO = "Compás tres medios "}
     if (palabra[Dicta].substring(6,7)== "7"){valorO = "Compás seis octavos"}
     if (palabra[Dicta].substring(6,7)== "8"){valorO = "Compás nueve octavos "}
   }
   else {
    Dicta = 0;
     notaD=palabra[Dicta];//.substring(0,1);
     //console.log(notaD +" ????? ");
     /////////////////
     if (palabra[Dicta].substring(0,1)== "C"){ notaD = "DO "}
     if (palabra[Dicta].substring(0,1)== "D"){ notaD = "RE "}
     if (palabra[Dicta].substring(0,1)== "E"){ notaD = "MI "}
     if (palabra[Dicta].substring(0,1)== "F"){ notaD = "FA "}
     if (palabra[Dicta].substring(0,1)== "G"){ notaD = "SOL "}
     if (palabra[Dicta].substring(0,1)== "A"){ notaD = "LA "}
     if (palabra[Dicta].substring(0,1)== "B"){ notaD = "SI "}

     escribeNota();
 
     if (palabra[Dicta].substring(3,4) == "r"){
     Dice = notaD + " redonda";
     notaD = notaD + "redonda";
     $('#FiguraImg').attr("src","./../ResB/Redonda.png")}
     if (palabra[Dicta].substring(3,4) == "b"){
     Dice = notaD + " blanca";
     notaD = notaD + "blanca";
     $('#FiguraImg').attr("src","./../ResB/Blanca.png")}
     if (palabra[Dicta].substring(3,4) == "n"){
     Dice = notaD + " negra";
     notaD = notaD + "negra";
     $('#FiguraImg').attr("src","./../ResB/Negra.png")}
     if (palabra[Dicta].substring(3,4) == "c"){ 
     Dice = notaD + " corchea";
     notaD = notaD + "corchea";
     $('#FiguraImg').attr("src","./../ResB/Corchea.png")}
     
     if (palabra[Dicta] == "Spa"){ Dice = "separador de compás";
    // $("#espacio").css("visibility","visible");
     $('#FiguraImg').attr("src","./../ResB/Nada.png")}
 
     if (palabra[Dicta] == "Sr"){ Dice = "silencio de redonda";    
     $('#FiguraImg').attr("src","./../ResB/Sredonda.png")}
     if (palabra[Dicta] == "Sb"){ Dice = "silencio de blanca";    
     $('#FiguraImg').attr("src","./../ResB/Sblanca.png")}
     if (palabra[Dicta] == "Sn"){ Dice = "silencio de negra";    
     $('#FiguraImg').attr("src","./../ResB/Snegra.png")}
     if (palabra[Dicta] == "Sc"){ Dice = "silencio de corchea";    
     $('#FiguraImg').attr("src","./../ResB/Scorchea.png")}
     if (palabra[Dicta] == "pun"){ Dice = "puntillo";    
     $('#FiguraImg').attr("src","./../ResB/BlancaP.png")}

     $("#pass").html(Dice);  
      
       Mnota =Dice;


     ////////////////////////////////
   }
//document.getElementById('EtiquetaUnoTexto').innerHTML =  Mnota;
 Dice = ' escribe '  + valorO + Mnota + ' ' ;
if (LeccionActual == 0 && Dice.includes("corchea") && includeF != "corchea" ){
  includeF = "corchea";
  $("#pass").html('CORCHEAS O GARRAPATEAS');  
  Dice =  'Corcheas o garrapateas: escribe '  + valorO + Mnota + ' ' ;
}

 $("#PTercera").css("display","grid");
 $("#PCuarta").css("display","grid");
 var letra = document.getElementById('letra');
 //letra.innerHTML =  Mnota.substring(0,1);
 ////console.log("dicta primera " +  eval("N"+ valorO));

 //No dicta compás 
 let titAct = eval("TituloM" + LeccionActual);

 Dice =  titAct + ". " +  Dice;
 console.log(Dice +  " dicta primera");
 LeeCGB(Dice);

}

const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

function syllabify(words) {
    return words.match(syllableRegex);
}


function DictarNuevaL()
 {  
 // console.log(palabra[Dicta] +  " ==  " + palabra);
 if (Dicta ==  palabra.length)
 {
 termino = "si";
 
// document.getElementById("Smelodia").click();
  
     if ((error*100)/Dicta == 0){ desempenio = "Excelente";}
     if ((error*100)/Dicta < 11 && (error*100)/Dicta > 0  ){ desempenio = "Muy Bueno";}
     if ((error*100)/Dicta < 26 && (error*100)/Dicta > 10){ desempenio = "Bueno";}
     if ((error*100)/Dicta > 25){ desempenio = "bajo. debes seguir practicando";}

     LeeCGB("Bien, tu desempeño fue " + desempenio + ". Pulsa escape para salir. ");
 setTimeout(() => {
  piano();
  //Suena(); 
 }, 6000);
    


     fin =true; 
    ActualizaUsuLec();
 return;
 }


 playSound();

  Dice =  palabra[Dicta];
// console.log(Dice + " Salto ???  " + palabra[Dicta]);
  valorO=""; 
  if (palabra[Dicta] == "salto")
  {
    Lee("pulsar enter");
    return;
  }

  if (palabra[Dicta].substring(0,3) == "Sos")
  {     
    valorO ="SOSTENIDO"; 
    $("#pass").html(valorO); 
    $('#FiguraImg').attr("src","./../ResB/Nada.png");       
  }
  if (palabra[Dicta].substring(0,3) == "Vem")
  {     
    valorO ="BEMOL"; 
    $("#pass").html(valorO);    
  }
  if (palabra[Dicta].substring(0,3) == "Vec")
  {     
    valorO ="BECUADRO";   
    $("#pass").html(valorO);  
  }
  if (palabra[Dicta].substring(0,3) == "pun")
  {     
    valorO ="PUNTILLO";   
  }
  if (palabra[Dicta].substring(0,3) == "lig")
  {     
    valorO ="LIGADURA MENOR O DE EXPRESIÓN";   
  }
  if (palabra[Dicta].substring(0,3) == "rep")
  { 
    $("#pass").html('SIGNO DE REPETICIÓN');  
    $("#Segundac").css("display","none"); 
    $(".gridPlantilla").css("grid-template-columns","1fr");   
    $(".gridPlantilla").css("width","32vw");
    $('#FiguraImg').attr("src","./../ResB/Repeticion.png");     
  }
  if (palabra[Dicta].substring(0,3) == "bir")
  {     
    valorO ="BARRA INICIO DE REPETICIÓN";
    $("#pass").html('BARRA INICIO DE REPETICIÓN');  
    $("#Segundac").css("display","grid"); 
    $(".gridPlantilla").css("grid-template-columns","1fr 1fr");
    $(".gridPlantilla").css("grid-column-gap","1vw");
    $(".gridPlantilla").css("width","32vw");
    $('#FiguraImg').attr("src","./../ResB/BInicioR.png");     
  }
  if (palabra[Dicta].substring(0,3) == "bfr")
  {     
    valorO ="BARRA FIN DE REPETICIÓN";   
    $("#pass").html('BARRA FIN DE REPETICIÓN');  
    $("#Segundac").css("display","grid"); 
    $(".gridPlantilla").css("grid-template-columns","1fr 1fr");
    $(".gridPlantilla").css("grid-column-gap","1vw");
    $(".gridPlantilla").css("width","32vw");
    $('#FiguraImg').attr("src","./../ResB/BFinR.png");
  }
  if (palabra[Dicta].substring(0,3) == "lma")
  {     
    valorO ="LIGADURA MAYOR O DE FRASE ABRIENDO";
    $("#pass").html('LIGADURA MAYOR O DE FRASE ABRIENDO');  
    $("#Segundac").css("display","grid"); 
    $(".gridPlantilla").css("grid-template-columns","1fr 1fr");
    $(".gridPlantilla").css("grid-column-gap","1vw");
    $(".gridPlantilla").css("width","32vw");
    $('#FiguraImg').attr("src","./../ResB/LigaduraMayor.png");     
  }

  if (palabra[Dicta].substring(0,3) == "lmc")
  {     
    valorO ="LIGADURA MAYOR O DE FRASE CERRANDO";
    $("#pass").html('LIGADURA MAYOR O DE FRASE CERRANDO');  
    $("#Segundac").css("display","grid"); 
    $(".gridPlantilla").css("grid-template-columns","1fr 1fr");
    $(".gridPlantilla").css("grid-column-gap","1vw");
    $(".gridPlantilla").css("width","32vw");
    $('#FiguraImg').attr("src","./../ResB/LigaduraMayor.png");     
  }
  if (palabra[Dicta].substring(0,3) == "lmp")
  {     
    valorO ="LIGADURA DE PROLONGACIÓN";
    $("#pass").html('LIGADURA DE PROLONGACIÓN');  
    $("#Segundac").css("display","grid"); 
    $(".gridPlantilla").css("grid-template-columns","1fr 1fr");
    $(".gridPlantilla").css("grid-column-gap","1vw");
    $(".gridPlantilla").css("width","32vw");
    $('#FiguraImg').attr("src","./../ResB/Ligadura.png");     
  }



  Dice=valorO;
  if (palabra[Dicta].substring(0,1) == "O")
  {
    
    Mnota = "OCTAVA";
    if (palabra[Dicta].substring(1,2)== "1"){valorO = "PRIMERA "}
    if (palabra[Dicta].substring(1,2)== "2"){valorO = "SEGUNDA "}
    if (palabra[Dicta].substring(1,2)== "3"){valorO = "TERCERA "}
    if (palabra[Dicta].substring(1,2)== "4"){valorO = "CUARTA "}
    if (palabra[Dicta].substring(1,2)== "5"){valorO = "QUINTA "}
    if (palabra[Dicta].substring(1,2)== "6"){valorO = "SEXTA "}
    if (palabra[Dicta].substring(1,2)== "7"){valorO = "SEPTIMA "}
    $('#FiguraImg').attr("src","./../ResB/Nada.png");       
    $("#Segundac").css("display","none"); 
    $("#Tercerac").css("display","none");     
    $(".gridPlantilla").css("grid-template-columns","1fr"); 

    console.log("octava >>>>>>>>>>>>>>>>> " +  valorO)

    Dice=valorO + "octava";
    notaD=valorO + "octava";
    $("#pass").html(Dice);  
    //console.log("??? " + notaD);
    Lee(notaD + " ")
    return;
  }
  else if (palabra[Dicta].substring(0,6) == "Compas")
  {
    if (palabra[Dicta].substring(6,7)== "1"){valorO = "Compás dos cuartos "}
    if (palabra[Dicta].substring(6,7)== "2"){valorO = "Compás tres cuartos "}
    if (palabra[Dicta].substring(6,7)== "3"){valorO = "Compás cuatro cuartos "}
    if (palabra[Dicta].substring(6,7)== "4"){valorO = "Compás seis cuartos "}
    if (palabra[Dicta].substring(6,7)== "5"){valorO = "Compás dos medios "}
    if (palabra[Dicta].substring(6,7)== "6"){valorO = "Compás tres medios "}
    if (palabra[Dicta].substring(6,7)== "7"){valorO = "Compás seis octavos"}
    if (palabra[Dicta].substring(6,7)== "8"){valorO = "Compás nueve octavos "}

    $("#pass").html(valorO);  
    
    $("#Segundac").css("display","grid"); 
    $("#Tercerac").css("display","grid");      
    $(".gridPlantilla").css("grid-template-columns","1fr 1fr 1fr");
    $(".gridPlantilla").css("grid-column-gap","5vw");



   Dice = valorO;
  }
 else if (palabra[Dicta].substring(0,1) == "r")
  {
    //console.log("repetición")
    notaD ="REPETICION";
  }
  else if (palabra[Dicta].substring(0,3) == "bir")
  {
    //console.log("barra inicio de repetición")
    notaD ="BARRA INICIO DE REPETICION";
  }
  else if (palabra[Dicta].substring(0,3) == "bfr")
  {
    //console.log("barra fin de repetición")
    notaD ="BARRA FIN DE REPETICION";
  }
  else { 
    if (palabra[Dicta].substring(0,1)== "C"){ notaD = "DO "}
    if (palabra[Dicta].substring(0,1)== "D"){ notaD = "RE "}
    if (palabra[Dicta].substring(0,1)== "E"){ notaD = "MI "}
    if (palabra[Dicta].substring(0,1)== "F"){ notaD = "FA "}
    if (palabra[Dicta].substring(0,1)== "G"){ notaD = "SOL "}
    if (palabra[Dicta].substring(0,1)== "A"){ notaD = "LA "}
    if (palabra[Dicta].substring(0,1)== "B"){ notaD = "SI "}

    if (palabra[Dicta].substring(3,4) == "r"){
    Dice = notaD + " redonda";
    notaD = notaD + "redonda";
    $('#FiguraImg').attr("src","./../ResB/Redonda.png")}
    if (palabra[Dicta].substring(3,4) == "b"){
    Dice = notaD + " blanca";
    notaD = notaD + "blanca";
    $('#FiguraImg').attr("src","./../ResB/Blanca.png")}
    if (palabra[Dicta].substring(3,4) == "n"){
    Dice = notaD + " negra";
    notaD = notaD + "negra";
    $('#FiguraImg').attr("src","./../ResB/Negra.png")}
    if (palabra[Dicta].substring(3,4) == "c"){ 
    Dice = notaD + " corchea";
    notaD = notaD + "corchea";
    $('#FiguraImg').attr("src","./../ResB/Corchea.png")}
    
    if (palabra[Dicta] == "Spa"){ Dice = "separador de compás";
   // $("#espacio").css("visibility","visible");
    $('#FiguraImg').attr("src","./../ResB/Nada.png")}

    if (palabra[Dicta] == "Sr"){ Dice = "silencio de redonda";    
    $('#FiguraImg').attr("src","./../ResB/Sredonda.png")}
    if (palabra[Dicta] == "Sb"){ Dice = "silencio de blanca";    
    $('#FiguraImg').attr("src","./../ResB/Sblanca.png")}
    if (palabra[Dicta] == "Sn"){ Dice = "silencio de negra";    
    $('#FiguraImg').attr("src","./../ResB/Snegra.png")}
    if (palabra[Dicta] == "Sc"){ Dice = "silencio de corchea";    
    $('#FiguraImg').attr("src","./../ResB/Scorchea.png")}
    if (palabra[Dicta] == "lig"){ Dice = "ligadura menor o de expresión";
    $("#Segundac").css("display","none"); 
    $("#Tercerac").css("display","none");     
    $(".gridPlantilla").css("grid-template-columns","1fr"); 
    $('#FiguraImg').attr("src","./../ResB/LigaduraMenor.png")}

    $("#pass").html(Dice); 
    console.log(palabra[Dicta] + " dicta esto??");
  }
   sayTimeout = setTimeout(function () { 
      window.speechSynthesis.cancel(); 
      if (notaD != "REPETICION"){ 
       //console.log("yyy ??? " + LeccionActual + " " + Dice);
       if (LeccionActual == 0 && Dice.includes("DO  negra") && includeF != "DO  negra" ){
        includeF = "DO  negra";
        Dice =  'Negras o semifusas: escribe '  + Dice;
        $("#pass").html('NEGRAS O SEMIFUSAS');
        escribeNota();
        Lee(Dice);
        return;
      }
      if (LeccionActual == 0 && Dice.includes("DO  blanca") && includeF != "DO  blanca" ){
        includeF = "DO  blanca";
        $("#pass").html('BLANCAS O FUSAS');
        Dice =  'Blancas o fusas: escribe '  + Dice;
        escribeNota();
        Lee(Dice);
        return;
      }
      if (LeccionActual == 0 && Dice.includes("do corchea") && includeF != "do corchea" ){
        includeF = "do corchea";
        $("#pass").html('CORCHEAS O GARRAPATEAS');
        Dice =  'corcheas o garrapateas: escribe '  + Dice;
        escribeNota();
        Lee(Dice);
        return;
      }
      if (LeccionActual == 0 && Dice.includes("DO  redonda") && includeF != "DO  redonda" ){
        includeF = "DO  redonda";
        $("#pass").html('REDONDAS O SEMICORCHEAS');
        Dice =  'redondas o semicorcheas: escribe '  + Dice;
        escribeNota();
        Lee(Dice);
        return;
      }      
       Lee(Dice)
      }
      else if (notaD == "REPETICION"){ 
        //console.log("yyy ??? " + notaD + " >>>> " + palabra[Dicta]);
        if ( palabra[Dicta] == "rep"){
           Lee("signo de repetición ");
        }
        else if ( palabra[Dicta] == "Spa"){
          Lee("separador de compás");         
       }
       }

      var letra = document.getElementById('letra');
      //console.log("<"+palabra[Dicta]+">");
      if (palabra[Dicta] == "Sos"){letra.innerHTML = "#"    
    }
      else if (palabra[Dicta] == "Vem"){letra.innerHTML = "♭"}
      else if (palabra[Dicta] == "Vec"){letra.innerHTML = "♮"}
      else if (palabra[Dicta] == "Spa"){letra.innerHTML = "-"}
      else if (palabra[Dicta] == "Sr"){letra.innerHTML = ""}
      else if (palabra[Dicta] == "Sb"){letra.innerHTML = ""}
      else if (palabra[Dicta] == "Sn"){letra.innerHTML = ""}
      else if (palabra[Dicta] == "Sc"){letra.innerHTML = ""}
      else if (palabra[Dicta] == "pun"){letra.innerHTML = "."}
      else if (palabra[Dicta] == "lig"){letra.innerHTML = ""}
      else{
        if (palabra[Dicta].substring(0,1) != "r" && palabra[Dicta].substring(0,6) != "Compas" && palabra[Dicta].substring(0,3) != "bir" && palabra[Dicta].substring(0,3) != "bfr" ){        
          
         escribeNota();            
           


        }else if (palabra[Dicta].substring(0,1) == "r"){
          //repetición
          letra.innerHTML = "=";
       }
      }      
      $('#EtiquetaDosTexto').text("");
    }, 100);
  }
  function escribeNota(){
    if (palabra[Dicta].substring(0,1) =="C"){
      letra.innerHTML =   "Do";
     }
     else if (palabra[Dicta].substring(0,1) =="D"){
      letra.innerHTML =   "Re";
    
     }
     else if (palabra[Dicta].substring(0,1) =="E"){
      letra.innerHTML =   "Mi";
     }
     else if (palabra[Dicta].substring(0,1) =="F"){
      letra.innerHTML =   "Fa";
     }
     else if (palabra[Dicta].substring(0,1) =="G"){
      letra.innerHTML =   "Sol";
     }
     else if (palabra[Dicta].substring(0,1) =="A"){
      letra.innerHTML =   "La";
     }
     else if (palabra[Dicta].substring(0,1) =="B"){
      letra.innerHTML =   "Si";
     }
     else if (palabra[Dicta] =="pun"){
      letra.innerHTML =   ".";
     }
     else{
      letra.innerHTML =  "";// palabra[Dicta];
     
      
     }
  }