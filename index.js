function criptografar(){
    var inMessage = document.getElementById("inMessage")
    var message = inMessage.value
    if(message == ""){
        alert("insira a mensagem")
        inMessage.focus()
        return
    }

    var cripto = ""
    var par = []
    var impar = []
    for(var i = 0; i < message.length; i++){
        if(i % 2 == 0){
            par.push(message.charAt(i))
        }else{
            impar.push(message.charAt(i))
        }
    }

    var cripto = par.join("") + impar.join("")
    alert("mensagem criptografada: "+ cripto)
}
var btCripto = document.getElementById("btCripto")
btCripto.addEventListener("click", criptografar)

function Descriptografar (){
    var inMessage = document.getElementById("inMessage")
    var message = inMessage.value
    alert("mensagem descriptografada: "+ message)
}
var btDesCripto = document.getElementById("btDesCripto")
btDesCripto.addEventListener("click", Descriptografar)