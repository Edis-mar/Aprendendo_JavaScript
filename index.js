var simbol =("*_")
function Simbolos(){
    var inNumero = document.getElementById("inNumero")
    var outSimbolos = document.getElementById("outSimbolos")
    var num = Number(inNumero.value)
    if(num == 0 || isNaN(num)){
        alert("Número inválido")
        inNumero.focus()
        return
    }
    var estrelas = ("")
    for(i=1; i <= num; i++){
        estrelas = estrelas + "*_"
        outSimbolos.textContent = (estrelas + "*")
    }
}

var btPreencher = document.getElementById("btPreencher")
btPreencher.addEventListener("click", Simbolos)