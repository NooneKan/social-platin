import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // Estado inicial: não logado
  private userPhotoSubject = new BehaviorSubject<string | null>(null); // Foto do perfil (pode ser null)

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  userPhoto$: Observable<string | null> = this.userPhotoSubject.asObservable();

  login(userPhoto: string) {
    this.isLoggedInSubject.next(true);
    this.userPhotoSubject.next(userPhoto);
  }

  logout() {
    this.isLoggedInSubject.next(false);
    this.userPhotoSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  getUserPhoto(): string | null {
    return this.userPhotoSubject.value;
  }
}
