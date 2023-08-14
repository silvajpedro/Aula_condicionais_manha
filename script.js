

let cor = "verde"
let cor2 = "tomato"

let doce = "bala 7belo"

// o termo técnico dessa forma de escrita se chama escrita por concatenação
console.log("a minha cor favorita é " + cor + " e o meu doce favorito é " + doce)

// template string
// uma forma de escrita e leitura mais fácil de código, o termo técnico se chama interpolação
console.log(`a minha cor favorita é ${cor} e ${cor2} `)


// outra forma de escrita
// console.log(`a minha cor favorita é ${cor + " e " + cor2} `)


// CONDIÇÕES

// condicional simples sintaxe
// essa é a forma de escrita da condicional simples

// se (condição){
//     ação da condição
// }
// if(){

// }
// caso a condição for verdadeira será executada, caso a condição não for verdadeira ela não será executada.

let idadeMaiorQueDezoito = false
// como a variável idadeMaiorQueDezoito tem o valor falso (false) ela não será executada.
if(idadeMaiorQueDezoito){
console.log("você é maior de dezoito")
}





// operadores de comparação
// > -> maior que, vai verificar se um valor é maior que o outro
// < -> menor que, vai verificar se um valor é menor que o outro
// >= -> maior ou igual a, vai verificar se um valor é maior ou igual ao outro
// <= -> menor ou igual a, vai verificar se um valor é menor ou igual ao outro 

// == -> comparador de valor, vai verificar se um valor e igual ao outro
// === -> estritamente igual compara valor e tipo verificado se são iguais
// != -> diferente de, verifica se os valores são diferentes

// !== estritamente desigual, verifica se o valor e tipo são diferentes


let kilometragem = 450

// se a variável kilometragem for MENOR OU IGUAL a 500 mostre no console "esse carro é semi-novo"
if(kilometragem <= 500){
    console.log("esse carro é semi-novo")
}

let pratoDoDia = "salada"
// aqui estamos utilizando o operador diferente de, ele está verificando se o valor "salada" e diferente de "churrasco", como são valores diferentes irá mostrar no console.log("estou muito triste :(  ")
if(pratoDoDia != "churrasco"){
    console.log("estou muito triste :( ")
}

// condicionais compostas
// chamamos de condicionais compostas pois são compostas de duas partes 
// entre o if e o else duas partes diferentes que se complementam
// if(se) else(senão)
let lancheDoDia = "misto quente"

if(lancheDoDia == "misto quente"){
    console.log("traga 3 para mim por favor :D")
} else {
    console.log("estou muito triste :(  ")
}
// o else acontecerá somente se a condição for falsa
// se o lancheDoDia tiver o valor igual a "misto quente"
// irá executar o if

let numeroDaSorte = "3"

// aqui estamos utilizando o operador estritamente igual
// ele verifica se o valor e tipo são idênticos
// o valor é identico 3 == "3" os valores são o mesmo porém os tipos são diferentes
// agora quando utilizamos o estritamente igual ele está comparando o valor e o tipo
// os valores são iguais 3 == "3" porém os tipos são diferentes esse 3 é tipo number e esse "3" é tipo string
if(numeroDaSorte === 3){
    console.log("vou ganhar na megasena!!!")
} else{
    console.log("coitado de mim, deixa pra próxima")
}



// Esses veremos nas próximas aulas
// operadores lógicos
// && (AND)
// || (OR)
// ! (NOT)