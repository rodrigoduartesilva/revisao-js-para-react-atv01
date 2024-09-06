import PromptSync from "prompt-sync";
import { cadastrarCarro, cadastrarMoto } from "./cadastrarVeiculo.js";
import { exibirMenu } from "./exibirMenu.js";

export function manipularCadastro() {
    const listaCarros = [];
    const listaMotos = [];

    let prompt = new PromptSync();
    let opcao;

    do {
        exibirMenu();
        opcao = +prompt('Selecione uma das opções do menu: ');
        let selecaoCadastro = opcao == 1 ? '**** Cadastro de Carro ****' : '**** Cadastro de Moto ****';

        switch (opcao) {
            case 1:
                console.log('\n');
                console.log(selecaoCadastro);
                console.log('\n');
                let carro = cadastrarCarro();
                listaCarros.push(carro);
                break;

            case 2:
                console.log('\n');
                console.log(selecaoCadastro);
                console.log('\n');
                let moto = cadastrarMoto();
                listaMotos.push(moto);
                break;

            case 3:
                console.log('\n');
                console.log('*** Impressão da lista de Veículos cadastrados ***');
                const listaVeiculos = [...listaCarros, ...listaMotos];
                console.log('\n');
                console.log(listaVeiculos);
                console.log('\n');
                break;

            case 4:
                console.log('Aplicação Finalizada');
                break;

            default:
                console.log('Opção Inválida!');
                break;
        }
    } while (opcao != 4);
}