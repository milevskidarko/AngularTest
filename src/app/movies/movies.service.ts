import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = '8d5bf1b1e848f424a03192779d369021';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
    );
  }

  getPopularTVSeries(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}`
    );
  }
}
