import { Jogador } from "../../jogador.model";

export const MOCK_JOGADOR: Jogador = {
  id: '1',
  nome: 'Matheus Silva',
  avatarUrl: 'https://i.imgur.com/123abc.png',
  bio: 'Caçador de troféus desde 2010.',
  gamertags: [
    { plataforma: 'PlayStation', tag: 'matheus_sp' },
    { plataforma: 'Steam', tag: 'matheuszera' }
  ],
  platinas: [
    {
      id: 'p1',
      jogo: {
        id: 'g1',
        nome: 'God of War Ragnarök',
        imagemUrl: 'https://i.imgur.com/gow.png',
        desenvolvedora: 'Santa Monica Studio',
        genero: 'Ação',
        tempoEstimadoHoras: 45,
      },
      data: new Date('2024-06-10'),
      dificuldade: 3,
      nota: 9,
      comentario: 'Platina divertida, mas repetitiva no fim.',
    }
  ]
};
