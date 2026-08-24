
function LeeUS(texto)
{ 
$(".label").html(texto);
$(".label").css("visibility","visible");
if (texto == ""){
  $(".label").css("visibility","hidden");
  return;
}
window.speechSynthesis.cancel();
//console.log(texto.includes(" él. ") + " " + texto);
//console.log(texto.includes("no. ") + " " + texto);
if (texto.includes(" él. ")){texto = texto.replace(" él. "," él con acento, ")}
if (texto.includes(" no. ")){texto = texto.replace(" no. "," no, ")}
if (texto.includes(" un. ")){texto = texto.replace(" un. "," un, ")}
if (texto.includes(" más. ")){texto = texto.replace(" más. "," más con acento, ")}
if (texto.includes(" sí. ")){texto = texto.replace(" sí. "," sí con acento, ")}
if (texto.includes(" ha. ")){texto = texto.replace(" ha. "," 'ha?' 'h? a?' ")}
msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;

msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
  //$(".label").css("border","3px solid white");
EsperaAnim();
primerEnter =false;
//$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
    //event.charIndex el indice de la palabra que lee
  }   
 		   
HablaAnim();
window.speechSynthesis.speak(msgNo);
//sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
    
} 
function LeeTerm(texto)
{ 
$(".label").html(texto);
$(".label").css("visibility","visible");
if (texto == ""){
  $(".label").css("visibility","hidden");
  return;
}
window.speechSynthesis.cancel();
//console.log(texto.includes("cia. ") + " " + texto);
////console.log(texto.includes("no. ") + " " + texto);
//if (texto.includes("no. ")){texto = texto.replace("no. "," no, ")}
if (texto.includes("cia. ")){texto = texto.replace("cia. "," cía, ")}
if (texto.includes("te. ")){texto = texto.replace("te. "," té, ")}
if (texto.includes("bre. ")){texto = texto.replace("bre. "," bré, ")}
if (texto.includes("ble. ")){texto = texto.replace("ble. "," blé, ")}
msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
  //$(".label").css("border","3px solid white");
EsperaAnim();
primerEnter =false;
//$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
    //event.charIndex el indice de la palabra que lee
  }   
 		   
HablaAnim();
window.speechSynthesis.speak(msgNo);
//sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
    
} 
function LeeContr(texto)
{ 
$(".label").html(texto);
$(".label").css("visibility","visible");
if (texto == ""){
  $(".label").css("visibility","hidden");
  return;
}
window.speechSynthesis.cancel();
//console.log(texto.includes(" s. ") + " " + texto);

if (texto.includes("a. b.")){texto = texto.replace("a. b."," 'a?' 'b?', ")}
if (texto.includes("a. d.")){texto = texto.replace("a. d."," 'a?' 'd?', ")}
if (texto.includes("a. l.")){texto = texto.replace("a. l."," 'a?' 'l?', ")}
if (texto.includes("a. n.")){texto = texto.replace("a. n."," 'a?' 'n?', ")}
if (texto.includes("a. r.")){texto = texto.replace("a. r."," 'a?' 'r?', ")}
if (texto.includes("a. s.")){texto = texto.replace("a. s."," 'a?' 'ese?', ")}
if (texto.includes("b. r.")){texto = texto.replace("b. r."," 'b?' 'r', ")}
if (texto.includes("c. r.")){texto = texto.replace("c. r."," 'c?' 'r', ")}
if (texto.includes("d. r.")){texto = texto.replace("d. r."," 'd?' 'r', ")}
if (texto.includes("e. m.")){texto = texto.replace("e. m."," 'e?' 'm', ")}
if (texto.includes("e. n.")){texto = texto.replace("e. n."," 'e?' 'n', ")}
if (texto.includes("e. r.")){texto = texto.replace("e. r."," 'e?' 'r', ")}
if (texto.includes("e. s.")){texto = texto.replace("e. s."," 'e?' 'ese', ")}
if (texto.includes("g. r.")){texto = texto.replace("g. r."," 'g?' 'r', ")}
if (texto.includes("i. m.")){texto = texto.replace("i. m."," 'i?' 'm', ")}
if (texto.includes("i. n.")){texto = texto.replace("i. n."," 'i?' 'n', ")}
if (texto.includes("i. o. n.")){texto = texto.replace("i. o. n."," 'i?' 'o?' 'n', ")}
if (texto.includes("l. l.")){texto = texto.replace("l. l."," 'l?' 'l', ")}
if (texto.includes("o. n.")){texto = texto.replace("o. n."," 'o?' 'n', ")}
if (texto.includes("o. m.")){texto = texto.replace("o. m."," 'o?' 'm', ")}
if (texto.includes("o. r.")){texto = texto.replace("o. r."," 'o?' 'r', ")}
if (texto.includes("o. s.")){texto = texto.replace("o. s."," 'o?' 'ese', ")}
if (texto.includes("p. r.")){texto = texto.replace("p. r."," 'p?' 'r', ")}
if (texto.includes("q. u.")){texto = texto.replace("q. u."," 'q?' 'u', ")}
if (texto.includes("t. r.")){texto = texto.replace("t. r."," 't?' 'r', ")}
if (texto.includes("u. e.")){texto = texto.replace("u. e."," 'u?' 'e', ")}






msgNo = new SpeechSynthesisUtterance(texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
wordIndex=2;
msgNo.volume=Volumen;
msgNo.rate =Veloz;	
msgNo.pitch = Tono;

msgNo.onend = function(event) {
  //$(".label").css("border","3px solid white");
EsperaAnim();
primerEnter =false;
//$("#pequen").attr("src","Peque.png");
}
  msgNo.onboundary = function(event) { 
    //event.charIndex el indice de la palabra que lee
  }   
 		   
HablaAnim();
window.speechSynthesis.speak(msgNo);
//sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500); 
    
} 
