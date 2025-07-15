import { Jogo } from "./jogo.model";

export interface Platina {
  id: string;
  jogo: Jogo;
  data: Date;
  dificuldade: number;
  nota: number;
  comentario?: string;
}
