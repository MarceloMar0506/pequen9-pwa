var Mlec;
var nlec = 0;
var errorD = [];

//alfabeto
var alfab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","á","é","í","ó","ú","ü"];



const signosT = new Map([
    ["." , "3"],
    ["," ,"2"],
    [":" , "25"], 
    ["?" , "26"],
    ["!" , "235"],
    [";" , "23"],
    ["º" , "356"],
    ["(" , "126"],
    [")" , "345"],
    ["[" , "12356"],
    ["]" , "23456"],
    ["{" , "5,123"],
    ["}" , "456,2"],
    ["-" , "36"],
    ["÷" , "256"],
    ["—" , "36,36"],
    ["_" , "6"],
    ["*" , "35"],
    ["|" , "456"],
    ["$" , "456,1234"],
    ["\"" , "236"],
    ["&" , "6,12346"],
    ["M" , "46"],
    ["/" , "6,2"],
    ["@" , "5"],
    ["#" , "3456"],
    ["%" , "456,356"],
    ["<" , "246"],
    [">" , "135"],
    ["«" , "246,246"],
    ["»" , "135,135"],
    ["≥" , "135,2356"],
    ["≤" , "246,2356"],
    ["~" , "4,2356"],
    ["=" ,"2356"],
    ["≠" , "45,2356"],
    [ "==" , "2356,2356"],
    ["○"  , "246,135"],
    ["□" , "456,13456"],
    ["▌" , "12346,13456"],
    ["⌂" , "12346,135"],
    ["⊿" , "456,236"],
    ["△" , "6,23456"]

  ]);
  // convertir map keys en array
  var keys = Array.from( signosT.keys() );
 

//signos de puntuación
var signosVie = ["punto","coma","pcoma","dosp","interroga","admira","abrep","cierrap","abrecor","cierracor","abrellav","cierrallav","guion","raya","asterisco","apostrofo","barrao","M","suma","resta","multiplicar","dividir","igual","pmen","pmay","porciento"];
var Muestrasignos = [".","c",";",":","?","!","(",")","[","]","{","}","-","_","*","'","/","M","+","-","x","/","=","<",">","%"];

//signos matematicos
var signosM = ["suma","resta","multiplicar","dividir","igual","pmen","pmay","porciento"];
var MuestrasignosM = ["+","-","x","/","=","<",">","%"];

var Ssuma = '235';
var Sresta = '36';
var Smultiplicar = '236';
var Sdividir = '256';
var Sigual = '2356';
var Sporciento = '456_356';
var Spmay = '46_2';
var Spmen = '5_13';


var Spunto = '3';
var Scoma = '2';
var Spcoma = '23';
var Sdosp = '25';
var Sinterroga = '26';
var Sadmira = '235';
var Sabrep = '126';
var Scierrap = '345';
var Sabrecor = '12356';
var Scierracor = '23456';
var Sabrellav = '5_123';
var Scierrallav = '456_2';
var Sguion = '36';
var Sraya = '36_36';
var Sasterisco = '35';
var Sapostrofo = '3';
var Sbarrao = '6_2';
var SM = '46';



var Da =  '1';
var Dá =  '12356';
var Db =  '12';
var Dc =   '14';
var Dl =   '123';
var Dg =   '1245';
var Dm =   '134';
var Dp =   '1234';
var Dr =   '1235';
var Do =   '135';
var Dó =   '346';
var De =   '15';
var Dé =   '2346';
var Dt =   '2345';
var Ds =   '234';
var Du =   '136';
var Dú =   '23456';
var Dn =   '1345';
var Dq =   '12345';
var Di =   '24';
var Dí =   '34';
var Dv =   '1236';
var Dj =   '245';
var Dd =   '145';
var Dy =   '13456';
var Dñ =   '12456';
var Dk =   '13';
var Dh =   '125';
var Dx =   '1346';
var Dw =   '2456';
var Df =   '124';
var Dz =   '1356';
var Dü =   '1256';
var Dmay =   '46';
var Dnum = '2345';

var letraTq = 'a';
var letraTw = 'b';
var letraTe = 'c';
var letraTr = 'd';
var letraTt = 'e';
var letraTy = 'f';
var letraTu = 'g';
var letraTi = 'h';
var letraTo = 'i';
var letraTp = 'j';

var letraTa = 'k';
var letraTs = 'l';
var letraTd = 'm';
var letraTf = 'n';
var letraTg = 'ñ';
var letraTh = 'o';
var letraTj = 'p';
var letraTk = 'q';
var letraTl = 'r';
var letraTñ = 's';

var letraTz = 't';
var letraTx = 'u';
var letraTc = 'v';
var letraTv = 'w';
var letraTb = 'x';
var letraTn = 'y';
var letraTm = 'z';
var letraT1 = 'á';
var letraT2 = 'é';
var letraT3 = 'í';
var letraT4 = 'ó';
var letraT5 = 'ú';
var letraT6 = 'ü';
var letraT7 = 'num';




