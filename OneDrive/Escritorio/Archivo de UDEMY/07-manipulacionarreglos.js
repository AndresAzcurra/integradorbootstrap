/**
 * manipulacion de arreglos
 */
// primer metodo para manipulacion de arreglos
// foreach

// aca nos va a enseñar como recorrer el arreglo

var letras = ["a" ,"b" ,"c","d", "e"];
 console.log(letras.length);          

for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log(element);
}

// enla forma anterios es un metodo de recorrer un arreglo pero dice que hay una forma mejor y es la siguiente

var letras = ["a" ,"b" ,"c","d", "e"];

 letras.forEach((elemento)=>{console.log(elemento)})

  // la sintaxis es letras.foreach((xxxx)=>{xxx}) 
  // forEach es una funcion y recibe como  parametro una funcion y en  este  caso se uso una funcion flecha ,

  letras.forEach((elemento)=>console.log(elemento))
  // la forma que se uso arriba es una manera de abreviar un poco mas la funcion eliminando las llaves y imprimiendo directamente el console.log
//------------------------------------------------------------------
/**
 * push , shift ,pop 
 */
// habla de mutabilidad     es un concepto de cambios 

 var letras = ["a" ,"b" ,"c","d", "e"];
// para agregar u elemento a este arreglo se usa la funcion   push y se usa de la siguiente manera
 letras.push("f");
 console.log(letras);

 // otra funcion mutable es shift
 letras.shift()                 // elimina el primer elemento y retorna algo
  console.log(letras);

 // lo que se puede hacer es almacenar el shift en una variable 
 //y quedaria asi   var primerelemento = letras.shift()
 
// la funcion pop hace lo mismo que shift pero con el ultimo elemento y tambien lo retorno  de la misma manera

//-------------------------------------------------------------


                 // funcion map      es un elemento inmutable   
 var estudiantes = ["andres " , "soledad","uriel" , "adriel"]
 var asistencias = estudiantes.map((nombre)=> {
     return {
         nombre: nombre,
         asistencia :false ,
     }
 })

   // cree una variable llamada asistencia para poder guardar lo ue me retorna la funcion map
 console.log(estudiantes);
 console.log(asistencias);
 console.log(estudiantes);

 //-------------------------------------------------------
 // aca vamos a ponner el mismo ejemplo pero esta vez vamos hacer queponga   un punto final a cada nombre.
 var estudiantes = ["andres " , "soledad","uriel" , "adriel"]
 var asistencias = estudiantes.map((nombre)=> `${nombre}.`)

   // cree una variable llamada asistencia para poder guardar lo ue me retorna la funcion map
 console.log(estudiantes);
 console.log(asistencias);
 console.log(estudiantes);


// tambien nos recuerda que las arrow funcion tienen inplictamente  los returt


// --------manipulacion de arreglos  map parte 2------
 var productos = [
     {nombre: "camisetas",precio:15},
     {nombre: "zapatillas " , precio: 20},
     {nombre: "pantalon", precio :25},
 ]

 var productosImpuestos = productos.map((producto) =>{
            return {
              ...producto,
              impuesto: .12
            }
 })
  var precio =  productos.map((producto)=>producto.precio)
 console.log(productos);
 console.log(productosImpuestos);
 console.log(precio);

 // -----------------------------   manipulacion de arreglos    filter   (inmutable)
 // es para poder filtrardatos en un arreglo  y se usa de la siguiente manera
 
 var estudiantes = [
   {nombre:"andres", edad: 39,matriculado: true},
   {nombre:"sole", edad: 38,matriculado: false},
   {nombre:"uriel", edad: 18,matriculado: false},
   {nombre:"adriel", edad: 14,matriculado: true},
   {nombre:"fito", edad: 5,matriculado: false},
   
 ]
 var filtrado=estudiantes.filter((estudiante)=>estudiante.edad >= 21 && estudiante.matriculado == true);
 console.log(estudiantes);
 console.log(filtrado);

 // -----------------------------   manipulacion de arreglos   reduce   (inmutable)

 // nos va ayudar a reducir todo un array a un solo valor

 var calificaciones = [4,5,9,10,10 ];
 var suma = calificaciones.reduce ((acumulador,calificacion ) =>acumulador+calificacion , 0)
 /* .reduce recibe 2 parametros .. la primera es la funciom y la segunda es (acumulador , calififcacion => acumulador +calificacion) y la segunda es el estado inicial del acumulador en este caso es el cero)*/
 console.log(calificaciones);
 console.log(suma);
 console.log(suma/calificaciones.length);
 // -------------------------------------------------
 var edades= [21,21,23, 43 ,21, 43,18,18,23,23]

 /**
  * salida
  * {
  *  21:3
  * 43:2
  * }
  * esa es la salida que nosostros necesitamosnen nuestro sofware
  */
 //  var resultado= edades.reduce(()=>{},{})
 var resultado= edades.reduce((acumulador,edad)=>{
     if(!acumulador[edad]) {
      acumulador[edad]=1 
     }   else {
      acumulador[edad] +=1
     }  
     return acumulador
 },{})
 console.log(edades);
 console.log(resultado);

 // _______________________________________------
 var ventas = [
   {nombre : "camiseta",precio: 15, totalVendido:10},
   {nombre : "zapatilla",precio: 150, totalVendido:8},
   {nombre : "pantalon",precio: 20, totalVendido:30},

 ]
 // debemos sacar el total de los procuctos que se a vendido
 var resultado= ventas.reduce((acumulador,producto)=>{
   let totalDeventas =producto.precio * producto.totalVendido;
   acumulador[producto.nombre]= `$ ${totalDeventas}`;
   return acumulador;
 },{})
 console.log(ventas);
 console.log(resultado);

