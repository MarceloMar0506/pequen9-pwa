var PrimerS ="";
var NumPulsar = "";
var MLec = "";
var soloNumeros1TVB = "";
var soloNumeros2TVB = "";
var indices = [];
var ResCelda= 0;
var yapulsado = 0;
var abajo = false;
var IndiceFin = 0;
var PracticaActual ="0";
var UsuarioActual = "";
var PDic;

//var map = {68: false, 83: false, 70: false}; 
$(document).keydown(function(e) { 
    if (ResCelda == 0){
    if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
        $("#box1").css("background-color","black");          
        $("#box1").css("color","white");} //F
    if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
        $("#box2").css("background-color","black");          
        $("#box2").css("color","white");} //D
    if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
        $("#box3").css("background-color","black");          
        $("#box3").css("color","white");} //S		
    if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
        $("#box4").css("background-color","black");          
        $("#box4").css("color","white");} //J
    if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
        $("#box5").css("background-color","black");          
        $("#box5").css("color","white");} //K
    if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
        $("#box6").css("background-color","black");          
        $("#box6").css("color","white");} //L
    }
    else if (ResCelda == 1){
        if (e.keyCode == 70) {statusdiv.innerHTML = '1'; number = 1;
            $("#box01").css("background-color","black");          
            $("#box01").css("color","white");} //F
        if (e.keyCode == 68) {statusdiv2.innerHTML = '2'; number = 2;
            $("#box02").css("background-color","black");          
            $("#box02").css("color","white");} //D
        if (e.keyCode == 83) {statusdiv3.innerHTML = '3'; number = 3;
            $("#box03").css("background-color","black");          
            $("#box03").css("color","white");} //S		
        if (e.keyCode == 74) {statusdiv4.innerHTML = '4'; number = 4;
            $("#box04").css("background-color","black");          
            $("#box04").css("color","white");} //J
        if (e.keyCode == 75) {statusdiv5.innerHTML = '5'; number = 5;
            $("#box05").css("background-color","black");          
            $("#box05").css("color","white");} //K
        if (e.keyCode == 76) {statusdiv6.innerHTML = '6'; number = 6;
            $("#box06").css("background-color","black");          
            $("#box06").css("color","white");} //L
        }


    abajo = true;
});



// function Npulsado(event)
$(document).keyup(function(e) { 
  e.preventDefault();
//  if (e.keyCode == 13)
//  {
//     window.open("ListaPracticas.html","_self"); 
//     return;
//  }

  abajo = false;
     
	 d.innerHTML =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
     $(".etq").html('');
     //statusdiv.innerHTML = '';
    //  statusdiv2.innerHTML = '';
    //  statusdiv3.innerHTML = '';
    //  statusdiv4.innerHTML = '';
    //  statusdiv5.innerHTML = '';
    //  statusdiv6.innerHTML = ''; 
     evaluaTVB(PrimerS); 

});



