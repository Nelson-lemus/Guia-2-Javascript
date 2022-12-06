//Calcular el aumento de trabajador tomando en cuenta la
//tabla de categorías de aumento. Para este ejercicio
//deberá de asignar las siguientes variables: Nombre,
//Salario, categoría y aumento. Deberá demostrar en
//consola los datos del empleado y el aumento salarial.

let aumento;
let salarioTotal;

function aumentoEmpleado(nombre,salario,categoria,){
    switch (categoria) {
        case 'A':
             aumento =  (salario * 0.15)
             salarioTotal = salario + aumento
            break;
        case 'B':
             aumento =  (salario * 0.30)
             salarioTotal = salario + aumento
            break;
        case 'C':
             aumento =  (salario * 0.10)
             salarioTotal = salario + aumento
            break;
        case 'D':
             aumento =  (salario * 0.20)
             salarioTotal = salario + aumento
            break;
        default:
            return console.log('Esta categoria no existe')
            break;
    }
    console.log(' Nombre del empleado: ' + nombre,'\n','Categoria: ' + categoria ,'\n','Aumento salarial: $' + aumento + ' dolares','\n','Salario con aumento: $' + salarioTotal + ' dolares')
}

aumentoEmpleado('Lucas', 700, 'B')