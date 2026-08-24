TextoPrincipios = "Los principios de palabra son signos estenográficos destinados a ser utilizados, como su nombre lo indica, únicamente al comenzar una palabra. Los principios de palabra representan prefijos que se emplean con frecuencia en el idioma español. pulse teclas de dirección abajo y arriba para recorrer la lista. Para obtener más información pulse barra espaciadora y enter. También puede realizar práctica de escritura con el teclado virtual braille.";

var principio1 =  ["com,36"];
var principio2 = ["con,25"];
var principio3 = ["dis,256"];
var principio4 = ["entre,356"];
var principio5 = ["ex,1346"];
var principio6 = ["inter,13456"];
var principio7 = ["pre,235"];
var principio8 = ["pro,1234"];
var principio9 = ["re,1235"];
var principio10 = ["sobre,23"];

Textocontraccion = "Lista de contracciones. Las contraccion son pequeños grupos de letras representados por un signo estenográfico, se emplean como integrantes de palabras, nunca como palabras aisladas. Se escogieron por la frecuencia en que aparecen en las expresiones de uso cotidiano y pueden utilizarse indistintamente al principio, en medio o al final de las palabras. ";
var contraccion1 = ["ab,2"];
var contraccion2 = ["ad,1456"];
var contraccion3 = ["al,13"];
var contraccion4 = ["an,146"];
var contraccion5 = ["ar,16"];
var contraccion6 = ["as,12346"];
var contraccion7 = ["br,23"];
var contraccion8 = ["cr,25"];
var contraccion9 = ["dr,256"];
var contraccion10 = ["em,126"];
var contraccion11 = ["en,26"];
var contraccion12 = ["er,236"];
var contraccion13 = ["es,1246"];
var contraccion14 = ["gr,2356"];
var contraccion15 = ["im,345"];
var contraccion16 = ["in,35"];
var contraccion17 = ["ion,3456"];
var contraccion18 = ["ll,123456"];
var contraccion19 = ["om,2456"];
var contraccion20 = ["on,1346"];
var contraccion21 = ["or,156"];
var contraccion22 = ["os,246"];
var contraccion23 = ["pr,235"];
var contraccion24 = ["qu,12345"];
var contraccion25 = ["tr,356"];
var contraccion26 = ["ue,1256"];

TextoTerminaciones = "Las terminaciones son signos estenográficos que se usan para finalizar una palabra. Representan terminaciones verbales o adverbiales muy frecuentes en el idioma español. Las terminaciones estenográficas pueden representarse por una sola letra o por combinaciones de dos. pulse teclas de dirección abajo y arriba para recorrer la lista. Para obtener más información pulse barra espaciadora y enter. También puede realizar práctica de escritura con el teclado virtual braille. ";

var terminacion1 = ["acción,1_3456"];
var terminacion2 = ["ando,146_145"];
var terminacion3 = ["ble,12"];
var terminacion4 = ["bre,23"];
var terminacion5 = ["cia,14"];
var terminacion6 = ["ección,15_3456"];
var terminacion7 = ["endo,26_145"];
var terminacion8 = ["icción,24_3456"];
var terminacion9 = ["iendo,256_145"];
var terminacion10 = ["iento,256_2345"];
var terminacion11 = ["ión,3456"];
var terminacion12 = ["mente,134"];
var terminacion13 = ["mento,134_2345"];
var terminacion14 = ["que,12345"];
var terminacion15 = ["te,2345"];
var terminacion16 = ["ucción,136_3456"];

