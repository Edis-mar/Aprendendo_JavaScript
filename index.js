var dados = []
function adicionarConcursados(){
    var inCandidato = document.getElementById("inCandidato")
    var inNum = document.getElementById("inNum")
    var candidato = inCandidato.value
    var num = Number(inNum.value)

    if(candidato == "" || num == 0 || isNaN(num) ){
        alert("Preencha os formulários corretamente")
        inCandidato.focus()
        return
    }

    dados.push( { nome:candidato, num:num } )
    inCandidato.value = ""
    inNum.value = ""
    inCandidato.focus()
}
var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", adicionarConcursados)

function listarTodos(){
    if (dados.length == 0){
        alert("a lista está vazia")
        return
    }

    var lista = ""
    for(var i in dados){
        lista += dados[i].nome + " - " + dados[i].num + " acertos \n"
    }
    document.getElementById("outLista").textContent = lista    
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarTodos)

function listarAprovados(){
    var limite = Number(prompt ("Número de Acertos para Aprovação?"))
    var copia = dados.slice()
    var listaAprovados = ""

    for(var i in copia){
        if (copia[i].num >= limite){
            listaAprovados += copia[i].nome + " - " + copia[i].num + " acertos \n"
        }
    }
    document.getElementById("outLista").textContent = listaAprovados
}
var btAprovados = document.getElementById("btAprovados")
btAprovados.addEventListener("click", listarAprovados)