let valor = parseFloat(prompt("Valor da compra: R$"));
let codigo = prompt("Código de desconto:");

if (codigo === "desc10") {
  valor *= 0.9; // aplica 10% de desconto
}

alert(`Total: R$ ${valor.toFixed(2)}`);



// Pega o valor da compra e o código de desconto do usuário.

// Se o código for "desc10":
// Aplica 10% de desconto (valor * 0.9 = 90% do valor original).

// Mostra o valor final (com ou sem desconto).