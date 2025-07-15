import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jogador } from '../../core/models/jogador.model';
import { JogadorService } from '../../core/models/services/jogador.service';


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
}
