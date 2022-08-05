/* 1 crea tres variables para asignar el nombre, apellido y edad de homero respectivamete .es indistinto el empleo de let o var en la declaracion*/
let nombreHomero = "homero";
let apellidoHomero ="simpsons";
let edadHomero = 39;
console.log(nombreHomero);
console.log(apellidoHomero);
console.log(edadHomero);

/**  2crea 5 variables contantes ,asignandole a cada una de ella diferente nombred de ciudades */

const ciudad1 = "berazategui"

const ciudad2 = "quilmes"

const ciudad3 = "caba"

const ciudad4 = "alvear"

const ciudad5 = "corrientes"

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

/** 3 declara variable para representar la informacion de un carnet de conducir ,luego concatenarla y asignar el valor de la operacion en   en una variable denominada carnet */


let nombreCarnet= 'Andres';
let apellidoCarnet= 'Azcurra';
let ciudadCarnet = 'Caba';
let paisCarnet = 'Argentina';
let edadCarnet = 39;
let numeroCarnet = 'abc123def';

let Carnet = 'Nombre '+ nombreCarnet +'  '+'Apellido '+ apellidoCarnet +'  '  +'Ciudad '+ ciudadCarnet+'  ' + 'Pais '+ paisCarnet +'  '+ 'Edad '+ edadCarnet +'  '+'Numero '+  numeroCarnet ;
console.log(Carnet);

/** 4 solicita al usuario cinco nombres pertenecientes a integrantes de la familia ,luego concatena dicha entrada y efectuar una salida por alert */
  function familiaEjercicio4 (){
let familia1 = prompt('Ingrese el nombre de un familiar');
let familia2 = prompt('Ingrese el nombre de un familiar');
let familia3 = prompt('Ingrese el nombre de un familiar');
let familia4 = prompt('Ingrese el nombre de un familiar');
let familia5 = prompt('Ingrese el nombre de un familiar');
let alertafamilia = '  '+ familia1 +'  ' +familia2+'  ' + familia3 + '  '+ familia4 + '  '+ familia5;
 alert ('Mi familia es  :'+ alertafamilia);

  }
  /**
   * actvidad 5 : solicita al usuario uno o mas precios luego efectuar un descuento en porcentajes ( 20% o 30% etc)sobre los valores ingresado y luego realiza una salida.
   */
    function descuentoDeprecio(){

    
  let precio1 =Number(prompt('ingrese el precio del producto '));
  let precio2 =Number(prompt('ingrese el precio del producto '));
  let precio3 =Number(prompt('ingrese el precio del producto '));
  let precio4 =Number(prompt('ingrese el precio del producto '));

  let descuentoPrecio1 = precio1 - (precio1 *0.2);
  let descuentoPrecio2 = precio2 - (precio2 *0.3);
  let descuentoPrecio3 = precio3 - (precio3 *0.4);
  let descuentoPrecio4 = precio4 - (precio4 *0.4);
  
  
alert('su precio con descueto es de :'+ descuentoPrecio1);
alert('su precio con descueto es de :'+ descuentoPrecio2);
alert('su precio con descueto es de :'+ descuentoPrecio3);
alert('su precio con descueto es de :'+ descuentoPrecio4);
 }

 /**
  * unidad 2 
  */
 /**    2.1   yo no fui
Solicitar al ususario un nombre. si el mismo es igual a otro almacenado en la variable,realizar una salida con un alert con la frase "fui yo",caso contrario la salida sera "yo noo fui" */

function yoNoFui(){
  let entrada=prompt('Ingrese un  nombre');
  let nombreYonofui = 'bart';
  if (entrada== nombreYonofui){
    alert('fui yo');
  } else {
    alert('yo no fui')
  }
}
/**2-1 
 * presionar y 2-2
Solicitar al usuario una tecla,si se presiona "y"(minuscula) , o "Y" (mayuscula) realizar una salida por alert con la palabra correcto o de lo contrario la palabra sea error
 */
function yMayuscula(){  
let minMay =prompt("elige una letra entre y o Y")
if (minMay == "y"){
  alert("correcto")
}else {
  alert("error")
}
}
/**
 * Escoger personajes 2-3
Solicitar al ususario un numero,si el valor esta entre 1 y 4 efectuar una de las siguientes alidas segun corresponda

Elegiste a Homero Simpson
Elegiste a Marge
Elegiste a Bart
Elegiste a Lisa
 */
function escojerPersonajes() {
  let elPersonaje =Number(prompt("elegir un numeroo del 1 al 4"));
  switch (elPersonaje) {
    case 1:
      alert("Elegiste a homero")
      
      break;
      
      case 2:
        alert("Elegiste a Marge")
        break;
        case 3:
        alert("Elegiste a Bart")
        break;
        case 4:
        alert("Elegiste a Lisa")
        break;
  
    default:
      alert("no  elegiste a nadie")
      break;
  }
}
/**
 * Presupuesto 2-4
solicitar aal usuario un numero, si el valor esta entre 2 numeros, efectuar una de las siguientes salidas segun corresponda

presupuesto bajo si esta entre 0 y 1000
presupuesto medio si esta entre 1001 y 3000
presupuesto alto si esta a mas de 3000
 */
function presupuesto(){
  let valorDelpresupuesto=Number(prompt("ingrese el valor del presupuesto"));
  if
}