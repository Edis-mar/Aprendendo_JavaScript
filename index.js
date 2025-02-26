function VerificarLado(){
    var inA = document.getElementById("inA")
    var inB = document.getElementById("inB")
    var inC = document.getElementById("inC")
    var outLados = document.getElementById("outLados")
    var outTipo = document.getElementById("outTipo")
    var A = Number(inA.value)
    var B = Number(inB.value)
    var C = Number(inC.value)
if (isNaN (A) || isNaN (B) || isNaN (C) || A <= 0 || B <= 0 || C <= 0){
    alert ("Escreva os numeros corretamente")
}
else if(A > (B + C) || B > (A + C) || C > (B + A)){
    outLados.textContent = "Lados não podem formar um triângulo"
    outTipo.textContent = ""
}
else if(A == B && B == C && C == A ){
    outLados.textContent = "Lados podem formar um triângulo "
    outTipo.textContent = "Tipo: Equilátero"
}
else if(A == B && A != C || B == C && B != A || C == A && C != B){
    outLados.textContent = "Lados podem formar um triângulo "
  outTipo.textContent = "Tipo: Isósceles"
}
else if(A != B && A != C && C != B ){
    outLados.textContent = "Lados podem formar um triângulo "
    outTipo.textContent = "Tipo: Escaleno"
}
}
btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", VerificarLado)