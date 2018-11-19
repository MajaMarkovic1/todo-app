import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todos/:id', component: CreateTodoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
