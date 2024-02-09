const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento mobile",
        "Uma biblioteca de design de páginas web",
        "Uma linguagem de programação de alto nível",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valor e tipo",
        "Concatenação de strings",
        "Atribuição de valor",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um modelo de objetos para manipulação de documentos HTML e XML",
        "Uma função para criar elementos gráficos em uma página web",
        "Uma linguagem de estilo para páginas web",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector'?",
      respostas: [
        "Selecionar todos os elementos da página",
        "Selecionar um elemento com base em sua classe",
        "Selecionar um elemento com base em sua tag",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Uma função que não tem acesso a variáveis externas",
        "Um tipo de estrutura condicional",
        "Um bloco de código executado assincronamente",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 'Hello';",
        "var myVar = true;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a principal diferença entre 'let' e 'const'?",
      respostas: [
        "let é utilizado para variáveis constantes, enquanto const é utilizado para variáveis mutáveis",
        "const é utilizado para variáveis que não podem ser modificadas, enquanto let permite reatribuição",
        "Não há diferença, ambos são utilizados da mesma forma",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um formato de dados para representar objetos e estruturas de dados",
        "Um método para executar operações matemáticas",
        "Uma função para criar elementos HTML dinamicamente",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'map' em arrays?",
      respostas: [
        "Filtrar elementos de um array com base em uma condição",
        "Mapear todos os elementos do array para um novo array com base em uma função",
        "Ordenar os elementos do array em ordem alfabética",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento que ocorre quando a página é carregada",
        "Um evento que ocorre quando o mouse é movido sobre um elemento",
        "Um evento que ocorre quando um elemento é clicado",
      ],
      correta: 2
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
  