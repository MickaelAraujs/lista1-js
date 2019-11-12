var num1 = parseInt(prompt('Informe o primeiro número:'));
var num2 = parseInt(prompt('Informe o segundo número:'));

const codigo = parseInt(prompt('Informe o código de seleção:'));

function imprimeCodigo(codigo, num1, num2){
    switch(codigo) {
        case 1:
            var soma = num1 + num2;
            document.write('Soma: '+soma);
            break;
        case 2:
            var multiplica = num1 * num2;
            document.write('Multiplicação: '+multiplica);
            break;
        case 3:
            var divide = num1 / num2;
            document.write('Divisão: '+divide);
            break;
        default:
            document.write('Código inválido!');
            break;
    }
}

imprimeCodigo(codigo, num1, num2);