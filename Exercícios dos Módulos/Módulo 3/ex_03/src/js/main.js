function somaNumeros(x, y){
    if(x === undefined || y === undefined){
        console.log('Digite um valor');
    }else{
        console.log(`A soma de ${x} + ${y} = ${x + y}`);
    }
}

somaNumeros();
somaNumeros(2, 8);