function numbersOfBottlesToBuy(amountMoney){
    amountMoney = prompt("Digite a quantidade de dinheiro: R$")
    var bottleCost = 3
    var amountBottles = Math.floor(amountMoney / bottleCost)
    var change = amountMoney % bottleCost;
    return `Você pode comprar ${amountBottles} garrafas de leite.\nVai te sobrar R$${change}`;
}

alert(numbersOfBottlesToBuy());
// var amountMoney = prompt("Digite a quantidade de dinheiro: R$")
// var bottleCost = 3
// var amountBottles = Math.floor(amountMoney / bottleCost);
// var change = amountMoney % bottleCost;

// alert(`Você pode comprar ${amountBottles} garrafas de leite com R$${amountMoney} \n 
// Vai te sobrar R$${change}`);

