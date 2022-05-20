/**
 * CICLOS
 */

const koders = 'Hola Koders'


/**
 * 'Hola Koders'
 * Cuantas vocales existen
 */

 let vocales = /([aeiouAEIOU])/gi; 
 console.log(`${koders} tiene ${numerOfVocales.length} Vocales`)

/**
 * 'Hola Koders'
 * Cuantos caracteres son
 */

let length1 = koders.length;
console.log(`Son ${length1} Caracteres`)

/**
 * 'Hola Koders'
 * Cortar el string en 2 strings
 * 'Hola' 'Koders'
 */

 let pattern1 = " ";
 let result3 = koders.split(pattern1, 2);
 console.log(result3)

 /**
 * 'Hola Koders'
 * Reemplazar todas las Vocales por *
 * -> "h*l* k*d*rs"
*/

let result4 = koders.replace(vocales, "*")
console.log(result4)
