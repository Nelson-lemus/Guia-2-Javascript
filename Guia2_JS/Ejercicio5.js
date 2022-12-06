//Crear una function que tenga 2 parámetros y asignarle números enteros para calcular cual número es
//el mayor.

function mayorMenor(num1,num2){
if(num1 > num2){
console.log(num1+ ' es mayor que ' + num2)
} else if(num1 < num2){
    console.log(num2+ ' es mayor que ' + num1)
} else {
    console.log('Los numeros son iguales')
}
}

mayorMenor(100,100)