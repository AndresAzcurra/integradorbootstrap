
let countries = ['estados unidos',
                  'india','turkey',
                   "argentina","uruguay"];
countries.sort();
countries.forEach(function(item) {
    let o=document.createElement("option");
    o.text=item;
    o.value=item;
    slctCountries.appendChild(o);
});
/**  aca abajo muestra comoagregar un elemento al dom */
window.onload=function(){
    var boton = document.createElement("button");
    boton.innerHTML="crear elemento";
    boton.setAttribute("id","btn")

     document.body.appendChild(boton);

     /** y aca abajo muestra como borrar ese elemento con removeChild */

     var btn = document.getElementById("btn");
     btn.onclick =function(){
         document.body.removeChild(btn)
     }

}