var signosPTC = new Map([
["Absolutamente","1_12-134"],
["Adición","1456_24-14=3456"],
["Anteriormente","146_1235-134"],
["Brevemente","23_1236-134"],
["Ciegamente","14_1245-134"],["Ciertamente","14_2345-134"],["Comente","14_135-134"],["Compadre","36_1234-1"],["Concierto","25_14-2345"],["Conjuntamente","25_245-2345=134"],["Conjunto","25_245-2345"],["Consecuentemente","25_234-2345=134"],["Consiguiente","25_234-1245"],["Consiguientemente","25_234-1245=134"],["Contrariamente","25_356-1235=134"],["Convicción","25_1236-24=3456"],["Convida","25_1236-145"],["Diente","145_24-26=2345"],["Difícilmente","145_124-134"],["Distracción","256_356-1=3456"],["Efectivamente","15_124-1236=134"],["Ejemplarmente","15_245-1235=134"],["Eminencia","126_35-26=14"],["Entregable","356_1245-1=12"],["Entrena","356_1345-1"],["Exteriormente","1346_1235-134"],["Fácilmente","124_12356-134"],["Fomento","124_135-134=2345"],["Generalmente","1245_1345-134"],["Igualmente","24_1245-134"],["Infección","35_124-15=3456"],["Inmediatamente","35_134-134"],["Interiormente","35_1235-134"],["Intermedio","13456_134-145"],["Inyección","35_13456-15=3456"],["Largamente","123_1245-134"],["Mayormente","134_13456-134"],["Miento","134_24-26=2345"],["Momento","134_135-134=2345"],["Naturalmente","1345_2345-134"],["Necesariamente","1345_14-1235,134"],["Noble","1345_135-12"],["Nombre","1345_2456-23"],["Nuevamente","1345_1236-134"],["Ocasionalmente","135_3456-123=134"],["Oficialmente","135_124-123=134"],["Oportunamente","135_1234-134"],["Personalmente","1234_1345-123=134"],["Pinte","1234_35-2345"],["Predijo","235_145-245"],["Prehistoria","235_125-2345"],["Principalmente","235_14-123=134"],["Prometo","1234_134-15=2345"],["Pronombre","1234_1345-2456=23"],["Prontamente","235_2345-134"],["Propiamente","235_1234-134"],["Reducción","1235_145-136=3456"],["Relativamente","1235_123-1236=134"],["Remedio","1235_134-145"],["Renuevo","1235_1345-1236"],["Riendo","1235_24-26=145"],["Salte","234_13-2345"],["Siendo","234_256-145"],["Siento","234_256-2345"],["Sobrenatural","23_1345-2345"],["Sobrevida","23_1236-145"],["Solamente","234_123-134"],["Temporalmente","2345_1234-123=134"],["Últimamente","23456_123-134"],["Únicamente","23456_14-134"],["Vendo","1236_26-145"],["Viento","1236_256-2345"]]); 

  var keysPTC = Array.from( signosPTC.keys() );


  
var secuencia1 = ["ante","Para ser usada como secuencia, es preciso anteponerle el prefijo 4 5 6, con el fin de diferenciarla de la contracción: 'an'. " +
                "Podrá usarse solo en las posiciones inicial e intermedia, ya que el final ante, está cubierto por la combinación de la " +
                "contracción: 'an' más el final: 'te', que tiene preferencia al contar como terminación. <br>" +
                "Ejemplos:<br><bo>anteponer</bo><br> primera celda 4 5 6, segunda 1 4 6, tercera 1 2 3 4, cuarta 1 3 4 6, quinta 2 3 6. " +
                "<br><bo>antebrazo</bo><br> primera celda 4 5 6, segunda 1 4 6, tercera 2 3, cuarta 1, quinta 1 3 5 6, 1 3 5. " +
                "<br><bo>canten</bo><br> primera celda 1 4, segunda 4 5 6, tercera 1 4 6, cuarta 1 3 4 5. " +
                "<br><bo>tantear</bo><br> primera celda 2 3 4 5, segunda 4 5 6, tercera 1 4 6, cuarta 1 6. "];
              
var secEje1 = ["'anteponer'"," 4 5 6, 1 4 6, 1 2 3 4, 1 3 4 6, 2 3 6. " +
                "'antebrazo'.  4 5 6, 1 4 6, 2 3, 1, 1 3 5 6, 1 3 5. " +
                "'canten'.   1 4, 4 5 6, 1 4 6, 1 3 4 5. " +
                "'tantear'.  2 3 4 5, 4 5 6, 1 4 6, 1 6"];

