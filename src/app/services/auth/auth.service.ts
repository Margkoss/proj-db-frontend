import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logIn(username, password){
    return this.http.post("http://localhost:5000/user/login",{username, password})
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.clear()
  }
}
