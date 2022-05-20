/**
 * Ejercicio de covercion de grados °C a °F
 */

 let celsius = prompt('Temperatura Actual', 100)
 if(celsius === null ){
     console.log('Temperatura Incorrecta')
 } else {
     let far = parseInt(celsius) * 9/5 + 32
     console.log(`La temperatura actual es de ${far} °F`)
 }