var secuencia2 = ["esta","El vocablo formado por la letra Z significa: 'este', pero se le ha dado el valor de 'esta' " +
                   "cuando actúa como secuencia, pues tiene una incidencia de más del doble." +
                  "<br> Aparecerá en la palabra delante de consonante cuando sea principio.<br> " +
                  "<br>Ejemplos:<br><bo>estadio</bo><br> primera celda 1 3 5 6, segunda 1 4 5, tercera 2 4, cuarta 1 3 5." +
                  "<br><bo> establo</bo><br> primera celda 1 3 5 6, segunda 1 2, tercera 1 2 3, cuarta 1 3 5. "+
                  "<br><bo> contestable</bo><br> primera celda 2 5, segunda 2 3 4 5, tercera 1 3 5 6, cuarta 1 2. <p>"+
                  "<bo> Se presentará entre consonantes cuando se encuentre en posición media.</bo>" +
                  "<p>Ejemplos:<br><bo>condestable</bo><br> primera celda 2 5, segunda 1 4 5, tercera 1 3 5 6, cuarta 1 2. " +
                  "<br><bo>malestar</bo> primera celda 1 3 4, segunda 1 3, tercera 1 3 5 6, cuarta 1 2 3 5." +
                  "<bo> Aparecerá detrás de consonante cuando sea final.</bo>" +
                  "<br>Ejemplos:<br><bo>amonesta</bo><br> primera celda 1, segunda 1 3 4, tercera 1 3 5, cuarta 1 3 4 5, quinta 1 3 5 6. " +
                  "<br><bo>ballesta</bo><br> primera celda 1 2, segunda 1, tercera 1 2 3 4 5 6, cuarta 1 3 5 6"  ];
var secEje2 = ["'estadio'","1 3 5 6, 1 4 5, 2 4, 1 3 5. " +
                   "'establo'.  1 3 5 6, 1 2, 1 2 3, 1 3 5. " +
                   "'condestable'.  2 5, 1 4 5, 1 3 5 6, 1 2. " +
                   "'malestar'.  1 3 4, 1 3, 1 3 5 6, 1 2 3 5. " +                
                   "'amonesta'.  1, 1 3 4, 1 3 5, 1 3 4 5,1 3 5 6. " +
                   "'ballesta'.  1 2, 1, 1 2 3 4 5 6, 1 3 5 6"];

var secuencia3 = ["que","La letra <bo>Q</bo>, amplía su significado a:<bo> que, </bo> al encontrarse  en posición inicial o media en una palabra, " +
                  "pues ya lo tiene cuando está al final. Siempre poseerá este significado, salvo cuando preceda a las vocales:" +
                  "<bo> i. </bo> <bo>é </bo> con acento. </bo>  o al diptongo <bo> ei. </bo> en cuyo caso será simplemente la actual  contracción q<sp>.</sp> u.</p>" +
                  "<br> Ejemplos:<br><bo>queda</bo><br> primera celda 1 2 3 4 5, segunda 1 4 5, tercera 1. " +
                  "<br><bo>quebrar</bo><br> primera celda 1 2 3 4 5, segunda 2 3, tercera 1 6. " +
                  "<br><bo>noquea</bo><br> primera celda 1 3 4 5, segunda 1 3 5, tercera 1 2 3 4 5, cuarta 1. " +
                  "<br><bo>blanquear</bo><br> primera celda 1 2, segunda 1 2 3, tercera 1 4 6, cuarta 1 2 3 4 5, quinta 1 6. "];
var secEje3 = ["'queda'"," 1 2 3 4 5, 1 4 5, 1.  " +
                "'quebrar'.  1 2 3 4 5, 2 3, 1 6. " +
                "'noquea'.  1 3 4 5,  1 3 5,  1 2 3 4 5,  1. " +
                "'blanquear'.  1 2,  1 2 3, 1 4 6,  1 2 3 4 5,  1 6"];                    

var secuencia4 = ["para","El vocablo: <bo> para</bo>,  podrá usarse como secuencia," +
                  " pero se le antepondrá el prefijo 4 5 6, lo que la diferenciará de la contracción <bo>para. </bo> Se podrá utilizar en cualquier lugar dentro de la palabra. " +
                  "<br><p>Ejemplos:<br><bo>paraje</bo><br>primera celda 4 5 6, segunda 1 6, tercera 2 4 5, cuarta 1 5. " +
                  "<br><bo>comparación</bo><br>primera celda 3 6, segunda 4 5 6, tercera 1 6, cuarta 1 4, quinta 3 4 5 6. " +
                  "<br><bo>ampara</bo><br>primera celda 1, segunda 1 3 4, tercera 4 5 6, cuarta 1 6. "];

