var numeros = [1, 4, 2, 6, 7]

var x = document.getElementById('calcular')
x.addEventListener('click', function() {
    var soma = 0
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    var media = soma / numeros.length
    alert(`A média dos números é ${media}`)
})