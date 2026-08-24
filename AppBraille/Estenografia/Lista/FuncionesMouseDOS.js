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
	if (document.title =="Práctica Uno"){
		window.open("./ListaPracticaUnSigno.html","_self"); 
	 }
	else if (document.title =="Práctica Estenografía"){
		window.open("./ListaPracticaEsten.html","_self"); 
    } 
	else if (document.title =="Práctica Género y Número"){
		window.open("./ListaPracticas.html","_self"); 
    } 
	else if ( document.title =="Práctica Secuencias"){
		window.open("./ListaPracticaSecuencias.html","_self"); 
    } 		
	 else {
		window.open("./ListaPracticaDosSignos.html","_self"); 
	 }
	return;
}

return;
}

function Regresar()

      {	
		if (document.title =="Práctica Uno"){
			window.open("./ListaPracticaUnSigno.html","_self"); 
		 }
		else if (document.title =="Práctica Estenografía"){
			window.open("./ListaPracticaEsten.html","_self"); 
		 } 
		 else {
			window.open("./ListaPracticaDosSignos.html","_self"); 
		 }
      }
	

function incluye(puntosC,pulsados)
{	
	//console.log(puntosC + " , " + pulsados)
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

