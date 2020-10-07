function ordenacao(array){

    for (var i = 0; i < array.length; i++) {
        for (var q = i; q < array.length; q++) {
            if (array[i]>array[q]) {
                aux = array[i];
                array[i]=array[q];
                array[q]=aux;
            }
        }
    }

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log(ordenacao([10,25,43,99,1,81,24,11,2])); // colocar aqui os valores dos vetores, independente do tamnho dele, o programa irá ordenar os valores
