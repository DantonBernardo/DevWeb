var calcular = document.getElementById('calcular')
calcular.addEventListener('click', function(){
    var numero = document.getElementById('numero').value
    alert(`O dobro de ${numero} é ${numero*2}`)
})