const quantidade = 3;
var soma = 0;

function mediaNum(quantidade, soma){
    for(var k=1;k<=quantidade;k++) {
        var num = parseInt(prompt("Informe um numero:"));
        soma += num;
    }
    
    var media = soma/quantidade;
    return media;
}

document.write("media dos 3 números informados: " + mediaNum(quantidade, soma));