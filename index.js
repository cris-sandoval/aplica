const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const operador = document.querySelectorAll('.operador')
const botonesNumeros = document.querySelectorAll('.numero')

const display = new Display(displayValorActual, displayValorAnterior)

botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() =>  display.agregarNumero(boton.innerHTML))
})