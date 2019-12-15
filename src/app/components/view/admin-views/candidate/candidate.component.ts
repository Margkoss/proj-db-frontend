import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class AdminCandidateComponent implements OnInit {

  private addCandidate;
  private degrees;

  constructor(private formBuilder: FormBuilder, private admin: AdminService) { }

  ngOnInit() {
    this.admin.getDegrees().subscribe((data:any) => this.degrees = data);

    this.addCandidate = this.formBuilder.group({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        bio: '',
        recommendation: '',
        certificates: '',
        languages:'',
        degree:'',
        graduation: '',
        grade: '',
        url:'',
        description:''
    })
  }

  private addNewCandidate(value){
    this.formatValue(value);
    this.admin.createNewCandidate(value)
      .subscribe((data:any) => {
        alert(`Candidate ${data.username} - ${data.firstname} ${data.lastname} added`);
      }, (err: any) => {
        alert(`There was an error adding the candidate... Error: ${err.message}`);
      });
      this.addCandidate.reset();
  }

  private formatValue(value){
    value['projects'] = [{url: value.url, description: value.description}];
    delete value.description;
    delete value.url;
  }
}
