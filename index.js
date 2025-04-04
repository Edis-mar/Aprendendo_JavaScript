var news = []
function Adicionar(){
    var inNoticia = document.getElementById("inNoticia")
    var noticia = inNoticia.value
    if (noticia == ""){
        alert("informe uma noticia")
        inNoticia.focus()
        return
    }

    news.push(noticia)
    lista = ""
    for(var i = 0; i < news.length ;i++){
        lista += (i+1) + "º) " + news[i] + "\n"
    }
    document.getElementById("outQuant").textContent = "Notícias Cadastradas: " + news.length
    document.getElementById("outLista").textContent = lista
    inNoticia.value = ""
    inNoticia.focus()
}
var btAdd = document.getElementById("btAdd")
btAdd.addEventListener("click", Adicionar)

function ultimasNoticias(){
    if (news.length == 0){
        alert("a lista está vazia")
        return
    }

    copia = news.slice(-3)
    lista = ""

    for(var i = 0; i < copia.length; i++){
        lista += (news.length - copia.length + i + 1)+ "º) " + copia[i] + "\n"
    }

    document.getElementById("outLista").textContent=  "3 Últimas Noticias \n -------------------------------\n" +lista
    inNoticia.value = ""
    inNoticia.focus()
}
btLastNews = document.getElementById("btLastNews")
btLastNews.addEventListener("click", ultimasNoticias)