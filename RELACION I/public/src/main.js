//EJERCICIOS 

console.log("Ejercicio 1")
const h1 = document.getElementById("h1Contenedor")
console.log(h1)

console.log("Ejercicio 2")
// const contenedorSecundario = document.getElementById("contenedorSecundario");
// const parrafo = contenedorSecundario.getElementsByClassName(".parrafo")
// console.log(parrafo)
const parrafos = document.querySelectorAll('#contenedorSecundario .parrafo');
console.log(parrafos);


console.log("Ejercicio 3")
const imgElement = document.querySelector('img[src="imagen.png"]');
console.log(imgElement);

console.log("Ejercicio 4")
const spansEnContenedorSecundario = document.querySelectorAll('#contenedorSecundario span');
console.log(spansEnContenedorSecundario);

console.log("Ejercicio 5")
const primerParrafoImportante = document.querySelector('.importante');
console.log(primerParrafoImportante);       

console.log("Ejercicio 6")
const parrafosEnContenedorPrincipal = document.querySelectorAll('#contenedorPrincipal p');
console.log(parrafosEnContenedorPrincipal);

console.log("Ejercicio 7")
const elementosConDataAtributo = document.querySelectorAll('[data-atributo="valor1"]');
console.log(elementosConDataAtributo);

console.log("Ejercicio 8")
const segundoParrafoImportante = document.querySelectorAll('.importante')[1];
console.log(segundoParrafoImportante);

console.log("Ejercicio 9")
const spansEnContenedor = document.querySelectorAll('.contenedor span');
console.log(spansEnContenedor);

console.log("Ejercicio 10")
const tercerParrafo = document.querySelectorAll('#contenedorPrincipal .parrafo')[2];
console.log(tercerParrafo);




