var Dicta =0;
var TextoE = "";
//alfabeto
var alfabT = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","Ü"];//_SignoNumero","_COMA","_PUNTO","_PUNTOYCOMA","_DOSPUNTOS","_INTERROGACION","_ABREP","_CIERRAP","_ARROBA","_ADMIRACION","_Mayuscula","_2ADMIRACION","_3ADMIRACION"];
//Ascci braille  Comletar todas la letras
var V102 = "A";
var V202 = "B";
var V208 = "C";
var V315 = "D";
var V209 = "E";
var V308 = "F";
var V415 = "G";
var V309 = "H";
var V206 = "I";
var V313 = "J";
var V217 = "K";
var V317 = "L";
var V323 = "M";
var V430 = "N";
var V523 = "Ñ";
var V324 = "O";
var V423 = "P";
var V530 = "Q";
var V424 = "R";
var V321 = "S";
var V428 = "T";
var V325 = "U";
var V425 = "V";
var V421 = "W";
var V431 = "X";
var V538 = "Y";
var V432 = "Z";
var V532 = "Á";
var V429 = "É";
var V221 = "Í";
var V329 = "Ó";
var V536 = "Ú";
var V1256 = "Ü";
var V436 = "_SignoNumero";
var V214 = "_Mayuscula";
var V107 = "_ARROBA";
var V100 = "_COMA";
var V115 = "_PUNTO";
var V215 = "_PUNTOYCOMA";
//var V208 = "INTERROGACION";
var V207 = "_DOSPUNTOS";
var V310 = "_ABREP";
var V328 = "_CIERRAP";
var V322 = "_ADMIRACION";
var V3223 = "_1ADMIRACION";
var V3224 = "_2ADMIRACION";



// puntos correspondientes a cada letra del signo Braille
var PbA = "punto 1.";
var PbB = "puntos 1 y 2.";
var PbC = "puntos 1 y 4.";
var PbD = "puntos 1, 4 y 5.";
var PbE = "puntos 1 y 5.";
var PbF = "puntos 1, 2 y 4.";
var PbG = "puntos 1, 2, 4 y 5.";
var PbH = "puntos 1, 2 y 5.";
var PbI = "puntos 2 y 4.";
var PbJ = "puntos 2, 4 y 5.";
var PbK = "puntos 1 y 3.";
var PbL = "puntos 1, 2 y 3.";
var PbM = "puntos 1, 3 y 4.";
var PbN = "puntos 1, 3, 4 y 5.";
var PbÑ = "puntos 1, 2, 4, 5, y 6.";
var PbO = "puntos 1, 3 y 5.";
var PbP = "puntos 1, 2, 3 y 4.";
var PbQ = "puntos 1, 2, 3, 4 y 5.";
var PbR = "puntos 1, 2, 3 y 5.";
var PbS = "puntos 2, 3 y 4.";
var PbT = "puntos 2, 3, 4 y 5.";
var PbU = "puntos 1, 3 y 6.";
var PbV = "puntos 1, 2, 3 y 6.";
var PbW = "puntos 2, 4, 5 y 6.";
var PbX = "puntos 1, 3, 4 y 6.";
var PbY = "puntos 1, 3, 4, 5 y 6.";
var PbZ = "puntos 1, 3, 5 y 6.";
var PbÁ = "puntos 1, 2, 3, 5 y 6.";
var PbÉ = "puntos 2, 3, 4, y 6.";
var PbÍ = "puntos 3 y 4.";
var PbÓ = "puntos 3, 4 y 6.";
var PbÚ = "puntos 2, 3, 4, 5 y 6.";
var PbÜ = "puntos 1, 2, 5 y 6.";
var Pb_SignoNumero = "puntos 3, 4, 5 y 6.";
var Pb_Mayuscula = "puntos 4 y 6.";
var Pb_COMA = "punto 2";
var Pb_PUNTO = "punto 3";
var Pb_ARROBA = "punto 5";
var Pb_PUNTOYCOMA = "puntos 2 y 3";
var Pb_DOSPUNTOS = "puntos 2 y 5";
var Pb_INTERROGACION = "puntos 2 y 6";
var Pb_ABREP = "puntos 1, 2 y 6";
var Pb_CIERRAP = "puntos 3, 4 y 5";
var Pb_ADMIRACION = "puntos 2, 3 y 5";
var Pb_1ADMIRACION = "puntos 2, 3 y 5";
var Pb_2ADMIRACION = "puntos 2, 3 y 5";
var Pb_3ADMIRACION = "puntos 2, 3 y 5";

//Sumas Keycodes posible Braille
var  vPosible = ["102","202","208","1000","315","209","308","415","309","206","313","217","317","323","430","523","324","423","530","424","321","428","325","425","421","431","538","432","532","429","221","329","536","32","8","436","214","107","100","115","215","207","226","310","328","322"];                                                         

//Valores no posibles Braille pero si en el teclado Braille
//106 J y 108 L
