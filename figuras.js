//este es el codigo del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado miden: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es : " + areaCuadrada + "cm^2");

console.groupEnd();

//este es el codigo del triangulo
console.group("triangulo");

const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;

console.log("los lados del triangulo miden: " 
+ lado1 + "cm, " + lado2 + "cm, " + base + "cm");

console.log("la altura del truangulo es de: " + altura + "cm");

const perimetro = lado1 + lado2 + base;
console.log("el perimetro del triangulo es de: " + perimetro + "cm");

const areaTriangulo = (base * altura)/2;
console.log("el area del triangulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//codigo del circulo
console.group("circulo");

const radio = 4;
console.log("el radio del circulo es: " + radio + "cm");

const diametro = radio * 2;
console.log("el diametro del circulo es: " + diametro + "cm ");

const pi = Math.PI;
console.log("PI es: " + pi + "cm");

const perimetrocirculo = diametro * pi;
console.log("la circuferencia es: " + perimetrocirculo + "cm");

const areacirculo =(radio * radio) * pi;
console.log("el area del circulo es: " + areacirculo + "cm^2");

console.groupEnd();