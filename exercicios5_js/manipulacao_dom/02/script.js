function adicionarItem() {
  const lista = document.getElementById("lista");

  const novoItem = document.createElement("li");
  novoItem.innerText = "Novo Item";

  lista.appendChild(novoItem);
    }