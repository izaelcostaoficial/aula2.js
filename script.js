function respostas(status) {

    // Captura o elemento do HTML para exibir o texto
    let resposta = document.getElementById('resposta');

    if (status === 'correta') {
        // Cenário de acerto
        resposta.textContent = 'Parabéns, você acertou!';
        document.body.style.backgroundColor = '#27ae60'; // Verde mais suave
        document.body.style.color = '#ffffff'; // Garante texto visível
    } else {
        // Cenário de erro
        resposta.textContent = 'Resposta incorreta, tente novamente!';
        document.body.style.backgroundColor = '#c0392b'; // Vermelho mais suave
        document.body.style.color = '#ffffff'; // Garante texto visível
    }
}
