function ordenacao(array){

    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i]>array[j]) {
                aux = array[i];
                array[i]=array[j];
                array[j]=aux;
            }
        }
    }

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log(ordenacao([10,25,43,99,1,81,24,11,2])); // colocar aqui os valores dos vetores, independente do tamnho dele, o programa irá ordenar os valores
