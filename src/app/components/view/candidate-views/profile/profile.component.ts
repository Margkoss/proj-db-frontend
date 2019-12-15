import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';
import { FormBuilder } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  updateProfileForm;
  degrees;

  constructor(private candidate: CandidateService, private formBuilder: FormBuilder, private router: Router) {
    this.updateProfileForm = formBuilder.group({
      name: '',
      surname: '',
      reg_date: '',
      email: '',
      bio: '',
      sistatikes: '',
      certificates: '',
      password: ''
    });
  }

  ngOnInit() {
    this.candidate.getDegrees().subscribe((data:any) => {
      this.degrees = data;
    });
  }

  updateProfile(value){
    value.reg_date = Date.now();
    this.candidate.updateProfile(value).subscribe((data:any) => {
      alert(`User data changed`);
      this.router.navigate(["../"])
    },(err: any) => {
      alert(`There was an error: ${err.message}`)
      this.router.navigate(["../"])
    });
  }
}
