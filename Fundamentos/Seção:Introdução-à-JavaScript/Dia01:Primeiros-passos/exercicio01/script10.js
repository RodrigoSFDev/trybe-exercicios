const valorProduto = 100;
const valorDaVenda = 130;
if ( valorProduto >=0 && valorDaVenda >=0){
    let produtoValorTotal = (valorProduto * 0,2);
    let lucro = (valorDaVenda - produtoValorTotal) * 1000;
    console.log(lucro);
} else {
    console.log('Erro, valor invalido');
}