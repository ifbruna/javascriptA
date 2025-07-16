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
function contarCaracter(){
    let texto = document.getElementById("texto").value;
    let contar = texto.lenght();
    document.getElementById("resultado3").innerText = "tem:" + contar;
}

//exercicio 4
function verificarPar(){
    let numero = Number(document.getElementById("numero").value);
    if(numero % 2 === 0){
        document.getElementById("resultado4").innerText = "é par";
    } else {
        document.getElementById("resultado4").innerText = "é impar";
    }
}

//exercicio 5
function caixaAlta(){
    let nome = document.getElementById("nome").value;
    let alto = nome.toUpperCase();
    document.getElementById("resultado5").innerText = "em caixa alta:" + alto;
}

//exercicio 6
function comparar(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    if(a>b){
        document.getElementById("resultado6").innerText = "o maior é:" + a;
    }else if(b>a){
        document.getElementById("resultado6").innerText = "o maior é:"+ b;
    }else{
        document.getElementById("resultado6").innerText = "sao iguais";
    }
}

//exercicio7
function tabuada(){
    let numero = Number(document.getElementById("tabuador").value);
    let resultado = "";
    for(let i; i <= 10; i++){
        resultado = numero * i;
    }
    document.getElementById("resultado7").innerText = numero + "*" + i +"=" + resultado;
}

//exercicio8
function contador(){
    for(let i; i <= 10; i++){
        document.getElementById("resultado8").innerText = i;
    }
}

//exercicio9
function media(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let media;
    media = (nota1+ nota2+ nota3)/3;
    if(media >= 6.00){
        document.getElementById("resultado9").innerText = "aprovado:" + media.toFixed(2);
    }else{
        document.getElementById("resultado9").innerText = "reprovado:" + media.toFixed(2);
    }
}

//exercicio 10
function temperatura(){
    let temperatura = Number(document.getElementById("temperatura").value);
    let f;
    f = (temperatura * 9/5) + 32;
    document.getElementById("resultado10").innerText = f;
}