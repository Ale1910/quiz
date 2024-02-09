const perguntas = [
  {
    pergunta: "Em qual ano foi ao ar a novela 'Avenida Brasil'?",
    respostas: [
      "2012",
      "2014",
      "2016",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o autor da novela 'Senhora do Destino'?",
    respostas: [
      "Aguinaldo Silva",
      "Gilberto Braga",
      "Manoel Carlos",
    ],
    correta: 0
  },
  {
    pergunta: "Qual atriz interpretou a personagem 'Helena' na novela 'Laços de Família'?",
    respostas: [
      "Regina Duarte",
      "Giovanna Antonelli",
      "Vera Fischer",
    ],
    correta: 2
  },
  {
    pergunta: "Qual novela abordou a temática do cangaço, contando a história de Maria Bonita e Lampião?",
    respostas: [
      "Cordel Encantado",
      "O Bem-Amado",
      "Meu Pedacinho de Chão",
    ],
    correta: 0
  },
  {
    pergunta: "Em 'Por Amor', qual era o nome da personagem interpretada por Regina Duarte?",
    respostas: [
      "Helena",
      "Clara",
      "Maria Eduarda",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o autor da novela 'Roque Santeiro'?",
    respostas: [
      "Aguinaldo Silva",
      "Gilberto Braga",
      "Dias Gomes",
    ],
    correta: 2
  },
  {
    pergunta: "Qual novela foi inspirada na obra 'Dona Beija - A Feiticeira do Araguaia'?",
    respostas: [
      "Pantanal",
      "O Rei do Gado",
      "Mulheres de Areia",
    ],
    correta: 0
  },
  {
    pergunta: "Em 'Cheias de Charme', qual era a profissão das protagonistas Cida, Rosário e Penha?",
    respostas: [
      "Advogadas",
      "Empresárias",
      "Empregadas domésticas",
    ],
    correta: 2
  },
  {
    pergunta: "Qual novela abordou o tema da clonagem humana?",
    respostas: [
      "O Clone",
      "Amor à Vida",
      "A Viagem",
    ],
    correta: 0
  },
  {
    pergunta: "Em 'Tieta', qual era o nome da cidade onde se passava a trama?",
    respostas: [
      "Santana do Agreste",
      "São Paulo",
      "Salvador",
    ],
    correta: 0
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
   
   
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)  
  }
  
