function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
     function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
     }
    );
     const promedioLista = sumaLista / lista.length;
     return promedioLista; 
 }

function calcularLista(lista) {
    let listaOrdenada = lista.sort();
    return listaOrdenada
}

const mitadLista1 = parseInt(calcularLista.length/2) ;

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(calcularLista.length)){
    const elemento1 = calcularLista[mitadLista1 - 1];
    const elemento2 = calcularLista[mitadLista1];

    const promedioElemeneto1y2 = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = promedioElemeneto1y2;

    
}else{
    mediana = calcularLista[mitadLista1];
}