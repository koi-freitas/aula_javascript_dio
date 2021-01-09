//aula 1

// let nome = `Koi`
// let idade = 25;
// let idade2 = 15;
// let frase = `Japão é o mellhor time do mundo`;

//alert(nome+` tem `+idade+` anos.`);
//alert(idade + idade2);
//alert(frase.replace(`Japão`, `Brasil`))

// console.log(nome);
// console.log(idade+idade2);
// console.log(idade*idade2);
// console.log(frase.replace(`Japão`, `Brasil`).toUpperCase());

//aula 2

let lista = [`maca`,`pera`,`laranja`];
lista.push(`uva`);
lista.pop();
console.log(lista);
console.log(lista[0]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(' - '));
console.log(lista.join(' | '));
console.log(lista.join(''));

let fruta = {nome:`maça`,cor:`vermelha`}
console.log(fruta.nome);
console.log(fruta.cor);

let frutas = [{nome:`maça`,cor:`vermelha`},{nome:`uva`,cor:`roxa`}]
console.log(frutas);
console.log(frutas[1].nome);

//aula 3

// let idade = prompt(`Qual sua idade?`);
// if(idade>=18){
//     console.log(`maior de idade`);
// }else{
//     console.log(`menor de idade`);
// };

let count = 0;
while(count < 5){
    console.log(count);
    count = count + 1; // count++
}

for (count = 5; count > 0; count--){
    console.log(count);
};

let d = new Date();
console.log(d);
console.log(d.getMonth());//Month sempre começa do zero-> Janeiro = 0 | Colocar Month+1 para indicar o número do mês correto.
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getDay());

//aula 04

function soma(n1,n2){
    return n1+n2;
};
console.log(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
};
console.log(setReplace("Vai João","João","Marquinhos"))

function validarIdade(age){
    let validar;
    if (age>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

//let age = prompt(`Qual sua idade`);
//console.log(validarIdade(age));

//aula 05

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Clique nesse texto para ser redirecionado à aula da DIO!</b>";
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d");
    //window.location.href = "https://..." => faria a mesma coisa só que seria na mesma guia.
}

// function trocar(){
//     document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse!</b>";
// }
// function voltar(){
//     document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
// }

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse!</b>";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    console.log("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}