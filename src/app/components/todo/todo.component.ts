import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: object[] = [];
  newTodo: Todo = {
    id: null,
    todo_item: '',
    is_priority: false, 
    is_done: false
  };
  

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  priority() {
    return this.todos.filter(todo=> todo['is_priority'] && !todo['is_done']);
  }

  add(): void {
    this.todoService.add(this.newTodo)
      .subscribe((todo) => {
        this.todos.push(todo);
        this.newTodo = {
          id: null,
          todo_item: '',
          is_priority: false, 
          is_done: false
        };
      })
  }

  delete(todo: Todo): void {
    this.todoService.delete(todo).subscribe(() => {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    })
  }

  changeStateTodo(todo: Todo): void {
    todo.is_done = true;    
    this.todoService.changeState(todo).subscribe();
  }

}
