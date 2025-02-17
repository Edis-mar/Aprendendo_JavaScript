function valorPagar(){
    var inPor15 = document.getElementById("inPor15");
    var inTempo = document.getElementById("inTempo");
    var outValorFinal = document.getElementById("outValorFinal");
    var Por15 = inPor15.value;
    var Tempo = inTempo.value;
    var Valor = Math.ceil(Tempo / 15) * Por15;
    outValorFinal.textContent = "Valor a pagar R$: "+Valor.toFixed(2);
}

var btCalcule = document.getElementById("btCalcule");
btCalcule.addEventListener("click", valorPagar);

