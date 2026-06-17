

function respostas(status) {

    let resposta = document.getElementById('resposta');

    if (status === 'correta') {
    
        
        resposta.textContent = 'Parabéns, você acertou!';
        //alert('Parabéns, você acertou!')
        document.body.style.backgroundColor = 'green';
    } else {
        let resposta = document.getElementById('resposta');
        resposta.textContent = 'Resposta incorreta, tente novamente!';
        //alert('Resposta incorreta, tente novamente!')
        document.body.style.backgroundColor = 'red';
    }


 
}
