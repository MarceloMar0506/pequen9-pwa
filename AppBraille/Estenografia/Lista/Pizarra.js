
var map = {68: false, 83: false, 70: false}; 
$(document).keydown(function(e) { 
	if (e.keyCode == 70) {map[70] = true} //F
	if (e.keyCode == 68) {map[68] = true} //D
	if (e.keyCode == 83) {map[83] = true} //S
		
	if (e.keyCode == 74) {map[74] = true} //J
	if (e.keyCode == 75) {map[75] = true} //K
	if (e.keyCode == 76) {map[76] = true} //L
});



function Npulsado(event)
  {
  event.preventDefault();


    if (event.keyCode in map) { 
		
		if (map[70] == true){statusdiv.innerHTML = '1'; number = 1;}
		if (map[68] == true){statusdiv2.innerHTML = '2'; number = 2;}
		if (map[83] == true){statusdiv3.innerHTML = '3'; number = 3;}
		
		if (map[74] == true){statusdiv4.innerHTML = '4'; number = 4;}
		if (map[75] == true){statusdiv5.innerHTML = '5'; number = 5;}
		if (map[76] == true){statusdiv6.innerHTML = '6'; number = 6;}
	
	 //map[event.keyCode] = false; 
	 map = {68: false, 83: false, 70: false, 74: false, 75: false, 76: false}; 
	// return;
    } 
//});



  
  var number = String.fromCharCode(event.which);
  
  var keyCode = event.keyCode || event.which;
 
  //Ayuda
  if (keyCode==112)
  {return}

  if (keyCode == 32)
  {
    Informe();
    return;
  }

  //blq num
  var active = event.getModifierState('NumLock');
  
  if (keyCode == 144)
  {
  if (active == false){Lee(Gres.TnNh);return;}
  if (active == true){Lee(Gres.TnH);return;}
  }
  
  
  
  //Blq num no bloqueado
  if (keyCode >= 33 && keyCode <= 40)
  {
  if (active == false){Lee(Gres.NBtN);return;}
  }
  
  if (keyCode ==  12 || keyCode == 45)
  {
  if (active == false){Lee(Gres.NBtN);return;}
  }
  
  
 
   if (keyCode ==116){return}
   
      if (keyCode >= 96 && keyCode <= 105) {
          // Numpad keys        
          keyCode -= 48;
          number = String.fromCharCode(keyCode);
      }
  //////console.log(number);
    if (number == 9){
       statusdiv.innerHTML = '1'; 
       number = 1;        
                 $("#box1").css("background-color","black");          
            $("#box1").css("color","white");
       
    }
    else if (number == 6){
       statusdiv2.innerHTML = '2';         
       number = 2;
       
                 $("#box2").css("background-color","black");          
            $("#box2").css("color","white");
    }
    else if (number == 3){
       statusdiv3.innerHTML = '3';         
       number = 3;
       
                 $("#box3").css("background-color","black");          
            $("#box3").css("color","white");
    }
    else if (number == 8){
       statusdiv4.innerHTML = '4';         
       number = 4;
      
                 $("#box4").css("background-color","black");          
            $("#box4").css("color","white");
    }
    else if (number == 5){
       statusdiv5.innerHTML = '5';         
       number = 5;
      
                 $("#box5").css("background-color","black");          
            $("#box5").css("color","white");
    }
    else if (number == 2){
       statusdiv6.innerHTML = '6';         
       number = 6;
      
                 $("#box6").css("background-color","black");          
            $("#box6").css("color","white");
    }

	d.innerHTML =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;
	 var miVar2 = setTimeout(function(){ 
	////console.log(d.innerHTML  + " nlec " + nlec);


	var MLec = eval("PalabraU"+ nlec);
	MLec = MLec.toString().replace(/,/g , " ");
	var soloNumeros = MLec.substring(MLec.indexOf("Punto")+ 6);
	////console.log("soloNumeros  A " + soloNumeros);
		var regex = /(\d+)/g;
		//////console.log("estos numeros " + soloNumeros.match(regex)); 
		soloNumeros = soloNumeros.match(regex);
		
		////console.log("soloNumeros " + soloNumeros);
		MLec = soloNumeros.toString().replace(/,/g , " ");
		////console.log("soloNumeros F " + soloNumeros.toString().replace(/,/g , ""));
		
		////console.log(number + Date.now());
	 LetraD = soloNumeros.toString().replace(/,/g , "");
	// alert(d.innerHTML.toString());
	 if (d.innerHTML.toString().trim().length <  LetraD.length &&  LetraD.includes(number) )
	  {return}
	
	
		
        evalua(d.innerHTML);
		$(".etq").html('');

	// statusdiv.innerHTML = '';
	// statusdiv2.innerHTML = '';
	// statusdiv3.innerHTML = '';
	// statusdiv4.innerHTML = '';
	// statusdiv5.innerHTML = '';
	// statusdiv6.innerHTML = '';
	// statusdiv0.innerHTML = '';
	// statusdiv02.innerHTML = '';
	// statusdiv03.innerHTML = '';
	// statusdiv04.innerHTML = '';
	// statusdiv05.innerHTML = '';
	// statusdiv06.innerHTML = '';  
   
   }, 1);      
 }






