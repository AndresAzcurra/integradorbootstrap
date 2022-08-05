let radios = document.getElementsByName('color');

for ( let i=0; i < radios.length ; i++){
    radios[i].onclick= function(){
        let target =document.body;
        target.style.backgroundColor=radios[i].value;
        console.log(radios);
        
    }
    
}
console.log(radios.length);