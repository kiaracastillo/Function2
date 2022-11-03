/*
Kiara castillo Magallanes
11/03/2022
Function E.
Week 11

Cree una función que tome una cadena y elimine todas las instancias de "#"
 de la cadena y devuelva la versión "limpia" sin los hashtags/octothorpes.

Escriba una página web para probar la función: un botón y una entrada, y un 
div. Cuando se presiona el botón, tome la entrada, use la función para eliminar
 los hashtags y muestre la cadena de resultados en la página.

*/




let dvClean = document.getElementById("cleanWord")
let inDirty = document.getElementById("dirtyWord")

function filter(){
    let clean=""
    let dirty = inDirty.value
    for (i=0;i<dirty.length;i++){
        if ('#' != dirty[i]){
            clean += dirty[i]
        }
    }
    dvClean.innerHTML = clean
}