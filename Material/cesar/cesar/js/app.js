//variables
const rangeInput = document.getElementById('number');
const rangeValue = document.getElementById('number-value');
const solucion = document.getElementById('solucion');
const run = document.getElementById('run');
const frase = document.getElementById('frase');
const alfabeto="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚ@#$%^&*()_+|~`-={}[]:;'<>?,./"

//eventos
rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
});


/*
    cifra una cadena usando una cadena de entrada un paso 
*/
function cifrar(cadena,paso){
    let resultado="";
    return resultado;
}

