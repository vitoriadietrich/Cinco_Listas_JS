// Taxa de câmbio fixa
const taxaCambio = 5.30;

// Pergunta ao usuário o valor em dólares
const valorReais = parseFloat(prompt("Digite o valor em dólares:"));

// Converte para reais
const valorDolar = valorReais / taxaCambio;

// Exibe o resultado
alert(`O valor em dólar é: $ ${valorDolar.toFixed(2)}`);