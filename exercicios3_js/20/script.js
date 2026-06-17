let precoProduto = parseFloat(prompt("Digite o preço do produto:"));

if(precoProduto <= 20){
    alert("Barato");
}
else if(precoProduto >= 20 && precoProduto <= 100){
    alert("Médio");
}
else{
    alert("Caro");
}