// var audio = document.createElement('audio');
// var rutaAudio = "./../ResB/piano_C2-E5.mp3";// + nota + ".mp3";
// audio.src =  rutaAudio;
// audio.preload ="auto ";

var NuevoNumero = "";
var mN = 0;
var nota;
var Mlec;
var nlec = -1;
var desempenio = "";
var Sr = "134";
var Sb = "136";
var Sn = "1236";
var Sc = "1346";


var NSr = "134";
var NSb = "136";
var NSn = "1236";
var NSc = "1346";

var NPRIMERA = "4";
var NSEGUNDA = "45";
var NTERCERA = "456";
var NCUARTA = "5";
var NQUINTA = "46";
var NSEXTA = "56";
var NSEPTIMA = "6";

var O1 = "4";
var O2 = "45";
var O3 = "456";
var O4 = "5";
var O5 = "46";
var O6 = "56";
var O7 = "6";

var N13456 = "DO REDONDA";
var N1356 = "RE REDONDA";
var N12346 = "MI REDONDA";
var N123456 = "FA REDONDA";
var N12356 = "SOL REDONDA";
var N2346 = "LA REDONDA";
var N23456 = "SI REDONDA";

var DOREDONDA   = "13456";
var REREDONDA   = "1356";
var MIREDONDA   = "12346";
var FAREDONDA   = "123456";
var SOLREDONDA  = "12356";
var LAREDONDA   = "2346";
var SIREDONDA   = "23456";

var N1345 = "DO BLANCA";
var N135 = "RE BLANCA";
var N1234 = "MI BLANCA";
var N12345 = "FA BLANCA";
var N1235 = "SOL BLANCA";
var N234 = "LA BLANCA";
var N2345 = "SI BLANCA";

var DOBLANCA = "1345";
var REBLANCA = "135";
var MIBLANCA = "1234";
var FABLANCA = "12345";
var SOLBLANCA = "1235";
var LABLANCA = "234";
var SIBLANCA = "2345";

var N1456 = "DO NEGRA";
var N156 = "RE NEGRA";
var N1246 = "MI NEGRA";
var N12456 = "FA NEGRA";
var N1256 = "SOL NEGRA";
var N246 = "LA NEGRA";
var N2456 = "SI NEGRA";
var N2356 = "SIGNO DE REPETICIÓN";

var DONEGRA = "1456";
var RENEGRA = "156";
var MINEGRA = "1246";
var FANEGRA = "12456";
var SOLNEGRA = "1256";
var LANEGRA = "246";
var SINEGRA = "2456";

var N145 = "DO CORCHEA";
var N15 = "RE CORCHEA";
var N124 = "MI CORCHEA";
var N1245 = "FA CORCHEA";
var N125 = "SOL CORCHEA";
var N24 = "LA CORCHEA";
var N245 = "SI CORCHEA";

var SOSTENIDO = "146";
var BEMOL = "126";
var BECUADRO = "16";

var NSOSTENIDO = "146";
var NBEMOL = "126";
var NBECUADRO = "16";

var DOCORCHEA = "145"; 
var RECORCHEA = "15"; 
var MICORCHEA = "124"; 
var FACORCHEA = "1245"; 
var SOLCORCHEA = "125"; 
var LACORCHEA = "24"; 
var SICORCHEA = "245"; 
var REPETICION = "2356";

var N3 = "PUNTILLO";
var pun = "3";

var Compas1 = ["DOS CUARTOS","12","256"];
var Compas2 = ["TRES CUARTOS","14","256"];
var Compas3 = ["CUATRO CUARTOS","145","256"];
var Compas4 = ["SEIS CUARTOS","124","256"];
var Compas5 = ["DOS MEDIOS","12","23"];
var Compas6 = ["TRES MEDIOS","14","23"];
var Compas7 = ["SEIS OCTAVOS","124","236"];
var Compas8 = ["NUEVE OCTAVOS","24","236"];
var Compas9 = ["DOCE OCTAVOS","1","12","236"]; 
var bir = ["BARRA INICIO DE REPETICIÓN","126","2356"]; 
var bfr = ["BARRA FIN DE REPETICIÓN","126","23"]; 
var lma = ["LIGADURA MAYOR ABRIENDO","56","12"]; 
var lmc = ["LIGADURA MAYOR CERRANDO","45","23"]; 
var lmp = ["LIGADURA DE PROLONGACIÓN","4","14"]; 
//var pun = ["PUNTILLO","3"];
var SignoN  = "3456";
var lig = "14";


