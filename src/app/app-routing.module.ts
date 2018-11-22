import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AuthGuard1Service as AuthGuard1 } from './services/auth-guard1.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard1]},
  { path: 'todos', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard1]},
  { path: 'todos/:id', component: CreateTodoComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
