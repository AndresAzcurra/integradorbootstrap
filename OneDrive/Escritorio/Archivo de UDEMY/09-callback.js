//  callback  es un asincronismo que se usaba antes en javascript 
//  es una funcion que se pasa como argumento a otra fumcion
// es una tecnica que nos permite llamar una funcion a travez de otraa funcion una vez que la funcion padre se alla terminado los procesos

const lasuma = (a,b )=>{
    return a+b 
}
var resultado =lasuma(1,2);
console.log(resultado); 
//arriba  se dio un ejemplo de una funcion normal

// ahora se hace un ejemplo con callbacks

const suma = (a,b, cb )=>{           // aclaro que cb es la abreviatura de callbacks
    cb ( a+b )
}
const imprimir= (data)=>{
    console.log(data)
}
suma(1,2,imprimir)
//  esta era la manera que tenia antes para hacer un caaback  ahora pone un ejempl actualizado
// _______________________________________
 const getData= (cb)=>{
     setTimeout(() => {
        cb({
            nombre:'andres',
            apellido:'azcurra',
        })
         
     }, 3000);
     

 }
 const impimirData= (data)=>{
      console.log(data);
 }
getData(impimirData)

// esplico todo esto de callback para por ultimo aclarar que ya no se utilisa .....y lo que se esta utlizando son las promesas