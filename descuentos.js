const precio = 100;
const descuento = 15;

//const cuponesDescuentos = ["descuento10", "descuento20", "descuento30"];

const cuponesDescuentos = [
    {
        name: "descuento10",
        discount: 10,
    },
    {
        name: "descuento20",
        discount: 20,
    },
    {
        name: "descuento30",
        discount: 30,
    },
];




function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuentos = 100 - descuento;
    const precioConDescuentos = (precio * porcentajePrecioConDescuentos)/100;
    
    return precioConDescuentos;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const counponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === counponValue;
    };
    const userCoupon = cuponesDescuentos.find(isCouponValueValid);

    let descuento;

    /* switch (counponValue) {
        case cuponesDescuentos[0]:
            descuento = 10;
            break;
        case cuponesDescuentos[1]:
            descuento = 20;
            break;
        case cuponesDescuentos[2]:
            descuento = 30;
            break;
    }
*/
    if (!userCoupon) {
        alert("El cupón " + counponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;

        const precioConDescuentos = calcularPrecioConDescuento(priceValue, descuento);
        const resultp = document.getElementById("resultp");

        resultp.innerText = "el precio con descuento son: $" + precioConDescuentos;
    }
    /*else if (counponValue === "descuento10") {
        descuento = 10;
     } else if (counponValue === "descuento20") {
        descuento = 20;
     } else if (counponValue === "descuento30") {
        descuento = 30;
     }

    const precioConDescuentos = calcularPrecioConDescuento(priceValue, descuento);
    const resultp = document.getElementById("resultp");

    resultp.innerText = "el precio con descuento son: $" + precioConDescuentos;
*/
}



/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuentos,
    precioConDescuentos
})
*/