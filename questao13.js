function lerTemp(){
    var tempCel = prompt("Escreva a temperatura em Celsius:");

    var tempFarh = (tempCel * (9/5)) + 32;
    if(tempFarh < 10){
        document.write("Está muito frio");
    }
    else if(tempFarh >= 10 && tempFarh <= 15){
        document.write("Está frio");
    }
    else if(tempFarh >=16 && tempFarh <= 22){
        document.write("A temperatura está normal");
    }
    else if(tempFarh >= 23 && tempFarh <= 30){
        document.write("Está quente");
    }
    else{
        document.write("Está muito quente");
    }
}
lerTemp();