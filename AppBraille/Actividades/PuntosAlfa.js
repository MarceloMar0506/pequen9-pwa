var P1 = "a";
var P12 = "b";
var P14 = "c";
var P145 = "d";
var P15 = "e";
var P124 = "f";
var P1245 = "g";
var P125 = "h";
var P24 = "i";
var P245 = "j";
var P13 = "k";
var P123 = "l";
var P134 = "m";
var P1345 = "n";
var P12456 = "ñ";
var P135 = "o";
var P1234 = "p";
var P12345 = "q";
var P1235 = "r";
var P234 = "s";
var P2345 ="t";
var P136 = "u";
var P1236 = "v";
var P2456 = "w";
var P1346 = "x";
var P13456 = "y";
var P1356 ="z";
var P12356 = "á";
var P2346 = "é";
var P34 = "í";
var P346 ="ó";
var P23456 = "ú";
var P1256 =  "ü";
var P3456 = "SignoNumero";
var P46 = "Mayuscula";
var P2 = "COMA";
var P3 = "PUNTO" ;
var P5 = "ARROBA";
var P23 = "PUNTO Y COMA";
var P25 = "DOS PUNTOS";
var P26 = "INTERROGACION";
var P126 = "ABREP";
var P345 = "CIERRAP";
var P235 = "ADMIRACION";


var La =  '1';
var Lá =  '12356';
var Lb =  '12';
var Lc =   '14';
var Ll =   '123';
var Lg =   '1245';
var Lm =   '134';
var Lp =   '1234';
var Lr =   '1235';
var Lo =   '135';
var Ló =   '346';
var Le =   '15';
var Lé =   '2346';
var Lt =   '2345';
var Ls =   '234';
var Lu =   '136';
var Lú =   '23456';
var Ln =   '1345';
var Lq =   '12345';
var Li =   '24';
var Lí =   '34';
var Lv =   '1236';
var Lj =   '245';
var Ld =   '145';
var Ly =   '13456';
var Lñ =   '12456';
var Lk =   '13';
var Lh =   '125';
var Lx =   '1346';
var Lw =   '2456';
var Lf =   '124';
var Lz =   '1356';
var Lü =   '1256';
var Lmay =   '46';


var numerosVec =0;

const signosAlfa = new Map([
["a","1"],
["á","12356"],
["b","12"],
["c","14"],
["l","123"],
["g","1245"],
["m","134"],
["p","1234"],
["r","1235"],
["o","135"],
["ó","346"],
["e","15"],
["é","2346"],
["t","2345"],
["s","234"],
["u","136"],
["ú","23456"],
["n","1345"],
["q","12345"],
["i","24"],
["í","34"],
["v","1236"],
["j","245"],
["d","145"],
["y","13456"],
["ñ","12456"],
["k","13"],
["h","125"],
["x","1346"],
["w","2456"],
["f","124"],
["z","1356"],
["ü","1256"]
]);


var keysAlfa = Array.from( signosAlfa.keys() );
 

