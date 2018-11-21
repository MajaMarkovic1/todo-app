import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError  } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated() {
    return !!localStorage.getItem('token');
    
  }

  login({email, password}) {
    return this.http.post(`${this.url}/login`, {email, password})
    .pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.access_token);
        // console.log(this.isAuthenticated());
      }),
      catchError(this.handleError)
    )
  }

  logout(){
    localStorage.removeItem('token');
    // console.log(this.isAuthenticated());
  }

  register({name, email, password}){
    return this.http.post(`${this.url}/register`, {name, email, password})
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse){
    return throwError(error || 'Server error')
  }
}
