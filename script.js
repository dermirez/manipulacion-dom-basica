const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#sumar')
const pResultado = document.querySelector('#resultadoSumar')

h1.innerHTML = "Muchos años después, <br> frente al pelotón de fusilamiento";

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    var sumCalculo = Number(input1.value) + Number(input2.value);
    console.log("Resultado= " + sumCalculo);
    pResultado.innerHTML = "La suma da un total de: " + sumCalculo;
    event.preventDefault();
}

