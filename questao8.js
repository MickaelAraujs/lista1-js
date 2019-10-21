var salario = prompt("Informe seu salário");

if(salario <= 0){
    document.write("Salário inválido");
}
else{
    if(salario < 280){
        document.write("Salário antes do reajuste: R$" + salario + "<br>");
        document.write("Será acrescido um percentual de 20% <br>");
        var quantAumento = salario * 0.2;
        document.write("Será acrescido R$" + quantAumento + "<br>");
        var novoSalario = (salario * 1) + quantAumento;
        document.write("Seu novo salário é de R$" + novoSalario + "<br>");
    }
    else if(salario >= 280 && salario < 700){
        document.write("Salário antes do reajuste: R$" + salario + "<br>");
        document.write("Será acrescido um percentual de 20% <br>");
        var quantAumento = salario * 0.2;
        document.write("Será acrescido R$" + quantAumento + "<br>");
        var novoSalario = (salario * 1) + quantAumento;
        document.write("Seu novo salário é de R$" + novoSalario + "<br>");
    }
    else if(salario >= 700 && salario < 1500){
        document.write("Salário antes do reajuste: R$" + salario + "<br>");
        document.write("Será acrescido um percentual de 20% <br>");
        var quantAumento = salario * 0.2;
        document.write("Será acrescido R$" + quantAumento + "<br>");
        var novoSalario = (salario * 1) + quantAumento;
        document.write("Seu novo salário é de R$" + novoSalario + "<br>");
    }
    else{
        document.write("Salário antes do reajuste: R$" + salario + "<br>");
        document.write("Será acrescido um percentual de 20% <br>");
        var quantAumento = salario * 0.2;
        document.write("Será acrescido R$" + quantAumento + "<br>");
        var novoSalario = (salario * 1) + quantAumento;
        document.write("Seu novo salário é de R$" + novoSalario + "<br>");
    }
}