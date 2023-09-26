import frontend from '../images/certificado_front.png';
import fundamentos from '../images/certificado_fundamentos.png';
import inteligenciaEmocional from '../images/certificado_inteligencia.jpeg';
import colaboracao from '../images/colaboração.jpeg';
import devCamarada from '../images/dev_camarada.png';
import helloWord from '../images/hello_word.jpeg';

const dataFeed = [
  {
    id: 1,
    date: '20 Fev 2023',
    title: 'Hello, World!',
    feeling: '🚀 uhuul!',
    description:
      'Bem vindo ao meu site! Aqui você vai encontrar um pouco sobre mim, meus projetos e minhas experiências profissionais. Espero que goste!',
    image: helloWord,
  },
  {
    id: 2,
    date: '3 Ago 2023',
    title: 'Eu sou um Dev Camarada! ',
    feeling: '👻 realizado',
    description:
      'Essa conquista é muito importante para mim, pois, além de ser um reconhecimento do meu trabalho, também é uma iniciativa do grupo de embaixas da turma 31, no qual tenho muito orgulho de fazer parte. Poder ajudar outras pessoas a alcançarem seus objetivos é muito gratificante, e quando ajudamos uma pessoa o verdadeiro ajudado somos nós.',
    image: devCamarada,
  },
  {
    id: 3,
    date: '31 Mar 2023',
    title: 'Destaque em Inteligência Emocional',
    feeling: '🧠 orgulho',
    description:
      'Uma grande conquista! Ser reconhecido como destaque em inteligência emocional é uma grande honra.',
    image: inteligenciaEmocional,
  },
  {
    id: 4,
    date: '29 Jul 2023',
    title: 'Destaque em Colaboração',
    feeling: '🤝 orgulho',
    description:
      'Muito feliz em ser reconhecido como destaque em colaboração junto com meus colegas. Acredito que o trabalho em equipe é essencial para o sucesso de qualquer projeto.',
    image: colaboracao,
  },
  {
    id: 5,
    date: '29 Jul 2023',
    title: 'Cetificado de conclusão do módulo de Front-end',
    feeling: '🤓 ihaaa',
    description:
      'O módulo de front-end foi o segundo módulo do curso de desenvolvimento web full stack da Trybe. Nesse módulo aprendemos JavaScript, TypeScript, Testes Automatizados, React (com ênfase em Componentes de classes e funcionais), React Router, Redux e Context API & Hooks.',
    image: frontend,
  },
  {
    id: 6,
    date: '31 Mar 2023',
    title:
      'Cetificado de conclusão do módulo de Fundamentos do Desenvolvimento Web',
    feeling: '🤓 ihaaa',
    description:
      'O módulo de fundamentos foi o primeiro módulo do curso de desenvolvimento web full stack da Trybe. Nesse módulo aprendemos os fundamentos do desenvolvimento web, como Unix & Bash, Git, Internet, JavaScript, DOM, HTML5, CSS3 Avançado, JavaScript Avançado e Testes Únitarios.',
    image: fundamentos,
  },
];

export default dataFeed;