// --_______--------------------------
var estudiantes = [
  {nombre:"andres", edad: 39,matriculado: true},
  {nombre:"sole", edad: 38,matriculado: true},
  {nombre:"uriel", edad: 18,matriculado: false},
  {nombre:"adriel", edad: 14,matriculado: true},
  {nombre:"fito", edad: 5,matriculado: false},
  
]
// tenemps que verificar la cantidad de alumnos que  an sido matriculado
var resultado = estudiantes
  .map((estudiante)=>estudiante.matriculado)
  .reduce((acumulador,item)=>{
    if(item){
 acumulador.matriculado +=1
    }else {
      acumulador.notmatriculado +=1
    }
    return acumulador
  },{matriculado: 0,notmatriculado: 0})

  console.log(estudiantes);
console.log(resultado);


//_____________manipulacion de arreglos 
//some  every

// elelemento some nos va a devolver algo si almenos un elemento dentro de un arreglo culple con una condicion espesifica mientras que every tiene qe cumplirlos todos los elementos


    // some
var numeros =[1,2,3,4,5,6,7,8,9,10];

// para verificar si en el arreglo anterior hay un numero par usando some ... y se utiliza de la siguiente manera

var resultado = numeros.some((numero) => numero % 2===0 )
console.log(resultado);

// el resultado de la iteracion anterior es true por que almenoos uno de los elementos es par 


   // every

   //---------------------------------------------------------
   /**
    * find      findindex
    */
   // find   busca un elemento que coincida con sierta condicion  y nos nos va retornar 
   //  findIndex        en base a  a una ccondicion nos va aretornar la posision del elemento en el array

     // find
   var clientes=  [
     {id :1 , nombre : "andres"},
     {id :2 , nombre : "sole"},
     {id :3 , nombre : "uriel"},
     {id :4 , nombre : "adriel"},
     {id :1 , nombre : "fito"},
   ]
   // vamos a buscar un unico elemento 
   var cliente = clientes.find((cliente)=>cliente.id === 1)
   var filter = clientes.filter((cliente)=>cliente.id === 1)
   var nombreCliente = clientes.find (()=> cliente.nombre ==="andres" );

   console.log(cliente);
   console.log(filter);
    console.log(nombreCliente);
   // arriba mostro la diferencia entre find y filter...uno imprime el primero que aparece y el filter aparece todos los que cumplen la funcion


                 // findIndex  
   

                 var clientes=  [
                  {id :1 , nombre : "andres"},
                  {id :2 , nombre : "sole"},
                  {id :3 , nombre : "uriel"},
                  {id :4 , nombre : "adriel"},
                  {id :1 , nombre : "fito"},
                ]
         var posision = clientes.findIndex  ((cliente)=>cliente.id ===2 ) ;
         console.log(posision);    
         console.log(clientes[posision]);
         // findindex os devuelve la posicion del elemento pedido


           //         includes
// es una funciomn que nos va a ayudar a determinar si en arreglo exite un elemento espesifico    y nos va devolver verdadero a falso 

