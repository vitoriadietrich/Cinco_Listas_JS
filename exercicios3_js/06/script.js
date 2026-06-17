let peso = Number(prompt("Digite seu peso:"));
let altura = Number(prompt("Digite sua altura:"));

let imc = peso / (altura * altura);

alert("Seu IMC é: " + imc.toFixed(2));

if(imc < 18.5){
    alert("Abaixo do peso");
} else if(imc <= 24.9){
    alert("Peso normal");
} else if(imc <= 24.9){
    alert("Sobrepeso");
} else {
    alert("Obesidade");
}