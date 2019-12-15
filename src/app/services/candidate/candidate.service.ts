import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  backend;
  port;

  constructor(private http: HttpClient) {
    this.backend = config.backend
    this.port = config.port
   }

  getProfile(){
    return this.http.get(`${this.backend}:${this.port}/candidate/profile`);
  }

  getDegrees(){
    return this.http.get(`${this.backend}:${this.port}/get/degrees`)
  }

  getJobs(){
    return this.http.get(`${this.backend}:${this.port}/candidate/applications/all`)
  }

  getUnuppliedJobs(){
    return this.http.get(`${this.backend}:${this.port}/candidate/notApplied`)
  }

  updateProfile(body){
    return this.http.put(`${this.backend}:${this.port}/candidate/profile`, body, {responseType: 'text'});
  }
  
  applyToJob(id){
    return this.http.post(`${this.backend}:${this.port}/candidate/apply/${id}`, {} ,{responseType: 'text'});
  }

  cancelApplication(id){
    return this.http.delete(`${this.backend}:${this.port}/candidate/cancel/${id}`,{responseType: 'text'});
  }
}
