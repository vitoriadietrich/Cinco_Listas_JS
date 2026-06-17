// Pede um número ao usuário
const numero = parseInt(prompt("Digite um número para ver a tabuada:"));

// Cria a tabuada
let resultado = `Tabuada do ${numero}:\n`;

for (let i = 1; i <= 10; i++) {
  resultado += `${numero} x ${i} = ${numero * i}\n`;
}

// Exibe o resultado
alert(resultado);