function executarExercicio2() {
    const notas = lerNotas(4);                     
    const media = calcularMedia(notas);             
    exibirNotaseMedia(notas, media);                
}

function lerNotas(quantidade) {
    let notas = [];
    for (let i = 0; i < quantidade; i++) {
        let nota;
        let entrada;
        do {
            entrada = prompt(`Informe a ${i + 1}ª nota:`);

            if (entrada.trim() === "") {
                alert("Espaço em branco. Por favor, digite uma nota válida.");
            } else {
                nota = parseFloat(entrada);
                if (isNaN(nota)) {
                    alert("Número inválido. Por favor, digite uma nota válida.");
                }
            }
        } while (entrada.trim() === "" || isNaN(nota));
        
        notas.push(nota); 
    }
    return notas;
}

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function exibirNotaseMedia(notas, media) {
    let mensagem = "Notas: ";

    for (let i = 0; i < notas.length; i++) {
        mensagem += `${i + 1}ª nota: ${notas[i].toFixed(2)}`;
        if (i === notas.length - 1) {
            mensagem += ".";
        } else {
            mensagem += ", ";
        }
    }

    mensagem += `\nMédia: ${media.toFixed(2)}`;

    alert(mensagem);
}