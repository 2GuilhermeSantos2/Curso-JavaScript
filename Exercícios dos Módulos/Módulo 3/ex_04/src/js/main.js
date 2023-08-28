function gerarAleatorio(min, max){
    if(min === undefined || max === undefined){
        console.log('Digite um valor!!!')
    }else{
        min = Math.ceil(min);
        max = Math.floor(max);
    
        return Math.floor(Math.random() * (max - min) + min);
    }

}

console.log(`O número aleatório foi: ${gerarAleatorio(20, 100)}`)