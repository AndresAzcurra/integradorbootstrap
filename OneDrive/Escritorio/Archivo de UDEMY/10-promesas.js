/**
 *                   promesas
 */
  const getData=(error) => new Promise((resolve , reject)=>{
    if (!error){
        setTimeout(() => {
            resolve({
                nombre:'Andres',
                apellido:'Azcurra',
                apodo:'Papu',
            });
        }, 3000);
        
    }else {
        reject('no pudimos obtener los datos ')
    }
      });
      // laas promesas se resuelven con then  y catch
      console.log('inicio');

      getData(true)
       .then((data)=>{
            console.log(data);
       })
       .catch((error)=>{
       console.log(error);
       });
       console.log('fin');
 // .then()     .catch()   el primero se  utiliza para cuando no hay error y el segundo para cuando hay un error 
 // estos dos metodos reciben un callback







   
  