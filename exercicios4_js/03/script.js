let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

if (valorCompra > 100) {
  let valorFinal = valorCompra * 0.90; // 10% de desconto
  alert("Valor final com desconto: R$ " + valorFinal.toFixed(2));
} 
else {
  alert("Valor final: R$ " + valorCompra.toFixed(2));
}