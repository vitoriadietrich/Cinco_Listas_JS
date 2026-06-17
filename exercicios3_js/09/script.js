let horas = Number(prompt("Digite um horário"));

if(horas >= 5 && horas <= 11){
  alert("Manhã");
} 

else if(horas >= 12 && horas <= 17){
  alert("Tarde");
} 

else if(horas >= 18 && horas <= 23){
  alert("Noite");
} 

else{
  alert("Magrugada");
}