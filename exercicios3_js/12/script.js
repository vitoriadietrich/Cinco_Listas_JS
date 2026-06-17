let palavra;

do {
  palavra = prompt("Digite uma palavra:");

  // Verificamos se o usuário não cancelou o prompt (palavra existe)
  if (palavra && palavra.toLowerCase() !== "javascript") {
    alert("Escolha outra linguagem.");
  }
  
  // Se cancelar (null), a palavra não será "javascript", então o loop continua
} while (!palavra || palavra.toLowerCase() !== "javascript");

alert("Você escolheu a linguagem correta!");




// let palavra; 
// 1. Cria a variável 'palavra' sem valor inicial.



// do { 
// 2. Inicia o loop (faz o código rodar pelo menos uma vez).



// palavra = prompt("Digite uma palavra:"); 
// 3. Abre a caixa de entrada e guarda o que foi digitado.



// if (palavra && palavra.toLowerCase() !== "javascript") { 
// 4. Se o usuário escreveu algo E esse algo não é "javascript".



// alert("Escolha outra linguagem.");
// 5. Mostra o erro se a condição acima for verdadeira.



// } 
// 6. Fecha o bloco do 'if'.



// } while (!palavra || palavra.toLowerCase() !== "javascript"); 
// 7. Repete tudo se o campo estiver vazio, cancelado ou a palavra for errada.



// alert("Você escolheu a linguagem correta!"); 
// 8. Só aparece quando o usuário finalmente digita "javascript".