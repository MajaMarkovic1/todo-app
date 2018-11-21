import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(
      catchError(this.handleError('getTodos', []))
    );
    
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }

  add(todo) {
    return this.http.post(this.todosUrl, todo, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('addedTodo'))
    );
  }


  delete(todo){
    return this.http.delete(`${this.todosUrl}/${todo.id}`).pipe(
      catchError(this.handleError<Todo>(`deleteTodo`))
    );
  }

  update(todo){
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('updatedTodo'))
    )
  }

  changeState(todo){
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo).pipe(
      catchError(this.handleError<Todo>('updatedTodo'))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
