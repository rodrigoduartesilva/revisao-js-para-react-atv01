import PromptSync from "prompt-sync";
//Importação via desestruturação das funcoes de cadastro de veiculos
import { cadastrarCarro, cadastrarMoto } from "./cadastrarVeiculo.js";
import { exibirMenu } from "./exibirMenu.js";

//Funcao chamada pelo index.js, esta funcao manipula os dados dos veiculos cadastrados
export function manipularCadastro() {
    //Arrays vazios onde serão armazenados os veiculos cadastrados
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
                //A cada cadastro efetuado, o metodo push é chamado para inserir os valores dentro do array
                listaCarros.push(carro);
                break;

            case 2:
                console.log('\n');
                console.log(selecaoCadastro);
                console.log('\n');
                let moto = cadastrarMoto();
                //A cada cadastro efetuado, o metodo push é chamado para inserir os valores dentro do array
                listaMotos.push(moto);
                break;

            case 3:
                console.log('\n');
                console.log('*** Impressão da lista de Veículos cadastrados ***');
                //Adicionado via spread operator os dados cadastrados nas duas listas de veiculos
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