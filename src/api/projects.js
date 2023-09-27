import shoppingCart from '../images/projectsImg/shoppingcart.png';
import todolist from '../images/projectsImg/todolist.png';
import trivia from '../images/projectsImg/trivia.png';
import tryunfo from '../images/projectsImg/tryunfo.png';

const dataProjects = [
  {
    id: 1,
    title: 'Shopping Cart',
    description:
      'Projeto desenvolvido durante o módulo de front-end da Trybe. O objetivo do projeto era desenvolver uma aplicação de carrinho de compras. A aplicação deveria ser responsiva e consumir dados de uma API externa, além de manter os produtos adcionados no carrinho salvos no local storage.',
    tech: 'CSS, HTML, JavaScript',
    image: shoppingCart,
    gitURL: 'https://github.com/guilhermegattimarinho/shopping-cart',
    deployURL: 'https://shopping-cart-by-guilherme.surge.sh/',
  },
  {
    id: 2,
    title: 'Trivia',
    description:
      'Projeto desenvolvido durante o módulo de front-end da Trybe. O objetivo do projeto era desenvolver uma aplicação de perguntas e respostas. A aplicação deveria ser responsiva e consumir dados de uma API externa.',
    tech: 'React, Redux, CSS, HTML, JavaScript',
    image: trivia,
    gitURL: 'https://github.com/guilhermegattimarinho/trivia',
    deployURL: 'https://github.com/guilhermegattimarinho/trivia',
  },
  {
    id: 3,
    title: 'Todo List - Full Stack',
    description:
      'Projeto pessoal desenvolvido com o objetivo de colocar em prática os conhecimentos básicos sobre a construção de api rest com Node.js e Express e orquestração de um banco de dados com MySQL. A aplicação consiste em uma lista de tarefas, onde o usuário pode adicionar, remover e editar uma tarefa.',
    tech: 'React, Node.js, Express, MySQL, CSS, HTML, JavaScript, API Rest',
    image: todolist,
    gitURL: 'https://github.com/guilhermegattimarinho/todolist-fullstack',
    deployURL: 'https://github.com/guilhermegattimarinho/todolist-fullstack',
  },
  {
    id: 4,
    title: 'Tryunfo',
    description:
      'Projeto desenvolvido durante o módulo de front-end da Trybe. O objetivo do projeto era desenvolver uma aplicação de criação de cartas para um jogo de super trunfo. A aplicação deveria ser responsiv.',
    tech: 'React, CSS, JavaScript',
    image: tryunfo,
    gitURL: 'https://github.com/guilhermegattimarinho/triunfo',
    deployURL: 'https://github.com/guilhermegattimarinho/triunfo',
  },
];

export default dataProjects;
