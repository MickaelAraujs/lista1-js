var num1 = parseInt(prompt('Informe o primeiro número:'));
var num2 = parseInt(prompt('Informe o segundo número:'));

const codigo = parseInt(prompt('Informe o código de seleção:'));

switch(codigo) {
    case 1:
        var soma = num1 + num2;
        alert('Soma: '+soma);
        break;
    case 2:
        var multiplica = num1 * num2;
        alert('Multiplicação: '+multiplica);
        break;
    case 3:
        var divide = num1 / num2;
        alert('Divisão: '+divide);
        break;
    default:
        alert('Código inválido!');
        break;
}