var secEje4 = ["'paraje'","4 5 6, 1 6, 2 4 5, 1 5. " +
              "'comparación'.  3 6, 4 5 6, 1 6, 1 4, 3 4 5 6. " +
              "'ampara'.  1, 1 3 4, 4 5 6, 1 6"];                 

 //             "<h3>Uso del punto 5 </h3>" +
 var punto5_1 = ["Punto 5 como acentuador","Cuando las palabras abreviadas con uno o más signos deban llevar acento ortográfico, "+
              "se escribirán precedidas del punto 5.<br> Se exceptúan de" +
              " esta regla las palabras dé, qué, sé y té.<br> "+
              "En el caso de que la palabra a acentuar lleve mayúscula, o cualquier otro signo de expresión o cambio tipográfico, "+
               "el punto 5 se colocará a continuación de estos."  ];

var punto5_2 = ["Punto 5 como interruptor estenográfico", "Primera Norma.<br> Delante de los signos de puntuación, de cambio tipográfico o de expresión "+
               " que se antepongan a las palabras escritas con minúscula, excepto guión de diálogo. "];

var punto5_3 = ["Segunda norma","Precediendo al último de dos o más signos de puntuación, cambio tipográfico o" + 
                " expresión consecutivos antepuestos a una palabra con minúscula. " ];               


var punto5_4 = ["Tercera norma","Delante de toda palabra que deba escribirse en braille integral por coincidir alguna de sus letras con signos de valor estenográfico. " ];               
 
 var punto5_5 = ["Cuarta norma","En una serie de más de tres palabras, que deban escribirse en forma integral (según la regla anterior), el interruptor estenográfico se colocará doble delante de la primera, y simple delante de la última." ];                
 
 var punto5_6 = ["Quinta norma","Cuando una palabra que no deba abreviarse esté precedida de un signo de puntuación, cambio tipográfico o expresión, el interruptor se colocará únicamente delante de aquella." ];               
 
 var punto5_7 = ["Sexta norma","Delante de las conjunciones <bo>'e'.</bo> y <bo>'u'.</bo> para evitar la confusión con los vocablos abreviados <bo>'el'.</bo> y  <bo>'un'.</bo>" ];   

 var punto5_8 = ["Septima norma","Precediendo a diversos signos de puntuación o de diferenciación tipográfica, cuando se puedan confundir " +  "con otros de carácter  estenográfico situados al final de la palabra, como sucede en estos casos con. " +
   "<br>El signo de cierre de comillas y la contracción 'er'. " +
   "<br>El signo de cierre de interrogación y la contracción 'en'. " +
   "<br>El signo de punto y coma y la terminación 'bre'. " +
   "<br>El signo de cambio tipográfico y la contracción 'in'.<br> Esta norma también se aplicará en el caso de que estos signos aparezcan en combinación con otros que no tengan esta restricción, colocándose el punto 5 entre ellos y el final de la palabra." ];   
                        
             
             


var norma1 = ["Las contracciones son  2 letras preestablecidas que pueden ir al principio, en medio o al final de un vocablo. "," <br> Ejemplo:<br><bo>arco. </bo><br>primera celda 1  6, segunda 1  4, tercera 1  3  5. " +
 "<br><bo>parte.</bo><br>primera celda 1  2  3  4, segunda 1  6,  tercera 2  3  4  5. " +
 "<br><bo>mar.</bo><br>primera celda 1  3  4, segunda 1  6. "  ];

var normaEje1 = [ "<bo>arco</bo><br>primera celda 1  6, segunda 1  4, tercera 1  3  5" +
"<br><bo>parte</bo><br>primera celda 1  2  3  4, segunda 1  6,  tercera 2  3  4  5" +
"<br><bo>mar</bo><br>primera celda 1  3  4, segunda 1  6"  ];

var norma2 =["Las contracciones pueden usarse en forma silábica o intersilábica. ","Ejemplo:. <bo>cara. </bo><br> primera celda 1  4, segunda 1  6, tercera 1. " +
 "<bo>carta. </bo>primera celda 1  4, segunda 1  6,  tercera 2  3  4  5, cuarta 1.  "];

var normaEje2 = ["<bo>cara</bo><br> primera celda 1  4, segunda 1  6, tercera 1. " +
"<br><bo>carta</bo><br>primera celda 1  4, segunda 1  6,  tercera 2  3  4  5, cuarta 1.  "]; 

