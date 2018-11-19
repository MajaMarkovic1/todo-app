import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo;

  constructor(
    private todoService: TodoService,  
    private route: ActivatedRoute,  
    
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  update(todo: Todo): void {
    this.todoService.update(todo).subscribe()
  }

}
