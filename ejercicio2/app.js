//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv1 = document.createElement("div");

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv2 = document.createElement('div');
const newP2 = document.createElement('p');
newDiv.appendChild(newP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const newDiv3 = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const newP3 = document.createElement('p');
    newP3.textContent = `Este es el párrafo número ${i}.`;
    newDiv3.appendChild(newP3); 
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const newP4 = document.createElement('p');
newP4.textContent = 'Soy dinámico!';

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const newH2 = document.querySelector('.fn-insert-here');
newH2.textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

apps.forEach(app => {
    const li = document.createElement('li'); // Crear un nuevo li
    li.textContent = app; // Asignar el texto del array al li
    ul.appendChild(li); // Añadir el li a la ul
});

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let remove = document.querySelectorAll(".fn-remove-me");
remove.classList.remove();

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const newP8 = document.createElement('p');
newP8.textContent = 'Voy en medio!';

const firstDiv = document.querySelector('div');
const secondDiv = firstDiv.nextElementSibling;

firstDiv.parentNode.insertBefore(newP8, secondDiv);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let insert = document.querySelectorAll(".fn-insert-here");
insert.classList.insert('Voy dentro!'); 