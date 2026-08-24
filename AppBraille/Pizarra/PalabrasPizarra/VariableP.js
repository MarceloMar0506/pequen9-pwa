var Dicta =0;
var TextoE = "";
var lb = 0;
var letraPedida = "";
var Ntexto = "";
var palabra = []; 
var  vPosible = ["102","202","208","1000","315 ","209 ","308","415","309","206","313","217","317","323","430","523","324","423","530","424","321","428","325","425","421","431","538","432","532","429","221","329","536","32","8"];

//var palabra = ["ALETA","PASA","ADA","ARA","AL",];
//alfabeto
var alfab = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","Signo Número"]
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
var PbN = "puntos 1, 3,4 y 5.";
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




