import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  nome = '';
  email = '';
  senha = '';

  plataformas = [
    { id: 'github', nome: 'GitHub', icone: 'assets/icons/github.svg' },
    { id: 'playstation', icone: 'assets/icons/playstation.svg' },
    { id: 'steam', nome: 'Steam', icone: 'assets/icons/steam.svg' },
    { id: 'epic', nome: 'Epic', icone: 'assets/icons/epicgames.svg' },
    { id: 'origin', nome: 'Origin', icone: 'assets/icons/origin.svg' }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit() {
    if (!this.nome || !this.email || this.senha.length < 6) {
      alert('Preencha todos os campos corretamente (senha mínimo 6 caracteres).');
      return;
    }
    alert(`Cadastro tradicional realizado para: ${this.nome}`);

    this.router.navigate(['/home']);
  }

  loginSocial(plataformaId: string) {
    if (plataformaId === 'github') {
      this.loginComGitHub();
    } else {
      alert(`Login com ${plataformaId} ainda não implementado`);
    }
    this.router.navigate(['/home']);

  }

  loginComGitHub() {
    const clientId = 'Ov23li766aJxc12btjVV';
    const redirectUri = 'http://localhost:4200/auth/callback';
    const scope = 'read:user user:email';

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  }
}
