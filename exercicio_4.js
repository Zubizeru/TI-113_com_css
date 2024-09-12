/* Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 
50 pessoas, e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos, 
considerando 10% de INSS a descontar. */
function executarExercicio4() {
    let nomes = [];
    let salarios = [];
    let inss = [];
    pedirCadastro(5, nomes, salarios, inss);
    exibirCadastro(5, nomes, salarios, inss);
}

function pedirCadastro(quantidade, nomes, salarios, inss) {
    for (let i = 0; i < quantidade; i++) {
        let nome = prompt(`Informe o ${i + 1}º nome:`);
        nomes.push(nome);

        let salario = parseFloat(prompt(`Informe quanto a ${i + 1}º pessoa recebe em salário:`));
        salarios.push(salario);

        let salarioLiquido = salario - (salario * 10 / 100);
        inss.push(salarioLiquido);
    }
}

function exibirCadastro(quantidade, nomes, salarios, inss) {
    let mensagem = ``;
    for (let i = 0; i < quantidade; i++) {
        mensagem += `<a style=" color: blue" >Nome</a>: ${nomes[i]}. <br>`;
        mensagem += `<a style=" color: blue" >Salário bruto</a>: R$${salarios[i].toFixed(2)}. <br>`;
        mensagem += `<a style=" color: blue" >Salário líquido</a>: R$${inss[i].toFixed(2)}. <br><br>`;
    }
    document.write(mensagem);
}