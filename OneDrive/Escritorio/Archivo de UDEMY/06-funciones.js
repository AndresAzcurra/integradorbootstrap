/**
 * funciones tiene dos tipos de formas de llamar 
 */

// funciones declrativa
  function saludar(){
      console.log("hola soy andres");
  }

  saludar()


  function saludar(nombre){
      console.log(`hola soy ${nombre}`);
  }
  saludar("andres");
/// aca da ejemplo de funtion con return

function saludar(nombre) {
    return `hola soy ${nombre}`
}
 var saludo =saludar("andres ");   // tenes que almacenar el retorno en una variable y  despues imprimir
 console.log(saludo);
   

 // funciomes de expresion      o   anonimas

var suma = function(a,b){
return  a+b ; 
}
console.log(suma(2,5));

// arrow funtion o funciones flecha

var restar = () => {     // esta es la sintaxis de la funtion flecha

}

var resta = (a,b)=> {
return a-b;
}
console.log(resta(9 ,6));
///---------------------------------------------------------
var multiplicacion = (a,b)=> a*b  ;   // ya esta implicito el return

console.log(multiplicacion(5,8));

// esplico como la funtion de espresion fleta conpacta el codigo 

var resta = (a,b)=> {
    if (typeof a ==='number'&& typeof b === 'number') {
        return a-b;
    } else{
        return "solo se puede restar numeros";
    }
    }
    console.log(resta(8,"r"));

    // arriba dio un ejemplo de una funcion un poco mas compleja en la cual no se debe de usar la funcion arrow  o flecha por que debtro de las llaves va una espresion mucho mas compleja que solo un return
 
