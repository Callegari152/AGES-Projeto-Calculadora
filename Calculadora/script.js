const operacao = document.getElementById("operacao")

function inserir(numero){
    operacao.innerHTML += numero
}

function limparP(){
    operacao.innerHTML = operacao.innerHTML.substring(0, operacao.innerHTML.length - 1)
}

function limparT(){
    operacao.innerHTML = ""
}


function porcentagem(){

}

function parenteses(){

}

function resultado(){
    operacao.innerHTML = eval(operacao.innerHTML)
}
