import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private logout(){
    this.auth.logout();
    this.router.navigate(["/"])
  }
}
