/**
 * operadores
 */

// operador de asignacion      este es el operador     el igual (=)

var x = 2;
var y = true ; 

// operador de adicion       +=

var x = 2;
var y = 1 ; 
 x += y ;       // x =  x + y       esa seria la esprecion matematica
 console.log(x);

 //   tambien esta el operador de asignacion resta 

 var x =1;
 var y = 2;
 x -= y;
 console.log(x);

 /**
  * estan tambien los operadores de asignacion para multiplicar y para dividar  y el de modulo y funciona de la misma manera
  */

 // asignacion de exponenciacion  ( **=  )

 var x =2;
 var y = 3;
 x **= y;    // seria la esprecion matematica de :  x = x elevado a y
 console.log(x);

/**
 * operadores de comparacion
 */
  /** 
   * igual    ( == )
   * desigual  (!=)
   * estrictamente igual (===)
   * estrictamente desigual  (!==)
   * mayor que ---menor que --- mayor o igual que ---menor o igual 
   */

  // operadores arismeticos    suma resta divicion modulo y esponenciacion

     console.log(2+2);     //suma
     console.log(2-2);      //resta
     console.log(2*2);    // multiplicacion
     console.log(2/2);          // division
     console.log(2%2);              // modulo
     console.log(2**2);               // exponenciacion


     // operadores de incremento y decremento
      var numero = 0;
     console.log(++numero);    // operador de incremento 

     // otro ejemplo es  poniendo el ++ despues de la variabler
     var otroNumero =2;
     console.log (otroNumero++);
     console.log(otroNumero);


     // el operador de decremento funciona iguaal que el de incremento 

     /**
      * operadores logicos 
      */
     //  AND      &&
     console.log(true && true);

       //    OR 



       // operador NOT

       console.log(!true);
       console.log(!false);
        
         
       // opeerador de cadena o de concatenacion( +  )    este trabaja con cadena de texto

       // operador condicional    ( condicion - ? - val1-:- val2 -) lo que hace es muy parecido al if pero resumido en una exprecion 

       console.log(2>3 ? "el numero es mayor":"el numero es menor");

       // operador de desectruturacion      lo que hace es obtener una propiedad especifica de un objeto

       var persona = {
         nombre: "andres",
         apellido: "azcurra"     
       }
       // el operador deve de ser definid en una variable

       var { nombre } = persona;
       console.log(nombre);
       console.log(persona);


       // si quiero sacar mas de una propiedad de un objeto   lo que esta dentro de la llave lo separa con coma

       var {  nombre , apellido}= persona;
       console.log ( nombre);
       console.log(apellido);

       // dentro de eso podes renombrar poniendo nombre : xyz  y luego tenes que llamarlo de la manera renombrada


       // hay tammbien un operador de desectruturacion para arreglos

       var arreglo = [1,2,3,4,5];
       var [primeraPosision]= arreglo;
       console.log(primeraPosision);