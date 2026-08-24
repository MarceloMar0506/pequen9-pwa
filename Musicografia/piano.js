var pianoP = new Map([["C2","0"],["Db2","10"],["D2","20"],["Eb2","30"],["E2","40"],["F2","50"],["Gb2","60"],["G2","70"],["Ab2","80"],["A2","90"],["Bb2","100"],["B2","110"],["C3","120"],["Db3","130"],["D3","140"],["Eb3","150"],["E3","160"],["F3","170"],["Gb3","180"],["G3","190"],["Ab3","200"],["A3","210"],["Bb3","220"],["B3","230"],["C4","240"],["Db4","250"],["D4","260"],["Eb4","270"],["E4","280"],["F4","290"],["Gb4","300"],["G4","310"],["Ab4","320"],["A4","330"],["Bb4","340"],["B4","350"],["C5","360"],["Db5","370"],["D5","380"],["Eb5","390"],["E5","400"],["S","500"]]);

var notasP = new Map([["Do","240"],["Re","260"],["Mi","280"],["Fa","290"],["Sol","310"],["La","330"],["Si","350"]]);

var nota_keys = Array.from(notasP.keys() );
var notasAm =["C","D","E","F","G","A","B"];

var braiNota = new Map([["Do","145"],["Re","15"],["Mi","124"],["Fa","1245"],["Sol","125"],["La","24"],["Si","245"]]);
var melodia = [["'C'" , '4' , '2' ],["D", 4, 2],["E", 4, 2]];
var nN = 0;

function piano(){

var Melodia4E = "";
Melodia4E =   $("#musica").html(); 
Melodia4E = Melodia4E.split(",");

 var notas = [];
 var ntiempo = 0;

for (let index = 0; index < Melodia4E.length; index++) {
    let nota =Melodia4E[index].substring(0,Melodia4E[index].length - 1);
    var tiempo =Melodia4E[index].substring(Melodia4E[index].length - 1,Melodia4E[index].length + 1);
  //  tiempo = eval(tiempo);
  if (tiempo == "c"){tiempo = 0.125}
  if (tiempo == "n"){tiempo = 0.25}
  if (tiempo == "b"){tiempo = 0.50}
  if (tiempo == "r"){tiempo = 1}

  if (tiempo == "="){tiempo = 0.1875}
  if (tiempo == "-"){tiempo = 0.175}
  if (tiempo == ":"){tiempo = 0.75}
  if (tiempo == "."){tiempo = 1.5}

  
    notas[index]={'note': nota,'duration': tiempo,'time': ntiempo};
    ntiempo += tiempo;
    
}

     Tone.Transport.stop();      
      const synth = new Tone.Synth().toDestination();
      // use an array of objects as long as the object has a "time" attribute
      const part = new Tone.Part((time, value) => {
        // the value is an object which contains both the note and the velocity
        synth.triggerAttackRelease(value.note, value.duration, time);    
    
      }, notas).start(0);
      Tone.Transport.start();
    
    }

    
    