///////////////

var A1="97";//a
var A12="98";//b
var A14="99";//c LIGADURA MENOR

var A145="100";//d do corchea
var nd = "Cc";

var A15="101";//e re corchea
var ne = "Dc";

var A124="102";//f mi corchea
var nf = "Ec";

var A1245="103";//g fa corchea
var ng = "Fc";

var A125="104";//h sol corchea
var nh = "Gc";

var A24="105";//i la corchea
var ni = "Ac";

var A245="106";// j si corchea
var nj = "Bc";

var A13="107";// k
var A123="108";//l
var A134="109";//m Silencio redonda

var A1345="110";//n do blanca
var nn = "Cb";

var A135="111";// o Re Blanca???
var no = "Db";

var A1234="112";//p Mi blanca
var np ="Eb";

var A12345="113";//q Fa BLANCA
var nq = "Fb";

var A1235="114";//r Sol Blanca
var nr ="Gb";

var A234="115";//s La Blanca
var ns ="Ab";

var A2345="116";//t Si blanca
var nt = "Bb";

//Silencios 
var A136="117";//u Silencio blanca
var nu ="S de Blanca";

var A1236="118";//v Silencio negra
var nv ="S de Negra";

var A1346="120";//x Silencio corchea
var nx ="S de Corchea";

//var A1346="120";//m Silencio redonda
var nm ="S de Redonda";



var A13456="121";//y do redonda
var ny ="Cr";

var A1356="122";//z re redonda
var nz ="Dr";

var A12346="38";//& Mi redonda
//var n& ="Er";

var A123456="92";// \ Fa redonda *******************
//var n\ = "Fr";

var A12356="225";// á Sol redonda *****************
var ná = "Gr";

var A2346="233";// é La redonda ******************
var né = "Ar";

var A23456="250";// ú Si redonda *****************
var nú = "Br";


var A16="42";//1 Be cuadro ************************
var n1 = "Becuadro";

var A126="50";// 2 Bemol ***********************
var n2 = "Bemol";

var A146="51";// 3 sostenido *******************
var n3 ="Sostenido";


var A1456="52";//4 do negra **********************
var n4 = "Cn";
var nCn ="Cn";
var Cn ="Cn";

var A156="53";//5  re negra **********************
var n5 = "Dn";
var nDn = "Dn";
var Dn = "Dn";

var A1246="54";//6 Mi negra **********************
var n6 = "En";
var nEn = "Dn";

var A12456="55";//7 fa negra *********************
var n7 = "Fn";
var nFn = "Fn";

var A1256="56";// 8  Sol negra
var n8 = "Gn";
var nGn = "Gn";

var A246="57";// 9 La negra
var n9 = "An";
var nAn = "An";

var A2456="119";//w Si negra
var nw ="Bn";
var nBn = "Bn";




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
//var n. ="'";
var A36="45";//-
var A4="39";//'  Octava 1 ***********************************
var A45="94";//^  Octava 2 ***********************************
var A456="37";// %  Octava 3 *********************************

var A5= "64";// @ Octava 4 ***********************************
var A46="123";// {  Octava 5 ********************************
var A56="34";// " Octava 6 **********************************
var A6="95";// _ Octava 7 ***********************************

var notaIndex = ["","C","D","E","F","G","A","B"];
var palabra=[];


    
// function Suena()
// {
//   mN = 0; 
//     // palabra = cadena;// eval("Melodia" + LeccionActual + "E");
//     // $("#musica").html(palabra);
//     palabra = palabra.toString().split(",");
// console.log( palabra[mN] + " primera nota");
//  if  (eval(palabra)[mN].substring(1,2) != "s" &&  eval(palabra)[mN].substring(1,2) != "b"){ 
//     nota = eval(palabra)[mN].substring(0,2);   
//     tempo = palabra[mN].substring(2,3);
//     console.log(tempo + "Tempo!!!");
// }
// else if  (eval(palabra)[mN].substring(1,2) == "s" ||  eval(palabra)[mN].substring(1,2) == "b"){ 
//     nota = eval(palabra)[mN].substring(0,3);    
//     tempo =palabra.toString().substring(3,4);

//     if (nota.substring(0,2) == "Cs")
//     {nota = "Db"+ nota.substring(2,3)}

