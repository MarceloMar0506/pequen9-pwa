	var nlec = 1;
	var xPosVie =0;
	var yPosVie;
	var xPosNew;
	var yPosNew;
	var DifX=0;
	var DifY=0;

  $(document).on("touchstart mousedown", function( e ) {
		
		xPosVie = 0;
		yPosVie = 0;
		var touchstart = e.type === 'touchstart',

			e = touchstart ? e.originalEvent : e,
			pageX = touchstart ? e.targetTouches[0].pageX : e.pageX,
			pageY = touchstart ? e.targetTouches[0].pageY : e.pageY;

			xPosVie = pageX;
			yPosVie = pageY;
			//////console.log(xPosVie);
});

$(document).on("mousemove touchmove", function( e ) {  
  xPosNew = 0;
  yPosNew = 0;
  var touchstart = e.type === 'touchmove',
  e = touchstart ? e.originalEvent : e,
  pageX = touchstart ? e.targetTouches[0].pageX : e.pageX,
  pageY = touchstart ? e.targetTouches[0].pageY : e.pageY;
  xPosNew = pageX;
  yPosNew = pageY;
});

// $(document).on("touchend", function(e) {
//     if (e.target.className === 'f1'){return} 
//     if (e.target.className === 'esc'){return} 
// });

document.onkeyup=function(e) {

event.preventDefault();

e = e || window.event;

if (e.keyCode == 27)
{	
  	window.open("./ListaPracticas.html","_self"); 
	
	return;
}



return;
}

function Regresar()

      {	
		
		window.open("./ListaPracticas.html","_self"); 
		
      }
	

// window.addEventListener('load', function(){

// }, false);
      
	var box1 = document.getElementById('box1');
	var statusdiv = document.getElementById('statusdiv');
	var box2 = document.getElementById('box2');
	var statusdiv2 = document.getElementById('statusdiv2');
	var box3 = document.getElementById('box3');
	var statusdiv3 = document.getElementById('statusdiv3');
	var box4 = document.getElementById('box4');
	var statusdiv4 = document.getElementById('statusdiv4');
	var box5 = document.getElementById('box5');
	var statusdiv5 = document.getElementById('statusdiv5');
	var box6 = document.getElementById('box6');
	var statusdiv6 = document.getElementById('statusdiv6');
	var d = document.getElementById('d');
	var box = document.getElementsByClassName('box');

	
// 	box1.addEventListener('touchstart', function(e){ 
// 		if (ResCelda == 0){			
// 		statusdiv.innerHTML = '1';
// 		number = 1;
// 		 $("#box1").css("background-color","black");          
// 		 $("#box1").css("color","white");
// 		 e.preventDefault()
// 		}
// 	 }, false);
// 	 box1.addEventListener('mousedown', function(e){ 
// 		if (ResCelda == 0){		
// 		statusdiv.innerHTML = '1'; 
// 		number = 1;        
// 		$("#box1").css("background-color","black");          
// 		$("#box1").css("color","white");
// 		 e.preventDefault()
// 		}
// 	 }, false);
// 	 box2.addEventListener('touchstart', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv2.innerHTML = '2';
// 		 number = 2;
// 		$("#box2").css("background-color","black");          
// 		 $("#box2").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
// 	 box2.addEventListener('mousedown', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv2.innerHTML = '2';
// 		 number = 2;
// 		$("#box2").css("background-color","black");          
// 		 $("#box2").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box3.addEventListener('touchstart', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv3.innerHTML = '3';
// 		 number = 3;
// 		$("#box3").css("background-color","black");          
// 		 $("#box3").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box3.addEventListener('mousedown', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv3.innerHTML = '3';
// 		 number = 3;
// 		 $("#box3").css("background-color","black");          
// 		 $("#box3").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
 
// 	 box4.addEventListener('touchstart', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv4.innerHTML = '4';
// 		 number = 4;
// 		 $("#box4").css("background-color","black");          
// 		 $("#box4").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box4.addEventListener('mousedown', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv4.innerHTML = '4';
// 		 number = 4;
// 		 $("#box4").css("background-color","black");          
// 		 $("#box4").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box5.addEventListener('mousedown', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv5.innerHTML = '5';
// 		 number = 5;
// 		$("#box5").css("background-color","black");          
// 		 $("#box5").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
 
