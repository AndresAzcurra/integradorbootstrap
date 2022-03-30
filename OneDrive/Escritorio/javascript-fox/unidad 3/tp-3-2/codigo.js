/*  3- a)    Realizar un Programa en JavaScript que resuelva los siguientes problemas (los valores deben ser asignados por ustedes):

superficie de un rectángulo
superficie de un triangulo
superficie de un circulo */
document.write ("<h4> 3 -b </h4>  ")
  // superficie del rectangulo


var ladoRec = Number(prompt("ingrese la medidda del lado del rectangulo"));
var altRec = Number(prompt("ingrese la medidda de la altura del rectangulo"));
var superRec = ladoRec + altRec;
alert ( "la supreficie del rectangulo es : " + superRec)

// superficie de un triangulo

var baseTriangulo = Number(prompt("Ingrese medida de base del triangulo","ejercicio 3 -b"));
var altTriangulo = Number(prompt("Ingrese medida de altura del triangulo","ejercicio 3 -b"));
var superficieTriangulo = baseTriangulo *altTriangulo / 2 ;
alert ("la supreficie del triangulo es  :" + superficieTriangulo);

// superficie de un circulo 

var diametroCirculo = Number(prompt("Ingrese el diametro del circulo","ejercicio 3 -b"));
var radio = diametroCirculo /2 ;
var superficieCirculo = 3.14 * radio ;
alert ("la supreficie del circulo es  :" + superficieCirculo);

/*  3- b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. Mostrar los resultados. */

var num1 = 15 ;
var num2 = 20;
var num3 = 70 ;
// procucto
var producto = num1 * num2 *num3
 document.write ("El producto es :"+ producto) 
 document.write ("<br>")

 // suma
 var suma =  num1 + num2 + num3;
 document.write ("La suma es : " + suma )
 document.write ("<br>")

 // promedio
 var promedio = suma / 3;
 document.write ( "El promedio es  :" + promedio)
 document.write ("<br>")
 document.write ("<h4> 3 -c </h4>  ")

 /*3- c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un cliente desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 5 artículos los cuales tendrán sus nombres y valores, luego mostrar el descuento aplicado mas el total final */

 var articuloA = 3800;
 var articuloB = 2400;
 var articuloC = 7900;
 var articuloD = 1200;
 var articuloE = 4500;
 var cien = 100;
 var quince = 15;
  

 var totalDeproductos = articuloA +articuloB +articuloC + articuloD + articuloE;
 var descuentoAplicado = totalDeproductos * quince / cien ;
 var totalFinal = totalDeproductos - descuentoAplicado;


 document.write( "El descuento apicado es :" + descuentoAplicado)
 document.write ("<br>")

 document.write ("El total final es:" + totalFinal);
 document.write ("<br>");

 /* 3- d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, asumiendo que la unidad cambiaría es un dato desconocido. */
 document.write ("<h4> 3 -d </h4>  ")
   var valorPeso = 450000
   var dolar= 109.51      // precio oficial 17-3-2022
      
   var equivalencia = valorPeso / dolar;
   document.write("La equivalencia es : " + equivalencia.toFixed(2) + " a valor del dolar oficial")

   // 3- e  Un  cliente realizo una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo que dado el importe de una factura calcular el valor correspondiente al IVA.

var iva = 0.21 
var productoE = Number(prompt("Ingrese el valor de del producto ", "Ejercicio 3-e")) 

 var valorIva =  productoE * iva ;
  alert("El valor del iva es :"+ valorIva);
