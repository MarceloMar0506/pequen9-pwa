function LeeCifra(texto)
{
    $(".label").css("visibility","hidden");
    $(".label").html('');
//console.log($.isNumeric(parseInt(texto)) + texto);
if ($.isNumeric(parseInt(texto)) ){
  texto = texto.replace(/\./g, '.');
  texto = texto.toLocaleString(); 
  //console.log($.isNumeric(texto) + texto);
 
}

window.speechSynthesis.cancel();

if (texto == "_"){return;}

msgNo = new SpeechSynthesisUtterance( texto);
msgNo.voice = speechSynthesis.getVoices()[Voz];
msgNo.rate =Veloz;	
msgNo.pitch = Tono;
msgNo.volume = Volumen;

msgNo.onend = function(event) { 
    $("#cifra").text('_');
    $("#Numero").text('');
    $(".Netiqueta").text('');
    $(".n").css({"background-color": "AliceBlue"});    
    $('.zoomIn').remove();
EsperaAnim();
primerEnter =false;
}
HablaAnim();
sayTimeout = setTimeout(function () { window.speechSynthesis.speak(msgNo);}, 500);     
} 
