var frase = prompt("Escreva uma frase");
var nome = prompt("Escreva a palavra que deseja buscar na frase");
var nomeBusca = new RegExp(nome, 'gi');

function verifica(frase, nomeBusca, nome){
    var quant = (frase.match(nomeBusca));
    document.write("A palavra " + (nome) + " aparece " + (quant.length) + " vezes na frase");
}

verifica(frase, nomeBusca, nome);