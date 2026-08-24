


const signosT = new Map([
    ["abajo","2_245"],
    ["absoluto ","1_12"],
    ["acaso","1_14"],
    ["acción","1_3456"],
    ["acerca","1_14-14"],
    ["adelante","1456_123"],
    ["además","1456_134"],
    ["ahora","4_125"],
    ["algo","13_1245"],
    ["alguien","13_1245-1345"],
    ["algún","13_1345"],
    ["alguna","13_1345-1"],
    ["alguno","13_1345-135"],
    ["alrededor","13_1235"],
    ["anterior","146_1235"],
    ["anterioridad","146_1235-1456"],
    ["antes","146_234"],
    ["años","12456_246"],
    ["apenas","1_1234"],
    ["aquella","346_1"],
    ["aquello","346_135"],
    ["aquellas","346_12346"],
    ["aquellos","346_246"],
    ["Argentina","456_1-1235"],
    ["arriba","16_1235"],
    ["atrás","1_356"],
    ["aunque","1_136"],
    ["bajo","12_245"],
    ["bastante","12_2345"],
    ["Bolivia","456_12-135"],
    ["bondad","12_1456"],
    ["braille","23_123456"],
    ["Brasil","456_12-1235"],
    ["breve","23_1236"],
    ["brevedad","23_1236-1456"],
    ["buen","12_1345"],
    ["buena","12_1"],
    ["buenamente","12_134"],
    ["bueno","12_135"],
    ["casi","14_234"],        
    ["cerca","14_14"],
    ["Chile","456_14-123"],
    ["ciego","14_1245"],
    ["cierto ","14_2345"],
    ["Colombia","456_14-135"],
    ["cómo","5_2456"],
    ["condición","25_145-3456"],
    ["conjunto","25_245-2345"],
    ["conmigo","25_134"],
    ["consecuencia","25_234-14"],
    ["consecuente","25_234-2345"],
    ["consigo","25_234"],
    ["consiguiente","25_234-1245"],
    ["contenido","25_2345-1345=145"],
    ["contigo","25_2345"],
    ["contra","25_356"],
    ["contrariedad","25_356-1235=1456"],
    ["contrario","25_356-1235"],
    ["convida","25_1236-145"],
    ["Costa Rica","456_14-1235"],
    ["cual","14_123"],
    ["cuál","5_14-123"],
    ["cualquier","14_12345"],
    ["cualquiera","14_12345-1"],
    ["cuando","14_145"],
    ["cuándo","5_14-145"],
    ["cuanto","14_136"],
    ["cuánto","5_14-136"],
    ["Cuba","456_14-136"],
    ["cuyo","14_13456"],
    ["debajo","145_12-245"],
    ["decía","145_14"],
    ["decían","145_14-1345"],
    ["delante","145_123"],
    ["demás","145_134"],
    ["demasiado","145_134-145"],
    ["desde","145_234"],
    ["después","145_1234"],
    ["detrás","145_356"],
    ["diferencia","145_124-14"],
    ["diferente","145_124-2345"],
    ["difícil","145_124"],
    ["dijo","145_245"],
    ["dondequiera","145_145-12345"],
    ["dónde","5_145-145"],
    ["donde","145_145"],
    ["durante","145_136"],   
    ["Ecuador","456_15-14"],    
    ["efectividad","15_124-1236=1456"],
    ["efectivo","15_124-1236"],
    ["efecto","15_124"],
    ["ejemplar","15_245-1235"],
    ["ejemplo","15_245"],
    ["El Salvador","456_234-1236"],
    ["ellas","123456_12346"],
    ["ello","123456_135"],
    ["ellos","123456_246"],
    ["encima","26_14"],
    ["entonces","26_2345"],
    ["entretanto","356_2345"],
    ["entretenía","356_2345-1345"],
    ["entretenido","356_2345-1345=145"],
    ["España","456_15-234"],
    ["esta","1246_1"],
    ["está ","1246_2345"],
    ["estas","1246_12346"],
    ["esto","1246_135"],
    ["estos","1246_246"],
    ["estaba","1246_12"],
    ["estaban","1246_12-1345"],
    ["estado","1246_145"],
    ["están","1246_1345"],
    ["estando","1246_1345-145"],
    ["estar","1246_1235"],
    ["estuvo","1246_1236"],
    ["extrabajador","1346_356-12=156"],
    ["exterior","1346_1235"],
    ["fácil","124_12356"],
    ["facilidad","124_1456"],
    ["favor","124_1236"],
    ["general","1245_1345"],
    ["generalidad","1245_1345-1456"],
    ["grados","2356_246"],
    ["grande","1245_145"],
    ["Guatemala","456_1245-2345"],
    ["haber","125_1235"],
    ["había","125_12"],
    ["habían","125_12-1345"],
    ["habido","125_12-145"],
    ["hacer","236_1235"],
    ["hacía","125_14"],
    ["hacía","236_14"],
    ["hacían","236_14-1345"],
    ["hasta","125_234"],
    ["haya","125_13456"],
    ["hayan","125_13456-1345"],
    ["hermano","125_134"],
    ["hijo","125_245"],
    ["historia","125_2345"],
    ["hombre","125_2456"],
    ["Honduras","456_125-1345"],
    ["igual","24_1245"],
    ["igualdad","24_1245-1456"],
    ["importancia","345_1234-14"],
    ["importante","345_1234-2345"],
    ["inferior","35_124"],
    ["inferioridad","35_124-1456"],
    ["inmediato","35_134"],
    ["interés","35_2345"],
    ["interesante","35_2345-2345"],
    ["interior","35_1235"],
    ["interioridad","35_1235-1456"],
    ["joven","245_1236"],
    ["junto","245_2345"],
    ["juventud","245_1236-2345"],
    ["largo","123_1245"],
    ["les","123_1246"],
    ["lejos","123_245"],
    ["luego","123_1256"],
    ["lugar","123_136"],
    ["madre","134_1"],
    ["manera","134_1345"],
    ["mayor","134_13456"],
    ["mayoría","134_13456-1235"],
    ["mediante","134_145-2345"],
    ["medio","134_145"],
    ["mejor","134_245"],
    ["menos","134_234"],
    ["México","456_134-1346"],
    ["mientras","134_356"],
    ["mismo","134_134"],
    ["mucho","4_134"],
    ["mujer","134_136"],
    ["nada","1345_1456"],
    ["nadie","1345_145"],["natural","1345_2345"],["naturaleza","1345_2345-1356"],["naturalidad","1345_2345-1456"], ["necesario","1345_14-1235"], ["necesidad","1345_14-1456"], ["Nicaragua","456_1345-24"],["ningún","1345_1245"], ["ninguna","1345_1245-1"], ["ninguno","1345_1245-135"], ["niño","1345_12456"], ["nosotros","45_1345"],
    ["novedad","1345_1236-1456"], ["nuestro","1345_1256"], ["nuevo","1345_1236"], ["números","3456_246"], ["nunca","1345_14"], ["ocasión","135_3456"], ["oficial","135_124-123"], ["oficio","135_124"], ["oportunidad","135_1234-1456"], ["oportuno","135_1234"], ["otro","135_356"], ["padre","1234_1"], ["país","1234_34"],["países","1234_34-234"],
    ["Panamá","456_1234-1"], ["Paraguay","456_1234-13456"], ["pequeño","1234_12456"], ["persona","1234_1345"],["personalidad","1234_1345-123=1456"], ["Perú","456_1234-15"],
    ["poco","1234_14"], ["poder","1234_1235"], ["podía","1234_145"],["podían","1234_145-1345"], ["porque","1234_12345"], ["Portugal","456_1234-2345"], ["predecía","235_145-14"],["predijo","235_145-245"], ["principal","235_14-123"], ["principio","235_1234"],["pronto","235_2345"], ["propiedad","235_1234-1456"], ["propio","235_1234"], 
    ["puede","1234_1256"], ["qué","12345_2346"],["quien","12345_1345"], ["quién","5_12345-1345"], ["razón","1235_1356"], ["rehacer","1235_236-1235"], ["relación","1235_123"],["relatividad","1235_123-1236=1456"], ["relativo","1235_123-1236"], ["República Dominicana","456_145-135"], ["retenido","1235_2345-1345=145"], ["sido","234_145"],
    ["siguiente","234_1245"], ["sino","234_1345"], ["siquiera","234_12345"], ["sitio","234_2345"], ["situación","234_2345-3456"], ["solo","234_123"], ["superior","234_1234"], ["superioridad","234_1234-1456"], ["sus","345_234"], ["suyo","234_13456"], ["también","2345_12"], ["tampoco","2345_1234-14"], ["tanto","2345_2345"], ["temporal","2345_1234-123"], ["tener","2345_1235"], ["tenía","2345_1345"], ["tenían","2345_1345-1345"], ["tenido","2345_1345-145"], ["tiempo","2345_1234"], ["todavía","2345_1236"], ["todo","2345_145"], ["trabajador","356_12-156"], ["trabajar","356_12-1235"], ["trabajo","356_12"], ["tuyo","2345_13456"], ["último","23456_123"], ["una","136_1"], ["unas","136_12346"], ["uno","136_135"], ["unos","136_246"], ["único","23456_14"], ["Uruguay","456_136-13456"], ["usted","136_145"], ["ustedes","136_145-234"], ["veces","1236_14"],
    ["Venezuela","456_1236-15"], ["verdad","1236_1456"], ["vida","1236_145"], ["vosotros","45_1236"], ["vuestro","1236_1256"]
            
]);
// convertir map keys en array
var keys = Array.from( signosT.keys() );




