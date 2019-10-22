function notaFinal(arguments) {
    var soma = 0;
    for(var k=0;k<arguments.length;k++) {
        soma += arguments[k];
    }
    var media = soma/arguments.length;
    if(media >= 7) {
        return media;
    }
    var final = parseFloat(prompt('Informe a nota da prova final:'));
    arguments.push(final);
    
    media = (media * 6 + final * 4)/10;
    return media;
}

var arguments = [];

for(k=1;k<=4;k++) {
    var nota = parseFloat(prompt(`Informe a nota do ${k} bimestre:`));
    arguments.push(nota);
}

var resultado = notaFinal(arguments);

document.write(`Notal Final do aluno: ${resultado}`);
