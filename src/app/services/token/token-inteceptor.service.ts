import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInteceptorService implements HttpInterceptor{

  constructor(private auth: AuthService) { }

  intercept(req, next){
    if(this.auth.isLoggedIn()){
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('token')
        }
      });
      return next.handle(tokenizedReq);
    }else{
      return next.handle(req);
    }
  }
}