// var Practica1 = ["abajo", "absoluto","acaso","acción","acerca","además","adelante","ahora","algo","alguien","algún","alguna","alguno","alrededor","anterior","anterioridad","antes","apenas","Argentina","arriba","atrás","aunque"];

// var Practica2 = ["bajo","bastante","Bolivia","bondad","braille","Brasil","breve","brevedad","buen","buena","buenamente","bueno"];

// var Practica3 = ["casi","cerca","Chile","ciego","cierto","Colombia","condición","conmigo","consecuencia",
// "consecuente","consigo","contigo","contra","contrariedad","contrario","Costa Rica","cual","cualquier","cualquiera","cuando","cuanto","Cuba","cuyo"];

// var Practica4 = ["debajo","decía","decían","delante","demás","demasiado","desde","después","detrás","diferencia","diferente","difícil","dijo","donde","dondequiera","durante"];

// var Practica5 = ["Ecuador","efectividad","efectivo","efecto","ejemplar","ejemplo","El Salvador","encima","entonces","entretanto","España","está","estaba","estaban","estado","están","estando","estar","estuvo","exterior"];

// var Practica6 = ["fácil","facilidad","favor"];

// var Practica7 = ["general","generalidad","grande","Guatemala"];

// var Practica8 = ["haber","había","habían","habido","hacer","hacia","hacía","hacían","hasta","haya","hayan","hermano","hijo","historia","hombre","Honduras"];

