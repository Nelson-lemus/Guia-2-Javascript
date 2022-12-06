//Realizar una fuction para una tienda de coches en donde se deberá calcular: Si el coche a la venta es
//un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el coche a la venta es un FORD
//FOCUS, el descuento será del 10% y si es un FORD ESCAPE el descuento será del 20%. Deberá de
//usar un parámetro que permita identificar el tipo de coche y la fuction deberá demostrar el coche
//seleccionado.

let descuento1;
let descuentoTotal;

function carroFord(precio,modelo){
    switch (modelo) {
        case 'FIESTA':
             descuento1 =  (precio * 0.05)
             descuentoTotal = precio - descuento1
            break;
        case 'FOCUS':
             descuento1 =  (precio * 0.10)
             descuentoTotal = precio - descuento1
            break;
        case 'ESCAPE':
             descuento1 =  (precio * 0.20)
             descuentoTotal = precio - descuento1
            break;
        default:
            return console.log('Esta modelo no existe')
            break;
    }
    console.log(' La marca del auto es: FORD ' ,'\n','Modelo: ' + modelo ,'\n','Precio del auto: '+ precio ,'\n','Descuento del auto: $' + descuento1 + ' dolares','\n','precio con descuento: $' + descuentoTotal + ' dolares')
}

carroFord(6000,'FIESTA')