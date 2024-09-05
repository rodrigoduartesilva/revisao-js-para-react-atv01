class Carro extends Veiculo {
    constructor(placa, tipoDeCombustivel, anoDeFabricacao, cor, quantidadeDePortas, tipoDeCambio) {
        super(placa, tipoDeCombustivel, anoDeFabricacao, cor);
        this.quantidadeDePortas = quantidadeDePortas,
            this.tipoDeCambio = tipoDeCambio

    }

    info = () => {
        return `Placa: ${this.placa}
                Combustivel: ${this.tipoDeCombustivel}
                Ano de Fabricação: ${this.anoDeFabricacao}
                Quantidade de Portas: ${this.quantidadeDePortas}
                Cor: ${this.cor}
                Tipo de Câmbio: ${this.tipoDeCambio}`;
    }
}