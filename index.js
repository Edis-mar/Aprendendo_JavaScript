function VerificarNumero(){
    var inValor = document.getElementById("inValor")
    var outTempo = document.getElementById("outTempo")
    var outTroco = document.getElementById("outTroco")
    var valor = Number(inValor.value)
    if (valor < 1){
        outTempo.textContent = "Valor insuficiente"
        outTroco.textContent = ""
    }
    else if (valor < 1.75){
        outTempo.textContent = "Tempo: 30 min"
        var troco = Math.floor(valor - 1)
        outTroco.textContent = "Troco R$: "+troco
    }
    else if (valor >= 1.75 && valor < 3 ){
        outTempo.textContent = "Tempo: 60 min"
        var troco = Math.floor(valor - 1.75)
        outTroco.textContent = "Troco R$: "+troco
    }
    else if (valor >= 3 ){
        outTempo.textContent = "Tempo: 120 min"
        var troco = Math.floor(valor - 3)
        outTroco.textContent = "Troco R$: "+troco
    }
}
btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", VerificarNumero)