var norma3 =["En una misma palabra pueden usarse una o más contracciones  (aún repetidas), inclusive, todas pueden ocupar la posición baja del cajetín. ","Ejemplo:<br><bo>alababan. </bo> primera celda 1  3,  segunda 2,  tercera 2, cuarta 1  4  6. " +
 "<br><bo>trinen. </bo> primera celda 3  5  6,  segunda 3  5,  tercera 2  6. " +
 "<br><bo>asas. </bo> primera celda 1  2  3  4  6, segunda 1  2  3  4  6"];

var normaEje3 = ["<bo>alababan </bo><br>primera celda 1  3,  segunda 2,  tercera 2, cuarta 1  4  6. " +
"<br><bo>trinen</bo><br>primera celda 3  5  6,  segunda 3  5,  tercera 2  6. " +
"<br><bo>asas </bo><br>primera celda 1  2  3  4  6, segunda 1  2  3  4  6"];

var norma4 =["Algunos ejemplos donde no se aplica la contracción <bo>[ab]</bo> al final de la palabra para evitar confusión con coma ortográfica. ", "<bo>fab. </bo>primera celda 1  2  4, segunda 1, tercera 1  2. <br><bo>baobab. </bo> primera celda 1  2, segunda 1, tercera 1  3  5, cuarta 1  2, quinta 1, sexta 1  2. <br><bo>mayab. </bo>primera celda 1  3  4, segunda 1, tercera 1  3  4  5  6, cuarta 1, quinta 1  2"];


var normaEje4 = [ "<bo>fab</bo><br>primera celda 1  2  4, segunda 1, tercera 1  2. <br><bo>baobab</bo><br>primera celda 1  2, segunda 1, tercera 1  3  5, cuarta 1  2, quinta 1, sexta 1  2. <br><bo>mayab</bo><br>primera celda 1  3  4, segunda 1, tercera 1  3  4  5  6, cuarta 1, quinta 1  2"];
;
var norma5 =[ "Ejemplos donde no se usa contracción <bo>[o n]</bo>. porque sólo debe ir después de consonante. ","<bo>neonato. </bo> primera celda 1  3  4  5, segunda 1  5, tercera 1  3  5, cuarta 1  3  4  5, quinta 1, sexta 2  3  4  5, septima 1  3  5. <br><bo>leones. </bo> primera celda 1  2  3, segunda 1  5, tercera 1  3  5, cuarta 1  3  4  5, quinta 1  2  4  6. <br><bo>peones. </bo>  primera celda 1 2  3  4, segunda 1  5, tercera 1  3  5, cuarta 1  3  4  5, quinta 1  2  4  6"];

var normaEje5 = ["<bo>neonato</bo><br>primera celda 1  3  4  5, segunda 1  5, tercera 1  3  5, cuarta 1  3  4  5, quinta 1, sexta 2  3  4  5, septima 1  3  5. <br><bo>leones</bo><br>primera celda 1  2  3, segunda 1  5, tercera 1  3  5, cuarta 1  3  4  5, quinta 1  2  4  6. <br><bo>peones</bo><br>primera celda 1 2  3  4, segunda 1  5, tercera 1  3  5, cuarta 1  3  4  5, quinta 1  2  4  6"];


var norma6 =[ "Cuando existan palabras con una letra que pueda contraerse con la anterior o posterior, lo harán siempre con la posterior. ","Ejemplo:.<bo>afuera. </bo> primera celda 1, segunda 1  2  4, tercera 1  3  6, cuarta 2  3  6, quinta 1. <bo>cuerpo. </bo> primera celda 1  4, 1  3  6,  segunda 2  3  6, tercera 1  2  3  4, cuarta 1  3  5. <bo>cuento. </bo> primera celda 1  4, segunda 1  3  6,  tercera 2  6, cuarta 2  3  4  5, quinta 1  3  5"];

var normaEje6 = ["<bo>afuera</bo><br>primera celda 1, segunda 1  2  4, tercera 1  3  6, cuarta 2  3  6, quinta 1. <bo>cuerpo</bo><br>primera celda 1  4, 1  3  6,  segunda 2  3  6, tercera 1  2  3  4, cuarta 1  3  5. <bo>cuento</bo><br>primera celda 1  4, segunda 1  3  6,  tercera 2  6, cuarta 2  3  4  5, quinta 1  3  5"];




