function digaOla(nome) {
  document.getElementById("digaOla").innerText = "Olá, " + nome + "!";
}

let nome = prompt("Digite seu nome:");
digaOla(nome);