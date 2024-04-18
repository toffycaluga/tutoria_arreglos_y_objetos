// importamos los datos desde animales.js
import animales from "./animales.js";

// creamos una funcion para manipular el DOM y asi poder mostrar dinamicamente los resultados
function mostrarAnimales(animales) {
    // almacenamos el elemento con id listaAnimales
    const contenedor = document.getElementById('listaAnimales');
    contenedor.innerHTML = '';
    animales.forEach(animal => {
        1
        const animalElement = document.createElement('div');
        animalElement.classList.add('animal');
        if (animal.peligroExtincion) {
            animalElement.classList.add('enPeligro');
        }
        animalElement.innerHTML = `
            <h3>${animal.nombre}</h3>
            <p>Especie: ${animal.especie}</p>
            <p>Ubicación: ${animal.ubicacion}</p>
        `;
        contenedor.appendChild(animalElement);
    });
}

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", (event) => {
        filtrarEspecie(button.id);
    });
});

function filtrarEspecie(especie) {
    console.log("funciono");
    if (especie == 'Todos') {
        mostrarAnimales(animales);
    } else {
        const filtrados = animales.filter(animal => animal.especie === especie);
        mostrarAnimales(filtrados);
    }
}

window.onload = () => {
    // mostrarAnimales(animales.slice(0, 3));  // Solo los primeros 3 para destacados
    filtrarEspecie('Todos');  // Muestra todos inicialmente
};
