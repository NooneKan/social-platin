import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  template: `<p>Processando login via GitHub...</p>`
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      if (code) {
        this.authService.authenticateWithGitHub(code).subscribe({
          next: (user) => {
            this.authService.setUser(user);
            this.router.navigate(['/home']);
          },
          error: () => {
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
