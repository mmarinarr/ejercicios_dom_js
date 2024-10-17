//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li'); //
    li.textContent = country;
    ul.appendChild(li);
});

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let remove = document.getElementsByClassName('.fn-remove-me');
remove.classList.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');

const ul2 = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li'); //
    li.textContent = car;
    ul2.appendChild(li);
});

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
countries2.forEach(country2 => {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = country2.title;

    const img = document.createElement('img');
    img.src = country2.imgUrl;

    div.appendChild(h4);
    div.appendChild(img);
});

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const removeButton = document.createElement('button');
removeButton.textContent = 'Eliminar último elemento';
container.appendChild(removeButton);

removeButton.addEventListener('click', () => {
    const divs = container.querySelectorAll('div');
    if (divs.length > 0) {
        const lastDiv = divs[divs.length - 1];
        lastDiv.remove();
    }
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const removeButton2 = document.createElement('button');
removeButton2.textContent = 'Eliminar este elemento';

removeButton2.addEventListener('click', () => {
    div.remove();
});

div.appendChild(removeButton2); 
container.appendChild(div); 
