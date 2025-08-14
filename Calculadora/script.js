const operacao = document.getElementById("operacao")


function inserir(numero){
    operacao.innerHTML += numero
    console.log(operacao)
}

function limparP(){
    operacao.innerHTML = operacao.innerHTML.substring(0, operacao.innerHTML.length - 1)
}

function limparT(){
    operacao.innerHTML = "";
}

function resultado(){
    
}