var norma7 =["Ejemplos donde no se usa contracción <bo>[ue]</bo> por pertenecer a sílaba <bo>[gue]</bo> ","<bo>pague. </bo>primera celda 1  2  3  4, segunda 1, tercera 1  2  4  5, cuarta 1  3  6, quinta 1  5. " +
 "<br><bo>dengue. </bo>primera celda 1  4  5,  segunda 2  6, tercera 1  2  4  5, cuarta 1  3  6, quinta 1  5. <br><bo>cargue. </bo>primera celda 1  4, segunda 1  6, tercera 1  2  4  5, cuarta 1  3  6, quinta 1  5 "];


var normaEje7 = ["<bo>pague</bo><br>primera celda 1  2  3  4, segunda 1, tercera 1  2  4  5, cuarta 1  3  6, quinta 1  5. " +
"<br><bo>dengue</bo><br>primera celda 1  4  5,  segunda 2  6, tercera 1  2  4  5, cuarta 1  3  6, quinta 1  5.<br><bo>cargue</bo><br>primera celda 1  4, segunda 1  6, tercera 1  2  4  5, cuarta 1  3  6, quinta 1  5 "];

var norma8 =[ "Ejemplos de palabras que no se contraen porque la contracción lleva acento. ","<bo>afán. </bo> primera celda 1, segunda 1  2  4, tercera 1  2  3  5  6, cuarta 1  3  4  5. " +
 "<br><bo>mártir. </bo><br>primera celda 1  3  4, segunda 1  2  3  5  6, tercera 1  2  3  5,  cuarta 2  3  4  5, quinta 2  4, sexta 1  2  3  5. <br><bo>bebés. </bo>primera celda 1  2, segunda 1  5, tercera 1  2, cuarta 2  3  4  6, quinta 2  3  4"];


var normaEje8 = ["<bo>afán</bo><br>primera celda 1, segunda 1  2  4, tercera 1  2  3  5  6, cuarta 1  3  4  5. " +
"<br><bo>mártir</bo><br>primera celda 1  3  4, segunda 1  2  3  5  6, tercera 1  2  3  5,  cuarta 2  3  4  5, quinta 2  4, sexta 1  2  3  5. <br><bo>bebés</bo><br>primera celda 1  2, segunda 1  5, tercera 1  2, cuarta 2  3  4  6, quinta 2  3  4"];


var norma9 =[ "Los principios de palabra son signos que inician la escritura de un vocablo e incluso, pueden usarse  2 consecutivos. ", "Ejemplo. <bo>compresión. </bo> primera celda 3  6,  segunda 2  3  5,  tercera 2  3  4, cuarta 3  4  5  6. <br><bo>reprobó. </bo><br> primera celda 1  2  3  5, segunda 1  2  3  4, tercera 1  2, cuarta 3  4  6 "];

var normaEje9 = ["<bo>compresión</bo><br>primera celda 3  6,  segunda 2  3  5,  tercera 2  3  4, cuarta 3  4  5  6. <br><bo>reprobó</bo><br>primera celda 1  2  3  5, segunda 1  2  3  4, tercera 1  2, cuarta 3  4  6 "];


var norma10 =[ "Los principios de palabra solo se usan antes de consonante, la cual puede estar o no, contraída. ","Ejemplo. <bo>consumo. </bo> primera celda 2  5,  segunda 2  3  4, tercera 1  3  6, cuarta 1  3  4, quinta 1  3  5. <bo>contrato. </bo> primera celda 2  5,  segunda 3  5  6, tercera 1,  cuarta 2  3  4  5, quinta 1  3  5"];


var normaEje10 = ["<bo>consumo</bo><br>primera celda 2  5,  segunda 2  3  4, tercera 1  3  6, cuarta 1  3  4, quinta 1  3  5. <br><bo>contrato</bo><br>primera celda 2  5,  segunda 3  5  6, tercera 1,  cuarta 2  3  4  5, quinta 1  3  5"];



var norma11 =["El principio <bo>Pro</bo> no se escribe antes de la consonante <bo>l</bo>. ","Ejemplo. <bo>prole. </bo>primera celda 2  3  5, segunda 1  3  5, tercera 1  2  3, cuarta 1  5. " +
"<br><bo>prolongar. </bo>primera celda 2  3  5, segunda 1  3  5, tercera 1  2  3, cuarta 1  3  4  6, quinta 1  2  4  5, sexta 1  6. <br><bo>prolífero. </bo>primera celda 2  3  5, segunda 1  3  5, tercera 1  2  3, cuarta 3  4, 1  2  4, quinta 2  3  6, sexta 1  3  5 "];

