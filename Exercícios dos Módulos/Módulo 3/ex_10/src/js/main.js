function imprimindoPares(x){

    num = x

    if(x === undefined){
        console.log("Digite um valor válido")
    }

    else if(num < 0) {

        while(num < 0){
            if(num % 2 === 0){
                console.log(`O valor agora esta em ${num}`);
            }
            
            num++
        }
        
    }else if(num === 0){
        console.log(`O valor esta em ${num} não sei se é para decrementar ou incrementar.`);
    }else{
        while(num > 0){
            if(num % 2 === 0){
                console.log(`O valor agora esta em ${num}`);
            }
            
            num--
        }
    }
}

imprimindoPares();
imprimindoPares(6);
imprimindoPares(-6);