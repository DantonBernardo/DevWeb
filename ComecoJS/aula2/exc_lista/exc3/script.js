var botao = document.getElementById('calcular')
botao.addEventListener('click', function(){
    var nota = document.getElementById('nota').value
    if (nota < 0 || nota > 10){
        alert('Valor inválido! Tente novamente')
    } else if (nota < 6) {
        alert('REPROVADO')
    } else if (nota >= 6 && nota < 8){
        alert('APROVADO')
    } else if (nota >= 8){
        alert('Aprovado com louvor, glória')
    }
})