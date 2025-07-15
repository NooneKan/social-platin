import { Injectable } from "@angular/core";
import { Jogador } from "../jogador.model";
import { MOCK_JOGADOR } from "./mocks/jogador-mock";


@Injectable({
  providedIn: 'root',
})
export class JogadorService {
  getJogadorById(id: string): Jogador {
    // Retorna o mock por enquanto
    return MOCK_JOGADOR;
  }
}
