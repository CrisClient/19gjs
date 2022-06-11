// Functions

/**
 * 1. Delcaracion e invocacion de funciones
 * 2. Funciones con parametros
 * 3. Funciones con parametros opcionales o valores por defecto
 * 4. Funciones de retorno
 */

const isPalindrome = (str) => {

    let auxSinEspacios = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            auxSinEspacios += str[i];
        }

    }

    let auxStrReversed = "";
    for (i = auxSinEspacios.length - 1; i >= 0; i--) {
        auxStrReversed += auxSinEspacios[i];
    }

    console.log(auxSinEspacios);
    console.log(auxStrReversed);
    return auxSinEspacios === auxStrReversed ? true : false;

}


let palabra = prompt('Ingresa una palabra');

console.log(isPalindrome(palabra) ? 'Es palindromo' : 'No es palindromo');
