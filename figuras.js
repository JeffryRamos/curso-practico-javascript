//este es el codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrada(lado){
    return lado * lado;
}

//este es el codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

//este es el codigo del circulo
function diametro(radio){
    return radio*2;
}

const pi = Math.PI;
console.log("PI es: " + pi + "cm");

function circunferencia (radio){
    const diametroCirculo = diametro(radio);
    return diametroCirculo * pi;
}

function areaCirculo(radio){
    return(radio * radio) * pi;
}

//Aqui interactuamos con el HTmL

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}   
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const Area = areaCuadrada(value);
    alert(Area);
}
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value,10);

    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const valueLado2 = parseInt(inputLado2.value,10);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(inputBase.value,10);
    

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(inputBase.value,10);

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const valueAltura = parseInt(inputAltura.value,10);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = parseInt(inputRadio.value, 10);
    
    const circuferencia = circunferencia(valueRadio);
    alert(circuferencia);
}
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = parseInt(inputRadio.value, 10);

    const area = areaCirculo(valueRadio);
    alert(area);
}

//codigo del reto, calcular la altura de un triangulo isoceles

function calcularIsocelesAltura(){
    const lado1 = document.getElementById("inputIsocelesLado1");
    const valuelado1 = parseInt(lado1.value, 10);

    const lado2 = document.getElementById("inputIsocelesLado2");
    const valuelado2 = parseInt(lado2.value, 10);

    const base = document.getElementById("inputIsocelesBase");
    const valuebase = parseInt(base.value, 10);
    

    if(valuelado1 === valuelado2){
        
        const altura = Math.sqrt((valuelado1*valuelado1)-((valuebase*valuebase)/4));
        alert(altura);

    }else{
        alert("las medidas que introdujo no son de un triangulo de isoceles, por favor compruebe si las medidas son correctas")
    }

}