var pulsado = false;
var start = 0;
var sx=0;
var audio = document.createElement('audio');
var cuenta = 0;
var Ndelta = 0;

document.addEventListener('mousedown', () => {
    //console.log('mouse down');
    
//     console.log("mouse down " + cuenta);
//      Ndelta = (new Date()).getTime() - start;
//    console.log(Ndelta + " ms -   "  +  start + " " + cuenta);
   
   
//    if (Ndelta > 3900){ 
   
//         if (document.title.toString().substring(0,5) == "Lista"){
//             LeeCGB("soltar el pulsador para regresar ");
        
         
//         }else
//         {            
//             //Si no está en un item del menú
//          if (p == 0 ){
//          // return;
//          } else if (p > 0) {
//             LeeCGB("soltar el pulsador para ingresar");
          
//         }   

            
//         }
//     }

    processKeyDown();

},false); 

document.addEventListener('mouseup', () => {
   // console.log("mouse Up " + cuenta);  
  // Ndelta=0; 
   
    processKeyUp();
},false); 







addEventListener('keyup', function(e) { 
    if (e.keyCode == 32){
       processKeyUp();
    }
});  
addEventListener('keydown', function(e) { 
    if (e.keyCode == 32){
        processKeyDown();
       
    }
});  


function processKeyDown(e) {
    if (!start) {
        start = (new Date()).getTime();
       
    }
    cuenta++;
    console.log(cuenta + " == " + start);
    if (cuenta == 20){
        if (document.title.toString().substring(0,5) == "Lista"){
            LeeCGB("soltar el pulsador para regresar");
        }else{            
            LeeCGB("soltar el pulsador para ingresar");
        }

    }

//    if ( (new Date()).getTime() - start > 900){
//     document.activeElement.animate
//    }
}

function processKeyUp(e) {
    var delta = (new Date()).getTime() - start;
    //console.log(delta + " ms");
    start = 0;
    cuenta=0;
    Ndelta = 0;

    if (delta > 900){
       //Enter
       try {
        var text = document.getElementById("s"+p).textContent; 
       } catch (error) {
        var text = "";
       }
       
       if (document.title.toString().substring(0,5) == "Lista"){
           Regresar();          
       }
       else if (text == "BRAILLE AL TACTO" || text == "PRÁCTICAS" || text == "TECLADO QWERTY" || text == "TECLADO VIRTUAL" || text == "PIZARRA VIRTUAL" || text == "LECTURA AL TACTO"  || text == "ACTIVIDADES"){
            LeeCGB(text +  " no es accesible con pulsador");
         }
       else {   
           localStorage.setItem("Pulsador","true");    
           Abre(p);  
       }       
    }
    else{             
        adelante();
    }
}

// sayTimeout3 = setInterval(function () {	
//    console.log("Cuenta " + cuenta);
//    cuenta++;
// }, 100);  