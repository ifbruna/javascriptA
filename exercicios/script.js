//exercicio 1
function somar(){
    let num1= Number(document.getElementById("num1").value);
    let num2= Number(document.getElementById("num2").value);
    //console.log("resultado"+ (num1 + num2));
    document.getElementById("resultado1").innerText = "resultado:" + (num1 + num2);
}

//exercicio 2
function verificar(){
    let idade = Number(document.getElementById("idade").value);
    if(idade >= 18){
        document.getElementById("resultado2").innerText = "maior de idade";
    }else{
        document.getElementById("resultado2").innerText = "menor de idade";
    }
}

//exercicio 3
function contar(){
    let texto = Number(document.getElementById("texto").value);

}