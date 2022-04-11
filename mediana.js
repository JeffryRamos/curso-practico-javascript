function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
     function(valorAcumulado = 0, nuevoElemento){
         return valorAcumulado + nuevoElemento;
     }
    );
     const promedioLista = sumaLista / lista.length;
     return promedioLista; 
}

/*
function ordenarLista (numeros){
    var ordenarLista = [numeros];
    function comparar(a,b){
        return a - b;
    }
    return ordenarLista.sort(comparar);
}
*/

var ordenarLista = [ 200,5,1,40 ];
ordenarLista.sort((a,b)=>a-b);  // [ 1, 5, 40, 200 ]


function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}


    const mitadLista1 = parseInt(ordenarLista.length/2) ;

    let mediana;

    if(esPar(ordenarLista.length)){
        const elemento1 = ordenarLista[mitadLista1 - 1];
        const elemento2 = ordenarLista[mitadLista1];
    
        const promedioElemeneto1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    
        mediana = promedioElemeneto1y2;
    
        
    }else{
        mediana = ordenarLista[mitadLista1];
    }
    console.log(mediana);

