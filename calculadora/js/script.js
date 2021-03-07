var inputGanhoPorMes = document.querySelector("#ganho-mes")

var inputHorasPorDia = document.querySelector("#horas-dia")

var spanHora = document.querySelector("#resposta")

// função
function calcularValorHora(){

    // 22 dias trabalhados
    var qtdDeHorasMes = inputHorasPorDia.valueAsNumber * 22;

    var valorDaHora = (inputGanhoPorMes.valueAsNumber / qtdDeHorasMes).toFixed(2)

    spanHora.innerHTML = "R$" + valorDaHora

}

