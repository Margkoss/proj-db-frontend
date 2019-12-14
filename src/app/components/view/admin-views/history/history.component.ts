import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { forkJoin } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  history

  users;

  tables;

  tableRows;


  constructor(private admin: AdminService, private formBuilder : FormBuilder) { 
    this.history = this.formBuilder.group({
      username: '',
      table: ''
    });
  }

  ngOnInit() {
    forkJoin(this.admin.getHistory({}), this.admin.getUsers(), this.admin.getTables())
      .subscribe((data: any) => {
        this.users = data[1],
        this.tables = data[2],
        this.tableRows = data[0]
      });
  }

  changeHistory(value){
    this.admin.getHistory(value).subscribe((data:any) => {
      // this.tableRows = data
      console.log(data)
    });
  }
}
