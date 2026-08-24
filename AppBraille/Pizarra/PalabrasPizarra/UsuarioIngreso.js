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
    Ausuario: '',
    Tusuario: '',//'juan;pedro;lidia;MArcelo',
    Leccion1: '',//'juan;pedro;lidia;MArcelo','sr;0,buena;2,Continua practicando;0',
    Leccion2: '',//'sr;0,sr;0,Continua Practicando;0',
    Leccion3: '', Leccion4: '',
    Leccion5: '', Leccion6: '',
    Leccion7: '',Leccion8: '',
    Leccion9: '',Leccion10: '', 
    Leccion11: '',Leccion12: '', 
    Leccion13: '',Leccion14: '', 
    Leccion15: '',Leccion16: '', 
    Leccion17: '',Leccion18: '', 
    Leccion19: '',Leccion20: '', 
    Leccion21: '',Leccion22: '', 
    Leccion23: '',Leccion24: '',     
   Leccion: '', 
};


function RegistaUsuario()
{
event.preventDefault();
//alert($('.board').text() + " " + $('.board').text().length);
//alert ("registra");
NUsuario = $('.board').text().toUpperCase();
 //  alert(NUsuario + " aaa");
//    alert(Object.values(Dactilo)[1].indexOf(NUsuario));
localforage.getItem('PalabrasBrailleP').then(function (value) {
Dactilo = {
Ausuario:value.Ausuario,Tusuario:value.Tusuario,
Leccion1:value.Leccion1,Leccion2:value.Leccion2,
Leccion3:value.Leccion3,Leccion4:value.Leccion4,
Leccion5:value.Leccion5,Leccion6:value.Leccion6,
Leccion7:value.Leccion7,Leccion8:value.Leccion8,
Leccion9:value.Leccion9,Leccion10:value.Leccion10,
Leccion11:value.Leccion11,Leccion12:value.Leccion12,
Leccion13:value.Leccion13,Leccion14:value.Leccion14,
Leccion15:value.Leccion15,Leccion16:value.Leccion16,
Leccion17:value.Leccion17,Leccion18:value.Leccion18,
Leccion19:value.Leccion19,Leccion20:value.Leccion20,
Leccion21:value.Leccion21,Leccion22:value.Leccion22,
Leccion23:value.Leccion23,Leccion24:value.Leccion24,
Leccion:value.Leccion};
//alert(Object.values(Dactilo)[1] + " está? " + NUsuario);

if (Object.values(Dactilo)[1].indexOf(NUsuario) > -1)
  {
  //alert("Existe!! grabar como Usuario Actual " + NUsuario);
 // alert(value.Tusuario);
         Dactilo = {
Ausuario:NUsuario,Tusuario:value.Tusuario,
Leccion1:value.Leccion1,Leccion2:value.Leccion2,
Leccion3:value.Leccion3,Leccion4:value.Leccion4,
Leccion5:value.Leccion5,Leccion6:value.Leccion6,
Leccion7:value.Leccion7,Leccion8:value.Leccion8,
Leccion9:value.Leccion9,Leccion10:value.Leccion10,
Leccion11:value.Leccion11,Leccion12:value.Leccion12,
Leccion13:value.Leccion13,Leccion14:value.Leccion14,
Leccion15:value.Leccion15,Leccion16:value.Leccion16,
Leccion17:value.Leccion17,Leccion18:value.Leccion18,
Leccion19:value.Leccion19,Leccion20:value.Leccion20,
Leccion21:value.Leccion21,Leccion22:value.Leccion22,
Leccion23:value.Leccion23,Leccion24:value.Leccion24,
Leccion:"0"};
UsuarioActual = value.Ausuario.toString();
funcionActualizaAbre(ActualizaBd, AbreLista);
  // window.open("Lista.html","_self");   
   //self.location.href="Lista.html";
   ///window.location.href ="Lista.html";
   }
//si no existe registrar y seguir
else if (Object.values(eval(Dactilo))[1].indexOf(NUsuario) == -1)
  {
   //alert("agregar por que no existe  " + NUsuario );
      Dactilo = {
   Ausuario:NUsuario,Tusuario:value.Tusuario+";"+NUsuario,
   Leccion1:value.Leccion1+";srT0",Leccion2:value.Leccion2+";srT0",
   Leccion3:value.Leccion3+";srT0",Leccion4:value.Leccion4+";srT0",
   Leccion5:value.Leccion5+";srT0",Leccion6:value.Leccion6+";srT0",
   Leccion7:value.Leccion7+";srT0",Leccion8:value.Leccion8+";srT0",
   Leccion9:value.Leccion9+";srT0",Leccion10:value.Leccion10+";srT0",
   Leccion11:value.Leccion11+";srT0",Leccion12:value.Leccion12+";srT0",
   Leccion13:value.Leccion13+";srT0",Leccion14:value.Leccion14+";srT0",
   Leccion15:value.Leccion15+";srT0",Leccion16:value.Leccion16+";srT0",
   Leccion17:value.Leccion17+";srT0",Leccion18:value.Leccion18+";srT0",
   Leccion19:value.Leccion19+";srT0",Leccion20:value.Leccion20+";srT0",
   Leccion21:value.Leccion21+";srT0",Leccion22:value.Leccion22+";srT0",
   Leccion23:value.Leccion23+";srT0",Leccion24:value.Leccion24+";srT0",
   Leccion:"0"};
   UsuarioActual = value.Ausuario.toString();
   funcionActualizaAbre(ActualizaBd, AbreLista);
   //ActualizaBd();
   // alert("agregó " +NUsuario);
  // window.open('Lista.html','_self');     
   }
   
}).catch(function(err) {
    //  console.error(err);
   // alert("agregar a con error a Es el primero???  " + NUsuario + " " + err);
   
   Dactilo = {
   Ausuario:NUsuario,Tusuario:NUsuario,   
   Leccion1:"srT0",Leccion2:"srT0",
   Leccion3:"srT0", Leccion4:"srT0",
   Leccion5:"srT0", Leccion6:"srT0",
   Leccion7:"srT0", Leccion8:"srT0",
   Leccion9:"srT0", Leccion10:"srT0",
   Leccion11:"srT0", Leccion12:"srT0",
   Leccion13:"srT0", Leccion14:"srT0",
   Leccion15:"srT0", Leccion16:"srT0",
   Leccion17:"srT0", Leccion18:"srT0",
   Leccion19:"srT0", Leccion20:"srT0",
   Leccion21:"srT0", Leccion22:"srT0",
   Leccion23:"srT0", Leccion24:"srT0",   
   Leccion:"0"};
   UsuarioActual =NUsuario;// value.Ausuario.toString();
   funcionActualizaAbre(ActualizaBd, AbreLista);
   //ActualizaBd();
 //  window.open('Lista.html','_self');   
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
//alert(Object.values(Dactilo)[0] + "  actualiza " );
//alert("Graba???????????????" + Dactilo[Ausuario]);
localforage.setItem('PalabrasBrailleP',Dactilo).then(function (value) {
//alert("Graba??");//value.Ausuario);
   // //console.log(value.Tusuarios);
}).catch(function(err) {
   alert(err+ error);
});

}

function ActualizaBdAbreDac()
{     
//alert(Object.values(Dactilo)[0] + " cccc inicia" );

//alert("Graba???????????????" + Dactilo[Ausuario]);
localforage.setItem('PalabrasBrailleP',Dactilo).then(function (value) {
//alert("Graba??");//value.Ausuario);
   // //console.log(value.Tusuarios);
}).catch(function(err) {
   alert(err + " Nerror");
});
 AbreIndexDac();
}


//Lee Bd y acualiza variables Dactilo
function LeeBd()
{     
localforage.getItem('PalabrasBrailleP').then(function (value) {
//alert(Object.values(Dactilo)[1] + " inicia" );
//alert(value.Tusuario + "  "  + value.Leccion1);
Dactilo = {
Ausuario:value.Ausuario,Tusuario:value.Tusuario,
Leccion1:value.Leccion1,Leccion2:value.Leccion2,
Leccion3:value.Leccion3,Leccion4:value.Leccion4,
Leccion5:value.Leccion5,Leccion6:value.Leccion6,
Leccion7:value.Leccion7,Leccion8:value.Leccion8,
Leccion9:value.Leccion9,Leccion10:value.Leccion10,
Leccion11:value.Leccion11,Leccion12:value.Leccion12,
Leccion13:value.Leccion13,Leccion14:value.Leccion14,
Leccion15:value.Leccion15,Leccion16:value.Leccion16,
Leccion17:value.Leccion17,Leccion18:value.Leccion18,
Leccion19:value.Leccion19,Leccion20:value.Leccion20,
Leccion21:value.Leccion21,Leccion22:value.Leccion22,
Leccion23:value.Leccion23,Leccion24:value.Leccion24,
Leccion:"0"};

/*nomUs = value.Ausuario.toString();
todos = value.Tusuario.toString();
*/
//alert("LeeBd  UsuarioIngreso");
$('.board').text(value.Ausuario); 
 $('.board').focus();
 $('.board').select();
//alert(Object.values(eval(Dactilo))[0]+ "  " + Object.values(eval(Dactilo))[1] );
//    value.Tusuarios)  value.Leccion* ......
}).catch(function(err) {
//    alert(err +  " error al leer");
 // console.error(err + $('.board').text());
$('.board').text("_"); 
 $('.board').focus();
 $('.board').select();

});
}


function CargaVLeeBd()
{     
localforage.getItem('PalabrasBrailleP').then(function (value) {

Dactilo = {
Ausuario:value.Ausuario,Tusuario:value.Tusuario,
Leccion1:value.Leccion1,Leccion2:value.Leccion2,
Leccion3:value.Leccion3,Leccion4:value.Leccion4,
Leccion5:value.Leccion5,Leccion6:value.Leccion6,
Leccion7:value.Leccion7,Leccion8:value.Leccion8,
Leccion9:value.Leccion9,Leccion10:value.Leccion10,
Leccion11:value.Leccion11,Leccion12:value.Leccion12,
Leccion13:value.Leccion13,Leccion14:value.Leccion14,
Leccion15:value.Leccion15,Leccion16:value.Leccion16,
Leccion17:value.Leccion17,Leccion18:value.Leccion18,
Leccion19:value.Leccion19,Leccion20:value.Leccion20,
Leccion21:value.Leccion21,Leccion22:value.Leccion22,
Leccion23:value.Leccion23,Leccion24:value.Leccion24,
Leccion:"0"};

nomUs = value.Ausuario.toString();
UsuarioActual = value.Ausuario.toString();
todos = value.Tusuario.toString();
//alert(todos + " cargav");
//alert(Object.values(eval(Dactilo))[0]+ "  " + Object.values(eval(Dactilo))[1] );


//    value.Tusuarios)  value.Leccion* ......
ListaDeDactilografia();

}).catch(function(err) {
    //alert(err +  " error al leer");
    console.error(err);
});
}


//actualiza un dato  de Dactilo
function ActualizaLeccionBd(valor)
{
localforage.getItem('PalabrasBrailleP').then(function (value) {
Dactilo = {
Ausuario:value.Ausuario,Tusuario:value.Tusuario,
Leccion1:value.Leccion1,Leccion2:value.Leccion2,
Leccion3:value.Leccion3,Leccion4:value.Leccion4,
Leccion5:value.Leccion5,Leccion6:value.Leccion6,
Leccion7:value.Leccion7,Leccion8:value.Leccion8,
Leccion9:value.Leccion9,Leccion10:value.Leccion10,
Leccion11:value.Leccion11,Leccion12:value.Leccion12,
Leccion13:value.Leccion13,Leccion14:value.Leccion14,
Leccion15:value.Leccion15,Leccion16:value.Leccion16,
Leccion17:value.Leccion17,Leccion18:value.Leccion18,
Leccion19:value.Leccion19,Leccion20:value.Leccion20,
Leccion21:value.Leccion21,Leccion22:value.Leccion22,
Leccion23:value.Leccion23,Leccion24:value.Leccion24,
Leccion:valor};
//alert(value.Ausuario +  "  "  + value.Lec);
});


localforage.setItem('PalabrasBrailleP', Dactilo).then(function (value) {
   // //console.log(value.Tusuarios);
}).catch(function(err) {
    console.error(err);
});


}


 function AbrirLeccion(valor)
    {
      //   if(event.keyCode==13)
      //   {           
          //alert(valor);
   localforage.getItem('PalabrasBrailleP').then(function (value) {
   Dactilo = {
   Ausuario:value.Ausuario,Tusuario:value.Tusuario,
Leccion1:value.Leccion1,Leccion2:value.Leccion2,
Leccion3:value.Leccion3,Leccion4:value.Leccion4,
Leccion5:value.Leccion5,Leccion6:value.Leccion6,
Leccion7:value.Leccion7,Leccion8:value.Leccion8,
Leccion9:value.Leccion9,Leccion10:value.Leccion10,
Leccion11:value.Leccion11,Leccion12:value.Leccion12,
Leccion13:value.Leccion13,Leccion14:value.Leccion14,
Leccion15:value.Leccion15,Leccion16:value.Leccion16,
Leccion17:value.Leccion17,Leccion18:value.Leccion18,
Leccion19:value.Leccion19,Leccion20:value.Leccion20,
Leccion21:value.Leccion21,Leccion22:value.Leccion22,
Leccion23:value.Leccion23,Leccion24:value.Leccion24,
Leccion:valor};
   ActualizaBdAbreDac();
                       
   ///window.location.href ="indexBPalabras.html"; 
   
});         
          
   // }      
 }
 
function AbreLista()
{
window.speechSynthesis.cancel();
KEY = 'UusarioActual';
VALUE = $(".board").text();   
set();
 window.open("./Lista.html?usuario="+ $(".board").text(),"_self"); 
}

function AbreIndexDac()
{
  window.open("indexBPalabras.html","_self"); 
}

//Lee Bd Usuario Actual MotorActual y Veloz
function LeeBdInicio()
{    

localforage.getItem('PalabrasBrailleP').then(function (value) {
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

function funcionActualizaAbre(ActualizaBd, AbreLista){
    
    var miVar2 = setTimeout(function(){ActualizaBd() }, 100);    
     var miVar2 = setTimeout(function(){AbreLista() }, 200);    
}

