function adicionarItem() {
  const lista = document.getElementById("lista");
  const input = document.getElementById("meuInput"); // pega o input


  const novoItem = document.createElement("li");
  novoItem.innerText = input.value; // usa o valor digitado

  lista.appendChild(novoItem);
    }

