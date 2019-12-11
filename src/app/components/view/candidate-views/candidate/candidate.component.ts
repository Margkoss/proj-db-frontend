import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  private user = {
    "username": "Markos",
    "name": "Markos",
    "surname": "Stamatakis",
    "reg_date": "12/10/1964",
    "email": "markos@markos.com",
    "bio": "my-bio.pdf",
    "sistatikes": "sistatikes.pdf",
    "certificates": "EN EEXO"
  }


  constructor() { }

  ngOnInit() {
  }

}
