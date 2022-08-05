let cambiarSaludo = prompt("saluda de nuevo");
let rellenoSaludo= document.getElementById("saludo");
rellenoSaludo.textContent = cambiarSaludo;
console.log(cambiarSaludo);
let rellenoClassaludo=document.getElementById("pep");
rellenoClassaludo.value= cambiarSaludo
console.log(rellenoClassaludo);


/* objetos */
 let personaje ={
     nombre: "tony strark",
     codeName: "iron man",
     vivo: false ,
     edad: 40 ,
     cordenadas:{
         lat:33,
         long: 24
     },
     trajes:["mark 1","mark 5","hulkbuster"],
     direccion:{
         calla: 11,
         altura: 3517,
         localidad: "berazategui"
     }
 };
 console.log(personaje);
 console.log(personaje.nombre);
 console.log(personaje ["nombre"]);
