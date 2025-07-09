
//var nao respeita o bloco de codigo
function testeVar(){
    var mensagem= "olá var";
    if(true){
        var mensagem = "troquei a mensagem";
        console.log(mensagem);
    }
    console.log(mensagem);
}
testeVar();
//let respeita o escopo de bloco 
function testeLet(){
    let mensagem = "olá let";
    if(true){
        let mensagem = "mensagem nova";
        console.log(mensagem);
    }
    console.log(mensagem);
}
testeLet();

var x1 = 10;
var x1 = 20;
console.log(x1);

var x3;
console.log(x3);

//console.log(x4);

let x2 = 5;
//let x2 = 7;
console.log(x2);

//constantes
const _constante = 42;
console.log(_constante);
//_constante = 45;

const array=[1,2,3];
array.push = 7;
console.log(array);


const pessoa= {nome:"bruna", idade:16};
pessoa.nome= "outro nome";
console.log(pessoa);

function saudacao(){
    alert("bem vindo ao site!");
}

