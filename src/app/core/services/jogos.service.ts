import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface JogoRAWG {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

export interface Jogo {
  id: number;
  nome: string;
  imagemUrl: string;
  notaMedia: number;
}

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private readonly API_URL = 'https://api.rawg.io/api/games';
  private readonly API_KEY = '54f6d05e456b41819909d20b27d10181';

  constructor(private http: HttpClient) { }

  getJogosMaisBemAvaliados(): Observable<Jogo[]> {
    let params = new HttpParams()
      .set('key', this.API_KEY)
      .set('ordering', '-rating')
      .set('page_size', '10');

    return this.http.get<{ results: JogoRAWG[] }>(this.API_URL, { params }).pipe(
      map(response => response.results.map(jogo => ({
        id: jogo.id,
        nome: jogo.name,
        imagemUrl: jogo.background_image,
        notaMedia: jogo.rating
      })))
    );
  }

  getJogosRelevantes(): Observable<Jogo[]> {
  const params = new HttpParams()
    .set('key', this.API_KEY)
    .set('ordering', '-added')
    .set('page_size', '10');

  return this.http.get<any>(this.API_URL, { params }).pipe(
    map(res => res.results.map((j: any) => ({
      id: j.id,
      nome: j.name,
      imagemUrl: j.background_image,
      notaMedia: j.rating
    })))
  );
}

}
