const precio = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuentos = 100 - descuento;
    const precioConDescuentos = (precio * porcentajePrecioConDescuentos)/100;
    
    return precioConDescuentos;
}
/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuentos,
    precioConDescuentos
})
*/