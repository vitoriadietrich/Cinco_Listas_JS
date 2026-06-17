function enviarTexto() {
      // Pega o valor do input
      const texto = document.getElementById("meuInput").value;

      // Coloca o texto dentro do parágrafo
      document.getElementById("resultado").textContent = texto;
    }