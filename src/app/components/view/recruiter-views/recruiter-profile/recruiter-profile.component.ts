import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecruiterService } from 'src/app/services/recruiter/recruiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.scss']
})
export class RecruiterProfileComponent implements OnInit {

  profile;
  updateProfile;

  constructor(private recruiter: RecruiterService, private formBuilder : FormBuilder, private router: Router) {
    this.updateProfile = this.formBuilder.group({
      password: '',
      name: '',
      surname: '',
      email: '',
      exp_years: ''
    });
  }

  ngOnInit() {
    this.recruiter.getProfile().subscribe((data:any) => {
      this.updateProfile = this.formBuilder.group({
        password: '',
        name: data.name,
        surname: data.surname,
        email: data.email,
        exp_years: data.exp_years
      });
      this.profile = data;
    });
  }


  newProfile(value){
    value['username'] = this.profile.username;
    value['firm'] = this.profile.firm;
    value['reg_date'] = this.profile.reg_date;
    this.recruiter.updateRecruiter(value).subscribe((data:any) => {
      alert(`Updated Profile`)
      this.router.navigate(["../"])
    });
  }
}
