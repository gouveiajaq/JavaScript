let valor1 = parseInt (prompt ("Insira um número, por favor"));

let valor2 = parseInt (prompt ("Insira um segundo número, por favor"));

let Escolhas = prompt("Escolha de 1 a 4, sendo: 1= Soma; 2= Subtração; 3= Multiplicação; 4=Divisão");

let Soma = (valor1+valor2)

let Sub = valor1 - valor2

let mult = valor1*valor2

let div = valor1/valor2

if (Escolhas == 1){

console.log(`A Soma de ${valor1} e ${valor2} é: ${Soma}`)

}

else if(Escolhas == 2){

console.log(`A Subtração de ${valor1} por ${valor2} é ${Sub}`);

}

else if (Escolhas == 3){

console.log(`A Multiplicação de ${valor1} por ${valor2} é ${mult}`);

}

else if (Escolhas == 4){

console.log(`A Divisão de ${valor1} por ${valor2} é ${div}`);

}

else if (Escolhas > 4){

console.log("Calculo incorreto!!")

}