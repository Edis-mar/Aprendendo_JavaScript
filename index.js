var carros = []

function adicionarCarros (){
    var inModelo = document.getElementById("inModelo")
    var inPreco = document.getElementById("inPreco")
    var modelo = inModelo.value
    var preco = Number(inPreco.value)

    if (modelo == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os dados...")
        inModelo.focus
        return
    }
    carros.push( { modelo: modelo, preco:preco } )
    inModelo.value = ""
    inPreco.value = ""
    inModelo.focus()

    listarCarros()
}
var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", adicionarCarros)


function listarCarros(){
    if(carros.length == 0){
        alert("Não há carros na lista")
        return
    }
    var lista = ""

    for(let i in carros){
        lista +=carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n"
    }
    document.getElementById("outLista").textContent = lista
}
var btListar = document.getElementById("btListar")
btListar.addEventListener("click", listarCarros)


function filtrarCarros(){
    var maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo == 0 || isNaN(maximo)){
        return
    }
    var lista = ""
    for(var i in carros){
        if( carros[i].preco <= maximo){
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n"
        }    
    }
    var outlista = document.getElementById("outLista")
    if (lista == ""){
        outlista.textContent = "Não há carros com preço até R$: "+ maximo.tofixed(2)
    }else {
        outlista.textContent = "Carros até R$: "+ maximo.toFixed(2) +
         "\n----------------------------\n"+ lista
    }
}
var btFiltrar = document.getElementById("btFiltrar")
btFiltrar.addEventListener("click", filtrarCarros)