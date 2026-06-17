function converterDolarParaReal(valorDolar) {
      const taxa = 5.65;
      return valorDolar * taxa;
    }

    const valor = prompt("Digite o valor em dólares:");
    const convertido = converterDolarParaReal(Number(valor));

    document.getElementById("resultado").innerText =
      "Valor em reais: R$ " + convertido.toFixed(2);