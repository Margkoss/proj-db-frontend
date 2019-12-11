import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  private jobs = [
    {
      "id": 1,
      "start_date": "12/2/2013",
      "salary": 3000,
      "position": "Lector",
      "edra": "Panepistimio Patron",
      "recruiter": "Babis", // recruiter username
      "announce_date": "10/12/2004",
      "submission_date": "10/12/2009",
      "status": "pending",
      "message": "Ola kalaaaaa"
    },
    {
      "id": 2,
      "start_date": "12/2/2013",
      "salary": 3000,
      "position": "Mentor",
      "edra": "Panepistimio Peloponisu",
      "recruiter": "Babis", // recruiter username
      "announce_date": "10/12/2004",
      "submission_date": "10/12/2009",
      "status": "pending",
      "message": "Ola kalaaaaa"
    }
  ]  

  constructor() { }

  ngOnInit() {
  }

}
