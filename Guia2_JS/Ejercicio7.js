//Crear una fuction que calcule la edad de una persona en base a su año de nacimiento y fecha actual
//podrá hacer uso de métodos JavaScript (DATE,getDate,getFullYear)para realizar el cálculo.

function calcularEdad(dia,mes,anio){
let fechaActual = new Date();
let edad = fechaActual.getFullYear() - anio
let mesesFaltantes = (fechaActual.getMonth()+1) - mes;
let diasFaltantes = fechaActual.getDate() - dia;

if (mesesFaltantes < 0) {
    edad = edad - 1;
} else if (diasFaltantes < 0 && mesesFaltantes == 0){
    edad = edad - 1;
}
console.log(edad)
}

calcularEdad(21,08,1983)