// var Practica9 = ["igual","igualdad","inferioridad","inmediato","interés","interesante","interior","interioridad"];

// var Practica10 = ["joven","junto","juventud"];

// var Practica11 = ["largo","lejos","luego","lugar"];

// var Practica12 = ["madre","manera","mayor","mayoría","mediante","medio","mejor","menos","México","mientras",
// "mismo","mucho","mujer"];

// var Practica13 = ["nada","nadie","natural","naturaleza","naturalidad","necesario","necesidad","Nicaragua","ningún","ninguna","ninguno","niño","nosotros","novedad","nuestro","nuevo","numeroso","nunca"];

// var Practica14 = ["ocasión","oficial","oficio","oportunidad","oportuno","otro"];

// var Practica15 = ["padre","país","países","Panamá","Paraguay","pequeño","persona","personalidad","Perú","poco",
// "poder","podía","podían","porque","Portugal","principal","principio","pronto","propiedad","propio","puede"];

// var Practica16 = ["quien"];

// var Practica17 = ["razón","relación","relatividad","relativo","R_ Dominicana"];

// var Practica18 = ["sido","siguiente","sino","siquiera","sitio","situación","solo","superior","superioridad","sus","suyo"];

// var Practica19 = ["también","tampoco","tanto","temporal","tener","tenía","tenían","tenido","tiempo","todavía",
// "todo","trabajador","trabajar","trabajo","tuyo"];

// var Practica20 = ["último","único","Uruguay","usted","ustedes"];

// var Practica21 = ["veces","verdad","Venezuela","vida","vosotros","vuestro"];


// var L1 = "82"; //a
// var L12 = "104"; //b
// var L14 = "116"; //c
// var L145 ="139"; //d
// var L15 ="155"; //e
// var L124 ="175"; //f
// var L1245 = "178"; //g
// var L125 = "182";//h
// var L24 = "198"; //i
// var L245 = "206"; //j
// var L123 = "209"; //l
// var L134 = "223"; //m
// var L1345 = "226"; //n
// var L135 = "244"; //o
// var L1234 = "250"; //p
// var L12345 = "271"; //q
// var L1235 = "272"; //r
// var L234 = "277"; //s
// var L2345 = "288"; //t
// var L136 = "303"; //u
// var L1236 = "308"; //v









