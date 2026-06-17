function formatarTexto(texto) {
  let textoMaiusculo = texto.toUpperCase();
  let numeroCaracteres = texto.length;
  alert(`${textoMaiusculo} (${numeroCaracteres} caracteres)`);
}

let texto = prompt("Digite um texto:");
formatarTexto(texto);