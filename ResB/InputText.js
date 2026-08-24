var nombUs = "";
var todos =  "";

$(window).keydown(function(event) 
{   
  if(event.keyCode == 112)
  {
   return false;
  }
  });

$('form').keyup(function(e){       
   if(e.which == 46){
      //localStorage.clear();
     // alert(selText);
      Lee(borró);
      return false;
    }
 }); 
  
 

var tecla;



function validari(e,txt) { 

 if(event.keyCode == 112)
  {
   return false;
  }



 if (e.keyCode == 37 && e.ctrlKey == false || e.keyCode  == 39  && e.ctrlKey == false) 
          {
//alert(e.which + "  fffddddff " + e.ctrlKey + "  fddddf " + e.keyCode);
      //document.getElementById('EtiquetaUnoTexto').innerHTML =  e.target.selectionStart;
   var text = document.activeElement.value;
   var  selText = text.substring ( e.target.selectionStart , e.target.selectionStart +1);
   //document.getElementById('Etiqueta').innerHTML =  text  + "  == " +  selText;
  
    Lee(selText);
    return;
    }
    
     //flecha arriba o abajo
   if (e.keyCode == 38 || e.keyCode == 40) 
   {
  // alert("si");
    e.target.selectionStart =0;
     $(this).select();
     Lee($('input').val());   
     return;
  }



 if(e.which != 13 && e.which != 37 && e.which != 39 && e.ctrlKey == false)
 { 
 if (e.key  == "Backspace") { Dice = "retroceso";  Lee(Dice);  return;}
 if (e.key == "Delete") {Dice = "suprimir"; Lee(Dice); return;};
 if (e.key == "AudioVolumeDown" || e.key == "VolumeDown") { Dice = "baja el volumen";  Lee(Dice);  return;}
 if (e.key == "AudioVolumeUp" || e.key == "VolumeUp") { Dice = "sube el volumen";  Lee(Dice);  return;}
 if (e.key == "AudioVolumeMute" || e.key == "VolumeMute") {  Dice = "quita el volumen";   Lee(Dice);   return;}
 

     
  tecla = (document.all) ? e.keyCode : e.which;
  tecla = String.fromCharCode(tecla);  
   Lee(e.key);//Lee letra
    
  return (txt.indexOf(tecla)==-1);
   }
}


//$(function() {
 //Evitar eco del teclado

$('form').keyup(function(e){


  // if(e.keyCode == 13){  

  //   Navega();
  
  //   }

  //ctrl flecha atras
   if (e.ctrlKey && e.keyCode == 37 ) 
          {
          
              var text = document.activeElement.value;
		 var  NselText = text.substring ( e.target.selectionStart , text.indexOf(" ",e.target.selectionStart +1));
		   
		   //si es fin del texto
		   if (text.indexOf(" ",e.target.selectionStart +1) == -1)
		   { 
		      NselText = text.substring (e.target.selectionStart);
		   }
		      //document.getElementById('Etiqueta').innerHTML =  text  + "  == " +  NselText;
		      Lee(NselText);
           return;      
    }

//ctrl flecha adelante
  if (e.ctrlKey  && e.keyCode == 39 ) 
          {
              var text = document.activeElement.value;
		 var  NselText = text.substring ( e.target.selectionStart , text.indexOf(" ",e.target.selectionStart +1));
		   
		   //si es fin del texto
		   if (text.indexOf(" ",e.target.selectionStart +1) == -1)
		   { 
		      NselText = text.substring (e.target.selectionStart);
		   }
		    //  document.getElementById('Etiqueta').innerHTML =  text  + "  == " +  NselText;
		      Lee(NselText);
           return;      
    } 
  // return;
  }); //Fin de $('form').keypress(function(e) Enter

 $('input').keyup(function(e) {
  event.preventDefault();   
    });
  
function Navega()
{
 if ($('.board').text() != "_" )//&& $('.board').text() != ""
 {
 event.preventDefault();
 CrearUsuarioActual($('.board').text());
 AbreLista();
    return;
 }
    
else  if ($('.board').text() == "_" ||  $('.board').text() != "" )
 {
 event.preventDefault();
  $('.board').text("") ;
 Lee(Ingreso);
 return;
  }
}

function CrearUsuarioActual(Nombre)
{
   KEY ="UsuarioActual";
   VALUE = Nombre;   
   set();
}
