import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  private user;
  private queryParams;


  constructor(private candidate: CandidateService, private auth: AuthService, private router: Router) { 
  }

  ngOnInit() {
    this.candidate.getProfile().subscribe((data:any) => {
      this.user = data;
    });
  }


  private logout(){
    this.auth.logout();
    this.router.navigate(["/"])
  }
}
