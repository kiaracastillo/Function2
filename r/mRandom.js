/*
Kiara castillo Magallanes
11/03/2022
Function E.
Week 11

Cree una función que genere y devuelva un número entero aleatorio entre 0 y 10.
Escriba una página web para probarla con un botón que, al hacer clic, ejecuta una 
función que: - Utiliza esa función para generar un número aleatorio. - Muestra ese
 número en la pantalla. Su aplicación final debe tener dos funciones: una para 
 hacer el número aleatorio y otra para manejar el clic.
*/

dvNumber = document.getElementById("randomNumber")

function generateRandom(){
    dvNumber.innerHTML = Math.floor(Math.random() * 10)
}
