const aumento = 0.1; //equivalente a 10%
var nome = prompt('Informe o nome do funcionário:');
var salario = parseFloat(prompt(`Informe o salário do funcionário ${nome}:`));

salario *= (1+aumento);

alert(`Novo salário: ${salario}`);