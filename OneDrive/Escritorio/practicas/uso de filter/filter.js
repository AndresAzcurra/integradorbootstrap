const numeros =[1,2,3,4,5];
const par=  numeros.filter(item=>item % 2 == 0);
console.log(par);

/*  arriba filtre  la lista y la guarde en la consatnte rta y la condicion era que sean numeros par */
const inpar=  numeros.filter(item=>item % 2 !== 0);
console.log(inpar);
/** en este otrp ejemplo guarde los numero inpares  */


/**           aca vamos a jugar con array de objetos */

const orders =[
    {
        customerName:'nicolas',
        total: 60 ,
        delivered: true
    },
    {
        customerName:'Zulema',
        total: 120 ,
        delivered: false
    },
    {
        customerName:'santiago',
        total: 180 ,
        delivered: true
    },
    {
        customerName:'valentina',
        total: 240 ,
        delivered: true
    }
];


const item =orders.filter(item=>{
    if(item.delivered === true){
        return true;
    }else{
        return false;
    }
})
console.log(item);
const noitem= orders.filter(item=>{
    if(item.delivered == false){
        return true;
    }else {
        return false;
    }
})
console.log(noitem);
console.log(orders);

/** arriba lo que se izo fue preguntar si delivered es true o false y en cada caso lo que se retornava era el true (este true es el que lo agrega a la nueva variable ) */



/**aca abajo esta lo mismo pero mas abreviado...esta vez lo guarde en la constante newitem */

const newitem =orders.filterz(item=>item.delivered === true)
console.log(newitem);

/**aca es otro ejemplo pero esta vez con total mayor a 140 */
const numeroalto = orders.filter(item=>item.total>150 );
console.log(numeroalto);


