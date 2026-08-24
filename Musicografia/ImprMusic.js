var n1="a";
var n2="b";
var n3="c";
var n4="d";
var n5="e";
var n6="f";
var n7="g";
var n8="h";
var n9="i";
var n0="j";

var C24 = ["12","256"];
var C34 = ["14","256"];
var C44 = ["145","256"];
var C64 = ["124","256"];
var C22 = ["12","23"];
var C32 = ["14","23"];
var C68 = ["124","236"];
var C98 = ["24","236"];
var C128 = ["1","12","236"]; 

var Notas = ["DO","RE","MI","FA","SOL","LA","SI"];
var Snotas =["145","15","124","1245","125","24","245"];

var figuras =["REDONDA","BLANCA","NEGRA","CORCHEA"];
var Sfiguras= ["36","3","6","0"];

var Silencios =["REDONDA","BLANCA","NEGRA","CORCHEA"];
var Ssilencios =["134","2345","1236","1346"];




var A1="97";//a
var A12="98";//b
var A14="99";//c LIGADURA MENOR
var A145="100";//d do corchea
var A15="101";//e re corchea
var A124="102";//f mi corchea
var A1245="103";//g fa corchea
var A125="104";//h sol corchea
var A24="105";//i la corchea
var A245="106";// j si corchea
var A13="107";// k
var A123="108";//l
var A134="109";//m Silencio redonda
var A1345="110";//n do blanca
var A135="111";// o Re Blanca???
var A1234="112";//p Mi blanca
var A12345="113";//q Fa BLANCA
var A1235="114";//r Sol Blanca
var A234="115";//s La Blanca
var A2345="116";//t Si blanca
var A136="117";//u Silencio blanca
var A1236="118";//v Silencio negra
var A1346="120";//x Silencio corchea
var A13456="121";//y do redonda
var A1356="122";//z re redonda
var A12346="38";//& Mi redonda
var A123456="92";// \ Fa redonda *******************
var A12356="225";// á Sol redonda *****************
var A2346="233";// é La redonda ******************
var A23456="250";// ú Si redonda *****************
var A16="42";// Be cuadro ************************
var A126="50";// 2 Bemol ***********************
var A146="51";// 3 sostenido *******************
var A1456="52";//4 do negra **********************
var A156="53";//5  re negra **********************
var A1246="54";//6 Mi negra **********************
var A12456="55";//5 fa negra *********************
var A1256="56";// 8  Sol negra
var A246="57";// 9 La negra
var A2456="119";//w Si negra
var A2="49";//1
var A23="59";// ; medios ******************
var A25="51";//3
var A256="42";// * 4
var A26="53";//5
var A235="54";//6
var A2356="55";//7
var A236="60";// < 8 octavos *****************
var A35="57";//9
var A356="48";//0
var A34="47";//  "/"
var A346="43";//+
var A3456="35";//#
var A345="62";//>
var A3="39";// ' puntillo
var A36="45";//-
var A4="39";//'  Octava 1 ***********************************
var A45="94";//^  Octava 2 ***********************************
var A456="37";// |  Octava 3 *********************************
var A5= "64";// @ Octava 4 ***********************************
var A46="123";// {  Octava 5 ********************************
var A56="34";// " Octava 6 **********************************
var A6="95";// _ Octava 7 ***********************************

function mostrarArchivo() {
  const fileUrl = './Partitura.html' // provide file location

  fetch(fileUrl)
     .then( r => r.text() )
     .then( t => console.log(t) )
     var elemento = document.getElementById('partitura');
    elemento.innerHTML = t;


}

