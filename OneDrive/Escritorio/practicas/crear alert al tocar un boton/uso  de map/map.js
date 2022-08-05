// const numbers = [1,2,3,4];
// // for (let index = 0; index < numbers.length; index++) {
// //     numbers[index]= numbers[index] +2;
    
// // }
// // console.log(numbers);


// /** arriba lo que hice fue usar un for tradicional para recorrer un array  y sumarle a cada uno 2 ,pero de esta manera el array original muto ...lo que se debe de usar en realidad es un map para que el array original no mute  */
// const nuevoNumber= numbers.map(item=>{
//     return item +2;
// })
// console.log(nuevoNumber);
// // aca arriva se comento lo otro y se uso el punto map para realizar el mismo resultado

// const otroNuevoNumber = numbers.map(item =>item *2)
// console.log(otroNuevoNumber);
/** arriv ALO QUE HICE FUE  USAR UN METODO MAS SINPLICADO DEL MAP */
const orders = [
    {
        customerName: 'nicolas',
        total: 60 ,
        delivered: true ,

    },
    {
        customerName: 'zulema',
        total: 120 ,
        delivered: false,
    },
    {
        customerName: 'santiago',
        total: 180 ,
        delivered: true ,
    },
    {
        customerName: 'valentina',
        total: 240 ,
        delivered: true ,
    }
]

const names =orders.map(item=>item.customerName);
console.log(names);
console.log("-".repeat(50));
const totals =orders.map(item=>item.total *2);
console.log(totals);