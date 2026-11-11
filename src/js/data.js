const API_AVATAR = (id) => `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

export const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Humano",
    origin: "Terra (C-137)",
    category: "principal",
    image: API_AVATAR(1),
    description: "Cientista genial, alcoólatra e o cara mais inteligente do multiverso. Avô de Morty e Summer.",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Humano",
    origin: "Terra (C-137)",
    category: "principal",
    image: API_AVATAR(2),
    description: "Neto nervoso e bem-intencionado de Rick. Acompanha o avô nas aventuras, quase sempre contra a vontade.",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Humana",
    origin: "Terra (C-137)",
    category: "principal",
    image: API_AVATAR(3),
    description: "Irmã mais velha de Morty. Adolescente esperta que também acaba entrando nas viagens interdimensionais.",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Humana",
    origin: "Terra (C-137)",
    category: "familia",
    image: API_AVATAR(4),
    description: "Mãe de Summer e Morty e filha de Rick. Cirurgiã de cavalos com uma relação complicada com o pai.",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Humano",
    origin: "Terra (C-137)",
    category: "familia",
    image: API_AVATAR(5),
    description: "Marido de Beth e pai de Summer e Morty. Inseguro, mas sempre querendo se mostrar competente.",
  },
  {
    id: 47,
    name: "Birdperson",
    status: "Dead",
    species: "Pássaro-humanoide",
    origin: "Planeta Pássaro",
    category: "aliado",
    image: API_AVATAR(47),
    description: "Melhor amigo de Rick em outra dimensão. Um guerreiro leal que se une ao avô nas batalhas.",
  },
];

export const storyChapters = [
  {
    title: "O Cientista",
    text: "Rick Sanchez reaparece depois de anos afastado e passa a morar com a filha Beth, o genro Jerry e os netos Summer e Morty.",
  },
  {
    title: "Portais e Dimensões",
    text: "Com sua invenção de viagem interdimensional, Rick arrasta Morty para aventuras em mundos estranhos, perigosos e absurdos.",
  },
  {
    title: "Consequências",
    text: "Cada viagem deixa marcas na família. Rick esconde segredos sombrios, e as escolhas dele afetam universos inteiros.",
  },
  {
    title: "Multiverso",
    text: "Entre humor ácido e temas como existência, família e ética, a série mostra que ser bom em tudo não significa ser feliz.",
  },
];
