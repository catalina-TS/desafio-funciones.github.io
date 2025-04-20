/* 4.1 Dentro del script agrega el evento para que al hacer click a cada uno de los divs, este cambie de color a negro */

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

/* 4.2 Crea una variable global que cambie de color dependiendo de la letra del teclado presionada (a, s, d) */

document.addEventListener("keydown", function(event) {
    const keyDiv = document.getElementById("key");
    const contenedor = document.getElementById("contenedor");
    
    if (event.key === "a" ){
        keyDiv.style.backgroundColor = "pink";
    } else if (event.key === "s" ){
        keyDiv.style.backgroundColor = "orange";
    } else if (event.key === "d" ){
        keyDiv.style.backgroundColor = "skyblue";
    }

/* 4.3 Crear nuevos divs */
    else if (event.key === "q"){
        crearDiv("purple");
    }else if (event.key === "w"){
        crearDiv("gray");
    }else if (event.key === "e"){
        crearDiv("brown");
    }
})

function crearDiv(color) {
    const contenedor = document.getElementById("contenedor")
    const nuevoDiv = document.createElement ("div");

    /* Asignar características al nuevo div */
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.margin = "10px";
    nuevoDiv.style.border = "2px solid black";

contenedor.appendChild(nuevoDiv)

}



