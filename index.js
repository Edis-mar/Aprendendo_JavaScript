var clubeS = []
function adicionarClubes(){
    var inClube = document.getElementById("inClube")
    var outLista = document.getElementById("outLista")
    var clube = inClube.value

    if (clube == ""){
        alert("escreva o nome do clube...")
        inClube.focus()
        return
    }
    clubeS.push(clube)

    inClube.value = ""
    inClube.focus()
}
var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", adicionarClubes)

function ListarClubes(){
    if (clubeS == ""){
        alert("A lista de Clubes esta vazia...")
    }

    var lista = ""
    var num = 1
    for (var i in clubeS){
        lista += num + ". " + clubeS[i]+ "\n"
        num++
    }

    document.getElementById("outLista").textContent = lista
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", ListarClubes)

function MontarTabela(){
    if (clubeS == ""){
        alert("Adicione Clubes a lista")
    }    
    
    var copia = clubeS.slice()
    var confrontos = ""
    if ( copia.length % 2 !== 0){
        alert("Numero de times ímpares, não foi possivel criar a tabela")
        return   
    }

    while (copia.length > 0) {
      var time1 = copia.shift()     
      var time2 = copia.pop()       
      confrontos += `${time1} x ${time2}\n`
    }

    document.getElementById("outLista").textContent = confrontos
}
var btMontar = document.getElementById("btMontar")
btMontar.addEventListener("click", MontarTabela)