// 	 box5.addEventListener('touchstart', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv5.innerHTML = '5';
// 		 number = 5;
// 		$("#box5").css("background-color","black");          
// 		 $("#box5").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box6.addEventListener('mousedown', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv6.innerHTML = '6';
// 		 number = 6;
// 		 $("#box6").css("background-color","black");          
// 		 $("#box6").css("color","white");
// 		 e.preventDefault()
// 		}
// 	 }, false);
 
// 	 box6.addEventListener('touchstart', function(e){
// 		if (ResCelda == 0){
// 		 statusdiv6.innerHTML = '6';
// 		 number = 6;
// 		 $("#box6").css("background-color","black");          
// 		 $("#box6").css("color","white");          
// 		 e.preventDefault()
// 		}
// 	 }, false);
// 	//}
	
//  ////Seguna caja	
// 	 var box01 = document.getElementById('box01');
// 	 var statusdiv = document.getElementById('statusdiv');
// 	 var box02 = document.getElementById('box02');
// 	 var statusdiv2 = document.getElementById('statusdiv2');
// 	 var box03 = document.getElementById('box03');
// 	 var statusdiv3 = document.getElementById('statusdiv3');
// 	 var box04 = document.getElementById('box04');
// 	 var statusdiv4 = document.getElementById('statusdiv4');
// 	 var box05 = document.getElementById('box05');
// 	 var statusdiv5 = document.getElementById('statusdiv5');
// 	 var box06 = document.getElementById('box06');
// 	 var statusdiv6 = document.getElementById('statusdiv6');
// 	 var d = document.getElementById('d');
// 	 //var box = document.getElementsByClassName('box');
  
// 	 box01.addEventListener('touchstart', function(e){ 
// 		if (ResCelda == 1){
// 		statusdiv.innerHTML = '1';
// 		number = 1;
// 		 $("#box01").css("background-color","black");          
// 		 $("#box01").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
// 	 box01.addEventListener('mousedown', function(e){
// 		if (ResCelda == 1){ 		
// 		statusdiv.innerHTML = '1'; 
// 		number = 1;        
// 		$("#box01").css("background-color","black");          
// 		$("#box01").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
// 	 box02.addEventListener('touchstart', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv2.innerHTML = '2';
// 		 number = 2;
// 		$("#box02").css("background-color","black");          
// 		 $("#box02").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
// 	 box02.addEventListener('mousedown', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv2.innerHTML = '2';
// 		 number = 2;
// 		  $("#box02").css("background-color","black");          
// 		 $("#box02").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box03.addEventListener('touchstart', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv3.innerHTML = '3';
// 		 number = 3;
// 		 $("#box03").css("background-color","black");          
// 		 $("#box03").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box03.addEventListener('mousedown', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv3.innerHTML = '3';
// 		 number = 3;
// 		 $("#box03").css("background-color","black");          
// 		 $("#box03").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
 
// 	 box04.addEventListener('touchstart', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv4.innerHTML = '4';
// 		 number = 4;
// 		 $("#box04").css("background-color","black");          
// 		 $("#box04").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box04.addEventListener('mousedown', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv4.innerHTML = '4';
// 		 number = 4;
// 		 $("#box04").css("background-color","black");          
// 		 $("#box04").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box05.addEventListener('mousedown', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv5.innerHTML = '5';
// 		 number = 5;
// 		 $("#box05").css("background-color","black");          
// 		 $("#box05").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
 
// 	 box05.addEventListener('touchstart', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv5.innerHTML = '5';
// 		 number = 5;
// 		 $("#box05").css("background-color","black");          
// 		 $("#box05").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box06.addEventListener('mousedown', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv6.innerHTML = '6';
// 		 number = 6;
// 		 $("#box06").css("background-color","black");          
// 		 $("#box06").css("color","white");
// 		 e.preventDefault()}
// 	 }, false);
 
// 	 box06.addEventListener('touchstart', function(e){
// 		if (ResCelda == 1){
// 		 statusdiv6.innerHTML = '6';
// 		 number = 6;
// 		 $("#box06").css("background-color","black");          
// 		 $("#box06").css("color","white");          
// 		 e.preventDefault()}
// 	 }, false); 
//  //fin segunda caja


