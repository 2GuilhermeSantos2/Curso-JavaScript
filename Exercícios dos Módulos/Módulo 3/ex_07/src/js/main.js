function retornaPostivo(n){

    num = n;

    if(n === undefined){
        console.log("Digite algum valor");
    }

    else if(num > 0){
        console.log(`Você digitou o número ${num}, ele já é um númro positivo`);
    } else if(num === 0){
        console.log(`Você digitou o número ${num}, ele é um valor nulo ou seja não é positivo nem negativo`);
    }else{
        let num = Math.abs(n)

        console.log(`O número ficou ${num}`);
    }

}

retornaPostivo();
retornaPostivo(0);
retornaPostivo(10);
retornaPostivo(-10)