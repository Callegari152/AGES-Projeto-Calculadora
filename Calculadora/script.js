const operacao = document.getElementById("operacao")
const operacaoP = document.getElementById("operacaoP")

function inserir(numero){
    if (operacao.innerHTML[operacao.innerHTML.length - 1] == " "){
        if(numero == " + " || numero == " - " || numero == " * " || numero == " / " ){
            operacao.innerHTML = operacao.innerHTML.substring(0, operacao.innerHTML.length - 3)
            operacao.innerHTML += numero;
                  
        } else {
            operacao.innerHTML += numero;
            
        }
    } else if(operacao.innerHTML[operacao.innerHTML.length - 1] == ',') {
        if(numero == ','){
            operacao.innerHTML = operacao.innerHTML.substring(0, operacao.innerHTML.length - 1)
            operacao.innerHTML += numero;
            
        } else {
            operacao.innerHTML += numero;
        }
    } else {
        operacao.innerHTML += numero
        

    }

}

function limparP(){
    if(operacao.innerHTML[operacao.innerHTML.length - 1] == " ") {
        operacao.innerHTML = operacao.innerHTML.substring(0, operacao.innerHTML.length - 3)
    } else {
        operacao.innerHTML = operacao.innerHTML.substring(0, operacao.innerHTML.length - 1)
    }
}

function limparT(){
    operacao.innerHTML = "";
    operacaoP.innerHTML = "";
}

function parenteses(){
    if(operacao.innerHTML.lastIndexOf('(') > operacao.innerHTML.lastIndexOf(')')){
        operacao.innerHTML += ")"
    } else {
        operacao.innerHTML += "("
    }
}


function resultado(){
    operacaoP.innerHTML = operacao.innerHTML;
    console.log(operacao.innerHTML)
    operacao.innerHTML = operacao.innerHTML.replace('%', '/100').replaceAll("," , ".");    
    console.log(operacao.innerHTML)
    operacao.innerHTML = Number(eval(operacao.innerHTML)).toString().replace(".", ",");
    console.log(operacao.innerHTML)
}

