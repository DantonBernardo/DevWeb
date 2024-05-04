var x = document.getElementById('verificar')
x.addEventListener('click', function(){
    var valor = document.getElementById('valor').value
    if (valor == 'a'){
        alert('A')
    } else if (valor == 'b'){
        alert('B')
    } else{
        alert('Outra letra')
    }
})