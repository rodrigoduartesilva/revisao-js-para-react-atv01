import { Veiculo } from "./Veiculo.js";


export class Motocicleta extends Veiculo {
    constructor(marca, placa, tipoDeCombustivel, anoDeFabricacao, cor, cilindradas, tiposDeMotocicletas) {
        super(marca, placa, tipoDeCombustivel, anoDeFabricacao, cor);
        this.cilindradas = cilindradas,
            this.tiposDeMotocicletas = tiposDeMotocicletas
    }

    info = () => {
        return `            Marca:${this.marca} 
            Placa: ${this.placa}
            Combustivel: ${this.tipoDeCombustivel}
            Ano de Fabricação: ${this.anoDeFabricacao}
            Cor: ${this.cor}
            Cilindradas: ${this.cilindradas}
            Tipo: ${this.tiposDeMotocicletas}`;
    }
}