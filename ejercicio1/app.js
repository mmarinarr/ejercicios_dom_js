//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme'); 
console.log(button); 

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector('.pillado'); 
console.log(pillado); 

//1.3 Usa querySelector para mostrar por consola todos los p
const p = document.body.querySelectorAll("p");
console.log(p); 

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon); 

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const testMe = document.querySelectorAll('data-function="testMe"');
console.log(testMe); 

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"
const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter); 