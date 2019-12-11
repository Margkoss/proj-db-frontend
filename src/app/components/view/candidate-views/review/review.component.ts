import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  private applications = [
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
