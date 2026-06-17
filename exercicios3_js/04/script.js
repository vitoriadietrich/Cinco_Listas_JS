let idade1 = Number(prompt("Digite a idade de João:"));
let idade2 = Number(prompt("Digite a idade de Joaquim:"));

if(idade1 === idade2){
  alert("Têm a mesma idade!");
} else if(idade1 > idade2){
   alert("Não têm a mesma idade!");
} else {
    alert("Joaquim é mais velho que João!");
}