var normaEje11 = ["<bo>prole</bo><br>primera celda 2  3  5, segunda 1  3  5, tercera 1  2  3, cuarta 1  5. <br><bo>prolongar</bo><br> primera celda 2  3  5, segunda 1  3  5, tercera 1  2  3, cuarta 1  3  4  6, quinta 1  2  4  5, sexta 1  6. <br><bo>prolífero</bo><br>primera celda 2  3  5, segunda 1  3  5, tercera 1  2  3, cuarta 3  4, 1  2  4, quinta 2  3  6, sexta 1  3  5 "];



var norma12 =["Los principios tienen prioridad ante las contracciones. ","Ejemplo. <bo>reno. </bo>primera celda  1 2 3 5, segunda 1 3 4 5, tercera 1 3 5. " +
"<br><bo>control. </bo>primera celda 2 5, segunda 3 5 6, tercera 1 3 5, cuarta 1 2 3. <br><bo>interno. </bo> primera celda 1 3 4 5 6, segunda 1 3 4 5, tercera 1 3 5"];

var normaEje12 = ["<bo>reno</bo><br>primera celda  1 2 3 5, segunda 1 3 4 5, tercera 1 3 5.<br><bo>control</bo><br>primera celda 2 5, segunda 3 5 6, tercera 1 3 5, cuarta 1 2 3. <br><bo>interno</bo> <br>primera celda 1 3 4 5 6, segunda 1 3 4 5, tercera 1 3 5"];


var norma13 =["Se podrá utilizar consecutivamente más de un principio, siempre y cuando no constituyan la totalidad de los símbolos de la palabra. ", "Ejemplo. <bo>compre. </bo>  primera celda 3 6, segunda 2 3 5, tercera 1 5. <br><bo>compro. </bo>  primera celda 3 6, segunda 2 3 5, tercera 1 3 5"];

var normaEje13 = ["<bo>compre</bo><br> primera celda 3 6, segunda 2 3 5, tercera 1 5. <br><bo>compro</bo><br>primera celda 3 6, segunda 2 3 5, tercera 1 3 5"];


var norma14 =["Las terminaciones de palabra siempre se escriben al final de un vocablo, aunque algunas pueden usar doble terminación. ","Ejemplo. <bo>reciamente. </bo>primera celda 1 2 3 5, segunda 1 4, tercera 1 3 4. <br><bo>doblemente. </bo> primera celda 1 4 5, segunda 1 3 5, tercera 1 2, cuarta 1 3 4. <br><bo>fuertemente. </bo> primera celda 1 2 4, segunda 1 3 6, tercera 2 3 6, cuarta 2 3 4 5, quinta 1 3 4" ];

var normaEje14 = ["<bo>reciamente</bo><br>primera celda 1 2 3 5, segunda 1 4, tercera 1 3 4. <br><bo>doblemente</bo><br>primera celda 1 4 5, segunda 1 3 5, tercera 1 2, cuarta 1 3 4. <br><bo>fuertemente</bo><br>primera celda 1 2 4, segunda 1 3 6, tercera 2 3 6, cuarta 2 3 4 5, quinta 1 3 4"];


var norma15 =["Las terminaciones: <bo>ión, acción, ección, icción, </bo> y <bo>acción, </bo> se pluralizan añadiendo la contracción <bo>es. </bo>", "Ejemplo. <bo>acciones. </bo>primera celda 1, segunda 3 4 5 6, tercera 1 2 4 6. <bo>cocciones. </bo> primera celda 1 4, segunda 1 3 5, tercera 1 4, cuarta 1 4, quinta 3 4 5 6, sexta 1 2 4 6. <br><bo>producciones. </bo> primera celda 1 2 3 4, segunda 1 4 5, tercera 1 3 6, cuarta 3 4 5 6, quinta 1 2 4 6"];

