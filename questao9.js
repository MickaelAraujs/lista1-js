var data = prompt("Informe uma data separando com /. Ex: 22/09/2005");
data = data.split("/").join("");

var dia = Math.trunc(data/1000000);
var mes = Math.trunc(data/10000);
mes = mes % 100;
var ano = data % 10000;

function imprimeData(dia, mes, ano){
    switch(mes){
        case 1:
            document.write(`${dia} de Janeiro de ${ano}`);
            break;
        case 2:
            document.write(`${dia} de Fevereiro de ${ano}`);
            break;
        case 3:
            document.write(`${dia} de Março de ${ano}`);
            break;
        case 4:
            document.write(`${dia} de Abril de ${ano}`);
            break;
        case 5:
            document.write(`${dia} de Maio de ${ano}`);
            break;
        case 6:
            document.write(`${dia} de Junho de ${ano}`);
            break;
        case 7:
            document.write(`${dia} de Julho de ${ano}`);
            break;
        case 8:
            document.write(`${dia} de Agosto de ${ano}`);
            break;
        case 9:
            document.write(`${dia} de Setembro de ${ano}`);
            break;
        case 10:
            document.write(`${dia} de Outubro de ${ano}`);
            break;
        case 11:
            document.write(`${dia} de Novembro de ${ano}`);
            break;
        case 12:
            document.write(`${dia} de Dezembro de ${ano}`);
            break;
    }
}

imprimeData(dia, mes, ano);