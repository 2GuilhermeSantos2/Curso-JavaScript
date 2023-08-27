let vel = 90

if (vel > 100){
    console.log(`Você foi multado, a velocidade foi ${vel}`);
}else if(vel === 100){
    console.log(`Você passou na velocidade exata da pista, sua velocidade foi: ${vel}`);
}else if(vel < 100){
    console.log(`Você passou abaixo da velocidade, sua velocidade foi ${vel}`)
}