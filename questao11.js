var a = parseInt(prompt('Informe o valor de a:'));
var b = parseInt(prompt('Informe o valor de b:'));

function verifica(a, b){
    if(a === b) {
        document.write('Encaixa!');
    }
    else if(a < b) {
        document.write('Não Encaixa!');
    }
    else {
        var aux = 10;
        var quociente;
        var resto;
        while(quociente !== 0 && resto !== b) {
            quociente = parseInt(a/aux);
            resto = a % aux;
            if(resto === b) {
                document.write('Encaixa!');
            }
            aux = aux*10;
        }
        if(resto !== b) {
            document.write('Não Encaixa!');
        }
    }
}

verifica(a, b);