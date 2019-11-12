const aumento = 0.1; //equivalente a 10%

function salarioFunc(aumento){
    var nome = prompt('Informe o nome do funcionário:');
    var salario = parseFloat(prompt(`Informe o salário do funcionário ${nome}:`));

    salario *= (1+aumento); 
    return salario;
}

document.write(`Novo salário: ${salarioFunc(aumento)}`);