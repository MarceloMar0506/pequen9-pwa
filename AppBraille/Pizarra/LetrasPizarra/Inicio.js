
$(function() {
document.body.style.backgroundColor  = "#8FABB5"

;

 /* setTimeout(function () {
        
    }, 1500);
*/
function asyncSqrt(value, callback) {
   // //console.log('START execution with value =', value);
    setTimeout(function () {
        callback(value);
    }, 500);
}

asyncSqrt(0, function (value, result) {
                                  BuscarUsuario();
  asyncSqrt(1, function (value, result) {
                              //    DeterminaMotor();                          
       asyncSqrt(2, function (value, result) {
                               //   LeeUsuario();                              
            asyncSqrt(3, function (value, result) {
                                      Preferencias();                               
                  asyncSqrt(4, function (value, result) {
                               ColorFondo();
                       asyncSqrt(5, function (value, result) {
                                 LeeConfig();
                                     }); //  //console.log("5" + UsuarioActual);
                                }); //  //console.log("4 " + UsuarioActual +  "Voz: " + Voz +  "Veloz: " + Veloz  
                            }); //      //console.log("3"  + UsuarioActual);
                        }); //   //console.log("2"  + UsuarioActual);
                    }); //   //console.log("1" + UsuarioActual);
               });  //    //console.log("0");
 }); //Fin function() Lee inicio