var mascotas = ["perro" , "gato", "conejo"];
var resultado = mascotas.includes("gato");     // no recibe un objeto directamente pones plo que estas buscando
var otroresultado= mascotas.includes("gato" && "perro")
 console.log(resultado);
 console.log(otroresultado);

 console.log("andres".includes("a"));
 // include tambien busca si esa letra se encuentra en la palabra a filtrar

 // a continuacion vamos a hacer un ejercicio  emulando un pequelo busscador}
  var buscador = (parametro)=>{
    let clientes=  [
      {id :1 , nombre : "andres"},
      {id :2 , nombre : "sole"},
      {id :3 , nombre : "uriel"},
      {id :4 , nombre : "adriel"}, 
      {id :1 , nombre : "fito"},
    ]
    return clientes.filter((cliente)=>cliente.nombre.includes(parametro))
  }
  console.log(buscador("a"));


  //    join
    // join esun metodo que nos va permitir unir todos los elementos de un arreglo y convertirlo en un string a partir de esa union
    var elemento =[ "aire", "fuego", "agua","tierra"]
    var resultado=  elemento.join("_")
    console.log(resultado);
    // join puede o no recibir parametros y el parametro es el caracter con el que quieres separar el string que generaste
    var clientes=  [
      {id :1 , nombre : "andres"},
      {id :2 , nombre : "sole"},
      {id :3 , nombre : "uriel"},
      {id :4 , nombre : "adriel"},
      {id :1 , nombre : "fito"},
    ]
    console.log(clientes.join());
    //  con el ejemplo anterior lo que se desmostro es que no se puede hacer un array de objeto  utilizando el join


    // a continnuaciin nos da un ejemplo de como podemos hacer el join con un array de arreglo
    var clientes=  [
      {id :1 , nombre : "andres"},
      {id :2 , nombre : "sole"},
      {id :3 , nombre : "uriel"},
      {id :4 , nombre : "adriel"},
      {id :1 , nombre : "fito"},
    ]

    var scvGenerator = (array,separator=',')=>{
      let header=Object.keys(array[0]) .join(separator)
     let data = array.map((element)=>Object.values(element).join(separator))
     console.log(header);
     data.forEach(element=>console.log(element))        
    }
    scvGenerator(clientes);

    console.log(Object.values( {id :1 , nombre : "fito"}));
    console.log(Object.keys( {id :1 , nombre : "fito"}));
    /**
     * concat    sort     slice    splice
     * concat :   con esto podemos concatenar dos arreglos
     */
    var array1 =[1,2,3,4,5];   /// se creo dos qrreglos 
    var array2= [6,7,8,9,0];     // y lo que vamos a hacer es unirlos
  // vamos a generar un nuevo arreglo a partir de los dos anteriores

   var array3= array1.concat(array2);
   var array4=[...array1, ...array2]

   console.log(array1);
   console.log(array2);
   console.log(array3);
   console.log(array4);

   // nos aclara que esta no es la unica forma de concatenar arreglos 
   // se usa el spread operator ...son 3 ountos antes de cada arreglo como figura en el ejemplo de array4


   // sort : sirve para ordenar un arreglos

   var array1 =[1,2,3,4,5,6,7,8,9,0]; 

   console.log(array1.sort());


var meses= ['dic','ene','mar','feb']
console.log(meses.sort());

var array =[1,21,1000 ,30,4];
console.log(array.sort());
var ordenado= array.sort((a,b)=>a-b)  // para que sea ordenado
console.log(ordenado);

// splice  nos va ayudar a remover o modificar elementos de un array o al array en si  
var nombres =['andres','soledad' ,'uriel','pepo'];
nombres.splice(1);
console.log(nombres);



// splice lleva parametro ,como minimo 3 en el primer parametro indica a partir de que elemento comienza a eliminar , en segundo parametro indica el njumero de elemento queremos eliminar y en el tercer parametro podes poner lo que queress agregar en el parametro eliminado

var nombres =['andres','soledad' ,'uriel','pepo'];
nombres.splice(1,1);
console.log(nombres);


var nombres =['andres','soledad' ,'uriel','pepo'];
nombres.splice(1,1,'minguez');
console.log(nombres);

// slice  este metodo nos va retornar una copia mas pequeña del array
// lleva dos para metros ...el primer para metrro es la posisio inicial del corte y el segundo  parametro es la posision final del corte  .....o sea de donde hasta donde se corta ....aclara que la posision final es no incluyente
var nombres =['andres','soledad' ,'uriel','pepo'];
var resultado = nombres.slice(1,3);
console.log(resultado);
