function CalcularFuso(){
    var inHoraBrasil = document.getElementById("inHoraBrasil")
    var outHoraFranca = document.getElementById("outHoraFranca")
    var horaBrasil = Number(inHoraBrasil.value)
    if (inHoraBrasil.value == "" || isNaN(horaBrasil)){
        alert("Informe a hora no Brasil corretamente")
        inHoraBrasil.focus()
        return
    } 
    var fuso = horaBrasil + 5 
    if (fuso > 24) {
        fuso = fuso - 24
    } 
    outHoraFranca.textContent = "Hora na França: "+fuso.toFixed(2)
}
btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click" , CalcularFuso)