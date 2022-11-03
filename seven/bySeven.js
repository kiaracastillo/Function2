/*
Kiara castillo Magallanes
11/03/2022
Function E.
Week 11
 
Cree una aplicación que con una entrada y un botón. Cuando el usuario haga clic
 en el botón, actualice un div en la página para decirle al usuario si lo que el 
 usuario escribió en la entrada es divisible por 7 o no. Use una función separada 
 de la función onclick para discernir si es divisible. Esta función debe devolver
  verdadero si es divisible o falso si no lo es.
*/




let inNumber = document.getElementById("number")
let dvResult = document.getElementById("result")

function divisibleBySeven(){
    if (inNumber.value % 7 == 0){
        dvResult.innerHTML = "True"
    }else{
        dvResult.innerHTML = "False"
    }
}