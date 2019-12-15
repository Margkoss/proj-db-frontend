import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  private jobs;

  constructor(private candidate: CandidateService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(){
    this.candidate.getUnuppliedJobs().subscribe((data:any) => {
      console.log(data)
      this.jobs = data;
    });
  }

  apply(id){
    this.candidate.applyToJob(id).subscribe((data:any) => {
      alert(`Applied to job ${data}`);
      this.getJobs();
    }, (err: any) => {
      alert(err.message)
    });
  }
}
