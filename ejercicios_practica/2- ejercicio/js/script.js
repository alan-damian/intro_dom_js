"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener cada uno de los botones,
luego a cada uno agregar la clase "agua"

*/

const boton1 = document.querySelector("#boton1");
boton1.textContent = "PEGAR";         

const boton2 = document.querySelector("#boton2");
boton2.textContent = "COPIAR";

const boton3 = document.querySelector("#boton3");
boton3.textContent = "CORTAR";

let botonclass = document.getElementsByClassName("btn");

console.log(botonclass = "btn", "agua");
