var NUsuario = "";
var UsuarioActual;
var UsuarioActividad;
var IndiceUsuario;
var iL = 0;
var Veloz =1;
var Motor;
var Tono;
var Lec = [];
var valBase = "";


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



