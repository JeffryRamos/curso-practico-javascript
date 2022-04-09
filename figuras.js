//este es el codigo del cuadrado

console.group("cuadrado");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){

    return lado * 4;
} 
//console.log("el perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

//const areaCuadrada = ladoCuadrado * ladoCuadrado;

function areaCuadrada(lado){
    return lado * lado;
}
//console.log("el area del cuadrado es : " + areaCuadrada + "cm^2");

console.groupEnd();

//este es el codigo del triangulo
console.group("triangulo");

/*const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;

console.log("los lados del triangulo miden: " 
+ lado1 + "cm, " + lado2 + "cm, " + base + "cm");
*/
//console.log("la altura del truangulo es de: " + altura + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("el perimetro del triangulo es de: " + perimetro + "cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
//console.log("el area del triangulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//codigo del circulo
console.group("circulo");

/*const radio = 4;
console.log("el radio del circulo es: " + radio + "cm");
*/
function diametro(radio){
    return radio*2;
}
//console.log("el diametro del circulo es: " + diametro + "cm ");

const pi = Math.PI;
console.log("PI es: " + pi + "cm");

function circunferencia (radio){
    const diametroCirculo = diametro(radio);
    return diametroCirculo * pi;
}
//console.log("la circuferencia es: " + perimetrocirculo + "cm");

function areaCirculo(radio){
    return(radio * radio) * pi;
}
//console.log("el area del circulo es: " + areacirculo + "cm^2");

console.groupEnd();