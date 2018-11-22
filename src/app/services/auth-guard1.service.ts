import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard1Service  implements CanActivate{

  constructor(
    public authService: AuthService, 
    public router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['todos']);
      return false;
    }
    return true;
  }
}
