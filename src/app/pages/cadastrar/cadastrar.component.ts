import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent {
  nome = '';
  email = '';
  senha = '';

  plataformas = [
    { id: 'playstation', icone: 'assets/icons/playstation.svg' },
    { id: 'steam', nome: 'Steam', icone: 'assets/icons/steam.svg' },
    { id: 'epic', nome: 'Epic', icone: 'assets/icons/epicgames.svg' },
    { id: 'origin', nome: 'Origin', icone: 'assets/icons/origin.svg'}
  ];

  onSubmit() {
    if (!this.nome || !this.email || this.senha.length < 6) {
      alert('Preencha todos os campos corretamente (senha mínimo 6 caracteres).');
      return;
    }
    alert(`Cadastro tradicional realizado para: ${this.nome}`);
    // Aqui você chama o backend para registrar o usuário
  }

  loginSocial(plataformaId: string) {
    alert(`Iniciando login com ${plataformaId} (implemente OAuth no backend)`);
    // Aqui você redireciona para o OAuth da plataforma
  }
}
