import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  private changeJobForm;
  private newJobForm;


  constructor(private formBuilder:FormBuilder) { 
    this.changeJobForm = this.formBuilder.group({
      start_date: '',
      salary: '',
      position: '',
      edra: '',
      requires: ''
    });

    this.newJobForm = this.formBuilder.group({
      start_date: '',
      salary: '',
      position: '',
      edra: '',
      requires: '',
      submission_date: ''
    });
  }

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
      "status": "pending",
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

  changeClass(id){
    let classes = document.getElementById(id).classList;
    if(classes.contains("shown")){
      classes.remove("shown");
      classes.add("hidden")
    }else{
      classes.remove("hidden");
      classes.add("shown");
    }
  }

  onSubmit(value, job){
    console.log(value, job);
    this.changeJobForm.reset();
  }

  submitNewJob(value){
    console.log(value);
    this.newJobForm.reset();
  }

  ngOnInit() {
  }

}
