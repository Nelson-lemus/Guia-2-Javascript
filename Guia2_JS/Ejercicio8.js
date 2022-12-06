//Crear una Fuction para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: Si el
//usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será
//de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el
//descuento será del 15%.

let descuento1;
let descuentoTotal;
let ciudadOrigen = 'La Palma'

if (ciudadOrigen = 'La Palma') {
    
function carroFord(precio,destino){
    switch (destino) {
        case 'La costa del sol':
             descuento1 =  (precio * 0.05)
             descuentoTotal = precio - descuento1
            break;
        case 'Panchimalco':
             descuento1 =  (precio * 0.10)
             descuentoTotal = precio - descuento1
            break;
        case 'Puerto el triunfo':
             descuento1 =  (precio * 0.15)
             descuentoTotal = precio - descuento1
            break;
        default:
            return console.log('Esta destino no existe')
            break;
    }
    console.log(' La ciudad de origen del viajes es: La Palma ' ,'\n','El destino es: ' + destino ,'\n','El precio del viaje es: '+ precio ,'\n','El descuento del viaje es: $' + descuento1 + ' dolares','\n','El precio del vaije con descuento es: $' + descuentoTotal + ' dolares')
}

carroFord(100,'La costa del sol')

}else{
    return console.log('No hay viajes de destino a esa ciudad')
}