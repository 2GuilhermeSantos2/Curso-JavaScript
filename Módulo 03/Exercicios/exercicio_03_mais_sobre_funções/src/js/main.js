function multiplicarTresNumeros(x, y, z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,6,8);

console.log(`O valor da multiplicação é ${mult}`);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh === true){
        console.log('Pode dirigir');
    }else{
        console.log('Não pode dirigir');
    }
}

podeDirigir(16, true);
podeDirigir(17, false);
podeDirigir(21, false);
podeDirigir(30, true);
podeDirigir(41, 0);
podeDirigir(25, 1);