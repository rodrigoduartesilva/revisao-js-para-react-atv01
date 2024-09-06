import { Veiculo } from "./Veiculo.js";

//Classe carro,esta classe herda os atributos e metodos da classe veiculo
export class Carro extends Veiculo {
    constructor(marca, placa, tipoDeCombustivel, anoDeFabricacao, cor, quantidadeDePortas, tipoDeCambio) {
        super(marca, placa, tipoDeCombustivel, anoDeFabricacao, cor);
        this.quantidadeDePortas = quantidadeDePortas,
            this.tipoDeCambio = tipoDeCambio

    }

    info = () => {
        return `            Marca: ${this.marca}            
            Placa: ${this.placa}
            Combustivel: ${this.tipoDeCombustivel}
            Ano de Fabricação: ${this.anoDeFabricacao}
            Quantidade de Portas: ${this.quantidadeDePortas}
            Cor: ${this.cor}
            Tipo de Câmbio: ${this.tipoDeCambio}`;
    }
}