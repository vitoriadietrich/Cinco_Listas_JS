let numero = Number(prompt("Digite um número:"));

if(numero % 2 === 0){
    alert("Par");
} else{
    alert("Ímpar");
}

// Como funciona o operador %?

// O operador % não retorna o resultado da divisão, mas sim o que sobra dela.

// Exemplo Par: $10 \div 2 = 5$ e sobra 0. Logo, 10 % 2 é 0.
// Exemplo Ímpar: $11 \div 2 = 5$ e sobra 1. Logo, 11 % 2 é 1.

//////////////////////////////////////////////////////////////////////////////////

// Por que usar === 0?

// numero % 2: Realiza a conta.

// === 0: Pergunta ao programa: "O resultado dessa sobra é exatamente zero?".

// Se sim: O bloco do if (Par) é executado.

// Se não: O bloco do else (Ímpar) é executado.