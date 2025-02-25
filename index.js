function VerificarNumero(){
    var inVelo = document.getElementById("inVelo")
    var inCondu = document.getElementById("inCondu")
    var outSituacao = document.getElementById("outSituacao")
    var velo = Number(inVelo.value)
    var condu = Number(inCondu.value)
    if(condu <= velo){
        outSituacao.textContent = "Situação: sem Multa"
    }
    else if(condu <= velo * 1.2){
        outSituacao.textContent = "Situação: Multa leve "
    }
    else{
        outSituacao.textContent = "Situação: Multa Grave "
    }
}
btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", VerificarNumero)