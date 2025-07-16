//exercicio 1
function somar(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    //console.log("resultado"+ (num1 + num2));
    document.getElementById("resultado1").innerText = "resultado:" + (num1 + num2);
}

//exercicio 2
function verificarIdade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >= 18){
        document.getElementById("resultado2").innerText = "maior de idade";
    }else{
        document.getElementById("resultado2").innerText = "menor de idade";
    }
}

//exercicio 3
function contar(){
    let texto = (document.getElementById("texto").value);
    let totalCaracteres = texto.length;
    document.getElementById("resultado3").innerText = "Total de caracteres: " + totalCaracteres;
}

//exercicio 4
function verificarPar(){
    let numero = Number(document.getElementById("numero").value);
    if(numero % 2 == 0){
        document.getElementById("resultado4").innerText = "Par";
    } else {
        document.getElementById("resultado4").innerText = "Impar";
    }
}

//exercicio 5
function converter() {
    let nome = document.getElementById("nome").value;
    let nomeMaiusculo = nome.toUpperCase();
    document.getElementById("resultado5").innerText = "Em maiúsculo: " + nomeMaiusculo;
  }

//exercicio 6
function comparar(){
    let a = Number (document.getElementById("a").value);
    let b = Number (document.getElementById("b").value);
    if(a > b){
        document.getElementById("resultado6").innerText = "O maior é o:" + a;
    } else if (b > a){
        document.getElementById("resultado6").innerText = "O maior é o:" + b;
    } else{
        document.getElementById("resultado6").innerText = "São iguais";
    }
}

//exercicio 7
function tabuada(){
    let numero = Number(document.getElementById("numeroTbd").value);
    let resultado = "";

    for(let i = 0; i <= 10; i++){
        let rs = numero * i;
        resultado = resultado + numero + "*" + i + "=" + rs + "\n";
    }
    document.getElementById("resultado7").innerText = "A tabuada:\n" + resultado;
}

//exercicio 8
function contador(){
    let resultado = "";
    for(let i = 0; i <= 10; i++){
        resultado = resultado + i + "\n";
        document.getElementById("resultado8").innerText = "Contador:\n" + resultado;
    }
}

//exercicio 9
function calcular(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let media = (nota1 + nota2 + nota3) / 3;
    let mensagem = "";

    if (media >= 6) {
        mensagem = "Aprovado! Média: " + media.toFixed(2);
    } else {
        mensagem = "Reprovado. Média: " + media.toFixed(2);
    }

    document.getElementById("resultado9").innerText = mensagem;
}
//exercicio 10
function temperatura(){
    let celsius = Number(document.getElementById("celsius").value);
    let f;
    f = (celsius * 9/5) + 32;
    document.getElementById("resultado10").innerText = "temperaura em fahrenheit:" + f;
}
//exercicio 11
function semana(){
    let dia = Number(document.getElementById("dia").value);
    if(dia == 1){
        document.getElementById("resultado11").innerText = "domingo";
    } else if(dia ==2){
        document.getElementById("resultado11").innerText = "segunda";
    } else if(dia ==3){
        document.getElementById("resultado11").innerText = "terça";
    } else if(dia == 4){
        document.getElementById("resultado11").innerText = "qaurta";
    } else if (dia == 5){
        document.getElementById("resultado11").innerText = "quinta";
    } else if(dia == 6){
        document.getElementById("resultado11").innerText = "sexta";
    } else if (dia == 7) {
        document.getElementById("resultado11").innerText = "sabado";
    } else {
        document.getElementById("resultado11").innerText = "erro, dia nao existe";
    }
}
//exercicio 12
function senha() {
  let senha = document.getElementById("senha").value;
  if (senha === "1234") {
    document.getElementById("resultado12").innerText = "Acesso permitido";
  } else {
    document.getElementById("resultado12").innerText = "Acesso negado";
  }
}
//exercicio 13
function contadorRegressivo() {
  let resultado = "";
  for (let i = 10; i >= 1; i--) {
    resultado = resultado + i + "\n";
  }
  document.getElementById("resultado13").innerText = resultado;
}