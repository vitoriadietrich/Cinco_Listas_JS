let nota = parseInt(prompt("Insira um nota de 0 a 100:"));

if(nota >= 90){
    alert("A");
} 
else if(nota >= 80 && nota <= 89){
    alert("B");
} 
else if(nota >= 70 && nota <= 79){
    alert("C");
} 
else if(nota >= 60 && nota <= 69){
    alert("D");
} 
else{
    alert("F");
}