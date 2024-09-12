/* Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor, e após verificar 
quantas vogais foram lidas e mostre somente consoantes no alert. */
function executarExercicio3() {
    const letras = lerLetras(10);                    // Chama a função para ler 10 letras
    const {consoantes, vogais} = separarConsoantes(letras);    // Separa as consoantes e vogais das letras
    exibirConsoantes(consoantes, vogais);   // Exibe as consoantes
}

function lerLetras(quantidade) {
    let letras = [];
    let letra;
    for (let i = 0; i < quantidade; i++) {
        letra = prompt(`Informe a ${i + 1}ª letra (somente uma letra):`).toUpperCase();
        letras.push(letra); // Adiciona a letra ao array
    }
    return letras;
}

function separarConsoantes(letras) {
    let consoantes = [];
    let vogais = [];
    
    for (let i = 0; i < letras.length; i++) {
        if (['A', 'E', 'I', 'O', 'U'].includes(letras[i])) {
            vogais.push(letras[i]); // Adiciona a letra ao array de vogais
        } else {
            consoantes.push(letras[i]); // Adiciona a letra ao array de consoantes
        }
    }

    return { consoantes, vogais }; // Retorna um objeto contendo consoantes e vogais
}

function exibirConsoantes(consoantes, vogais) {
    let mensagem = `Algoritmo de dez letras: \nForam lidas ${vogais.length} vogais!\n`;

    for (let i = 0; i < consoantes.length; i++) {
        mensagem += consoantes[i];
        if (i === consoantes.length - 1) {
            mensagem += ""; // Adiciona ponto no final da última consoante
        } else if (i === consoantes.length - 2) {
            mensagem += " e "; // Adiciona "e" entre os dois últimos números
        } else {
            mensagem += ", "; // Adiciona vírgula e espaço entre as consoantes
        }
    }
    mensagem += ` são as consoantes do algoritmo (${consoantes.length} consoantes)`;

    alert(mensagem); // Exibe a mensagem ao usuário diretamente no alert
}