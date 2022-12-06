//Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta,
//multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los
//números

function calculo(entero1,entero2){
    let suma = entero1 + entero2 
    let resta = entero1 - entero2
    let multiplicacion = entero1 * entero2
    let division = entero1 / entero2
console.log(' La suma de los enteros es: ' + suma,'\n','La resta de los enteros es: ' + resta,'\n', 'La multiplicacion de los enteros es: ' + multiplicacion,'\n','La division de los enteros es: ' + division  )
}

calculo(5,5)