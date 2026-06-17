// Declaração das variáveis
        let nota1 = parseFloat(prompt("Informe a primeira nota (entre 0 e 10):"));
        let nota2 = parseFloat(prompt("Informe a segunda nota (entre 0 e 10):"));
        let nota3 = parseFloat(prompt("Informe a terceira nota (entre 0 e 10):"));
        let media = 3


        if ((nota1 > 0 && nota1 < 10) && (nota2 > 0 && nota2 < 10) && (nota3 > 0 && nota3 < 10)){
            
        	// Calculando a média
		alert("\nA média dos valores é: " + (nota1 + nota2 + nota3) / media);

         }

        if ((nota1 > 5) && (nota2 > 5) && (nota3 > 5)) {
        	alert("\nVocê passou no teste!");
        }
        else if ((nota1) && (nota2 < 5) && (nota3 < 5)) {
        	alert("\nVocê não passou no teste!");
        }
        else {
        	alert("\nTente novamente!");
        }