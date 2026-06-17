let temp = parseFloat(prompt("Temperatura:"));
let unidade = prompt("Unidade (C/F):");

let resultado = unidade.toUpperCase() === 'C' ? (temp * 9/5 + 32) + '°F' : (temp - 32) * 5/9 + '°C';

alert(`Convertido: ${resultado}`);