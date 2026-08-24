var cuentaF7=0;//menu click derecho deshabilitar
var cuentaF8=0;//Limpiar LocalForage
var muestraG=0;
var textoLabel = "";


// Listen for orientation changes      
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  if (window.orientation == 90  || window.orientation == -90 )
  {
    //bien
    $(".jm-loadingpage").hide();
  }
  if (window.orientation != 90  && window.orientation != -90 )
  {
    //alert(window.orientation +  " Usar en posición horizontal");
    $(".jm-loadingpage").show();
  }


}, false);


//});

$(document).ready(function() {
   document.oncontextmenu = function(){return false}  


});

$(window).keyup(function(event) 
{ 
  
  clearTimeout(muestraG);
  
  //F7
    if(event.keyCode == 118){
        cuentaF7++;
        if (cuentaF7 == 10)
        {
        document.oncontextmenu = function(){return true}
        }
    }
   else if(event.keyCode != 118)
   {cuentaF7=0}

//F9 Habilitar Menu derecho de nuevo
if(event.keyCode == 120){
  document.oncontextmenu = function(){return false}    
}

if (event.keyCode == 119 ) 
{
  cuentaF8++;
  if (cuentaF8 == 10)
  {
   localforage.clear();    
  }
}
else if(event.keyCode != 119)
   {cuentaF8=0}

  });


function EsperaAnim(){ 
   // $(".label").hide();
    //muestraG = setTimeout($(".label").hide(), 8000);   
    var element = document.getElementById('pequenG');
    element.className = 'esperaG';
}

function EsperaAnimHide(){ 
  $(".label").hide();
  //muestraG = setTimeout($(".label").hide(), 8000);   
  var element = document.getElementById('pequenG');
  element.className = 'esperaG';
}


function HablaAnim(){
  //clearTimeout(muestraG);
  // $('.label').show();
  var element = document.getElementById('pequenG');
  element.className = 'hablaPG'; 
}

function HablaAnimShow(){
  //clearTimeout(muestraG);
  $('.label').show();
  var element = document.getElementById('pequenG');
  element.className = 'hablaPG'; 
}


function VerColorF(){
  //var data = sessionStorage.getItem('ColorSalvaP');
localforage.getItem('Color').then(function (data) {
 
if (data == "0")
  {
    $(".jm-loadingpage").css('background-color', '#8FABB5');

  }

  if (data == "1")
  {
    $(".jm-loadingpage").css('background-color', 'white');

  }

  if (data == "2")
  {
    $(".jm-loadingpage").css('background-color', 'black');            
  }
}).catch(function(err) {
  //   alert(err+ error);
  });
}

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
