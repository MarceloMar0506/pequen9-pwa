var signosUS = new Map([
    ["al","13"],["ante","146"],["año","12456"],["aquél","346"],["bien","12"],["cada","1456"],["como","2456"],["con","14"],
    ["de","145"],["del","256"],["el","15"],["él","2346"],["ella","123456"],["en","26"],["entre","356"],["es","1246"],
    ["este","1356"],["fue","124"],["grado","2356"],["gran","1245"],["ha","125"],["hace","236"],["jamás","245"],["la","3"],
    ["las","12346"],["le","123"],["lo","36"],["los","246"],["más","12356"],["me","134"],["muy","156"],["no","1345"],
    ["número","3456"],["para","16"],["pero","235"],["por","1234"],["pues","1256"],["que","12345"],["se","234"],["según","23456"],
    ["ser","1235"],["si","24"],["sí","34"],["siempre","126"],["sin","35"],["sobre","23"],["son","1346"],["su","345"],["te","2345"],["un","136"],["vez","1236"] ]);
    
    
//     ,["año ","12456"],["años","12456,246"],["grado ","2356"],["grados","2356,246"],["le ","123"],["les","123,1246"],["número ","3456"],["números","3456,246"],["su ","345"],["sus","345,234"],["vez ","1236"],["veces","1236,14"],["aquel","346"],["aquella","346,1"],["aquello","346,135"],["aquellas","346,12346"],["aquellos","346,246"],["ella","123456"],["ello","123456,135"],["ellas","123456,12346"],["ellos","123456,246"],["este ","1356"],["esta","1356,1"],["esto","1356,135"],["estas","1356,12346"],
//     ["estos","1356,246"],["un ","136"],["una","136,1"],["uno","136,135"],["unas","136,12346"],["unos","136,246"] ]);
//  // convertir map keys en array
var keysUS = Array.from(signosUS.keys());

var genNum = new Map([["año","12456"],["años","12456_246"],["grado","2356"],["grados","2356_246"],["le","123"],["les","123_1246"],["número","3456"],["números","3456_246"],["su","345"],["sus","345_234"],["vez","1236"] ,["veces","1236_14"],["aquel","346"],["aquella","346_1"],["aquello","346_135"],["aquellas","346_12346"],["aquellos","346_246"],["ella","123456"],["ello","123456_135"],["ellas","123456_12346"],["ellos","123456_246"],["este","1356"],["esta","1356_1"],["esto","1356_135"],["estas","1356_12346"],["estos","1356_246"],["un","136"],["una","136_1"],["uno","136_135"],["unas","136_12346"],["unos","136_246"]]);

var keysGN = Array.from( genNum.keys());

//Secuencia Esta
var secuencias = new Map([["estadio","1356_145-24=135"],["establo","1356_12-123=135"],["condestable","25_145-1356=12"],["malestar","134_13-1356=1235"],["contestar","25_2345-1356=1235"],["floresta","124_123-156=1356"],["acuesta","1_14-136=1356"],["molesta","134_135-123=1356"],["dispuesta","256_1234-136=1356"],["ballesta","12_1-123456=1356"],["queda","12345_145-1"],["queso","12345_234-135"],["quebrar","12345_23-16"],["quedó","12345_145-346"],["quemé","12345_134-2346"],["queja","12345_245-1"],["noquea","1345_135-12345=1"],["banquete","12_146-12345=2345"],["piquete","1234_24-12345=2345"],["paquete","1234_1-12345=2345"],["paraba","456_16-12=1"],["parada","456_16-145=1"],["paraje","456_16-245=15"],["separa","234_15-456=16"],["ampara","1_134-456=16"],["tapara","2345_1-456=16"],["depara","145_15-456=16"],["canten","14_456-146=1345"],["tanteo","2345_456-146=135"],["cantear","14_456-146=16"],["tantear","2345_456-146=16"],["tanteas","2345_456-146=12346"]]);                
var keysSec = Array.from(secuencias.keys());

var errorD = [];
var Practica1 = ["al","ante","año","aquél"];
var Practica2 = ["bien"];
var Practica3 = ["cada","como","con"];
var Practica4 = ["de","del"];
var Practica5 = ["el","él","ella","en","entre","es","este"];
var Practica6 = ["fue"];
var Practica7 = ["grado","gran"];
var Practica8 = ["ha","hace"];
var Practica9 = ["jamás"];
var Practica10 = ["la","las","le","lo","los",];
var Practica11 = ["más","me","muy"];
var Practica12 = ["no","número"];
var Practica13 = ["para","pero","por","pues"];
var Practica14 = ["que"];
var Practica15 = ["se","según","ser","si","sí","siempre","sin","sobre","son","su"];
var Practica16 = ["te"];
var Practica17 = ["un"];
var Practica18 = ["vez"];
var Practica19 = ["año","años","grado","grados","le","les","número","números","su","sus","vez","veces"];
var Practica20 = ["aquel","aquella","aquello","aquellas","aquellos","ella","ello","ellas","ellos","este","esta","esto","estas","estos","un","una","uno","unas","unos"];

var L1 = "1"; //a
var L12 = "4"; //b
var L14 = "5"; //c
var L145 ="8"; //d
var L15 ="10"; //e
var L124 ="17"; //f
var L1245 = "18"; //g
var L125 = "20";//h
//var L24 = "198"; //i
var L245 = "22"; //j
var L123 = "23"; //l
var L134 = "11"; //m
var L1345 = "31"; //n
//var L135 = "247"; //o
var L1234 = "33"; //p
var L12345 = "37"; //q
//var L1235 = "275"; //r
var L234 = "38"; //s
var L2345 = "48"; //t
var L136 = "49"; //u
var L1236 = "50"; //v

