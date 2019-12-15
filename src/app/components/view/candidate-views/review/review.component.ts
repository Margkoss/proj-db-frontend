import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate/candidate.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  private applications; 

  constructor(private candidate: CandidateService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(){
    this.candidate.getJobs().subscribe((data:any) => {
      this.applications = data;
    });
  }

  delete(id){
    this.candidate.cancelApplication(id).subscribe((data:any) => {
      alert(`Deleted application: ${data}`);
    })
  }
}
