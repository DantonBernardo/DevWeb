var calcular = document.getElementById('calcular')
calcular.addEventListener('click', function(){
    var valor = document.getElementById('valor')
    if (valor < 0){
        alert('Valor inválido, tente novamente')
    } else if (valor == 0){
        alert('O fatoria de 0 é 1')
    } else {
        
    }
})