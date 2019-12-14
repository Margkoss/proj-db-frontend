import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { }

  private username: string;
  private password: string;

  ngOnInit() {
    if(this.auth.isLoggedIn())
      this.router.navigate([`/${localStorage.getItem('type')}`]);
  }

  login(){
    this.auth.logIn(this.username,this.password)
        .subscribe((data: any) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("type",data.type);
          this.router.navigate(["/"+data.type])
      });
  }

}