function evalua(numeros)
    {
		if (LetraD === numeros)
         {
			 
			$("#EtiquetaUnoTexto").text("");
			$("#EtiquetaDosTexto").text("");
		////console.log("Bien numeros pulsados " + numeros);
		nlec++;
		var MLec = eval("PalabraU" + nlec )[0].substring(0,eval("PalabraU" + nlec )[0].indexOf("Punto"));
				
		//Si tiene alguna letra acentuada lo dice
		var DiceL = "";
		var NNMLec = MLec.replace(".","");
		NNMLec = NNMLec.trim();
		var mide = NNMLec.length;
		////console.log(mide + "palabra " + NNMLec);
	  if (NNMLec.includes("á") && mide < 3){DiceL = "con  a acentuada"}
	  if (NNMLec.includes("é") && mide < 3){DiceL = "con  e acentuada"}
	  if (NNMLec.includes("í") && mide < 3){DiceL = "con  i acentuada"}
	  if (NNMLec.includes("ó") && mide < 3){DiceL = "con  o acentuada"}
	  if (NNMLec.includes("ú") && mide < 3){DiceL = "con  u acentuada"}

		LeeCGB(Gres.BienEscribe + MLec + " " + DiceL + ". ");
		MLec = MLec.replace(".","");
		$("#Mleccion").text(MLec);
		
		$(".box").css("color","black");
		$(".box").css("background-color","white");
		$(".box0").css("color","black");
		$(".box0").css("background-color","white");
		$("#Segunda").css("visibility","hidden");	

//////////////////////// Con Segunda??
var MLec = eval("PalabraU"+ (nlec) );
	var cadena = MLec;
	
	indices = [];
	for(var i = 0; i < MLec.toString().length; i++) {
		
		if (MLec.toString().substring(i, i + 1)  === "P") 
		{
		indices.push(i);
		}

	}
	////console.log(MLec + " Puntos?  " + indices.length);
	if (indices.length == 2)
	{
		$(".gridPlantilla").css("grid-template-columns", "1fr 1fr");
		$("#Segunda").css("visibility","visible");
		$("#Primera").css("padding-left","30vw");
		//$("#Primera").css("margin","0");

	}
	else if (indices.length != 2)
	{
		$(".gridPlantilla").css("grid-template-columns", "1fr");
		$("#Primera").css("padding-left","0");

	}
		
		//var MLec = eval("PalabraU"+ nlec);		
		 }
		 else if (LetraD != numeros)
         {
			 if (numeros.length == 0){return}
			var MLec = eval("PalabraU" + nlec )[0].substring(0,eval("PalabraU" + nlec )[0].indexOf("Punto"));
		////console.log("mal  numeros pulsados " + numeros + "<>" + LetraD);
		$(".box").css("color","black");
		$(".box").css("background-color","white");
		$(".box0").css("color","black");
		$(".box0").css("background-color","white");
		//$("#EtiquetaUnoTexto").text("Puntos");
		var PuntosMlec =  eval("PalabraU" + nlec )[0].substring(eval("PalabraU" + nlec )[0].indexOf("Punto")+ 6);
		var NPuntosMlec = PuntosMlec.replace(/[,.]/g , "");
		NPuntosMlec = NPuntosMlec.replace("Puntos", " - ");
		//PuntosMlec = PuntosMlec.replace(/./g , " ");
		$("#EtiquetaDosTexto").text(NPuntosMlec);
		// var soloNumeros =  eval("PalabraU" + nlec )[0].substring(MLec.indexOf("Punto") );

        		//Si tiene alguna letra acentuada lo dice
		var DiceL = "";
		var NNMLec = MLec.replace(".","");
		NNMLec = NNMLec.trim();
		var mide = NNMLec.length;
		////console.log(mide + "palabra " + NNMLec);
	  if (NNMLec.includes("á") && mide < 3){DiceL = "con  a acentuada"}
	  if (NNMLec.includes("é") && mide < 3){DiceL = "con  e acentuada"}
	  if (NNMLec.includes("í") && mide < 3){DiceL = "con  i acentuada"}
	  if (NNMLec.includes("ó") && mide < 3){DiceL = "con  o acentuada"}
	  if (NNMLec.includes("ú") && mide < 3){DiceL = "con  u acentuada"}

		//LeeCGB("bien. escribe " + MLec + " " + DiceL + ". ");
         var PDic = $("#Mleccion").text();   
		const found = errorD.find(element => element == PDic);
         //  ////console.log(found + " " + LetraD);
           if (!found){
           
           errorD.push(" " + PDic);
           ////console.log("errores " + errorD);
          // indiceErr++;
          }

		LeeCGB(Gres.noescorrecto  + " '" + number + "' " +  eval("PalabraU" + nlec )[0] + ". " +  DiceL + ". ");
		 }
	}


//////////////////////

	document.addEventListener("DOMContentLoaded",function(event){
		
		var miVar2 = setTimeout(function(){ 

    //valores pasados por get
    // var valores=getGET();
    // if(valores)
    // {
    //     //recogemos los valores que nos envia la URL en variables para trabajar 
    //         //con ellas
	// 	var UsuarioActual = valores['usuario'];
	// 	////console.log(UsuarioActual);
	// 	var PracticaActual = valores['Practica']; 
    // }

	KEY = 'UsuarioActual';
	get().then(function (value) {
		UsuarioActual = value;
	});
	KEY = 'Practica';
	get().then(function (value) {
		PracticaActual = value;
	});

      var MLec;
	  var IndiceL = "0";
	  if (PracticaActual == 1){IndiceL = "1"}
	  if (PracticaActual == 2){IndiceL = "18"}
	  if (PracticaActual == 3){IndiceL = "34"}
	  if (PracticaActual == 4){IndiceL = "52"}
	  if (PracticaActual == 5){IndiceL = "69"}
		
	    nlec = IndiceL;
        MLec = eval("PalabraU" + IndiceL)[0].substring(0,eval("PalabraU" + IndiceL)[0].indexOf("Punto"));
        LeeCGB("Escribe en estenografía. la palabra " + MLec + ". ");
        MLec = MLec.replace(".","");
        $("#Mleccion").text(MLec);
		////console.log("N de practica?? " + PracticaActual);
     }, 3000);  
	////console.log('Contenido cargado');
	});



