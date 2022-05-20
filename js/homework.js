
// Exercise switch
/**
 * 
    En el archivo weather.js
    Pedir al usuario que ingrese como esta el clima en su ciudad
    Opciones
        a. Soleado
        b. Lluvioso
        c. Nevando
        d. Nublado
    Pedir la temperatura aproximada en ºC
    Imprimir en consola un descripción acorde al estado del día y la temperatura de ºF
    P.ej: En tu ciudad, el día está “Soleado” con una temperatura de 100ºF
 *
 */




/**
 * Estudiar métodos de String
 * Elergir 1 para poder presentar en clase
 * https://www.programiz.com/javascript/library/string
 * https://www.w3schools.com/jsref/jsref_obj_string.asp
 */


let celsius = parseInt( prompt('Por Favor ingresa la temperatura de donde vives en grados °C', 100))
let clima = prompt('Elige el Clima de tu ciudad. a) Soleado. b) Lluvioso. c) Nevado. d) Nublado.')
let far = parseInt(celsius) * 9/5 + 32


switch (clima) {
    case "a":
        console.log(`El Clima de donde vives es Soleado con una temperatura de ${far} °F`)
        break
    case "b":
        console.log(`El Clima de donde vives es Lluvioso con una temperatura de ${far} °F`)
        break
    case "c":
        console.log(`El Clima de donde vives es Nevado con una temperatura de ${far} °F`)
        break
    case "d":
        console.log(`El Clima de donde vives es Nublado con una temperatura de ${far} °F`)
        break
    default:
        console.log('solicitud no valida')
        break
}





