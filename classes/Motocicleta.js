class Motocicleta extends Veiculo {
    constructor(placa, tipoDeCombustivel, anoDeFabricacao, cor, cilindradas, tiposDeMotocicletas) {
        super(placa, tipoDeCombustivel, anoDeFabricacao, cor);
        this.cilindradas = cilindradas,
            this.tiposDeMotocicletas = tiposDeMotocicletas
    }

    info = () => {
        return `Placa: ${this.placa}
                Combustivel: ${this.tipoDeCombustivel}
                Ano de Fabricação: ${this.anoDeFabricacao}
                Cor: ${this.cor}
                Cilindradas: ${this.cilindradas}
                Tipo: ${this.tiposDeMotocicletas}`;
    }
}