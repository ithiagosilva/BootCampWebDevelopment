var name1 = prompt('Digite o seu nome: ');
var name2 = prompt('Digite o nome do seu crush: ');
var percentage = Math.random() * 100;
percentage = Math.floor(percentage) + 1;

if (percentage > 70) {
    alert(`A probabildade de vocês ficarem juntos é: ${percentage}%. PARABÉNS! Já pode casar.`);
}

if (percentage > 30 && percentage <= 70) {
    alert(`A probabildade de vocês ficarem juntos é: ${percentage}%.`);
}

if (percentage <= 30) {
    alert(`A probabildade de vocês ficarem juntos é: ${percentage}%. NÃO VAI DAR BOM.`);
}
