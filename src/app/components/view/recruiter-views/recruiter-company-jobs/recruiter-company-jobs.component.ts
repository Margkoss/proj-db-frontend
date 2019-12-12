import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiter-company-jobs',
  templateUrl: './recruiter-company-jobs.component.html',
  styleUrls: ['./recruiter-company-jobs.component.scss']
})
export class RecruiterCompanyJobsComponent implements OnInit {

  constructor() { }


  private myjobs = [
    {
    "id": 1, 
    "start_date": "15/12/12",
    "salary": 3000,
    "position": "Mentor",
    "edra": "Panepistimio peloponisu",
    "recruiter": "Markos",
    "announce_date": "25/12/0001",
    "submission_date": "25/12/0030",
    "requires": ["Chemistry", "Math"],
    "status": "pending"
    },
    {
      "id": 2, 
      "start_date": "15/12/12",
      "salary": 5000,
      "position": "Lector",
      "edra": "Panepistimio Patron",
      "recruiter": "Markos",
      "announce_date": "25/12/0001",
      "submission_date": "25/12/0030",
      "requires": ["Chemistry", "Math", "CS"],
      "status": "pending"
    },
]


  ngOnInit() {
  }

}
