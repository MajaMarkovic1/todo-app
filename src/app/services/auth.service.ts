import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  login({email, password}) {
    return this.http.post(`${this.loginUrl}/login`, {email, password})
    .pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access_token);
      })
    );
  }
}
