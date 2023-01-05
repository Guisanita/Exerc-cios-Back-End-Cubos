const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for (let objeto of this.produtos) {
            totalItens += objeto.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (let objeto of this.produtos) {
            totalAPagar += (objeto.precoUnit * objeto.qtd);
        }

        return totalAPagar
    },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}.`);
        let totalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();

        if (totalItens > 1) {
            console.log(`Total de itens: ${totalItens} itens`)
        } else if (totalItens == 0) {
            console.log("Nenhum, vá até o site e compre agora!")
        } else {
            console.log(`Total de itens: 1 item`)
        }

        let totalAPagarReais = (totalAPagar / 100).toFixed(2);
        console.log(`Total a pagar: R$${totalAPagarReais}`);

    },
    addProduto: function (produto) {
        let produtosCarrinho = this.produtos;
        let produtoNovo = true;
        for (item of produtosCarrinho) {
            if (item.id === produto.id) {
                item.qtd += produto.qtd;
                produtoNovo = false;
            }
        }
        if (produtoNovo) {
            produtosCarrinho.push(produto);
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}.`);
        let totalItens = this.calcularTotalDeItens();
        let totalAPagar = this.calcularTotalAPagar();
        let item = 0
        for (let objeto of this.produtos) {
            item += 1;
            let nome = objeto.nome;
            let quantidade = objeto.qtd;
            let valorParcialEmReais = (((quantidade * objeto.precoUnit) / 100).toFixed(2));
            console.log(`Item ${item} - ${nome} - ${quantidade} und - R$${valorParcialEmReais}`);
        }

        if (totalItens > 1) {
            console.log(`Total de itens: ${totalItens} itens`)
        } else if (totalItens == 0) {
            console.log("Nenhum, vá até o site e compre agora!")
        } else {
            console.log(`Total de itens: 1 item`)
        }

        let totalAPagarReais = (totalAPagar / 100).toFixed(2);
        console.log(`Total a pagar: R$${totalAPagarReais}`);
    },
    calcularDesconto: function () {
        let descontoAcima100 = 0;
        let descontoItemGratis = 0
        let desconto = 0;
        let precoUnit = Number.MAX_VALUE;
        let totalAPagar = this.calcularTotalAPagar();

        if (totalAPagar >= 10000) {
            descontoAcima100 = totalAPagar * 0.1;
            for (let objeto of this.produtos) {
                if (objeto.precoUnit < precoUnit) {
                    precoUnit = objeto.precoUnit;
                    descontoItemGratis = precoUnit;
                }

            }

            if (descontoAcima100 > descontoItemGratis) {
                desconto = descontoAcima100;
                return desconto;
            } else {
                desconto = descontoItemGratis;
                return desconto;
            }
        } else {
            for (let objeto of this.produtos) {
                let precoUnit = Number.MAX_VALUE;
                if (objeto.precoUnit < precoUnit) {
                    precoUnit = objeto.precoUnit;
                    descontoItemGratis = precoUnit;
                }
            }
            desconto = descontoItemGratis;
            return desconto;
        }

    }


}

// carrinho.imprimirResumo();
// carrinho.imprimirDetalhes();
// console.log(carrinho.calcularDesconto());

// carrinho.imprimirResumo();


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();
// console.log(carrinho.calcularDesconto());

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
console.log(carrinho.calcularDesconto());
