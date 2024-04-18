//Importamos el arreglo animales desde el animales.js
import { animales } from "./animales.js";

//Creamos una funcion para Mostrar los animales
function mostrarAnimales(animales) {
  //Instanciamos desde el HTML lista de animales
  const listaDeAnimales = document.getElementById("listaAnimales");
  listaDeAnimales.innerHTML = "";

  //Recorremos el arreglo animales con el metodo forEach
  animales.forEach((animal) => {
    //Creamos el elemento div
    const animalElement = document.createElement("div");
    //Creamos la clase del elemento
    animalElement.classList.add("animal");

    if (animal.peligroExtincion) {
      animalElement.classList.add("enPeligro");
    }

    animalElement.innerHTML = `
        <h3>${animal.nombre}</h3>
        <p>Especie: ${animal.especie} </p>
        <p>Ubicacion: ${animal.ubicacion} </p>
    `;

    //le estoy diciendo animalElement se un elemento de listaDeAnimales
    listaDeAnimales.appendChild(animalElement);
  });
}

// document.querySelectorAll("button").forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Funciono");
//   });
// });

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", () => {
    //alert("Funciono");
    if (button.id == "Todos") {
      mostrarAnimales(animales);
    } else {
      const animalesFiltrados = animales.filter(
        (animal) => animal.especie == button.id
      );
      mostrarAnimales(animalesFiltrados);
    }
  });
}

window.onload = () => {
  mostrarAnimales(animales);
};
