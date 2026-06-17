
let primeiroNome = prompt("Insira seu primeiro nome:");

// 1. Transformamos em maiúsculas e removemos espaços
let nomeProcessado = primeiroNome.toUpperCase().replace(/\s/g, '');

// 2. Pegamos a contagem de letras
let quantidadeLetras = nomeProcessado.length;

// 3. Exibimos os resultados
alert(nomeProcessado);
alert("Primeiro Nome: " + primeiroNome + "\nQuantidade de Letras: " + quantidadeLetras);