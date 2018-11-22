import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = '';
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
    this.authService.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe((data : any)=>{
     this.router.navigate(['/login']);
    },
    error => this.err = error.error.errors
      //  error => console.log(error.error.errors)
    )
  }

}
