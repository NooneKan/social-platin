import { Jogo } from "./jogo.model";

export interface Platina {
  id: string;
  jogo: Jogo;
  data: Date;
  dificuldade: number;  // 1 a 5
  nota: number;         // 0 a 10
  comentario?: string;
}
