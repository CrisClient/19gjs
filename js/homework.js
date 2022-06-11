/**
 * Funcion que pida una palabra al usuario
 * Invierta la palabra
 * y la retorne en un alert
 * reversedString('hola') -> 'aloh' 
 */

function invertirString() {
    let strUser = prompt('Dame una palabra', 'str').toLowerCase()
    let strReversed = ''

    for (i = strUser.length - 1; i >= 0; i--) {
        strReversed += strUser[i]
    }

    return strReversed
    alert(invertirString)

}


/**
 * Funcion que pida 3 numeros como parametro
 * 2 numeros obligatorios y 1 opcional con valor de 3
 * Arroje la suma de esos 3 numeros
 * Posibles resultados
 * -> addThreeNumbers(3,4,5) -> 12
 * -> addThreeNumbers(3,4) -> 10
 * -> addThreeNumbers(3) -> 'Faltan datos'
 * -> addThreeNumbers() -> 'Faltan datos'
 */


/**
 * Funcion que pida al usuario los grados Centigrados en su localidad
 * Convertirlos a grados fahrenheit
 * Arrojar un alert con el resultado
 * -> convertTemp(25) -> La temperatura es de 77 ºF
 * -> convertTemp() -> 'Faltan datos'
 */

function temperatura() {
    let celsius = prompt('Temperatura Actual', 100)
    if (celsius === null) {
        alert('faltan datos')
    } else {
        let far = parseInt(celsius) * 9 / 5 + 32
        alert(`La temperatura actual es de ${far} °F`)
    }
}



/**
 * Funcion que imprima las tablas del 1 al 10
 */



/**
 * Funcion que pida al usuario un numero (N) entre 1 y 100 
 * Mandar un alert con suma de 1 a N
 * Valor por defecto 3
 * addNumberLimit() -> 6
 * addNumberLimit(4) -> 10
 * addNumberLimit(5) -> 15
 */




/**
 * Escribir una funcion
 * Reciba como parametro Un array de ciudades
 * Retornar las ciudades capitaslizadas
 * capitalize(['méxicO','RIo', 'Los AngelEs'])
 * -> ['México','Rio', 'Los Angeles']
 * 
 */


 const str = ['méxicO', 'RIo', 'Los AngelEs']

 const capitalize = (str) => {
     let arr = []
 
     str.forEach(element => {
         const lower = element.toLowerCase();
         let strCap = element.charAt(0).toUpperCase() + lower.slice(1);
         arr.push(strCap)
     });
     return arr
 
 }
 capitalize(str)