function VerPromocao(){
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outProduto = document.getElementById("outProduto")
    var outDesconto = document.getElementById("outDesconto")
    var Produto = inProduto.value
    var Preco = inPreco.value
    var promocao = (Preco * 2) + (Preco / 2)
    var desconto = Preco/2
    outProduto.textContent = (Produto+ " - Promoção: Leve 3 por R$: " +promocao.toFixed(2))
    outDesconto.textContent = ("O 3° produto custa apenas R$: " +desconto.toFixed(2))
}
var btPromocao = document.getElementById("btPromocao")
btPromocao.addEventListener("click", VerPromocao)
