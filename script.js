// ==========================
// VARIÁVEIS DO QUIZ
// ==========================

let pontos = 0;

let perguntasRespondidas = 0;

const totalPerguntas = 6;

let segundos = 0;


// ==========================
// CRONÔMETRO
// ==========================

let tempo = setInterval(function(){

    segundos++;

    document.getElementById("tempo").textContent = segundos;

},1000);


// ==========================
// FUNÇÃO PRINCIPAL
// ==========================

function respostas(status, botao){


    const resposta = document.getElementById("resposta");

    const pontuacao = document.getElementById("pontuacao");

    const barra = document.getElementById("barra");


    // Localiza a pergunta atual

    const pergunta = botao.parentElement.parentElement;


    // Impede responder duas vezes

    if(pergunta.classList.contains("respondida")){

        return;

    }


    pergunta.classList.add("respondida");



    // Desativa os botões da pergunta

    const botoes = pergunta.querySelectorAll("button");


    botoes.forEach(function(item){

        item.disabled = true;

    });



    perguntasRespondidas++;



    // Atualiza barra de progresso

    barra.value = perguntasRespondidas;



    // ==========================
    // RESPOSTA CORRETA
    // ==========================


    if(status === "correta"){


        pontos++;


        resposta.innerHTML =
        "✅ Parabéns! Você acertou!";


        document.body.style.backgroundColor = "#176b3a";



    }


    // ==========================
    // RESPOSTA ERRADA
    // ==========================


    else{


        resposta.innerHTML =
        "❌ Resposta incorreta!";


        document.body.style.backgroundColor = "#8b1e1e";


    }



    // Atualiza pontuação


    pontuacao.innerHTML =
    `🏆 Pontuação: ${pontos}/${totalPerguntas}`;



    // Verifica se acabou


    if(perguntasRespondidas === totalPerguntas){


        finalizarQuiz();


    }


}



// ==========================
// FINAL DO QUIZ
// ==========================


function finalizarQuiz(){


    clearInterval(tempo);


    const resposta = document.getElementById("resposta");


    let mensagem = "";



    if(pontos === 6){


        mensagem =
        "🏆 Mestre! Você acertou todas as perguntas!";


    }


    else if(pontos >= 4){


        mensagem =
        "🥇 Excelente! Você conhece muito sobre mim!";


    }


    else if(pontos >= 2){


        mensagem =
        "🥈 Muito bom! Continue aprendendo!";


    }


    else{


        mensagem =
        "🙂 Continue treinando para melhorar!";


    }



    resposta.innerHTML +=

    `<br><br>
    
    Resultado Final:<br>
    
    Você acertou ${pontos} de ${totalPerguntas} perguntas.
    
    <br><br>
    
    ${mensagem}
    
    <br><br>
    
    ⏱ Tempo total: ${segundos} segundos`;



}



// ==========================
// MODO ESCURO / CLARO EXTRA
// ==========================


function modoClaro(){


    document.body.style.backgroundColor = "#ffffff";

    document.body.style.color = "#222";


}


function modoEscuro(){


    document.body.style.backgroundColor = "#1e1e24";

    document.body.style.color = "#ffffff";


}
