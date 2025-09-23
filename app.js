// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let maximoValor = 10;

let posicionAleatoria = Math.floor(Math.random()*maximoValor)+1;

let listaMisAmigos = [];

console.log(posicionAleatoria);

function agregarAmigo() {
    let nombresDeAmigos = document.getElementById('amigo').value;
    listaMisAmigos.push(nombresDeAmigos);
    
    console.log(nombresDeAmigos);
    console.log(listaMisAmigos);
    limpiarImput();
}

function limpiarImput() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    
}