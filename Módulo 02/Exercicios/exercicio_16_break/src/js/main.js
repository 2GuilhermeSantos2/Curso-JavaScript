let nome = "Guilherme";

for (let i = 0; i < 10; i += 1){

    if(i === 3){
        nome = "Luiz";
    }

    if(i == 5 && nome == "Luiz"){
        console.log(`i = ${i} e nome = ${nome}, parando`);
        break
    }

    console.log(i);
}