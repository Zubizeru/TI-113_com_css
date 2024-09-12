function executarExercicio5() {
    let mensagem = "";
    let sair = false;
    do {
        let option = menudeNumeros();
        switch (option) {
            case "1":
                lerNumeros(5);
                break;
            case "2":
                lerNumeros(15);
                break;
            case "3":
                lerNumeros(25);
                break;
            case "4":
                lerNumeros(50);
                break;
            case "5":
                sair = true;
                break;
            default:
                mensagem = "Operação inválida. Por favor, escolha um número entre 1 e 5.";
                alert(mensagem);
                break;
        }
    } while (!sair);
    if (sair) { 
        return; 
    } else {
        separacaoNumeros();
        exibirSeparacao();
    }
}

function menudeNumeros() {
    let infoMenu = `Informe quantos números você deseja cadastrar:
    1. Cinco números.
    2. Quinze números.
    3. Vinte e cinco números.
    4. Cinquenta números.
    5. Sair.`;
    let opcao = prompt(infoMenu);
    return opcao;
}

// Variáveis usadas;
let numeros = [];
let pares = [];
let impares = [];

function lerNumeros(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        let numero;
        let entrada;
        do {
            entrada = prompt(`Leitura dos ${quantidade} números.\nInforme o ${i + 1}º número:`).trim();
            
            if (entrada === "") {
                alert("Espaço em branco. Por favor, digite um número.");
            } else {
                numero = parseFloat(entrada);
                if (isNaN(numero)) {
                    alert("Número inválido. Por favor, digite um número válido.");
                } else if (numero < 0) {
                    alert("O número não pode ser negativo. Por favor, digite um número positivo.");
                } else {
                    numeros.push(numero);
                }
            }
        } while (entrada === "" || isNaN(numero) || numero < 0);
    }
}