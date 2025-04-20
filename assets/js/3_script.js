/* 3. Se tiene como base el siguiente ejercicio que cambia el color de fondo del elemento HTML al hacerle click */

/*   function pintar() {
     ele.style.backgroundColor = 'yellow';
   }
   const ele = document.getElementById("ele1");
   ele.addEventListener("click", pintar); 
   */


/* 3.2 Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función */

/* function pintar(elemento) {
     elemento.style.backgroundColor = 'yellow';
   }

   const ele = document.getElementById("ele1");
   ele.addEventListener("click", function() {
     pintar(ele);
   });
*/


/* 3.3 Modifica el código anterior para poder pasarle un color como argumento a la función pintar. El color debe ser verde por defecto, al hacer click en el párrafo se debe pasar a amarillo como color*/

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

ele.addEventListener("click", function () {
    pintar(ele, 'yellow');
});


