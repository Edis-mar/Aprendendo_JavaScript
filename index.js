function PesoIdeal(){
    var inNome = document.getElementById("inNome")
    var inAltura = document.getElementById("inAltura")
    var rbMasculino = document.getElementById("rbMasculino")
    var rbFeminino = document.getElementById("rbFeminino")
    outResultado = document.getElementById("outResultado")
    var nome = inNome.value
    var altura = Number(inAltura.value)
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked
    if (nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo...")
        inNome.focus()
        return
    }
    if (altura == 0 || isNaN(altura)){
        alert("Por favor , informe a altura corretamente...")
        inAltura.focus()
        return
    }
    if (masculino) {
        var peso = 22 * Math.pow(altura,2)
    }
    else{
        var peso = 21 * Math.pow(altura, 2)
    }
    
    outResultado.textContent = nome + ": seu peso ideal é " +peso.toFixed(3) +" kg"
}
var btResultado = document.getElementById("btPeso")
btResultado.addEventListener("click", PesoIdeal)

function LimparCampos(){

}