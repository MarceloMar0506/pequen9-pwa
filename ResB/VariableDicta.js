var tiempoEvalua; 
var desempenio="";


const A = {
  fila:  2,
  pos: 1,
  donde: '  dedo meñique mano izquierda'
};

const Á = {
  fila:  2,
  pos: 1,
  donde: 'acento  dedo meñique mano derecha'
};

const S = {
  fila:  2,
  pos: 2,
  donde: '  dedo anular mano izquierda'
};

const D = {
  fila:  2,
  pos: 3,
  donde: '  dedo medio mano izquierda'
};

const F = {
  fila:  2,
  pos: 4,
  donde: ' Tecla marcada línea del medio, dedo índice mano izquierda'
};
 
const G = {
  fila:  2,
  pos: 5,
  donde: '  dedo índice mano izquierda'
};

const H = {
  fila:  2,
  pos: 6,
  donde: '  dedo índice mano derecha'
};

const J = {
  fila:  2,
  pos: 7,
  donde: ' Tecla marcada línea del medio, dedo índice mano derecha'
 };
const K = {
  fila:  2,
  pos: 8,
  donde: '  dedo medio mano derecha'
};

const L = {
  fila:  2,
  pos: 9,
  donde: '  dedo anular mano derecha'
 };

 const Ñ = {
  fila:  2,
  pos: 10,
  donde: '  dedo meñique mano derecha'
};

//fila inferior
const Z = {
  fila:  3,
  pos: 1,
  donde: '  dedo meñique mano izquierda'
};
const X = {
  fila:  3,
  pos: 2,
  donde: '  dedo anular mano izquierda'
};
const C = {
  fila:  3,
  pos: 3,
  donde: '  dedo medio mano izquierda'
};
const V = {
  fila:  3,
  pos: 4,
  donde: '  dedo índice mano izquierda'
};
const B = {
  fila:  3,
  pos: 5,
  donde: '  dedo índice mano izquierda'
};
const N = {
  fila:  3,
  pos: 6,
  donde: '  dedo índice mano derecha'
  };
const M = {
  fila:  3,
  pos: 7,
  donde: '  dedo índice mano derecha'
};
const COMA = {
  fila:  3,
  pos: 8,
  donde: '  línea inferior, dedo medio mano derecha'
};
const PUNTO = {
  fila:  3,
  pos: 9,
  donde: '  línea inferior, dedo anular mano derecha'
};
const PUNTOYCOMA = {
  fila:  3,
  pos: 8,
  donde: '  línea inferior, dedo anular mano derecha'
};
const DOSPUNTOS = {
  fila:  3,
  pos: 9,
  donde: '  línea inferior, dedo meñique mano derecha'
};
const GUION = {
  fila:  3,
  pos: 10,
  donde: '  línea inferior, dedo meñique mano derecha'
};
const GUIONBAJO = {
  fila:  3,
  pos: 10,
  donde: '  línea inferior, dedo meñique mano derecha'
};

const ESPACIO = {
  fila:  4,
  pos: 4,
  donde: '  línea inferior, dedos pulgares'
};

//Fila superior
const Q = {
  fila:  1,
  pos: 1,
  donde: '  dedo meñique mano izquierda' 
};
const W = {
  fila:  1,
  pos: 2,
  donde: '  dedo anular mano izquierda' 
};
const E = {
  fila:  1,
  pos: 3,
  donde: '  dedo medio mano izquierda' 
};
const É = {
  fila:  2,
  pos: 1,
  donde: 'acento  dedo meñique mano derecha'
};
const R = {
  fila:  1,
  pos: 4,
  donde: '  dedo índice mano izquierda' 
};
const T = {
  fila:  1,
  pos: 5,
  donde: '  dedo índice mano izquierda' 
};
const Y = {
  fila:  1,
  pos: 6,
  donde: '  dedo índice mano derecha'
};
const Ú = {
  fila:  2,
  pos: 1,
  donde: 'acento  dedo meñique mano derecha'
};
const U = {
  fila:  1,
  pos:7,
  donde: '  dedo índice mano derecha' 
};
const I = {
  fila:  1,
  pos: 8,
  donde: '  dedo medio mano izquierda' 
};
const Í = {
  fila:  2,
  pos: 1,
  donde: 'acento  dedo meñique mano derecha'
};
const Ó = {
  fila:  2,
  pos: 1,
  donde: 'acento  dedo meñique mano derecha'
};
const O = {
  fila:  1,
  pos: 9,
  donde: '  dedo anular mano izquierda' 
};
const P = {
  fila:  1,
  pos: 10,
  donde: '  dedo anular mano izquierda' 
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