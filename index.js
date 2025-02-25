function RetirarSaque(){
    var inSaque = document.getElementById("inSaque")
    var out100 = document.getElementById("out100")
    var out50 = document.getElementById("out50")
    var out10 = document.getElementById("out10")
    var saque = Number(inSaque.value)
    if(saque == "" || isNaN(saque)){
        alert("informe o valor do saque corretamente.")
        inSaque.focus()
        return
    }
    if (saque % 10 != 0) {
        alert("valor inválido para notas disponiveis (R$ 10, 50, 100)")
        inSaque.focus()
        return
    }
    var notas100 = Math.floor(saque / 100)
    var resto = saque % 100
    var notas50 = Math.floor(resto / 50)
    resto = resto % 50
    var notas10 = Math.floor(resto / 10)
    out100.textContent = ("Notas de R$ 100: " +notas10)
    out50.textContent = ("Notas de R$ 50: "+notas50)
    out10.textContent = ("Notas de R$ 10: "+notas10)
}

btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", RetirarSaque)