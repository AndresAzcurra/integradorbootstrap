const firstName = document.getElementById('nombre');
const button = document.getElementById('nombrebutton');

button.addEventListener('click',()=>{
    if (firstName.value.length == 0){
        alert('el campo no puede  estar vacio');
    }else {
        alert('hola '+ firstName.value)
    }
});