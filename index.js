// declara a função mostrarOLa
function mostrarOLa(){

    //obtém o conteúdo do campo (com id) nome
    var inNome = document.getElementById("nome").value;

    //exibe no parágrafo (resposta): "Olá" e o nome informado
    document.getElementById("resposta").textContent = "Olá " +inNome;
}
//criar uma referencia ao botão (com id) mostrar
var btMostrar = document.getElementById("mostrar");

/*registra o botão "mostrar" um ouvinte para o evento click que ao ser clicado
irá chamar a função mostrarOla*/
btMostrar.addEventListener("click", mostrarOLa);