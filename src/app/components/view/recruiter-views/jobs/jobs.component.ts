import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecruiterService } from 'src/app/services/recruiter/recruiter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  private changeJobForm;
  private newJobForm;


  constructor(private formBuilder:FormBuilder, private recruiter: RecruiterService, private router: Router) { 
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
    });
  }

  private myjobs;

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

  change(value, job){
    value['start_date'] = new Date(value.start_date)
    value['submission_date'] = Date.now(),
    value['requires'] = value.requires.split(',');
    this.recruiter.updateJob(job.id, value).subscribe((data:any) => {
      alert(`Changed`);
      this.router.navigate(["../"])
    },(err:any) => {
      alert(`There was an error: ${err.message}`)
    });
  }

  submitNewJob(value){
    value['start_date'] = new Date(value.start_date)
    value['submission_date'] = Date.now(),
    value['requires'] = value.requires.split(',');
    this.recruiter.addJob(value).subscribe((data:any) => {
      alert(`added`);
      this.router.navigate(["../"])
    },(err:any) => {
      alert(`There was an error: ${err.message}`)
    });
  }

  ngOnInit() {
    this.recruiter.getJobsByRecruiter().subscribe((data:any) => {
      this.myjobs = data;
    });
  }

}
