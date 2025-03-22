var criancas = []
function adicionarCriança(){
    var inNome = document.getElementById("inNome")
    var inIdade = document.getElementById("inIdade")
    var nome = inNome.value
    var idade = Number(inIdade.value)

    if (nome == "" || idade == 0 || isNaN(idade)){
        alert("Insira os dados corretamente")
        inNome.focus()
        return
    }

    criancas.push({nome: nome , idade:idade})
    inNome.value = ""
    inIdade.value = ""
    inNome.focus()
}
var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", adicionarCriança)

function criarLista (){

    if (criancas.length == 0){
       alert("isncreva crianças na lista...")
       return 
    }

    var lista = ""

    for(var i in criancas){
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n"
    }
    document.getElementById("outLista").textContent = lista 
}
btListar = document.getElementById("btListar")
btListar.addEventListener("click", criarLista)

function filtrarLista (){
    if (criancas.length == 0){
        alert("isncreva crianças na lista...")
        return 
     }
    var copia = criancas.slice()
    copia.sort(function (a , b) {return a.idade - b.idade} )
    var resumo = ""

    var aux = copia[0].idade
    var nomes = []

    for(var i in copia){
        if(copia[i].idade == aux){ // PREENCHER A LISTA NOME
            nomes.push(copia[i].nome)
        }else{  //CRIAR A PRIMEIRA LINHA DE BLOCOS DE CRIANÇAS
            resumo += aux + " ano(s): " + nomes.length + " crianca(s) - "
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = copia[i].idade
            nomes = []
            nomes.push(copia[i].nome)
        }
    }
    resumo += aux + " ano(s): " + nomes.length + " crianca(s) - "
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    document.getElementById("outLista").textContent = resumo
}
var btFiltrar = document.getElementById("btFiltrar")
btFiltrar.addEventListener("click", filtrarLista) 