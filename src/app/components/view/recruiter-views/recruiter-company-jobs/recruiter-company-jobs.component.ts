import { Component, OnInit } from '@angular/core';
import { RecruiterService } from 'src/app/services/recruiter/recruiter.service';

@Component({
  selector: 'app-recruiter-company-jobs',
  templateUrl: './recruiter-company-jobs.component.html',
  styleUrls: ['./recruiter-company-jobs.component.scss']
})
export class RecruiterCompanyJobsComponent implements OnInit {

  constructor(private recruiter: RecruiterService) { }


  private myjobs;


  ngOnInit() {
    this.recruiter.getJobsByRecruiterEtairia().subscribe((data:any) => {this.myjobs = data})
  }

}
