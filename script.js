let perguntas = [

{

pergunta:"Qual é a minha cidade de nascimento?",

opcoes:[

"Santa Amélia",

"Bandeirantes",

"Santo Antônio da Platina"

],

correta:"Santo Antônio da Platina"

},


{

pergunta:"Qual é a minha cor favorita?",

opcoes:[

"Verde",

"Azul",

"Amarelo"

],

correta:"Amarelo"

},


{

pergunta:"Qual é a minha matéria favorita?",

opcoes:[

"Ciências",

"Português",

"Matemática"

],

correta:"Matemática"

},


{

pergunta:"Qual é o meu esporte favorito?",

opcoes:[

"Futebol",

"Vôlei",

"Basquete"

],

correta:"Basquete"

},


{

pergunta:"Qual é o meu animal favorito?",

opcoes:[

"Cachorro",

"Gato",

"Cavalo"

],

correta:"Cachorro"

},


{

pergunta:"Qual é a minha comida favorita?",

opcoes:[

"Pizza",

"Lasanha",

"Hambúrguer"

],

correta:"Lasanha"

}

];



// Variáveis

let indice = 0;

let pontos = 0;

let segundos = 0;

let tempo;



// Mistura perguntas

perguntas.sort(()=>Math.random()-0.5);




// Iniciar

function iniciar(){


tempo=setInterval(()=>{


segundos++;


document.getElementById("tempo").innerHTML=segundos;


},1000);



mostrarPergunta();


}




// Mostrar pergunta

function mostrarPergunta(){


let atual=perguntas[indice];



document.getElementById("pergunta").innerHTML=

(indice+1)+" - "+atual.pergunta;



let area=document.getElementById("opcoes");


area.innerHTML="";



let alternativas=[...atual.opcoes];



alternativas.sort(()=>Math.random()-0.5);



alternativas.forEach(opcao=>{


let botao=document.createElement("button");


botao.innerHTML=opcao;



botao.onclick=function(){

verificar(opcao,botao);

};



area.appendChild(botao);


});



document.getElementById("proximo").disabled=true;


}




// Verificar resposta

function verificar(resposta,botao){


let correta=perguntas[indice].correta;


let botoes=document.querySelectorAll("#opcoes button");



botoes.forEach(botao=>{

botao.disabled=true;

});



if(resposta===correta){


pontos++;


botao.style.background="#27ae60";


document.getElementById("resultado").innerHTML=

"✅ Resposta correta!";


}

else{


botao.style.background="#c0392b";


document.getElementById("resultado").innerHTML=

"❌ Resposta errada!";


}



document.getElementById("pontuacao").innerHTML=

"🏆 Pontuação: "+pontos;



document.getElementById("proximo").disabled=false;


}




// Próxima pergunta

function proximaPergunta(){


indice++;


document.getElementById("resultado").innerHTML="";



if(indice < perguntas.length){


mostrarPergunta();


}

else{


finalizar();


}


}




// Resultado final

function finalizar(){


clearInterval(tempo);



document.getElementById("quiz-box").innerHTML=

"🎉 Quiz Finalizado!";



document.getElementById("resultado").innerHTML=

"Você acertou "+pontos+" de "+perguntas.length+

"<br><br>Tempo: "+segundos+" segundos";



}




// Reiniciar

function reiniciar(){


location.reload();


}



iniciar();
