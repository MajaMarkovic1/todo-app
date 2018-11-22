import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  err = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe(
      (data : any) => {
        this.router.navigate(['/todos']);
      },
      error => this.err = error.error)
      // error => console.log(error))
  }

}
