let idade = Number(prompt("Insira sua idade:"));

if(idade < 12){
    alert("Infantil");
} 
else if(idade >= 12 && idade <= 17){
    alert("Adolescente");
} 
else if(idade >= 18 && idade <= 64){
    alert("Adulto");
} 
else{
    alert("Sênior");
}