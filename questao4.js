const precoProduto = parseFloat(prompt('Informe o preço à vista do produto:'));
const parcelas = parseInt(prompt('Informe a quantidade de parcelas:'));

var prestacaoMensal = precoProduto/parcelas;
var totalPagar = precoProduto;
function precoParc(parcelas, totalPagar, precoProduto){
    if(parcelas === 3) {
        totalPagar = precoProduto + precoProduto*0.1; 
        document.write(`Prestação mensal: ${prestacaoMensal.toFixed(2)}, Total a pagar: ${totalPagar}`);   
    }
    else if(parcelas === 5) {
        totalPagar = precoProduto + precoProduto*0.2;
        document.write(`Prestação mensal: ${prestacaoMensal.toFixed(2)}, Total a pagar: ${totalPagar}`); 
    }
    else {
        alert('valor de parcela invalida!');
    }
}

precoParc(parcelas, totalPagar, precoProduto);