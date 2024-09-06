import PromptSync from "prompt-sync";
import { cadastrarCarro, cadastrarMoto } from "./funcoes/cadastrarVeiculo.js";



let prompt = new PromptSync();

let opcao = +prompt('Digite 1: Cadastrar Carro | Digite 2: Cadastrar Moto: ');
let selecaoCadastro = opcao == 1 ? '**** Cadastro de Carro ****' : '**** Cadastro de Moto ****';


switch (opcao) {
    case 1:
        console.log('\n');
        console.log(selecaoCadastro);
        console.log('\n');
        cadastrarCarro();
        break;

    case 2:
        console.log('\n');
        console.log(selecaoCadastro);
        console.log('\n');
        cadastrarMoto();
        break;

    case 3:
        console.log('Aplicação Finalizada!');
        break;

    default:
        console.log('Opção Inválida!');
        break;
}



// const listaVeiculos = [...listaCarros, ...listaMotos];
// console.log(listaVeiculos);