//  ////Tercera caja
//  var box001 = document.getElementById('box001');
//  var statusdiv = document.getElementById('statusdiv');
//  var box002 = document.getElementById('box002');
//  var statusdiv2 = document.getElementById('statusdiv2');
//  var box003 = document.getElementById('box003');
//  var statusdiv3 = document.getElementById('statusdiv3');
//  var box004 = document.getElementById('box004');
//  var statusdiv4 = document.getElementById('statusdiv4');
//  var box005 = document.getElementById('box005');
//  var statusdiv5 = document.getElementById('statusdiv5');
//  var box006 = document.getElementById('box006');
//  var statusdiv6 = document.getElementById('statusdiv6');
//  var d = document.getElementById('d');
//  //var box = document.getElementsByClassName('box');
 
//  box001.addEventListener('touchstart', function(e){	
// 	if (ResCelda == 2){
// 	statusdiv.innerHTML = '1';
// 	number = 1;
// 	 $("#box001").css("background-color","black");          
// 	 $("#box001").css("color","white");
// 	 e.preventDefault()}
//  }, false);
//  box001.addEventListener('mousedown', function(e){
// 	 if (ResCelda == 2){		  
// 	statusdiv.innerHTML = '1'; 
// 	number = 1;        
// 	$("#box001").css("background-color","black");          
// 	$("#box001").css("color","white");
// 	 e.preventDefault()}
// 	}, false);
//  box002.addEventListener('touchstart', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv2.innerHTML = '2';
// 	 number = 2;
// 	 $("#box002").css("background-color","black");          
// 	 $("#box002").css("color","white");
// 	 e.preventDefault()}
//  }, false);
//  box002.addEventListener('mousedown', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv2.innerHTML = '2';
// 	 number = 2;
// 	$("#box002").css("background-color","black");          
// 	 $("#box002").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box003.addEventListener('touchstart', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv3.innerHTML = '3';
// 	 number = 3;
// 	 $("#box003").css("background-color","black");          
// 	 $("#box003").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box003.addEventListener('mousedown', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv3.innerHTML = '3';
// 	 number = 3;
// 	 $("#box003").css("background-color","black");          
// 	 $("#box003").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
 
//  box004.addEventListener('touchstart', function(e){
// 	if (ResCelda == 2){
// 	 statusdiv4.innerHTML = '4';
// 	 number = 4;
// 	 $("#box004").css("background-color","black");          
// 	 $("#box004").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box004.addEventListener('mousedown', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv4.innerHTML = '4';
// 	 number = 4;
// 	 $("#box004").css("background-color","black");          
// 	 $("#box004").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box005.addEventListener('mousedown', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv5.innerHTML = '5';
// 	 number = 5;
// 	 $("#box005").css("background-color","black");          
// 	 $("#box005").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
 
//  box005.addEventListener('touchstart', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv5.innerHTML = '5';
// 	 number = 5;
// 	 $("#box005").css("background-color","black");          
// 	 $("#box005").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box006.addEventListener('mousedown', function(e){
// 	 if (ResCelda == 2){
// 	 statusdiv6.innerHTML = '6';
// 	 number = 6;
// 	 $("#box006").css("background-color","black");          
// 	 $("#box006").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box006.addEventListener('touchstart', function(e){
// 	if (ResCelda == 2){
// 	 statusdiv6.innerHTML = '6';
// 	 number = 6;
// 	 $("#box006").css("background-color","black");          
// 	 $("#box006").css("color","white");          
// 	 e.preventDefault()}
//  }, false);
//  //fin tercera caja
 
//  ////Cuarta caja
//  var box0001 = document.getElementById('box0001');
//  var statusdiv = document.getElementById('statusdiv');
//  var box0002 = document.getElementById('box0002');
//  var statusdiv2 = document.getElementById('statusdiv2');
//  var box0003 = document.getElementById('box0003');
//  var statusdiv3 = document.getElementById('statusdiv3');
//  var box0004 = document.getElementById('box0004');
//  var statusdiv4 = document.getElementById('statusdiv4');
//  var box0005 = document.getElementById('box0005');
//  var statusdiv5 = document.getElementById('statusdiv5');
//  var box0006 = document.getElementById('box0006');
//  var statusdiv6 = document.getElementById('statusdiv6');
//  var d = document.getElementById('d');
//  //var box = document.getElementsByClassName('box');
 
