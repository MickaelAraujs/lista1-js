const quantidade = 3;
var soma = 0;

for(var k=1;k<=quantidade;k++) {
    var num = parseInt(prompt('Informe um numero:'));
    soma += num;
}

var media = soma/quantidade;

alert('media dos 3 números informados: '+media);