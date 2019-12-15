import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../../assets/config'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  backend = config.backend;
  port = config.port;

  public createNewRecruiter(body){
    return this.http.post(`${this.backend}:${this.port}/admin/recruiter`,body);
  }

  public createNewCandidate(body){
    return this.http.post(`${this.backend}:${this.port}/admin/candidate`,body);
  }

  public createNewField(body){
    return this.http.post(`${this.backend}:${this.port}/admin/antikeim`,body);
  }

  public getDegrees(){
    return this.http.get(`${this.backend}:${this.port}/get/degrees`);
  }

  public getFields(){
    return this.http.get(`${this.backend}:${this.port}/get/fields`);
  }

  public getCompanies(){
    return this.http.get(`${this.backend}:${this.port}/get/firms`);
  }
  
  public getHistory(params){
    if(params.username && params.table)
      return this.http.get(`${this.backend}:${this.port}/admin/history?username=${params.username}&table=${params.table}`);
    else
      return this.http.get(`${this.backend}:${this.port}/admin/history`);
  }

  public getUsers(){
    return this.http.get(`${this.backend}:${this.port}/get/users`);
  }

  public getTables(){
    return this.http.get(`${this.backend}:${this.port}/get/history/tables`);
  }

  public addCompany(body){
    return this.http.post(`${this.backend}:${this.port}/admin/field`,body);
  }

}
