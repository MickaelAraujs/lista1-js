var identificacaoFunc = prompt("Escreva o seu número de identificação:");
var horasMensais = prompt("Escreva horas você trabalha por mês:");
var valorHora = prompt("Escreva o quanto você recebe por hora trabalhada:");
var quantFilhos = prompt("Escreva o número de filhos com idade menor do que 14 que você tem:");

function calculaSalario(horasMensais, valorHora, quantFilhos){
    if(quantFilhos <= 0){
        var salarioFinal = Math.round((horasMensais * valorHora));
        return salarioFinal;
    }
    else{
        var salarioFinal = Math.round((horasMensais * valorHora) * (1 + (0.1 * quantFilhos)));
        return salarioFinal;
    }
}


document.write("Seu salario é de R$" + calculaSalario(horasMensais, valorHora, quantFilhos));