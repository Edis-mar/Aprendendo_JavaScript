function RepetirFruta(){
    var inNumero = document.getElementById("inNumero")
    var inFruta = document.getElementById("inFruta")
    var outFr = document.getElementById("outFr")
    var fruta=inFruta.value
    var num = Number(inNumero.value)
    if(fruta == ""){
        alert("Escreva uma fruta")
        inFruta.focus()
        return
    }else if(/\d/.test(fruta)){
        alert("Escreva uma fruta")
        inFruta.focus()
        return 
    }else if(num == 0 || isNaN(num)){
        alert("Número inválido")
        inNumero.focus()
        return
    }
    var simbolo =" * "
    var repeticao = ""
    for(i=1; i<=num; i++){
        repeticao += fruta + simbolo
    } 
    outFr.textContent= repeticao
}
var btRepetir = document.getElementById("btRepetir")
btRepetir.addEventListener("click", RepetirFruta)