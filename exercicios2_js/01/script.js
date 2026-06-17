// Função para formatar o valor como moeda brasileira (R$)
function formatarMoeda(valor) {
    // Converte o valor para número e formata como moeda
    return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Exemplo de uso
let valor = prompt("Digite um valor numérico:");
valor = parseFloat(valor);
alert(formatarMoeda(valor));



// Explicação:

// A função formatarMoeda recebe um valor numérico.
// O método toLocaleString é usado com as opções minimumFractionDigits e maximumFractionDigits para garantir que o número tenha exatamente 2 casas decimais.
// O formato inclui o símbolo R$ e usa ponto como separador de milhar e vírgula para decimais, padrão brasileiro.