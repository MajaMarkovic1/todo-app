import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'http://127.0.0.1:8000/api/todos';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    private http: HttpClient    
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
    
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  add(todo) {
    return this.http.post(this.todosUrl, todo, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  delete(todo){
    return this.http.delete(`${this.todosUrl}/${todo.id}`).pipe(
      catchError(this.handleError)
    );
  }

  update(todo){
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo, this.httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  changeState(todo){
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse){
    return throwError(error || 'Server error')
  }

}
