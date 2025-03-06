function MostrarPrevisao(){
    var inChin = document.getElementById("inChin")
    var inAnos = document.getElementById("inAnos")
    var outPrevisao = document.getElementById("ouPrevisao")
    var chin=Number(inChin.value)
    var anos = Number(inAnos.value)
    if (chin == "" || isNaN(chin)){
        alert("escreva um número válido")
        inChin.focus()
        return
    }else if (chin < 2){
        alert("Escreva um número maior que 2")
        inChin.focus()
        return
    }else if (anos == "" || isNaN(anos)){
        alert("escreva um número válido")
        inAnos.focus()
        return
    }
    var repeticao = ""
    for(i=1; i<=anos; i++){
        repeticao += i +"º Ano: " +chin+ " Chinchilas \n"
        chin = chin * 3
    } 
    outPrevisao.textContent= repeticao
}
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", MostrarPrevisao)