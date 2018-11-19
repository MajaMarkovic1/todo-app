import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    NavbarComponent,
    RegisterComponent,
    CreateTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: MyHttpInterceptor, 
      multi: true 
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
