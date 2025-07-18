import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn$: Observable<boolean>;
  userPhoto$: Observable<string | null>;
  menuOpen: boolean = false;

  constructor(public authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.userPhoto$ = this.authService.userPhoto$;
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


