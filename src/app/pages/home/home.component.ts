import { Component, OnInit } from '@angular/core';
import { JogosService, Jogo } from '../../core/services/jogos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jogosMaisBemAvaliados: Jogo[] = [];
  jogosRelevantes: Jogo[] = [];


  constructor(private jogosService: JogosService) {}

ngOnInit() {
  this.jogosService.getJogosMaisBemAvaliados().subscribe({
    next: jogos => {
      console.log('Jogos recebidos da API:', jogos);  // ← log aqui
      this.jogosMaisBemAvaliados = jogos;
    },
    error: err => console.error('Erro ao buscar jogos:', err)
  });

   this.jogosService.getJogosRelevantes().subscribe({
    next: jogos => this.jogosRelevantes = jogos,
    error: err => console.error('Erro nos relevantes:', err)
  });
}

}
