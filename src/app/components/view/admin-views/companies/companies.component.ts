import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  private addCompany;
  private companies;
  private fields;

  constructor(private formBuilder: FormBuilder, private admin: AdminService) {
    this.addCompany = this.formBuilder.group({
      firmName: '',
      antikeim: ''
    });
  }
  
  ngOnInit() {
    forkJoin(this.admin.getCompanies(), this.admin.getFields()).subscribe((data : any) => {
      this.companies = data[0],
      this.fields = data[1]
    })
  }

  addCompanyToField(value){
    this.admin.addCompany(value).subscribe((data:any) => {
      alert(`Company ${data.firmName} added to ${data.antikeim}`)
    });
  }
}
