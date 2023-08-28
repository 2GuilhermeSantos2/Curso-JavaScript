function potencia(x, y){
    if(x === undefined || y === undefined){
        console.log("Digite um valor correto!!!");
    }else{
        potencia = Math.pow(x,y);
        console.log(`O resultado da entre ${x} elevado a ${y} é igual a ${potencia}`);
        
    }
    
}



potencia(3,5);
potencia(10, 10)