//     if (nota.substring(0,2) == "Ds")
//     {nota = "Eb"+ nota.substring(2,3)}

//     if (nota.substring(0,2) == "Fs")
//     {nota = "Gb"+ nota.substring(2,3)}

//     if (nota.substring(0,2) == "Gs")
//     {nota = "Ab"+ nota.substring(2,3)}

//     if (nota.substring(0,2) == "As")
//     {nota = "Bb"+ nota.substring(2,3)}
    
//     if (nota.substring(0,2) == "sB")
//     {nota = "Bbb"}
    

// }

//     let figura ="";
//             if (tempo == "r"){$('#FiguraImg').attr("src","./../ResB/Redonda.png"); figura = "REDONDA"}
//             if (tempo == "b"){$('#FiguraImg').attr("src","./../ResB/Blanca.png"); figura = "BLANCA"}
//             if (tempo == "n"){$('#FiguraImg').attr("src","./../ResB/Negra.png"); figura = "NEGRA"}
//             if (tempo == "c"){$('#FiguraImg').attr("src","./../ResB/Corchea.png"); figura = "CORCHEA"}        
            
//             if (tempo == "="){$('#FiguraImg').attr("src","./../ResB/CorcheaP.png");figura = "CORCHEA"}
//             if (tempo == "-"){$('#FiguraImg').attr("src","./../ResB/NegraP.png");figura = "NEGRA"}
//             if (tempo == ":"){$('#FiguraImg').attr("src","./../ResB/BlancaP.png");figura = "BLANCA"}
//             if (tempo == "."){$('#FiguraImg').attr("src","./../ResB/RedondaP.png");figura = "REDONDA"}       

//             if (tempo == "Spa"){$('#FiguraImg').attr("src","./../ResB/Nada.png"); figura = "NADA"}

//     if (tempo == "c"){tempo ="0.125"}
//     if (tempo == "n"){tempo ="0.25"}
//     if (tempo == "b"){tempo ="0.50"}
//     if (tempo == "r"){tempo ="1"}
//     //puntillo
//     if (tempo == "="){tempo ="0.1875"}//corchea
//     if (tempo == "-"){tempo ="0.175"}//negra
//     if (tempo == ":"){tempo ="0.75"}//blanca
//     if (tempo == "."){tempo ="1.5"}//redonda

//     let notaP = "";
//         if (nota.substring(0,1)== "C"){ $("#letra").text("C"); notaP ="DO"}
//         if (nota.substring(0,1)== "D"){ $("#letra").text("D"); notaP ="RE"}
//         if (nota.substring(0,1)== "E"){ $("#letra").text("E"); notaP ="MI"}
//         if (nota.substring(0,1)== "F"){ $("#letra").text("F"); notaP ="FA"}
//         if (nota.substring(0,1)== "G"){ $("#letra").text("G"); notaP ="SOL"}
//         if (nota.substring(0,1)== "A"){ $("#letra").text("A"); notaP ="LA"}
//         if (nota.substring(0,1)== "B"){ $("#letra").text("B"); notaP ="SI"}

//     $(".box").css("background-color","white");
//     $(".box").css("color","black");
//     console.log(notaP + "  " + figura + " " + tempo);
//     let numeroP = eval(notaP + figura).split('');
//     for (let index = 0; index < numeroP.length; index++) {
//         $("#box" + numeroP[index] ).css("color","white");
//         $("#box" + numeroP[index] ).css("background-color","black");
//     }

//      if (nota.substring(0,2) == "sB")
//      {
//         nota = C4;
//         tempo = 1;
//         audio.volume=0;     
//      }
//      else{
//         audio.volume=1;
//      }
// console.log(nota + " suena");
// nota = pianoP.get(nota);
// audio.currentTime = parseFloat(nota);  
// //audio.load();  
// audio.play();

// }



// audio.addEventListener("timeupdate", function() { 
//      if (audio.currentTime > parseFloat(nota) + parseFloat(tempo)  ){
//          mN++;
//          if(mN < parseInt(eval(palabra).length) ){
//         if  (eval(palabra)[mN].substring(1,2) != "s" &&  eval(palabra)[mN].substring(1,2) != "b"){ 
//             nota = eval(palabra)[mN].substring(0,2);   
//             tempo = eval(palabra)[mN].substring(2,3);