function leerArchivo(e) {
 
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      //console.log(archivo.name);
      mostrarContenido(contenido);
    };
    //console.log(archivo.name.indexOf(".pq",3) + " " + archivo.name ); 
    if (archivo.name.indexOf(".pq",3) > -1 ){
       lector.readAsText(archivo);
       Lee($("#F1").text());
       $("#F1").focus();
       fila = 1;
       $("#comandos").css("visibility","hidden");
       comando="MenuPartitura";
    }
    else {
      Lee("abrir archivos con extensión 'p''q'")
    }
  }
  
  function mostrarContenido(contenido) {    
    var elemento = document.getElementById('partitura');
    elemento.innerHTML = contenido;    
    var lineas = contenido.split('\n');  
 
    for(var linea of lineas) {
      $("#partitura").html($("#partitura").html().replace("@","#"));   
    }

  }

  //dwnload  Auto Guardar como .pml
  function download(){
    //console.log("download");
   if ($("#partitura").text().includes("#")){
    //console.log("si reemplaza?? #" );
    let val = '@';
   $("#partitura").html($("#partitura").html().replace(/#/g,val)); 
  }  
    var a = document.body.appendChild(document.createElement("a"));
    a.download = $("#F1").text() + ".pq";
    a.href = "data:text/html," + document.getElementById("partitura").innerHTML;
    a.click();
    $("#partitura").html($("#partitura").html().replace(/@/g,"#")); 
}
function cerrarM()
{
  $("#Mimprime").css("visibility","hidden");
  $("#MenuImprime").css("visibility","hidden");
} 

//imprimir
function CrearNPartitura(){
  $("#Mimprime").css("visibility","visible");
  $("#MenuImprime").css("visibility","visible");
var fila1="";
var fila2="";
var mideNF1=0;
var mideNF2=0;
$("#Mimprime").html('');
$("#Mimprime").html("<div id='titulo' style='text-align:center'>" + $("#F1").html() + "</div><div style='text-align: left;font-family: 'Courier New', Courier, monospace;' ><br> " + $("#F2").html() + "<br>" );

//console.log($("#F1").html() + "<br> " + $("#F2").html() + "<br>");

for (var fl = 3; fl <= $(".activo").length; fl+=2) {
  fila1 += $("#F"+fl).html();
  fila2 += $("#F"+ parseInt(fl + 1)).html();
  mideNF1 = $("#F"+fl).text().length;
  mideNF2 = $("#F"+ parseInt(fl + 1)).text().length;
if (mideNF1  < mideNF2 )
  {
    var a =  "&nbsp;";
    $("#F"+fl).html($("#F"+fl).html()+ a.repeat(parseInt(mideNF2 - mideNF1)));
    $("#F"+fl).html(  $("#F"+fl).html() + "_&nbsp;");
    $("#F"+ parseInt(fl + 1)).html(  $("#F"+ parseInt(fl + 1)).html() + "_&nbsp;");

  }else if (mideNF1  > mideNF2 )

  {
    var a = "&nbsp;";  
    $("#F"+ parseInt(fl + 1)).html($("#F"+ parseInt(fl + 1)).html()+ a.repeat(parseInt(mideNF1 - mideNF2) ));
    $("#F"+fl).html(  $("#F"+fl).html() + "_&nbsp;");
    $("#F"+ parseInt(fl + 1)).html(  $("#F"+ parseInt(fl + 1)).html() + "_&nbsp;");   
  } 
  else if (mideNF1  == mideNF2 )

  {
    var a = "&nbsp;";  
    $("#F"+fl).html(  $("#F"+fl).html() + "_&nbsp;");
    $("#F"+ parseInt(fl + 1)).html(  $("#F"+ parseInt(fl + 1)).html() + "_&nbsp;");   
  } 

 }
fila1="";
fila2="";
fila1A="";
fila2A="";

var mideF1=0;
var mideF2=0;
var numeroF=0;
var numeroM;
 for (var fl = 3; fl <= $(".activo").length; fl+=2) {
  numeroF++;
  if (numeroF.toString().length  > 1){
      numeroM = numeroF.toString().split('');
      var Nnum ="";
    for (let i = 0; i < numeroM.length; i++) {
      Nnum += eval("n"+ numeroM[i]);      
    }
   // Nnum = Nnum.join(',');
    numeroM ="#"+Nnum;

  }else{
     numeroM = eval("n"+numeroF);
     numeroM ="#"+numeroM;     
  }
  fila1A=fila1;
  fila2A=fila2;
  fila1 += $("#F"+fl).html();
  fila2 += $("#F"+ parseInt(fl + 1)).html();
  mideF1 += $("#F"+fl).text().length;
  mideF2 += $("#F"+ parseInt(fl + 1)).text().length;
  

  var esp =  "&nbsp;";
  var mideesp=parseInt(numeroM.length +1);
  if (mideF1 > 25 || mideF2 > 25 )
  {
   
    $("#Mimprime").html($("#Mimprime").html()  + fila1A + "<br>" + fila2A + "<br>");
    // //console.log( $("#Mimprime").html()  + " agregó fila1 " + fila1 + " " + mideF1 + " numeroF " + numeroF);
    // //console.log("agregó fila2 " + fila2 + " " + mideF2);
    fila1= numeroM + "&nbsp;" + $("#F"+fl).html();
    fila2= esp.repeat(mideesp) +$("#F"+ parseInt(fl + 1)).html();
    mideF1=0;
    mideF2=0;
  }


 }

 $("#Mimprime").html($("#Mimprime").html()   +   fila1 + "<br>" + fila2 + "</div>");

 for (var fl = 3; fl <= $(".activo").length; fl++) {
  $("#F"+fl).text($("#F"+fl).text().substring(0,$("#F"+fl).text().length - 2));
  $("#F"+fl).text($("#F"+fl).text().replace(/\s+$/,""));
}

//printDiv("Mimprime");


//$("#partitura").html($("#partitura").html().replace(/@/g,"#")); 
}




function printDiv(nombreDiv) {
  var contenido= document.getElementById(nombreDiv).innerHTML;
  var contenidoOriginal= document.body.innerHTML;

  document.body.innerHTML = contenido;

  window.print();

  document.body.innerHTML = contenidoOriginal;
}



const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
}
                          
