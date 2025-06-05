
listaPerguntas = [
  {
    pergunta: "Quem foi o campeão da Libertadores de 1998? ",
    opcoes: [
      "Vasco",
      "Cruzeiro",
      "River plate",
      "Sociedade EG"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o CARA? ",
    opcoes: [
      "Eu",
      "Você",
      "Dois filhos",
      "E um cachorro"
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi a primeira capital do Brasil?",
    opcoes: [
      "Rio de Janeiro",
      "Rússia",
      "Oceano atlântico",
      "Salvador"
    ],
    correta: 3
  }
  
]

perguntas = null

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPergunta = document.querySelector(".tela-pergunta")
  telaPergunta.style.display = "block"
  
  mostrarPergunta()
  
}


function mostrarPergunta() {
  objPergunta = listaPerguntas[0]
  
  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta = document.querySelector(".pergunta");
  divPergunta.appendChild(textoPergunta);
  
  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0 = document.querySelector(".opcao0");
  botao0.appendChild(txtOpcao1);
  
  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1 = document.querySelector(".opcao1");
  botao1.appendChild(txtOpcao2);
  
  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2 = document.querySelector(".opcao2");
  botao2.appendChild(txtOpcao3);
  
  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3 = document.querySelector(".opcao3");
  botao3.appendChild(txtOpcao4);
  
  console.log(pergunta)
}