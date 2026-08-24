var NUsuario = "";
var UsuarioActual;
var UsuarioActividad;
var IndiceUsuario;
var iL = 0;
var Veloz =1;
var Motor;
var Tono;
var Lec = [];



var Dactilo = {   
    Leccion1: 'SR',
    Leccion2: 'SR',
    Leccion3: 'SR', 
    Leccion4: 'SR',
    Leccion5: 'SR',
};
function leeUsuarioActual()
{ 
   localforage.getItem('UsuarioActual').then(function (value) {
      $('.board').text(value);
      UsuarioActual = value;
      var repl = '<span class="seleccClass">' + value + '</span>';	
      $(".board").html($(".board").html().replace(value, repl));
      //$('.board').htlm("<span style='color:red'>" +  value + "</span>");
   });
}



function ListaDeDactilografia()
{    


 var listaU = todos.split(';');
// alert( listaU.indexOf(nomUs));
 var indice  = listaU.indexOf(nomUs);
                     var brna = document.createElement("p");                                           
                      document.getElementById("myList").appendChild(brna);
                      var nprac = 0;
       //lecciones desde 2 a 24
      for (iL = 2; iL < 24 ; iL++) {
                      //tomar las evaluaciones del usuario
                      nprac = nprac + 1;
			   var Nleccion =  Object.values(Dactilo)[iL];

			//alert(Nleccion);
			
                    	 //Nleccion   sr,0   ;   sr,0 ; buena,4 minutos
				 var listaLU = Nleccion.split(';');
				// alert(listaU[indice]);
				 var valoresL = listaLU[indice].split('T');			
				 //alert(valoresL[0]);
				 
				 var desempenio = valoresL[0];
				 var tiempo = valoresL[1];
				 
				 if (desempenio == "sr"){ desempenio = "Sin realizar";}
      				 if (tiempo == "0"){ tiempo = "";}
      				 
                       var btn = document.createElement("A");
                       var t = document.createTextNode("Práctica " + nprac  + "  "  +  desempenio + "  "  +  tiempo);
                        //btn.setAttribute("href", "'index.html','_self'");  
                        btn.setAttribute("onkeypress", "AbrirLeccion(" + nprac + ");"); 
                        btn.setAttribute("onclick", "AbrirLeccion(" + nprac + ");"); 
                        btn.setAttribute('tabindex', iL);
                        btn.setAttribute('id','L'+ iL);
                        btn.setAttribute("class", "Lista" );
                        btn.appendChild(t);                       
                       document.getElementById("myList").appendChild(btn);                                         
                       Lec[iL]= "Práctica " + nprac  + "  "  +  desempenio + ".  "  +  tiempo;
      }
//agregar en blanco para que el scroll esté siempre arriba
for (iLn = 1; iLn < 24 ; iLn++) {
   var btn = document.createElement("A");
   var t = document.createTextNode(".  ");
   btn.setAttribute("class", "Botones" );
   btn.appendChild(t);
   document.getElementById("myList").appendChild(btn); 
}   
$("#Lecc").text("SELECCIONAR UNA PRÁCTICA");
//$("#L1").text()
               
                document.getElementById("myList").focus();
} 




      
//actualiza Bd value de Dactilo
function ActualizaBd()
{     
alert("  actualiza ????" );
//alert("Graba???????????????" + Dactilo[Ausuario]);
localforage.setItem('PalabrasEstenUnS',Dactilo).then(function (value) {

}).catch(function(err) {
   alert(err+ error);
});

}

function ActualizaBdAbreDac()
{     
alert(" cccc inicia????" );

//alert("Graba???????????????" + Dactilo[Ausuario]);
localforage.setItem('PalabrasEstenUnS',Dactilo).then(function (value) {

}).catch(function(err) {
   alert(err + " Nerror");
});
 AbreIndexDac();
}

 


//Lee Bd Usuario Actual MotorActual y Veloz
function LeeBdInicio()
{    
alert("si");
localforage.getItem('PalabrasEstenUnS').then(function (value) {
Nusuario = value.Ausuario;
UsuarioActual = value.Ausuario;
//alert("s1 uno " + Nusuario)
$('.board').val(Nusuario)

//LeeUsuario();
//Preferencias();
//alert("foco");
$('.board').focus();
$('.board').select();
SaludoIngreso();


}).catch(function(err) {
  //alert(err +  " error al leer. Primera vez en Dactilo!! Buscar si entró en configuracion. Si no esta tampoco que se registre aca ");
BuscarUsuario();
$('.board').text(""); 
 $('.board').focus();
 $('.board').select();
});

}



