// Taxa de câmbio fixa
const taxaCambio = 5.30;

// Pergunta ao usuário o valor em dólares
const valorDolar = parseFloat(prompt("Digite o valor em dólares:"));

// Converte para reais
const valorReais = valorDolar * taxaCambio;

// Exibe o resultado
alert(`O valor em reais é: R$ ${valorReais.toFixed(2)}`);