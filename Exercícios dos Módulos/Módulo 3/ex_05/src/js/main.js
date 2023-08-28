function autoEscola(){
    let idade = Number (prompt("Digite sua idade: "));

    if (idade >= 18){
        console.log(`Você tem ${idade} anos, então pode entrar na auto escola`);
    }else{
        console.log(`Você tem ${idade}, você NÃO pode entrar na auto escola`);
    }

    return idade;
}





