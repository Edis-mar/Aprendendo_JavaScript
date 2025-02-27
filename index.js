function MostrarTabuada (){
    var inNumero = document.getElementById("inNumero")
    var outTabuada = document.getElementById("outTabuada")
    var num = Number(inNumero.value)
    if (num == 0 || isNaN(num)) {
        alert ("Informe um numero válido...")
        inNumero.focus();
        return;
    } 
    var resposta =" Entre " + num + " e 1: "

    for (let i = num ; i > 0; i--) {
        resposta = resposta + i + ","
    } 

    outTabuada.textContent = resposta
}
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", MostrarTabuada)