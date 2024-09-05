export class Veiculo {
    constructor(marca, placa, tipoDeCombustivel, anoDeFabricacao, cor) {
        this.marca = marca,
            this.placa = placa,
            this.tipoDeCombustivel = tipoDeCombustivel,
            this.anoDeFabricacao = anoDeFabricacao,
            this.cor = cor
    }

    info = () => {
        return `Placa: ${this.placa} - Combustivel: ${this.tipoDeCombustivel} - Ano de Fabricação: ${this.anoDeFabricacao} - Cor: ${this.cor}`;
    }
}