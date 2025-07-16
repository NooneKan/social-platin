import { Component, AfterViewInit } from '@angular/core';

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements AfterViewInit {
  nome = '';
  email = '';
  senha = '';

  plataformas = [
    { id: 'playstation', icone: 'assets/icons/playstation.svg' },
    { id: 'steam', nome: 'Steam', icone: 'assets/icons/steam.svg' },
    { id: 'epic', nome: 'Epic', icone: 'assets/icons/epicgames.svg' },
    { id: 'origin', nome: 'Origin', icone: 'assets/icons/origin.svg' }
  ];

  ngAfterViewInit() {
    const tryInitializeGoogle = () => {
      if (typeof window !== 'undefined' && window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: '159606133907-45vu089434paa0bm563f48n0b6vcvhbo.apps.googleusercontent.com',
          callback: this.handleCredentialResponse.bind(this),
        });
        console.log('✅ Google Identity Services inicializado com sucesso');
      } else {
        console.log('⏳ Google Identity Services ainda não carregado... tentando novamente');
        setTimeout(tryInitializeGoogle, 300);
      }
    };

    tryInitializeGoogle();
  }

  onSubmit() {
    if (!this.nome || !this.email || this.senha.length < 6) {
      alert('Preencha todos os campos corretamente (senha mínimo 6 caracteres).');
      return;
    }
    alert(`Cadastro tradicional realizado para: ${this.nome}`);
    // Aqui você chama o backend para registrar o usuário
  }

  loginSocial(plataformaId: string) {
    if (plataformaId === 'Google') {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.prompt();
      } else {
        alert('Google API ainda não carregada, tente novamente.');
      }
    } else {
      alert(`Iniciando login com ${plataformaId} (implemente OAuth no backend)`);
      // Aqui você pode implementar os outros OAuth
    }
  }

  handleCredentialResponse(response: any) {
    console.log('Token JWT Google:', response.credential);

    // Decodifica o token JWT para pegar os dados do usuário
    const base64Url = response.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    const user = JSON.parse(jsonPayload);
    console.log('Usuário Google:', user);

    // Aqui você pode salvar os dados do usuário localmente ou chamar o backend para criar a sessão
    alert(`Login Google realizado para: ${user.name} (${user.email})`);
  }
}
