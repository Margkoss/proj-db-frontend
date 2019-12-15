import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../assets/config'

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  private backend;
  private port;

  constructor(private http: HttpClient) { 
    this.backend = config.backend;
    this.port = config.port;
  }

  getProfile(){
    return this.http.get(`${this.backend}:${this.port}/recruiter/profile`);
  }

  getCompany(){
    return this.http.get(`${this.backend}:${this.port}/recruiter/etaireia`)
  }

  getJobsByRecruiter(){
    return this.http.get(`${this.backend}:${this.port}/recruiter/jobs`)
  }

  getJobsByRecruiterEtairia(){
    return this.http.get(`${this.backend}:${this.port}/recruiter/etaireia/jobs`)
  }

  updateRecruiter(body){
    return this.http.put(`${this.backend}:${this.port}/recruiter/profile`, body, {responseType: 'text'})
  }

  updateCompany(body){
    return this.http.put(`${this.backend}:${this.port}/recruiter/etaireia`, body, {responseType: 'text'})
  }

  updateJob(id, body){
    return this.http.put(`${this.backend}:${this.port}/recruiter/job/${id}`, body, {responseType: 'text'})
  }

  addJob(body){
    return this.http.post(`${this.backend}:${this.port}/recruiter/job`, body)
  }
}
