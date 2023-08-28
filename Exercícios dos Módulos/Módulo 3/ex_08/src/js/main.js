function tamletras(texto){

    let letras = texto

    if(letras === undefined){
        console.log("Digite alguma coisa");
    }else if(letras.length > 10){
        console.log(`O texo: 
        \n${letras}. 
        \nÉ muito longo!!`);
    }else if(letras.length === 10){
        console.log(`O texo: 
        \n${letras}. 
        \nChegou exatamente no limite !!!`);
    }else{
        console.log(`O texo: 
        \n${letras}. 
        \nÉ de um tamanho normal!!!`);
    }
}

tamletras('aaaaaaaaa');
tamletras('aaaaaaaaaa');
tamletras('aaaaaaaaaaa')