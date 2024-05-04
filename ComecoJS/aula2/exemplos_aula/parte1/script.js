const formulario = document.getElementById('meuFormulario') 

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if (nome === '' || email === '' || senha === '') {
        alert('Preencha todos os campos')
        return false
    }
    
})