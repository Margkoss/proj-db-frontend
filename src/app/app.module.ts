import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/view/login/login.component';
import { AdminComponent } from './components/view/admin-views/admin/admin.component';
import { AdminCandidateComponent } from './components/view/admin-views/candidate/candidate.component';
import { RecruiterComponent } from './components/view/admin-views/recruiter/recruiter.component';
import { ItemsComponent } from './components/view/admin-views/items/items.component';
import { CompaniesComponent } from './components/view/admin-views/companies/companies.component';
import { HistoryComponent } from './components/view/admin-views/history/history.component';
import { ProfileComponent } from './components/view/candidate-views/profile/profile.component';
import { CandidateComponent } from './components/view/candidate-views/candidate/candidate.component';
import { ReviewComponent } from './components/view/candidate-views/review/review.component';
import { ApplyComponent } from './components/view/candidate-views/apply/apply.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminCandidateComponent,
    CandidateComponent,
    RecruiterComponent,
    ItemsComponent,
    CompaniesComponent,
    HistoryComponent,
    ProfileComponent,
    ReviewComponent,
    ApplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
