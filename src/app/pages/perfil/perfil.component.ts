import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogador } from '../../core/models/jogador.model';
import { JogadorService } from '../../core/models/services/jogador.service';
import { Platina } from '../../core/models/platina.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  jogador!: Jogador;

  constructor(
    private route: ActivatedRoute,
    private jogadorService: JogadorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.jogador = this.jogadorService.getJogadorById(id);
  }

  getIconClass(plataforma: string): string {
  switch (plataforma) {
    case 'PlayStation': return 'fab fa-playstation';
    case 'Xbox': return 'fab fa-xbox';
    case 'Steam': return 'fab fa-steam';
    case 'Epic': return 'fas fa-gamepad';
    case 'Nintendo': return 'fas fa-gamepad';
    default: return 'fas fa-user';
  }
}
  getMaisDificil(): Platina | undefined {
    return this.jogador.platinas.length > 0
      ? this.jogador.platinas.reduce((maisDificil, atual) =>
          atual.dificuldade > maisDificil.dificuldade ? atual : maisDificil
        )
      : undefined;
  }

    getTopDificeis(): Platina[] {
    return [...this.jogador.platinas]
      .sort((a, b) => b.dificuldade - a.dificuldade)
      .slice(0, 5);
  }

  getTopFavoritos(): Platina[] {
    return [...this.jogador.platinas]
      .sort((a, b) => b.nota - a.nota)
      .slice(0, 5);
  }




}
