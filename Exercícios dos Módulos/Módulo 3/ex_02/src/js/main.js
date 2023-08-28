function verificaIdade(idade){

    if (idade == undefined){
        console.log("Digite uma valor!!");
    } else if(idade < 0){
        console.log("Digite uma idade correta!!");;
    }else{
        console.log(`Você tem ${idade} anos!!`);
    }
}

verificaIdade(10);