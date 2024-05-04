var enviar = document.getElementById('enviar')
enviar.addEventListener('click', function(){
    var opcaotexto = document.getElementById('opcao').value
    var opcao = Number(opcaotexto)
    switch (opcao){
        case 1:
            alert('Opçao 1 escolhida')
            break
        case 2:
            alert('Opçao 2 escolhida')
            break
        case 3:
            alert('Opçao 3 escolhida')
            break
        default:
            alert('Opçao inválida')
            break
    }
})