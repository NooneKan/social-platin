import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Processando login via GitHub...</p>`,
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      if (code) {
        this.http.post<any>('http://localhost:3000/auth/github', { code }).subscribe({
          next: (user) => {
            // Atualiza estado de login e foto no AuthService
            this.authService.login(user.avatar_url || user.photo || null);

            alert(`Login realizado com ${user.login || user.name}`);

            // Redireciona para home ou dashboard
            this.router.navigate(['/home']);
          },
          error: (err) => {
            alert('Erro ao autenticar com GitHub.');
            this.router.navigate(['/cadastrar']);
          }
        });
      } else {
        alert('Código de autenticação ausente.');
        this.router.navigate(['/cadastrar']);
      }
    });
  }
}
