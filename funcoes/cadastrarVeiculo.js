import PromptSync from "prompt-sync";
//Importacao das classes carro e motocicleta via desestruturação
import { Carro } from "../classes/Carro.js";
import { Motocicleta } from "../classes/Motocicleta.js";

//Instanciando o promptSync para que o usuario possa interagir com a aplicação via entrada no teclado
var prompt = new PromptSync();

//Função para cadastrar os dados do carro
export function cadastrarCarro() {
    let marca = prompt('Informe a marca: ');
    let placa = prompt('Informe o número da placa: ');
    let combustivel = prompt('Informe o tipo de combustivel: ');
    let ano = +prompt('Informe o ano de lançamento: ');
    let cor = prompt('Informe a cor do veículo: ');
    let portas = prompt('Informe a quantidade de portas: ');
    let cambio = prompt('Informe o tipo de cambio: ');

    const carro = new Carro(marca, placa, combustivel, ano, cor, portas, cambio);
    return carro;
}

//Função para cadastrar os dados da moto
export function cadastrarMoto() {
    let marca = prompt('Informe a marca: ');
    let placa = prompt('Informe o número da placa: ');
    let combustivel = prompt('Informe o tipo de combustivel: ');
    let ano = +prompt('Informe o ano de lançamento: ');
    let cor = prompt('Informe a cor da moto: ');
    let cilindradas = prompt('Informe a quantidade de cilindradas: ');
    let tipo = prompt('Informe o tipo de motocicleta: ');

    const moto = new Motocicleta(marca, placa, combustivel, ano, cor, cilindradas, tipo);
    return moto;
}