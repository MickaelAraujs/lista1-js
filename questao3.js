var primeiroValor = parseInt(prompt('Informe o primeiro valor:'));
var segundoValor = parseInt(prompt('Informe o segundo valor:'));

var c;

function verifica(primeiroValor, segundoValor, c){
    primeiroValor === segundoValor ? c = primeiroValor + segundoValor : c = primeiroValor * segundoValor;
    return c;
}


document.write(verifica(primeiroValor, segundoValor, c));