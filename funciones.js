console.log('Buenas')

// Variables
let inputResultado = document.getElementById('resultado')
let botonCalcular = document.getElementById('calcular')



let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

function fechaIngresada() {
    const inputDia = document.getElementById('dia').value
    const inputMes = document.getElementById('mes').value
    const inputYear = document.getElementById('year').value
    let fecha = new Date(inputYear, inputMes - 1, inputDia)
    let diaIn = fecha.getDay()

    let mensaje = null

    switch (diaIn) {
        case 0: case 6:
            mensaje = ', no es dia laboral. A gusto alv'
            break
        default:
            mensaje = ', es día laboral. Hay que alistarse. Vámonos al work'
            break
    }
    inputResultado.value = (`${fecha.toLocaleDateString('es-mx', { weekday: 'long' })} ${mensaje}`)
}

botonCalcular.addEventListener('click', fechaIngresada)