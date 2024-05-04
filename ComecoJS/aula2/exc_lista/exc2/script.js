var x = document.getElementById('calcular')
x.addEventListener('click', function(){
    var numero1texto = document.getElementById('numero1').value
    var numero2texto = document.getElementById('numero2').value
    var numero1 = Number(numero1texto)
    var numero2 = Number(numero2texto)
    if (numero1 > numero2){
        alert(`${numero1} é maior que ${numero2}`)
    }
    else {
        alert(`${numero2} é maior que ${numero1}`)
    }
})