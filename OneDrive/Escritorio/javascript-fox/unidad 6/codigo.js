function resolver1(){
    var diez = "hola";
    for (let index = 0; index < 10; index++) {
       console.log (diez)
    }
}
function resolver2(){
   
    for (let index = 0; index < 100; index++) {
        console.log(index)
        
    }
}
 function resolver3(){
    for (let index = 0; index < 40; index++) {
        if (index % 2 == 1){
            let suma = index;
            console.log(suma + suma);
            
        }
        
    }
 }
 /*   el ejercicio de numero 3 esta claramente mal ...lo dejo asi hasta ver que puede ser el error*/
 


function resolver4(){
    var   mostrar4 = Number(prompt("ingrese un valor "));
    for (let index = 1; index <= mostrar4; index++) {
        console.log (index)
        
    }
}
function resolver5(){
    let valor1 = Number(prompt("ingrese el valor 1"));
    let valor2 =Number(prompt("ingrese el valor 2"));
    let valor3 =Number(prompt("ingrese el valor 3"));
    let valor4 =Number(prompt("ingrese el valor 4"));
    let valor5 =Number(prompt("ingrese el valor 5"));
    let valor6 =Number(prompt("ingrese el valor 6"));
    let valor7 =Number(prompt("ingrese el valor 7"));
    let valor8 =Number(prompt("ingrese el valor 8"));
    let valor9 =Number(prompt("ingrese el valor 9"));
    let valor10 =Number(prompt("ingrese el valor 10"));
    let sumaTotal = valor1 +valor2 +valor3 +valor4 +valor5 +valor6 + valor7 + valor8 + valor9 + valor10;
    console.log(sumaTotal);
     

}
/* el ejercicio anterior lo tengo que ver bien por que lo realice sin ciclos de repeticion y no se si la consigna es hacerlo asi*/
function resolver6(){
    let prompt6 =Number(prompt("ingrese el valor deseado"));
    for (let index = 0; index < prompt6; index+= 2) {
        console.log(index);
        
    }
        
    }

    function resolver7() {
        let prompt7 =Number(prompt("ingrese el valor deseado"));
        for (let index = prompt7; index >=1; index--) {
            console.log(index);
            
        }
    }
    function resolver8(){
        let tabla = 9;
        for (let index = 0; index < (tabla +2); index++) {
            console.log(`Nueve por ${index} = `+index * tabla);
            
        }

    }
    function resolver9() {
        let altura1 = Number(prompt("ingresa tu altura"));
        let altura2 = Number(prompt("ingresa tu altura"));
        let altura3 = Number(prompt("ingresa tu altura"));
        let altura4 = Number(prompt("ingresa tu altura"));
        let altura5 = Number(prompt("ingresa tu altura"));
        let altura6 = Number(prompt("ingresa tu altura"));
        let promedio = (altura1 +altura2 +altura3 + altura4 +altura5 + altura6)/6  ;
        console.log("la altura promedio es = "+ promedio.toFixed(2));
    }
    function resolver10() {
        let d =  Number(prompt("ingrese un numero del 1 al 7 para definir dia de la semana","1-2-3-4-5-6-7"));
        switch (d) {
            case 1:
                alert("hoy es lunes")
                
                break;
            case 2:
                alert("hoy es martes")
                
                break;
            case 3:
                alert("hoy es miercoles")
                
                break;
            case 4:
                alert("hoy es jueves")
                break;
            case 5:
                alert("hoy es viernes")
                break;
            case 6:
                alert("hoy es sabado")
                break;
            case 7:
                alert("hoy es domingo")
                break;
        
            default:alert("Debe de ingresar un numero por favor")
                break;
        }
    }
    /**Aca mefalta resolver el ejercicio 11 por que no se bien que es lo que hay que hacer */

    function resolver12_1() {
        document.write(" <h1>cuadrado lleno</h1><pre> ***** </pre><pre> ***** </pre><pre> ***** </pre><pre> ***** </pre><pre> ***** </pre>")
        
    }
    function resolver12_2(){
        document.write(" <h1>Piramide izquierda</h1><pre> * </pre><pre> ** </pre><pre> *** </pre><pre> **** </pre><pre> ***** </pre>")
    }
    function resolver12_3(){
        document.write(" <h1>Cuadrado hueco</h1><pre> ***** </pre><pre> *   * </pre><pre> *   * </pre><pre> *   * </pre><pre> ***** </pre>")
    }

