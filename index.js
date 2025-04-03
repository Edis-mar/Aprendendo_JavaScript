var listaNum = []
function AdicionarNum(){
    var inNum = document.getElementById("inNum")
    var num = Number(inNum.value)

    if(isNaN(num)){
        alert("escreva um número válido")
        inNum.focus()
        return
    }else if(listaNum.indexOf(num) !== -1){
        alert("Não repita o numero")
        inNum.focus()
        inNum.value = ""
        return
    }else{
        listaNum.push(num)
        atualizarLista()
    }
    inNum.focus()
    inNum.value = ""
}
function atualizarLista(){
    document.getElementById("outLista").textContent = "Número:" + listaNum.join(",")
} 

var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", AdicionarNum)

function VerificarOrdem(){
    if (listaNum.length === 0){
        alert("A lista está vazia")
        inNum.focus()
        return
    }

    for(var i = 0; i < listaNum.length - 1; i++){
        if(listaNum[i] > listaNum[i + 1]){
            document.getElementById("outInfo").textContent = "Atenção... os Números não estão em ordem crescente"
            return
        }
    }
    document.getElementById("outInfo").textContent = "Parábens, os Números estão em ordem crescente"

}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", VerificarOrdem)