//         }
//         else if  (eval(palabra)[mN].substring(1,2) == "s" ||  eval(palabra)[mN].substring(1,2) == "b"){ 
//             nota = eval(palabra)[mN].substring(0,3);    
//             tempo =eval(palabra)[mN].substring(3,4);
//             console.log("Nota " + nota + " tempo?? " +  tempo + " =  r b n o c<<<<<<<<<<<<<<<<<<<<<<<<<<<< ES S");
            
            
//             if (nota.substring(0,2) == "Cs")
//             {nota = "Db"+ nota.substring(2,3)}

//             if (nota.substring(0,2) == "Ds")
//             {nota = "Eb"+ nota.substring(2,3)}

//             if (nota.substring(0,2) == "Fs")
//             {nota = "Gb"+ nota.substring(2,3)}

//             if (nota.substring(0,2) == "Gs")
//             {nota = "Ab"+ nota.substring(2,3)}

//             if (nota.substring(0,2) == "As")
//             {nota = "Bb"+ nota.substring(2,3)}
                
//         }

//             let figura ="";
//              if (tempo == "r"){$('#FiguraImg').attr("src","./../ResB/Redonda.png"); figura = "REDONDA"}
//              if (tempo == "b"){$('#FiguraImg').attr("src","./../ResB/Blanca.png"); figura = "BLANCA"}
//              if (tempo == "n"){$('#FiguraImg').attr("src","./../ResB/Negra.png"); figura = "NEGRA"}
//              if (tempo == "c"){$('#FiguraImg').attr("src","./../ResB/Corchea.png"); figura = "CORCHEA"}        
//              if (tempo == "Spa"){$('#FiguraImg').attr("src","./../ResB/Nada.png"); figura = "NADA"}

//             if (tempo == "="){$('#FiguraImg').attr("src","./../ResB/CorcheaP.png");figura = "CORCHEA"}
//             if (tempo == "-"){$('#FiguraImg').attr("src","./../ResB/NegraP.png");figura = "NEGRA"}
//             if (tempo == ":"){$('#FiguraImg').attr("src","./../ResB/BlancaP.png");figura = "BLANCA"}
//             if (tempo == "."){$('#FiguraImg').attr("src","./../ResB/RedondaP.png");figura = "REDONDA"}   


//         if (tempo == "c"){tempo ="0.125"}
//         if (tempo == "n"){tempo ="0.25"}
//         if (tempo == "b"){tempo ="0.50"}
//         if (tempo == "r"){tempo="1"}
//         if (tempo == "r"){tempo ="1"}
//         //puntillo
//         if (tempo == "="){tempo ="0.1875"}//corchea
//         if (tempo == "-"){tempo ="0.175"}//negra
//         if (tempo == ":"){tempo ="0.75"}//blanca
//         if (tempo == "."){tempo ="1.5"}//redonda

//          let notaP = "";
//          if (nota.substring(0,1)== "C"){ $("#letra").text("Do"); notaP ="DO"}
//          if (nota.substring(0,1)== "D"){ $("#letra").text("Re"); notaP ="RE"}
//          if (nota.substring(0,1)== "E"){ $("#letra").text("Mi"); notaP ="MI"}
//          if (nota.substring(0,1)== "F"){ $("#letra").text("Fa"); notaP ="FA"}
//          if (nota.substring(0,1)== "G"){ $("#letra").text("Sol"); notaP ="SOL"}
//          if (nota.substring(0,1)== "A"){ $("#letra").text("La"); notaP ="LA"}
//          if (nota.substring(0,1)== "B"){ $("#letra").text("Si"); notaP ="SI"}
         
//      $(".box").css("background-color","white");
//      $(".box").css("color","black");
//      try {
//         let numeroP = eval(notaP + figura).split('');   
             
//      for (let index = 0; index < numeroP.length; index++) {
//         $("#box" + numeroP[index] ).css("color","white");
//         $("#box" + numeroP[index] ).css("background-color","black");
//     }
//      } catch (error) {
        
//      }

//      if (nota.substring(0,2) == "sB")
//      {
//         nota = "C4";
//         tempo = 1;
//         audio.volume=0;     
//      }
//      else{
//         audio.volume=0.50;
//      }


//      console.log(nota + " >>>>>>> Suena");
//      nota = pianoP.get(nota);
//      audio.currentTime = parseFloat(nota);       
//             audio.play();
//        }
//        else{
//         audio.pause();
//        }           
//      };
     
//      });



     