const signosOtros = new Map([
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
    // ["÷" , "256"],
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
    // ["#" , "3456"],
    // ["%" , "456,356"]
  ]);
  
  var keysOtros = Array.from( signosOtros.keys() );

  const signosMatema = new Map([
    ["<" , "246"],
    [">" , "135"],
    ["«" , "246,246"],
    ["»" , "135,135"],
    ["≥" , "135,2356"],
    ["≤" , "246,2356"],
    ["~" , "4,2356"],
    ["=" ,"2356"],
    ["≠" , "45,2356"],
    [ '$' , "2356,2356"],
    ["○"  , "246,135"],
    ["□" , "456,13456"],
    ["▌" , "12346,13456"],
    ["⌂" , "12346,135"],
    ["⊿" , "456,236"],
    ["△" , "6,23456"],
    ["+", "235"],
    ["-", "36"],
    ["*", "236"],
    ["/", "256"],  
    ["%", "456,356"]
  ]);
  var keysMatema = Array.from( signosMatema.keys() );

  const signosMusica = new Map([
 
    ["d" , "145","Do corchea"],//  A145="100";//d do corche
    ["e" , "15","re corchea"],//
    ["f" , "124","mi corchea"],//
    ["g" , "1245","fa corchea"],//
    ["h" , "125","sol corchea"],//
    ["i" , "24","la corchea"],//
    ["j" , "245","si corchea"],//

    ["n" , "1345","do blanca"],
    ["o" , "135","re blanca"],
    ["p" , "1234","mi blanca"],
    ["q" , "12345","fa blanca"],
    ["r" , "1235","sol blanca"],
    ["s" , "234","la blanca"],
    ["t" , "2345","si blanca"],    

    ["y" , "13456","do redonda"],
    ["z" , "1356","re redonda"],
    ["&" , "12346","mi redonda"],
    ["\\" , "123456","fa redonda"],
    ["á" , "12356","sol redonda"],
    ["é" , "2346","la redonda"],
    ["ú" , "23456","si redonda"],

    ["4" , "1456","do negra"],
    ["5" , "156","re negra"],
    ["6" , "1246","mi negra"],
    ["7" , "12456","fa negra"],
    ["8" , "1256","sol negra"],
    ["9" , "246","la negra"],
    ["w" , "2456","si negra"],

  ]);
  var keysMusica = Array.from( signosMusica.keys() );
  console.log(keysMusica);
  
 var jm =[    
  ["d" , "145","Do corchea"],//  A145="100";//d do corche
  ["e" , "15","re corchea"],//
  ["f" , "124","mi corchea"],//
  ["g" , "1245","fa corchea"],//
  ["h" , "125","sol corchea"],//
  ["i" , "24","la corchea"],//
  ["j" , "245","si corchea"],//

  ["n" , "1345","do blanca"],
  ["o" , "135","re blanca"],
  ["p" , "1234","mi blanca"],
  ["q" , "12345","fa blanca"],
  ["r" , "1235","sol blanca"],
  ["s" , "234","la blanca"],
  ["t" , "2345","si blanca"],    

  ["y" , "13456","do redonda"],
  ["z" , "1356","re redonda"],
  ["&" , "12346","mi redonda"],
  ["\\" , "123456","fa redonda"],
  ["á" , "12356","sol redonda"],
  ["é" , "2346","la redonda"],
  ["ú" , "23456","si redonda"],

  ["4" , "1456","do negra"],
  ["5" , "156","re negra"],
  ["6" , "1246","mi negra"],
  ["7" , "12456","fa negra"],
  ["8" , "1256","sol negra"],
  ["9" , "246","la negra"],
  ["w" , "2456","si negra"],

];  


var jk = ["d" ,"e" ,"f","g","h","i","j","n","o","p","q","r","s","t","y","z","&","\\","á","é","ú","4","5","6","7","8","9","w"];  



const signosNumeros = new Map([
  ["1" , "3456,1"],
  ["2" , "3456,12"],
  ["3" , "3456,14"],
  ["4" , "3456,145"],
  ["5" , "3456,15"],
  ["6" , "3456,124"],
  ["7" , "3456,1245"],
  ["8" , "3456,125"],
  ["9" , "3456,24"],
  ["0" , "3456,245"],

]);
var keysNumeros = Array.from( signosNumeros.keys() );

var jmN =[ 
  ["1" , "3456,1","Uno"],
  ["2" , "3456,12","dos"],
  ["3" , "3456,14","tres"],
  ["4" , "3456,145","cuatro"],
  ["5" , "3456,15","cinco"],
  ["6" , "3456,124","seis"],
  ["7" , "3456,1245","siete"],
  ["8" , "3456,125","ocho"],
  ["9" , "3456,24","nueve"],
  ["0" , "3456,245","cero"],
]
var jkN = ["1","2","3","4","5","6","7","8","9","0"];