//  box0001.addEventListener('touchstart', function(e){
// 	if (ResCelda == 3){ 
// 	statusdiv.innerHTML = '1';
// 	number = 1;
// 	$("#box0001").css("background-color","black");          
// 	$("#box0001").css("color","white");
// 	 e.preventDefault()}
//  }, false);
//  box0001.addEventListener('mousedown', function(e){
// 	if (ResCelda == 3){ 
// 	statusdiv.innerHTML = '1'; 
// 	number = 1;        
// 	$("#box0001").css("background-color","black");          
// 	$("#box0001").css("color","white");
// 	 e.preventDefault()}
//  }, false);
//  box0002.addEventListener('touchstart', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv2.innerHTML = '2';
// 	 number = 2;
// 	 $("#box0002").css("background-color","black");          
// 	 $("#box0002").css("color","white");
// 	 e.preventDefault()}
//  }, false);
//  box0002.addEventListener('mousedown', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv2.innerHTML = '2';
// 	 number = 2;
// 	 $("#box0002").css("background-color","black");          
// 	 $("#box0002").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box0003.addEventListener('touchstart', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv3.innerHTML = '3';
// 	 number = 3;
// 	 $("#box0003").css("background-color","black");          
// 	 $("#box0003").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box0003.addEventListener('mousedown', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv3.innerHTML = '3';
// 	 number = 3;
// 	 $("#box0003").css("background-color","black");          
// 	 $("#box0003").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
 
//  box0004.addEventListener('touchstart', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv4.innerHTML = '4';
// 	 number = 4;
// 	 $("#box0004").css("background-color","black");          
// 	 $("#box0004").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box0004.addEventListener('mousedown', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv4.innerHTML = '4';
// 	 number = 4;
// 	 $("#box0004").css("background-color","black");          
// 	 $("#box0004").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box0005.addEventListener('mousedown', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv5.innerHTML = '5';
// 	 number = 5;
// 	 $("#box0005").css("background-color","black");          
// 	 $("#box0005").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
 
//  box0005.addEventListener('touchstart', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv5.innerHTML = '5';
// 	 number = 5;
// 	 $("#box0005").css("background-color","black");          
// 	 $("#box0005").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box0006.addEventListener('mousedown', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv6.innerHTML = '6';
// 	 number = 6;
// 	 $("#box0006").css("background-color","black");          
// 	 $("#box0006").css("color","white");
// 	 e.preventDefault()}
//  }, false);
 
//  box0006.addEventListener('touchstart', function(e){
// 	if (ResCelda == 3){
// 	 statusdiv6.innerHTML = '6';
// 	 number = 6;
// 	 $("#box0006").css("background-color","black");          
// 	 $("#box0006").css("color","white");          
// 	 e.preventDefault()}
//  }, false);

// //fin cuarta caja



// window.addEventListener('touchstart',  function(evt){
//   //console.log("mostrar normal");
//   $("#braille").css("display","grid");
//   $("#Pbraille").css("display","none");
//   coloresPizarra();
//    }
//   );

//   window.addEventListener('mosedown',  function(evt){


// 	 }
// 	);

//   window.addEventListener('mouseup',  function(evt){

// //	//console.log("mostrar normal mouse");
//     $("#braille").css("display","grid");
//     $("#Pbraille").css("display","none");
//     coloresPizarra();

	
// 	////console.log(IndiceL + " mouseup");
// 	//if (IndiceL == 0){return}
	
// 	var DiceL = MLec;
// 	if (document.title == "Práctica Uno"){
// 		var vecP =   eval("D" + alfab[IndiceL]);//  eval("PalabraU" + IndiceL )[0].split(',');
// 		$("#Mleccion").text(alfab[IndiceL]); 
// 	}   
// 	else if (document.title == "Práctica Signos Ortográficos"){
// 		var vecP =   eval("S" + signos[IndiceL]);//  eval("PalabraU" + IndiceL )[0].split(',');
// 		$("#Mleccion").text(Muestrasignos[IndiceL]); 
// 	}
// 	else if (document.title == "Práctica Signos Matemáticos"){
// 		var vecP =   eval("M" + signosM[IndiceL]);//  eval("PalabraU" + IndiceL )[0].split(',');
// 		$("#Mleccion").text(MuestrasignosM[IndiceL]); 
// 	}   
	

// 	PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;

// 	//console.log(evt.target.parentNode.id + " Celda " + ResCelda + " valor " + evt.target.innerHTML + " PrimerS " + PrimerS);

