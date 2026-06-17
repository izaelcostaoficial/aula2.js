

function respostas(status) {

    // Cria a variável uma única vez para usar na função toda
    let resposta = document.getElementById('resposta');

    if (status === 'correta') {
        // Se acertar, o texto muda e o fundo fica verde
        resposta.textContent = 'Parabéns, você acertou!';
        document.body.style.backgroundColor = 'green';
    } else {
        // Se errar, o texto muda e o fundo fica vermelho
        resposta.textContent = 'Resposta incorreta, tente novamente!';
        document.body.style.backgroundColor = 'red';
    }
}
