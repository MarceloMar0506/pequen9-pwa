$(function() {
document.body.style.backgroundColor  = "#8FABB5";


if (document.title == "Ingreso de Usuario Pequén")
{
function asyncSqrt(value, callback) {
//    //console.log('START execution with value =', value);
    setTimeout(function () {
        callback(value);
    }, 500);
}

asyncSqrt(0, function (value, result) {
    //Busca los motores en Español
    //determina Voz (la primera) Tono =1 Veloz = 1 indiceColor = 0
    DeterminaMotor();
   asyncSqrt(1, function (value, result) {
       //Busca en LocalForage:  UsuarioActual
       //UsuarioActual = value
       //si no existe (primera vez) usa default
        BuscarUsuario();

       asyncSqrt(2, function (value, result) {
     //si hay UsuarioActual  general configurado
            if (UsuarioActual != "")
            {Preferencias();
             $('.board').text(UsuarioActual);    
          
            }
                                //  LeeUsuario();
//                                  //console.log("2"  + UsuarioActual);
            asyncSqrt(3, function (value, result) {
           
                  asyncSqrt(4, function (value, result) {
                           ColorFondo();                              
                     asyncSqrt(5, function (value, result) {
                     //Si UsuarioActual existe Muestra 
                     //Si no existe solicita escribirlo
                                  SaludoIngreso();
                                  //Cuando de Enter
                                //1) Graba UsuarioActual
                               //2) Busca UA en Actividad
                                     });
                                });
                            });
                        });
                    });
 });

}



if (document.title == "Lista" )
{

function asyncSqrt(value, callback) {
//    //console.log('START execution with value =', value);
    setTimeout(function () {
        callback(value);
    }, 100);
}

asyncSqrt(0, function (value, result) {
DeterminaMotor();
                                 
//                                  //console.log("0");
   asyncSqrt(1, function (value, result) {
                                  BuscarUsuario();
//                                  //console.log("1" + UsuarioActual);
       asyncSqrt(2, function (value, result) {
        if (UsuarioActual != "")
            {
                                 Preferencias();
             }
//                                  //console.log("2"  + UsuarioActual);
            asyncSqrt(3, function (value, result) {
//usuario de dictado de palabras para ver quien es 
          LeeUsuario();
          $("#superior").text("PRÁCTICAS DE " + UsuarioActual);
//                                      //console.log("3"  + UsuarioActual);
                  asyncSqrt(4, function (value, result) {
                               ColorFondo();
                               QueColor();
                               //Si tiene lecciones realizadas            
                               // CargaVLeeBd();
//                                 //console.log("4" + UsuarioActual);
                     asyncSqrt(5, function (value, result) {
                     
//                                var miVarA7 = setTimeout(function(){LeeBdInicio() }, 100); 
                                SaludoLista() ;
//                                 //console.log("5" + UsuarioActual);
                                     });
                                });
                            });
                        });
                    });
 });
                       
 

 }

//Última página Dictado
 if (document.title === "Dictado")
   {
function asyncSqrt(value, callback) {
//    //console.log('START execution with value =', value);
    setTimeout(function () {
        callback(value);
    }, 500);
}

asyncSqrt(0, function (value, result) {
                                  DeterminaMotor();
                               
//                                  //console.log("0");
   asyncSqrt(1, function (value, result) {
                                    BuscarUsuario();

       asyncSqrt(2, function (value, result) {
                                 Preferencias();    

            asyncSqrt(3, function (value, result) {
                             // Ya esta es el mismo UsuarioActual      LeeUsuario();
                              // PalabrasLeccion();
                  asyncSqrt(4, function (value, result) {
                                 ColorFondo();
                              //  IniciaTimer();

                     asyncSqrt(5, function (value, result) {
                             
                               // DictaPdeL();

                                     });
                                });
                            });
                        });
                    });
 });

}

}); 