//    ///Evalua
//    if (PrimerS == ""){return;}
// //console.log(evt.target.parentNode.id + "   !=  1era  && " + ResCelda + "== 0");

// if (evt.target.parentNode.id == "Primera" && parseInt(ResCelda) != 0){Lee("escribir en el signo " + parseInt(ResCelda) + 2);}
// if (evt.target.parentNode.id != "Primera" && ResCelda == 0){Lee("Completar el primer signo");}

// if (evt.target.parentNode.id != "Segunda" && ResCelda == 1){Lee("Completar el segundo signo");}
// if (evt.target.parentNode.id != "Tercera" && ResCelda == 2){Lee("Completar el tercer signo");}
// if (evt.target.parentNode.id != "Cuarta" && ResCelda == 3){Lee("Completar el cuarto signo");}



// if (ResCelda == 0){
// 	//console.log("pulsado primera");
// 	   //console.log(PrimerS);
// 	//if (PrimeraC.includes(PrimerS))
// 	if (incluye(PrimeraC,PrimerS))
// 		   {		
//             if (PrimeraC == PrimerS){
// 				ResCelda++;
// 				Lee("");
// 				PrimerS = "";
// 				$(".etq").html('');
// 				$("#Segunda elem").css("border","2px solid black");
// 				llamaestilo2();
// 				//siguiente celda
// 				$(".etq").html('');
// 				if (SegundaC == ""){
// 					$("#Segunda").css("display","none");
// 					llamaestilo1();
// 				   //console.log("BIEN");
// 				   $(".box").css("background-color","white");
// 				   $(".box").css("color","black");
// 				   ResCelda = 0;
// 				   //Siguiente
// 				   PrimerS = "";
// 				   $(".etq").html('');
// 				   IndiceL++;				   
// 				   QueNumeros();
// 			   }   
// 				return;
// 			   }			   
// 	}
// 	else //if (!PrimeraC.includes(PrimerS))
// 	{
// 	////console.log("va mal limpiar");
// 	var dpuntos = PrimeraC.split('');
// 	dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	Lee(Gres.escribir + " " + dpuntos);
// 	$(".etq").html('');
//     //borra los puntos de esta celda mal escritos
// 	$("#Primera elem").css("background-color","white");
// 	$("#Primera elem").css("color","black");
// 	llamaestilo1();
// 	//graba vector de error con la palabra
// 	var PDic = $("#Mleccion").text();  
// 	const arrayP = errorD.toString();
// 	   if (arrayP.indexOf(PDic.toString()) == -1){          
// 			  errorD.push(" " + PDic);
// 			}          
// 	return; 
// }
// }//fin evalua primera

// //Evalua Segunda
// if (ResCelda == 1){
// 	////console.log(PrimerS + "Pulsado en segunda??");
// 	llamaestilo2();
// 	if (incluye(SegundaC,PrimerS))
// 	//if (SegundaC.includes(PrimerS))
// 		{//console.log("va bien " +  SegundaC + " == " + PrimerS);
// 		if (SegundaC == PrimerS){
// 		 ResCelda++;
// 		 Lee("");
// 		 $("#Tercera elem").css("border","2px solid black");
// 		 PrimerS = "";
// 		 $(".etq").html('');
// 		 llamaestilo3();
// 		 //siguiente tercera
// 		 //console.log("pasa a tercera " + ResCelda);
// 		 if (TerceraC == ""){
// 			llamaestilo1();
// 			//console.log("BIEN");
// 			$(".box").css("background-color","white");
// 			$(".box").css("color","black");
// 			ResCelda = 0;
// 			//Siguiente
// 			PrimerS = "";
// 			$(".etq").html('');
// 			IndiceL++;
// 			QueNumeros();
// 		}
// 		 return;
// 		}		   
//  }
//  else //if (!SegundaC.includes(PrimerS))
//  {
// 	 //console.log(SegundaC +  "va mal limpiar segunda" + PrimerS + "?");
// 	 var dpuntos = SegundaC.split('');
// 	 dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	 Lee("Segundo signo. " + Gres.escribir + " " + dpuntos);
//  $(".etq").html('');
//  //borra los puntos de esta celda mal escritos
//  $("#Segunda elem").css("background-color","white");
//  $("#Segunda elem").css("color","black");
//  //graba vector de error con la palabra
//  var PDic = $("#Mleccion").text();  
//  const arrayP = errorD.toString();
// 	if (arrayP.indexOf(PDic.toString()) == -1){          
// 		   errorD.push(" " + PDic);
// 		 }          
//  return; 
// }
// }//fin evalua Segunda



