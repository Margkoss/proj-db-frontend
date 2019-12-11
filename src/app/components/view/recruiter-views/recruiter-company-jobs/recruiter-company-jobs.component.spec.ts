import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterCompanyJobsComponent } from './recruiter-company-jobs.component';

describe('RecruiterCompanyJobsComponent', () => {
  let component: RecruiterCompanyJobsComponent;
  let fixture: ComponentFixture<RecruiterCompanyJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterCompanyJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterCompanyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
