let idade = 17;
let CNH = false;

if (idade >= 18 && CNH === true){
    console.log(`Você tem ${idade} anos e tem CNH, então pode dirigir!`);
}else if(idade >= 18 && CNH == false){
    console.log(`Você tem ${idade} anos e mas não tem CNH, então você não pode dirigir!`);
}else if(idade < 18 && CNH == false || CNH == true){
    console.log(`Você tem ${idade} anos e não pode tirar CNH, então você não pode dirigir!`);
}