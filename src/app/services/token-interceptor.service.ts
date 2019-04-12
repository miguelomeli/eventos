import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector
  ) { }

  intercept(req, next) {
    const authService = this.injector.get(AuthService);
    const tokenizaedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
        // Authorization: 'Bearer xx.yy.zz'
      }
    });
    return next.handle(tokenizaedReq);
  }
}
