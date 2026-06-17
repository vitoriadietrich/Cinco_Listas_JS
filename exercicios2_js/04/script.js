let nomeQualquer = prompt("Digite um nome completo:");

let totalLetras = nomeQualquer.replace(/\s/g, '').length; 

alert("O total de letras desse nome completo é de: " + totalLetras);

// Explicação:
// \s remove os espaços
// .length conta as letras 