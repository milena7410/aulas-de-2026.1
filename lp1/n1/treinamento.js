const prompt = require('prompt-sync')();

let opcao;

do {
    console.log("=== SISTEMA DO REINO ===");
    console.log("1 - Treinamento de soldados");
    console.log("2 - Cofre do reino");
    console.log("3 - Análise de cidadãos");
    console.log("4 - Relatório final");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {

        case 1:
            // Treinamento de soldados
            let n = parseInt(prompt("Quantos soldados treinar? "));

            for (let i = 1; i <= n; i++) {
                if (i % 2 === 0) {
                    console.log(i + " - Par");
                } else {
                    console.log(i + " - Ímpar");
                }
            }
            break;

        case 2:
            // Cofre do reino
            let soma = 0;

            while (soma < 100) {
                let valor = parseFloat(prompt("Digite o valor: "));
                soma += valor;
            }

            console.log("Total acumulado: " + soma);
            break;

        case 3:
            // Análise de cidadãos
            let positivos = 0;
            let negativos = 0;
            let numero;

            do {
                numero = parseInt(prompt("Digite um número (0 para sair): "));

                if (numero > 0) {
                    positivos++;
                } else if (numero < 0) {
                    negativos++;
                }

            } while (numero !== 0);

            console.log("Positivos: " + positivos);
            console.log("Negativos: " + negativos);
            break;

        case 4:
            // Relatório final
            let maior;
            let menor;
            let total = 0;

            for (let i = 1; i <= 5; i++) {
                let num = parseFloat(prompt("Digite um número: "));

                if (i === 1) {
                    maior = num;
                    menor = num;
                } else {
                    if (num > maior) {
                        maior = num;
                    }
                    if (num < menor) {
                        menor = num;
                    }
                }

                total += num;
            }

            let media = total / 5;

            console.log("Maior: " + maior);
            console.log("Menor: " + menor);
            console.log("Média: " + media);
            break;

        case 0:
            console.log("Encerrando o sistema...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);