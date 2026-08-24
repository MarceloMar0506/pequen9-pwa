var s, p=0;

function test(s) {
  $("a").css( "background-color","white");
  $("a").css( "color","black");

d=document.getElementById('L'+ s);
$("#L"+s).css( "background-color","black");
$("#L"+s).css( "color","white");
  
if(d === null || typeof d === 'undefined'){
    return;}

    d.focus();
    

var dice = d.innerHTML;
//$("#Lecc").text(d.innerText);

if (dice.includes(":") ) {
   // dice = dice + " segundos";
  }
 
 if (dice.includes("01:") )
  {
     dice = dice.replace("01:", " un minuto ");
  }
 
 if (!dice.includes("01:"))
  { 
    dice = dice.replace(":", " minutos ");
   }
 
numero = s;
Lee(dice);


//d.select();
p=s;
}

function adelante(){
if (p < 6) {p++; test(p)}
}

function prev() {
if (p > 1) {p--; test(p)}
}

document.onkeyup=function(e) {
event.preventDefault();

e = e || window.event;

if (e.keyCode == 37) {prev()}
if (e.keyCode == 38) {prev()}
if (e.keyCode == 39) {adelante()}
if (e.keyCode == 40) {adelante()}
if (e.keyCode == 13) {AbrirPractica(numero)}
return;
}
function AbrirPractica(numero)
{
  var miVar3 = setTimeout(function(){ 
    KEY = "Practica";
    VALUE = numero;
    set();
  },10);
  var miVar4 = setTimeout(function(){
    window.open("../Dactilografia/indexDac.html","_self");
  },200); 
}



