import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) { // SI EXISTE EL TOKEN REGRESA VERDADERO
      return true;
    }
    else { // SINO REGRESA FALSO
      this.router.navigate(['/']);
      return false;
    }
  }

  /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  } */




}
