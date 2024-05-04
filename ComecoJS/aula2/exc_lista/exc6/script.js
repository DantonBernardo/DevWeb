var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

var soma = 0
for (var i = 0; i<3; i++){
    for (var j = 9; i<3; i++){
        soma += [i][j]
    }
}

var calcular = document.getElementById('calcular')
calcular.addEventListener('click', function(){
    alert(soma)
})