let celsius = parseFloat(prompt("Temperatura em °C:"));
let fahrenheit = (celsius * 9/5) + 32;
alert(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);

let fah = parseFloat(prompt("Temperatura em °F:"));
let cel = (fah - 32) * 5/9;
alert(`${fah}°F = ${cel.toFixed(1)}°C`);