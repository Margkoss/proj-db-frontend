import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/view/login/login.component';
import { AdminComponent } from './components/view/admin-views/admin/admin.component';
import { AdminCandidateComponent } from './components/view/admin-views/candidate/candidate.component';
import { RecruiterComponent } from './components/view/admin-views/recruiter/recruiter.component';
import { HistoryComponent } from './components/view/admin-views/history/history.component';
import { ItemsComponent } from './components/view/admin-views/items/items.component';
import { CompaniesComponent } from './components/view/admin-views/companies/companies.component';
import { CandidateComponent } from './components/view/candidate-views/candidate/candidate.component';
import { ProfileComponent } from './components/view/candidate-views/profile/profile.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "admin", component: AdminComponent, children: [
    {path:"", redirectTo:"recruiter", pathMatch: "full"},
    {path: "recruiter" ,component: RecruiterComponent},
    {path: "candidate" ,component: AdminCandidateComponent},
    {path: "history" ,component: HistoryComponent},
    {path: "items" ,component: ItemsComponent},
    {path: "company" ,component: CompaniesComponent},
  ]},
  {path: "candidate", component:CandidateComponent, children: [
    {path: "", redirectTo: "profile", pathMatch:"full"},
    {path: "profile" ,component: ProfileComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
