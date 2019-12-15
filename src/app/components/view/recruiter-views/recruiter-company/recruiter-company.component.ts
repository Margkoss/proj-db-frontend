import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecruiterService } from 'src/app/services/recruiter/recruiter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-company',
  templateUrl: './recruiter-company.component.html',
  styleUrls: ['./recruiter-company.component.scss']
})
export class RecruiterCompanyComponent implements OnInit {

  updateCompanyForm;
  company;

  constructor(private formBuilder: FormBuilder, private recruiter: RecruiterService, private router: Router) {
    this.updateCompanyForm = this.formBuilder.group({
      tel: '',
      street: '',
      num: '',
      country: ''
    })  
  }

  ngOnInit() {
    this.recruiter.getCompany().subscribe((data:any) => {
      this.updateCompanyForm = this.formBuilder.group({
        tel: data.etaireia.tel,
        street: data.etaireia.street,
        num: data.etaireia.num,
        country: data.etaireia.country
      })
      this.company = data;
    });
  }

  updateCompany(value){
    this.company.etaireia.tel = value.tel;
    this.company.etaireia.street = value.street;
    this.company.etaireia.num = value.num;
    this.company.etaireia.country = value.country;
    this.recruiter.updateCompany(this.company).subscribe((data:any) => {
      alert(`Company updated`);
      this.router.navigate(["../"]);
    });
  }

}
