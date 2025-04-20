/* Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de color a negro */

/* Para el cudro azul */

const azul = document.getElementById("azul");
azul.addEventListener('click', function () {
    azul.style.backgroundColor = "black";
});

/* Para el cudro rojo */

const rojo = document.getElementById("rojo");
rojo.addEventListener('click', function () {
    rojo.style.backgroundColor = "black";
});

/* Para el cuadro verde */

const verde = document.getElementById("verde");
verde.addEventListener('click', function () {
    verde.style.backgroundColor = "black";
});

/* Para el cuadro amarillo */

const amarillo = document.getElementById("amarillo");
amarillo.addEventListener('click', function () {
    amarillo.style.backgroundColor = "black";
});

/* Crea una variable global que cambie de color dependiendo de la letra del teclado presionada (a, s, d) */