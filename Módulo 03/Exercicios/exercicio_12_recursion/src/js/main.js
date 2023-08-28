function recursao(n) {
    if(n - 1 == 2){
        console.log("Recursão Parou");
    } else if(n % 2 !== 0){;
    
    }else{
        console.log("Número Par");
        recursao(n - 2);
    }
}


recursao(2);
recursao(25);
recursao(49);
recursao(40);
recursao(42);
recursao(3);
recursao(27);
recursao(36);
recursao(45);
recursao(3);
recursao(11);