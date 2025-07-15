import { Platina } from "./platina.model";

export interface Jogador {
  id: string;
  nome: string;
  avatarUrl: string;
  bio: string;
  platinas: Platina[];
  gamertags?: Gamertag[];
}

export interface Gamertag {
  plataforma: 'PlayStation' | 'Xbox' | 'Steam' | 'Epic' | 'Nintendo';
  tag: string;
}
