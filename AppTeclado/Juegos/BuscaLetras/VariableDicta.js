//Array de letras a dictar
var LLetras = ["F","J","G","H","D","K","S","L","A","Ñ","R","U","T","Y","E","I","W","O","Q","P","V","M","B","N","X","Z"];

const F = {
  fila:  2,
  pos: 4,
  donde: ' Tecla marcada en la línea del medio, dedo índice mano izquierda'
};

const J = {
  fila:  2,
  pos: 7,
  donde: ' Tecla marcada en la línea del medio, dedo índice mano derecha'
 };
  
  const G = {
  fila:  2,
  pos: 5,
  donde: '  En la línea del medio, dedo índice mano izquierda, a la derecha de f'
};

const D = {
  fila:  2,
  pos: 3,
  donde: '  En la línea del medio, dedo medio mano izquierda'
};

const K = {
  fila:  2,
  pos: 8,
  donde: ' En la línea del medio, dedo medio mano derecha'
};

const S = {
  fila:  2,
  pos: 2,
  donde: '  En la línea del medio, dedo anular mano izquierda'
};

const L = {
  fila:  2,
  pos: 9,
  donde: '  En la línea del medio, dedo anular mano derecha'
 };
  
  const A = {
  fila:  2,
  pos: 1,
  donde: '  En la línea del medio, dedo meñique mano izquierda'
};

const Ñ = {
  fila:  2,
  pos: 10,
  donde: '  En la línea del medio, dedo meñique mano derecha'
};

const H = {
  fila:  2,
  pos: 10,
  donde: '  En la línea del medio, dedo índice mano derecha, a la izquierda de j'
};

const V = {
  fila:  3,
  pos: 4,
  donde: '  En la línea inferior, dedo índice mano izquierda'
};

const M = {
  fila:  3,
  pos: 7,
  donde: '  En la línea inferior, dedo índice mano derecha'
};

const B = {
  fila:  3,
  pos: 5,
  donde: '  En la línea inferior, dedo índice mano izquierda'
};

const N = {
  fila:  3,
  pos: 6,
  donde: '  En la línea inferior, dedo índice mano derecha'
  };
  
const C = {
  fila:  3,
  pos: 4,
  donde: '  En la línea inferior, dedo medio mano izquierda'
};

const X = {
  fila:  3,
  pos: 2,
  donde: '  En la línea inferior, dedo anular mano izquierda'
};

const Z = {
  fila:  3,
  pos: 1,
  donde: '  En la línea inferior, dedo ameñique mano izquierda'
};

const T = {
  fila:  1,
  pos: 5,
  donde: '  En la línea superior, dedo índice mano izquierda' 
};

const Y = {
  fila:  1,
  pos: 6,
  donde: '  En la línea superior, dedo índice mano derecha'
};

const R = {
  fila:  1,
  pos: 4,
  donde: ' En la línea superior, dedo índice mano izquierda' 
};

const U = {
  fila:  1,
  pos:7,
  donde: ' En la línea superior, dedo índice mano derecha' 
};

const E = {
  fila:  1,
  pos: 3,
  donde: ' En la línea superior, dedo medio mano izquierda' 
};

const I = {
  fila:  1,
  pos: 8,
  donde: ' En la línea superior, dedo medio mano derecha' 
};

const W = {
  fila:  1,
  pos: 2,
  donde: ' En la línea superior, dedo anular mano izquierda' 
};

const O = {
  fila:  1,
  pos: 9,
  donde: ' En la línea superior, dedo anular mano derecha' 
};
const Q = {
  fila:  1,
  pos: 1,
  donde: ' En la línea superior, dedo meñique mano izquierda' 
};

const P = {
  fila:  1,
  pos: 10,
  donde: ' En la línea superior, dedo meñique mano derecha' 
};

//coma
const COMA = {
  fila:  3,
  pos: 8,
  donde: ' En la línea inferior, dedo medio mano derecha'
};

//punto
const PUNTO = {
  fila:  3,
  pos: 9,
  donde: '  En la línea inferior, dedo anular mano derecha'
};



const Á = {
  fila:  2,
  pos: 1,
  donde: 'acento  En la línea superior, dedo meñique mano derecha'
};

const É = {
  fila:  2,
  pos: 1,
  donde: 'acento  En la línea superior, dedo meñique mano derecha'
};


const Í = {
  fila:  2,
  pos: 1,
  donde: 'acento  En la línea isuperior, dedo meñique mano derecha'
};

const Ó = {
  fila:  2,
  pos: 1,
  donde: 'acento  En la línea superior, dedo meñique mano derecha'
};


const Ú = {
  fila:  2,
  pos: 1,
  donde: 'acento  En la línea isuperior, dedo meñique mano derecha'
};







var LA = ["ave", "avión", "automóvil", "armónica", "acordeón", "abeja", "agua", "avioneta"];
var LB = ["burro", "barco", "bombo", "batería", "bandoneón"];
var LC = ["campana", "clarinete", "caballo", "cabra", "caja", "castañuela", "cebra", "cerdo", "charango", "contrabajo", "corno", "coyote"];
var LD = ["delfín","dromedario"];
var LE = ["elefante", "erke"];
var LF = ["fagot", "flauta", "foca"];
var LG = ["gato", "gallina", "gallo", "galope", "gaita", "gong", "güiro", "guitarra"];
var LH = ["helicóptero"];
var LI = ["iguana"];
var LJ = ["jirafa"];
var LK = ["koala"];
var LL = ["loro", "lobo", "león"];
var LM = ["mandolina", "mar", "mono", "mosca"];
var LN = ["nadar"];
var LÑ = ["ñandú"];
var LO = ["oboe", "órgano", "oso", "oveja"];
var LP = ["pandereta", "papagayo", "pato", "perro", "piano", "picolo", "platillos", "puma"];
var LQ = ["quena"];
var LR = ["rana", "redoblante", "reloj", "resorte"];
var LS = ["sapo", "saxofón", "sikus", "silbato"];
var LT = ["tambor", "tigre", "timbal", "tren", "triángulo", "trombón", "trompeta", "tuba", "tumbadora"];
var LU = ["urraca"];
var LV = ["vaca", "viento", "viola","violín", "violonchelo"];
var LW = ["wapiti"];
var LX = ["xilofón"];
var LY = ["yacaré","yoyo"];
var LZ = ["zorro","zapato","zapallo"];
var LÁ = ["árbol","átomo"];
var LÉ = ["épsilon","éxito"];
var LÍ = ["índice","íconos","ípsilon"];
var LÓ = ["óxido","óptica","ómicron"];
var LÚ = ["útiles","última"];
var LCOMA = ["coma"];
var LPUNTO = ["punto"];


function LeeConsigna(){
  var miVar2 = setInterval(function(){  
  //document.getElementById('EtiquetaUnoTexto').innerHTML = $(".CTexto").val()+ "_";
  $('.CTexto').focus(); }, 500);    
  var miVar2 = setTimeout(function(){ 
    SaludoIngreso();
    $('.CTexto').focus();
  }, 1000);    
}