var normaEje15 = ["<bo>acciones</bo><br>primera celda 1, segunda 3 4 5 6, tercera 1 2 4 6 <br><bo>cocciones</bo><br>primera celda 1 4, segunda 1 3 5, tercera 1 4, cuarta 1 4, quinta 3 4 5 6, sexta 1 2 4 6<br><bo>producciones</bo><br>primera celda 1 2 3 4, segunda 1 4 5, tercera 1 3 6, cuarta 3 4 5 6, quinta 1 2 4 6"];


var norma16 =["Las terminaciones: <bo>[ble]</bo> <bo>[cia]</bo> <bo>[mente]</bo> y <bo>[que]</bo>. se pluralizan con la letra <bo>s</bo>. ","Ejemplo. <bo>dementes. </bo> primera celda 1 4 5, segunda 1 5, tercera 1 3 4, cuarta 2 3 4. <bo>compleméntes. </bo> primera celda 3 6, segunda 1 2 3 4, tercera 1 2 3, 1 5, cuarta 1 3 4, quinta 2 3 4. <br><bo>buques. </bo> primera celda 1 2, segunda 1 3 6, tercera 1 2 3 4 5, cuarta 2 3 4" ];

var normaEje16 = ["<bo>dementes</bo><br>primera celda 1 4 5, segunda 1 5, tercera 1 3 4, cuarta 2 3 4.<br><bo>complementes</bo><br>primera celda 3 6, segunda 1 2 3 4, tercera 1 2 3, 1 5, cuarta 1 3 4, quinta 2 3 4. <br><bo>buques</bo><br>primera celda 1 2, segunda 1 3 6, tercera 1 2 3 4 5, cuarta 2 3 4" ];
            
var norma17 =[ "Las terminaciones <bo>[iento]</bo> y <bo>[mento]</bo> ", "Se  hacen plural añadiéndole la contracción <bo>[os]</bo>. pero también admite la adición de las letras: <bo>[a]</bo> y <bo>[e]</bo> y las terminaciones: <bo>[as].</bo>  y <bo>[es].</bo> para formar otras desinencias. Ejemplos. <bo>pimienta. </bo> primera celda 1 2 3 4, segunda 3 4 5, tercera 2 5 6, cuarta 2 3 4 5, quinta 1. " +
"<br><bo>lamentas. </bo>primera celda 1 2 3, segunda 1, tercera 1 3 4, cuarta 2 3 4 5, quinta 1 2 3 4 6. <br><bo>tormento. </bo> primera celda 2 3 4 5, segunda 1 5 6, tercera 1 3 4, cuarta 2 3 4 5"];

var normaEje17 = ["Se  hacen plural añadiéndole la contracción <bo>[os]</bo>, pero también admite la adición de las letras: <bo>[a]</bo> <bo>[e]</bo> y las terminaciones: <bo>[as]</bo>  y <bo>[es]</bo> para formar otras desinencias<br><br><bo>pimienta</bo><br>primera celda 1 2 3 4, segunda 3 4 5, tercera 2 5 6, cuarta 2 3 4 5, quinta 1" +
"<br><bo>lamentas</bo><br>primera celda 1 2 3, segunda 1, tercera 1 3 4, cuarta 2 3 4 5, quinta 1 2 3 4 6 <br><bo>tormento</bo><br>primera celda 2 3 4 5, segunda 1 5 6, tercera 1 3 4, cuarta 2 3 4 5"];


var norma18 =[ "Las terminaciones <bo>[ando]</bo> <bo>[endo]</bo> <bo>[iendo]</bo>  y  <bo>[bre]</bo>, no se pluralizan.","" ];
var normaEje18 = [""];

var norma19 =[ "Las terminaciones de palabra tienen prioridad ante contracciones. ","Ejemplo. <bo>tristemente. </bo>  primera celda 3 5 6, segunda 2 4, tercera 2 3 4, cuarta 2 3 4 5, quinta 1 3 4. " +
 "<br><bo>complemente. </bo><br>primera celda 3 6, segunda 1 2 3 4, tercera 1 2 3, cuarta 1 5, quinta 1 3 4"];

var normaEje19 = ["<bo>tristemente</bo><br> primera celda 3 5 6, segunda 2 4, tercera 2 3 4, cuarta 2 3 4 5, quinta 1 3 4  <br><bo>complemente</bo><br>primera celda 3 6, segunda 1 2 3 4, tercera 1 2 3, cuarta 1 5, quinta 1 3 4"];
            