// //Evalua Tercera
// if (ResCelda == 2){
// 	//console.log(PrimerS + "Pulsado en Tercera??");
// 	if (incluye(TerceraC,PrimerS))
// 	//if (TerceraC.includes(PrimerS))
// 		{//console.log("va bien");
// 		if (TerceraC == PrimerS){

// 		 if (CuartoC == ""){
// 			//console.log("BIEN");
// 			$(".box").css("background-color","white");
// 			$(".box").css("color","black");
// 			ResCelda = 0;
// 			PrimerS = "";
// 			$(".etq").html('');
// 			//Siguiente
// 			IndiceL++;
// 			QueNumeros();
// 		}
// 		//siguiente celda	
// 		ResCelda++;
// 		Lee("");
// 		$("#Cuarta elem").css("border","2px solid black");
// 		$(".etq").html('');
// 		return;
			
// 		}		   
//  }
//  else //if (!TerceraC.includes(PrimerS))
//  {
// 	 ////console.log(TerceraC +  "va mal limpiar tercera" + PrimerS + "?");
// 	 var dpuntos = TerceraC.split('');
// 	 dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	 Lee("Tercer signo. " + Gres.escribir + " " + dpuntos);
//  $(".etq").html('');
//  //borra los puntos de esta celda mal escritos
//  $("#Tercera elem").css("background-color","white");
//  $("#Tercera elem").css("color","black");
//  //graba vector de error con la palabra
//  var PDic = $("#Mleccion").text();  
//  const arrayP = errorD.toString();
// 	if (arrayP.indexOf(PDic.toString()) == -1){          
// 		   errorD.push(" " + PDic);
// 		 }          
// // return; 
// }
// }//fin evalua Tercera

// //Evalua Cuarta
// if (ResCelda == 3){
// 	//console.log(PrimerS + "Pulsado en Cuarta??");
// 	if (incluye(CuartoC,PrimerS))
// 	//if (CuartoC.includes(PrimerS))
// 		{//console.log("va bien");
// 		if (CuartoC == PrimerS){
	
// 			//console.log("BIEN");
// 			$(".box").css("background-color","white");
// 			$(".box").css("color","black");
// 			ResCelda = 0;
// 			//Siguiente
// 			PrimerS = "";
// 			$(".etq").html('');
// 			IndiceL++;
// 			QueNumeros();
		
// 		// return;
// 		}		   
//  }
//  else // if (!CuartoC.includes(PrimerS))
//  {
//  ////console.log(CuartoC +  "va mal limpiar Cuarta" + PrimerS + "?");
//  var dpuntos = CuartoC.split('');
//  dpuntos = dpuntos.toString().replace(/,/g , ", ");
//  Lee("Cuarto signo. " + Gres.escribir + " " + dpuntos);
//  $(".etq").html('');
//  //borra los puntos de esta celda mal escritos
//  $("#Cuarta elem").css("background-color","white");
//  $("#Cuarta elem").css("color","black");
//  //graba vector de error con la palabra
//  var PDic = $("#Mleccion").text();  
//  const arrayP = errorD.toString();
// 	if (arrayP.indexOf(PDic.toString()) == -1){          
// 		   errorD.push(" " + PDic);
// 		 }          
//  //return; 
// }
// }//fin evalua Cuarta

// });


// window.addEventListener('touchend',  function(evt){

// 	$("#braille").css("display","grid");
//     $("#Pbraille").css("display","none");
//     coloresPizarra();
	
// 	var DiceL = MLec;


// 	if (document.title == "Práctica Uno"){
// 		var vecP =   eval("D" + alfab[IndiceL]);//  eval("PalabraU" + IndiceL )[0].split(',');
// 		$("#Mleccion").text(alfab[IndiceL]); 
// 	}   
// 	else if (document.title == "Práctica Signos Ortográficos"){
// 		var vecP =   eval("S" + signos[IndiceL]);//  eval("PalabraU" + IndiceL )[0].split(',');
// 		$("#Mleccion").text(Muestrasignos[IndiceL]); 
// 	} 
// 	else if (document.title == "Práctica Signos Matemáticos"){
// 		var vecP =   eval("M" + signosM[IndiceL]);//  eval("PalabraU" + IndiceL )[0].split(',');
// 		$("#Mleccion").text(MuestrasignosM[IndiceL]); 
// 	}     

