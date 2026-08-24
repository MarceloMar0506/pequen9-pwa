var NUsuario = "";
var UsuarioActual;
var IndiceUsuario;
var iL = 0;
var Veloz =1;
var Motor;
var Tono;
var todos = "";
var nomUs = "";
var cargadaBd = false;

var ssu = window.speechSynthesis;
var arrayMotores = [];
var arrayLnMotores = [];



// function DeterminaMotor()
// {

// var ssu = window.speechSynthesis;
// var ssu = new SpeechSynthesisUtterance(); 
// tts = speechSynthesis.getVoices();   
// var textnode = "";
// var contadorEsp = 0;
   
//     for (var i = 0; i < tts.length -1; i++) 
//        {             
//       	    var espa = tts[i].name.includes("español");
//       	    var Span = tts[i].name.includes("Spanish");
      	     
//       	    if (espa === true || Span === true){
//       	    var node = document.createElement("LI");
//        		textnode = document.createTextNode(i+ '/' + tts[i].name);
//        		arrayMotores[contadorEsp]=i +";"+tts[i].name;
//        		arrayLnMotores[contadorEsp]=i;
//        		contadorEsp = contadorEsp +1;
// 			node.appendChild(textnode);
// 			ssu.voice = tts[i];
//             ssu.lang =  tts[i].lang; 
//             }
//       }  
      
// Voz =  arrayLnMotores[0];//El primero, después hay que buscar si eta en la configuración del usuario y cambiar
// MotorActual = Voz;
// Tono = "1";
// Veloz = "1";
// indiceColor = "0";

// }


function BuscarUsuario()
{
	alert("MotoresEs.js BuscarUsuario");

localforage.getItem('UsuarioActual').then(function (value) {
	
	if (value != "undefined"){
		  UsuarioActual = value
	}


if (UsuarioActual != null)
{

}
else if (UsuarioActual == null)
{
UsuarioActual = "";
}

}).catch(function(err) {    
//alert(err + " no está?");
});

}


// function Preferencias()
// {


// ///Lee prefernecias del usuario

// localforage.getItem(UsuarioActual).then(function (value) {
// //alert("si 2 despues");
// var Datos  = {
//   Motor:value.Motor,Veloz:value.Veloz,Tono:value.Tono,indiceColor:value.indiceColor
// }
// //alert(Object.values(Datos)[0] + " 3");
// Voz = Object.values(Datos)[0];
// MotorActual = Voz;
// //alert(Voz + "voz");
// Veloz = Object.values(Datos)[1];
// //alert(Veloz + "veloz");
// Tono = Object.values(Datos)[2];
// //alert(Tono + "tono");
// indiceColor = Object.values(Datos)[3];
// //alert(indiceColor + "icolor");
// }).catch(function(err) {
// //alert(err);
// });

// }
