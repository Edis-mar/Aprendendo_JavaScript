function Palindromo(){    
    var inFrase = document.getElementById("inFrase")
    var outVerificacao = document.getElementById("outVerificacao")
    var frase = inFrase.value.toLowerCase()
    if(frase == ""){
        alert("escreva a palavra/frase")
        inFrase.focus()
        return
    }

    var tam = frase.length
    var palin = ""

    for(var i = tam -1; i >= 0; i--){
        palin += frase.charAt(i)
    }
    if(palin == frase){
        outVerificacao.textContent = frase.toUpperCase() + " é um palíndromo"
    }else{
        outVerificacao.textContent = frase.toUpperCase() + " não é um palíndromo"
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", Palindromo)