// 	 //console.log(evt.target.parentNode.id + " Celda " + ResCelda + " valor " + evt.target.innerHTML + " PrimerS " + PrimerS);
// 	// //console.log(DiceL + " Pri " +  PrimeraC + " Seg " + SegundaC + "  Ter" + TerceraC + "Cuar " + CuartoC);

// 	PrimerS =  statusdiv.innerHTML + statusdiv2.innerHTML + statusdiv3.innerHTML + statusdiv4.innerHTML + statusdiv5.innerHTML + statusdiv6.innerHTML;


//    ///Evalua
//    if (PrimerS == ""){return;}

// if (evt.target.parentNode.id != "Primera" && ResCelda == 0){Lee("Completar el primer signo");}
// if (evt.target.parentNode.id != "Segunda" && ResCelda == 1){Lee("Completar el segundo signo");}
// if (evt.target.parentNode.id != "Tercera" && ResCelda == 2){Lee("Completar el tercer signo");}
// if (evt.target.parentNode.id != "Cuarta" && ResCelda == 3){Lee("Completar el cuarto signo");}



// if (ResCelda == 0){
// 	   //console.log(PrimerS);
// 	   if (incluye(PrimeraC,PrimerS))
// 	   {		
// 		if (PrimeraC == PrimerS){
// 			ResCelda++;
// 			Lee("");
// 			PrimerS = "";
// 			$(".etq").html('');
// 			$("#Segunda elem").css("border","2px solid black");
// 			//siguiente celda
// 			$(".etq").html('');
// 			if (SegundaC == ""){
// 				$("#Segunda").css("display","none");
// 			   //console.log("BIEN");
// 			   $(".box").css("background-color","white");
// 			   $(".box").css("color","black");
// 			   ResCelda = 0;
// 			   //Siguiente
// 			   PrimerS = "";
// 			   $(".etq").html('');
// 			   IndiceL++;				   
// 			   QueNumeros();
// 		   }   
// 			return;
// 		   }			   
// }
// 	else //if (!PrimeraC.includes(PrimerS))
// 	{
// 	////console.log("va mal limpiar");
// 	var dpuntos = PrimeraC.split('');
// 	dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	Lee("Primer signo. " + Gres.escribir + " " + dpuntos);
// 	$(".etq").html('');
//     //borra los puntos de esta celda mal escritos
// 	$("#Primera elem").css("background-color","white");
// 	$("#Primera elem").css("color","black");
// 	//graba vector de error con la palabra
// 	var PDic = $("#Mleccion").text();  
// 	const arrayP = errorD.toString();
// 	   if (arrayP.indexOf(PDic.toString()) == -1){          
// 			  errorD.push(" " + PDic);
// 			}          
// 	return; 
// }
// }//fin evalua primera

// //Evalua Segunda
// if (ResCelda == 1){
// 	////console.log(PrimerS + "Pulsado en segunda??");
// 	if (incluye(SegundaC,PrimerS))
// 	//if (SegundaC.includes(PrimerS))
// 		{//console.log("va bien");
// 		if (SegundaC == PrimerS){
// 		 ResCelda++;
// 		 Lee("");
// 		 $("#Tercera elem").css("border","2px solid black");
// 		 PrimerS = "";
// 		 $(".etq").html('');
// 		 //siguiente tercera
// 		 //console.log("pasa a tercera " + ResCelda);
// 		 if (TerceraC == ""){
// 			//console.log("BIEN");
// 			$(".box").css("background-color","white");
// 			$(".box").css("color","black");
// 			ResCelda = 0;
// 			//Siguiente
// 			PrimerS = "";
// 			$(".etq").html('');
// 			IndiceL++;
// 			QueNumeros();
// 		}
// 		 return;
// 		}		   
//  }
//  else // if (!SegundaC.includes(PrimerS))
//  {
// 	 ////console.log(SegundaC +  "va mal limpiar segunda" + PrimerS + "?");
// 	 var dpuntos = SegundaC.split('');
// 	 dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	 Lee("Segundo signo. " + Gres.escribir + " " + dpuntos);
//  $(".etq").html('');
//  //borra los puntos de esta celda mal escritos
//  $("#Segunda elem").css("background-color","white");
//  $("#Segunda elem").css("color","black");
//  //graba vector de error con la palabra
//  var PDic = $("#Mleccion").text();  
//  const arrayP = errorD.toString();
// 	if (arrayP.indexOf(PDic.toString()) == -1){          
// 		   errorD.push(" " + PDic);
// 		 }          
//  return; 
// }
// }//fin evalua Segunda



