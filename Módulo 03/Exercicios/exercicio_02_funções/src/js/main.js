function verificarDados(){
    let nome = prompt("Digite seu nome: ");
    let idade = Number(prompt("Digite sua idade: "))

    if (idade >= 18 && idade <= 70){
        console.log(`Olá ${nome}, você tem ${idade} anos e tem que votar!!`);
    }else if(idade >= 16 && idade <= 17 || idade > 70){
        console.log(`Olá ${nome}, seu voto é opcional pois você tem ${idade} anos!!`);
    }else{
        console.log(`Olá ${nome}, você tem ${idade} anos então você não pode votar!!`)
    }
}

let contador = 0

while(contador <= 1){
    verificarDados();

    contador++;
}