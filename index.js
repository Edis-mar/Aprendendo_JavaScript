function CriarReferencia(){
    var inNome = document.getElementById("inNome")
    var outCitacao = document.getElementById("outCitacao")
    var nome = inNome.value
    if(nome == "" || nome.indexOf(" ") == -1){
        alert("insira o nome no formulário")
        inNome.focus()
        return
    }
    var vetor = nome.split(" ")
    var tam = vetor.length
    var lastName = vetor[tam - 1]
    var citacao = []
    for (var i = 0; i < tam - 1; i++){
        citacao.push(vetor[i].charAt(0).toUpperCase())
    }
    outCitacao.textContent = lastName + "," + citacao.join(".") + "."
}
var btGerar = document.getElementById("btGerar")
btGerar.addEventListener("click", CriarReferencia)