// //Evalua Tercera
// if (ResCelda == 2){
// 	//console.log(PrimerS + "Pulsado en Tercera??");
// 	if (incluye(TerceraC,PrimerS))
// 	//if (TerceraC.includes(PrimerS))
// 		{//console.log("va bien");
// 		if (TerceraC == PrimerS){

// 		 if (CuartoC == ""){
// 			//console.log("BIEN");
// 			$(".box").css("background-color","white");
// 			$(".box").css("color","black");
// 			ResCelda = 0;
// 			PrimerS = "";
// 			$(".etq").html('');
// 			//Siguiente
// 			IndiceL++;
// 			QueNumeros();
// 		}
// 		//siguiente celda	
// 		ResCelda++;
// 		Lee("");
// 		$("#Cuarta elem").css("border","2px solid black");
// 		$(".etq").html('');
// 		return;
			
// 		}		   
//  }
//  else //if (!TerceraC.includes(PrimerS))
//  {
// 	 ////console.log(TerceraC +  "va mal limpiar tercera" + PrimerS + "?");
// 	 var dpuntos = TerceraC.split('');
// 	 dpuntos = dpuntos.toString().replace(/,/g , ", ");
// 	 Lee("Tercer signo. " + Gres.escribir + " " + dpuntos);
//  $(".etq").html('');
//  //borra los puntos de esta celda mal escritos
//  $("#Tercera elem").css("background-color","white");
//  $("#Tercera elem").css("color","black");
//  //graba vector de error con la palabra
//  var PDic = $("#Mleccion").text();  
//  const arrayP = errorD.toString();
// 	if (arrayP.indexOf(PDic.toString()) == -1){          
// 		   errorD.push(" " + PDic);
// 		 }          
// // return; 
// }
// }//fin evalua Tercera

// //Evalua Cuarta
// if (ResCelda == 3){
// 	//console.log(PrimerS + "Pulsado en Cuarta??");
// 	if (incluye(CuartoC,PrimerS))
// 	//if (CuartoC.includes(PrimerS))
// 		{//console.log("va bien");
// 		if (CuartoC == PrimerS){
	
// 			//console.log("BIEN");
// 			$(".box").css("background-color","white");
// 			$(".box").css("color","black");
// 			ResCelda = 0;
// 			//Siguiente
// 			PrimerS = "";
// 			$(".etq").html('');
// 			IndiceL++;
// 			QueNumeros();
		
// 		// return;
// 		}		   
//  }
//  else //if (!CuartoC.includes(PrimerS))
//  {
//  ////console.log(CuartoC +  "va mal limpiar Cuarta" + PrimerS + "?");
//  var dpuntos = CuartoC.split('');
//  dpuntos = dpuntos.toString().replace(/,/g , ", ");
//  Lee("Cuarto signo. " + Gres.escribir + " " + dpuntos);
//  $(".etq").html('');
//  //borra los puntos de esta celda mal escritos
//  $("#Cuarta elem").css("background-color","white");
//  $("#Cuarta elem").css("color","black");
//  //graba vector de error con la palabra
//  var PDic = $("#Mleccion").text();  
//  const arrayP = errorD.toString();
// 	if (arrayP.indexOf(PDic.toString()) == -1){          
// 		   errorD.push(" " + PDic);
// 		 }          
//  //return; 
// }
// }//fin evalua Cuarta

// });

function incluye(puntosC,pulsados)
{	
	var Npulsados = [];
	Npulsados = pulsados.split('');
	for (let index = 0; index < Npulsados.length; index++) 
	{
		if (puntosC.indexOf(Npulsados[index]) < 0)
		{
			//("no está " + Npulsados[index] + " en " + puntosC);
			return false;
		}
		
	}
	return true;

}

