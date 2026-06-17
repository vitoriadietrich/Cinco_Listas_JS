let macas = parseInt(prompt("Quantas maçãs?")); 
let preco;


if(macas < 12){
    preco = 1.30;
}
else if(macas < 12){
    preco = 1.00;
}

let total = macas * preco;
alert("Total: R$ " + total.toFixed(2));