var erros = [] //VETOR ACUMULADOR DOS ERROS
var sorteado = Math.floor(Math.random() *100) +1 //NUMERO SORTEADO
const chances = 6 //NUMERO DE CHANCES

function apostarNumero(){

    //DECLARAR VARIAVEIS
    var inNumero = document.getElementById("inNumero")
    var num = Number(inNumero.value)

    // VERIFICAR O VALOR NO INPUT
    if (isNaN(num) || num <= 0 || num > 100){
        alert("Escreva um numero válido")
        inNumero.focus()
        return
    }

    //DECLARAR VARIAVEIS 2
    var outErros = document.getElementById("outErros")
    var outChances = document.getElementById("outChances")
    var outDica = document.getElementById("outDica")
    
    //SE ACERTAR
    if (num == sorteado){
        alert("Parabéns!!! Você Acertou")
        btApostar.disabled = true
        btJogar.className = "exibe"
        outDica.textContent = "Parabéns!! Número sorteado: "+sorteado
    }else {
         // SE REPETIR O NUMERO ERRADO 
        if (erros.indexOf(num) >= 0){
            alert("você ja apostou o número "+num+ ". Tente outro...")

        //SE ERRAR  
        }else {
            erros.push(num)
            var numErros = erros.length
            var numChances = chances - numErros
            outErros.textContent = numErros + "(" + erros.join(", ")+ ")"
            outChances.textContent = numChances

            //SE AS CHANCES ACABAREM
            if(numChances == 0){
                alert("Suas chances acabaram...")
                btApostar.disabled = true
                btJogar.className = "exibe"
                outDica.textContent = "Game Over!! Número Sorterado: "+sorteado

            //ENQUANTO TEM CHANCES    
            }else { 
                var dica = num < sorteado ? "maior" : "menor"
                outDica.textContent = "Dica: Tente um número " + dica + " que " +num
                }
            } 
        }
        
        //RESETAR O INPUT
       inNumero.value = ""
       inNumero.focus()
}
var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostarNumero)

function JogarNovamente(){
    location.reload()
}
var btJogar = document.getElementById("btJogar")
btJogar.addEventListener("click", JogarNovamente)