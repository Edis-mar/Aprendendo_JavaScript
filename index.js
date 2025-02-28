var numContas = 0
var valTotal = 0
var resposta = ""
function FazerConta (){
    var inDescricao = document.getElementById("inDescricao")
    var inValor = document.getElementById("inValor")
    var outConta = document.getElementById("outConta")
    var outTotal = document.getElementById("outTotal")
    var descricao = inDescricao.value
    var valor = Number(inValor.value)
    if(descricao == "" || valor == "" || isNaN (valor)){
        alert("preenche os formulários corretamente...")
        inDescricao.focus()
        return
    }
    numContas++
    valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " +valor.toFixed(2) +"\n"
    outConta.textContent = resposta + "----------------------------------"
    outTotal.textContent = numContas +  " Conta(s) - Total R$: "+valTotal.toFixed(2)
    inDescricao.value = ""
    inValor.value = ""
    inDescricao.focus()
}
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click",  FazerConta)