function evaluaTVB(numeros)
    {
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

       // //console.log(soloNumeros1TVB + " fuera === " +  numeros);
       if (yapulsado == numeros){return}
       yapulsado = numeros;
      
        //alert(soloNumeros1TVB + " Igual? "  +  numeros);
		if (soloNumeros1TVB === numeros && numeros != "" )
         {
            ////console.log(alfab.length + " es igual ? fin === "  +  nlec);// + " " + soloNumeros1TVB + " === " +  numeros);
            
            if (indices.length > 1  && ResCelda == 0 )
             {//evaluaTVB la segunda
                 yapulsado = 0;
                 ResCelda = 1;
                 soloNumeros1TVB = soloNumeros2TVB;
                 return;
             }
            
             if (alfab.length - 1  ===  nlec)
             {   
                 termino = "si";                            
                 ActualizaUsuLec();
                 return;
             }
             
			$("#EtiquetaUnoTextoP").text("");
			$("#EtiquetaDosTexto").text("_");
		////console.log("Bien numeros pulsados " + soloNumeros1TVB + " ===== "  + numeros);
        nlec++;
        
       
        MLec = alfab[nlec];
       // alert(MLec + " <<< " + soloNumeros1TVB + " Igual? "  +  numeros);
				
		//Si tiene alguna letra acentuada lo dice
		var DiceL = "";
		var NNMLec = MLec;// .replace(".","");
		NNMLec = NNMLec.trim();
		var mide = NNMLec.length;
		////console.log(mide + "palabra " + NNMLec);
	  if (NNMLec.includes("á") && mide < 3){MLec = "a acentuada"}
	  if (NNMLec.includes("é") && mide < 3){MLec = "e acentuada"}
	  if (NNMLec.includes("í") && mide < 3){MLec = "i acentuada"}
	  if (NNMLec.includes("ó") && mide < 3){MLec = "o acentuada"}
      if (NNMLec.includes("ú") && mide < 3){MLec = "u acentuada"}
      if (NNMLec.includes("y") && mide < 3){MLec = "y griega"}

        Lee(Gres.BienEscribe + MLec  + ". ");
        ResCelda = 0;
		//MLec = MLec.replace(".","");
		$("#Mleccion").text(NNMLec);
		
		$(".box").css("color","black");
		$(".box").css("background-color","white");
		$(".box0").css("color","black");
		$(".box0").css("background-color","white");
        $("#Segunda").css("visibility","hidden");	
        QueNumeros();
        
		//var MLec = eval("PalabraU"+ nlec);		
         }
         
		 else if (parseInt(soloNumeros1TVB) != parseInt(numeros) && numeros != "")
         {
            
           // //console.log(parseInt(soloNumeros1TVB) + " mal ? === " +  numeros);
			 if (numeros.length == 0){return}
			var MLec = eval("D" + alfab[nlec]);
		////console.log("mal  numeros pulsados " + numeros + "<>" + LetraD);
		$(".box").css("color","black");
		$(".box").css("background-color","white");
		$(".box0").css("color","black");
		$(".box0").css("background-color","white");
		//$("#EtiquetaUnoTextoP").text("Puntos");
		var PuntosMlec = eval("D" + alfab[nlec])
		var NPuntosMlec = PuntosMlec.replace(/[,.]/g , "");
		NPuntosMlec = NPuntosMlec.replace("Puntos", " - ");
		//PuntosMlec = PuntosMlec.replace(/./g , " ");
		$("#EtiquetaDosTexto").text(NPuntosMlec);
		

                //Si tiene alguna letra acentuada lo dice
        PDic = $("#Mleccion").text().trim();
        MLec = PDic;  
		var DiceL = "";
		var NNMLec = MLec.replace(".","");
		NNMLec = NNMLec.trim();
		var mide = NNMLec.length;
		//console.log(PDic + "palabra " + NNMLec);
        if (PDic == "á" ){MLec = "a acentuada"}
        if (PDic == "é" ){MLec = "e acentuada"}
        if (PDic == "í"){MLec = "i acentuada"}
        if (PDic == "ó"){MLec = "o acentuada"}
        if (PDic == "ú"){MLec = "u acentuada"}
        if (PDic == "y"){MLec = "y griega"}
       
        const arrayP = errorD.toString();
        if (arrayP.indexOf(PDic.toString()) == -1){
        //palabra.push(LetraD);
        errorD.push(" " + PDic);
        //console.log("agregó " + errorD);
        //indiceErr++;
       }




        var Ndice = (eval("D" + alfab[nlec]).split(''));
       
        Ndice = Ndice.toString().replace(/,/g , ", ");
        
        Ndice = Gres.noescorrecto  + " '" +   MLec + "' " +  Ndice  + ". ";
       Lee(Ndice);
       //alert("NO ES correcto  Escribe " + MLec + ". " +  Ndice + ". ");
        ResCelda = 0;
        QueNumeros(); 
    
    }
	}


//////////////////////

	document.addEventListener("DOMContentLoaded",function(event){

		var miVar2 = setTimeout(function(){       
       
       // MLec = MLec.replace(".","");
        $("#Mleccion").text("a");        
        Lee(Gres.EscribeLetra +  $("#Mleccion").text());
        nlec = 0;
        QueNumeros();
        $(".gridPlantillaP").css("justify-items", "center");
        $(".gridPlantillaP").css("visibility","visible");
 
		////console.log("N de practica?? " + PracticaActual);
     }, 3000);  
	////console.log('Contenido cargado');
	});
function QueNumeros()
{
    window.speechSynthesis.cancel();
    MLec = alfab[nlec];    	 
    soloNumeros1TVB =  eval("D" + alfab[nlec]);// soloNumeros1TVB.toString().match(regex);
  indices = [];
for(var i = 0; i < MLec.toString().length; i++) {
    
    if (MLec.toString().substring(i, i + 1)  === "P") 
    {
    indices.push(i);
    }
}
////console.log(MLec + " Puntos?  " + indices.length);
if (indices.length > 1)
{
    $("#gridcontenedor").css("grid-template-columns", "46% 8% 46%");
    $(".gridPlantillaP").css("justify-items","end");
    $(".gridPlantillaP").css("margin-left","6vw");  
    $("#Segunda").css("visibility","visible");    
    
    soloNumeros2TVB = myArray[2];
    var regex = /(\d+)/g;
    soloNumeros2TVB = soloNumeros2TVB.toString().match(regex);
    soloNumeros2TVB = soloNumeros2TVB.toString().replace(/,/g , "");
    yapulsado = 0; 

}
else if (indices.length == 1)
{
    $("#gridcontenedor").css("grid-template-columns", "1fr"); 
    $(".gridPlantillaP").css("justify-items", "center");
    $(".gridPlantillaP").css("margin-left","4vw");  
   //$("#Primera").css("margin-left","0");

}
}
