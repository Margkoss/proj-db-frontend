import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  private logout(){
    this.auth.logout();
    this.router.navigate(["/"])
  }
}
