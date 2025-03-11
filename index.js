var pacientes = []
function adicionarPaciente(){
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")
    var nome = inPaciente.value
    if (nome == ""){
        alert("Informe o nome do Paciente:")
        inPaciente.focus()
        return
    }
    pacientes.push(nome)
    var lista = ""
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }
    outLista.textContent = lista
    inPaciente.value = ""
    inPaciente.focus()
}
var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", adicionarPaciente)



function Urgencia(){
    var inPaciente = document.getElementById("inPaciente")
    var outLista = document.getElementById("outLista")
    var nome = inPaciente.value
    if (nome == ""){
        alert("Informe o nome do Paciente:")
        inPaciente.focus()
        return
    }
    pacientes.unshift(nome)
    var lista = ""
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }
    outLista.textContent = lista
    inPaciente.value = ""
    inPaciente.focus()
}
var btUrg = document.getElementById("btUrg")
btUrg.addEventListener("click", Urgencia)



function atenderPaciente(){
    if (pacientes.lenght == 0) {
        alert("Não há pacientes na lista de espera")
        inPaciente.focus()
        return
    }
    var outAtendimento = document.getElementById("outAtendimento")
    var outLista = document.getElementById("outLista")
    var atender = pacientes.shift()
    outAtendimento.textContent = atender
    var lista = ""
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n"
    }
    outLista.textContent = lista
}
var btAtt = document.getElementById("btAtt")
btAtt.addEventListener("click", atenderPaciente)