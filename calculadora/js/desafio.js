
var inputValorHora = document.querySelector("#valor-hora")

var inputHorasProjeto = document.querySelector("#horas-projeto")

var spanCalcular = document.querySelector("#resposta")

// função
function calcular(){

    var qtdDeHorasProjeto = inputHorasProjeto.valueAsNumber 

    var valorProjeto = (inputValorHora.valueAsNumber * qtdDeHorasProjeto).toFixed(2)

    spanCalcular.innerHTML = "R$" + valorProjeto

}



