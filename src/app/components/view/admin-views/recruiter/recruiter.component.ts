import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class AdminRecruiterComponent implements OnInit {
  addRecruiter;

  constructor(private formBuilder: FormBuilder, private adminSrvc : AdminService) { 
    this.addRecruiter = this.formBuilder.group({
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      experience: ''
    })
  }

  createNewRecruiter(value){
    this.adminSrvc.createNewRecruiter(value)
      .subscribe((data:any) => {
        alert(`User added ${data.username} - ${data.firstname} ${data.lastname} added`);
      }, (err: any) => {
        alert(`There was an error ${err.message}`)
      });
      this.addRecruiter.reset();
  }

  ngOnInit() {
  }

}
