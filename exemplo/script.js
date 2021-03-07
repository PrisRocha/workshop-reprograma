// input entrada 
var inputAno = document.querySelector("#ano")

// resposta para colocar o valor do ano
var paragrafoResposta = document.querySelector("#respostaAno")

// função
function cliquei(){
    paragrafoResposta.innerHTML = inputAno.valueAsNumber
}