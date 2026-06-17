let celsius = parseFloat(prompt("Temperatura em °C:"));
let fahrenheit = (celsius * 9/5) + 32;
alert(`${celsius}°C = ${fahrenheit.toFixed(1)}°F`);


if(celsius <= 0){
    alert("Muito frio");
} 
else if(celsius >= 0 && celsius <= 20){
    alert("Frio");
} 
else if(celsius >= 21 && celsius <= 30){
    alert("Agradável");
} 
else{
    alert("Calor");
}