import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn$: Observable<boolean>;
  userPhoto$: Observable<string | null>;
  menuOpen: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;  // observable de login
    this.userPhoto$ = this.authService.user$.pipe(
      // pega só o avatar_url ou retorna null
      map(user => user ? user.avatar_url : null)
    );
    this.menuOpen = false;
  }

  irParaHome() {
    this.router.navigate(['/home']);
  }

  goToCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/cadastrar']);
  }
}
