var i,j;
var cont=0;
var soma=0;
    var quantidade=prompt("Informe a quantidade de numeros");
for(i=0;i<quantidade;i++){
    var numero=prompt("informe um numero");
    for(j=0;j<=numero;j++){
        if(numero%j==0){
            cont++;
        }
    }
    if(cont==2){
        soma=soma+(numero *1);
    }
    cont=0;
}
document.write(soma);