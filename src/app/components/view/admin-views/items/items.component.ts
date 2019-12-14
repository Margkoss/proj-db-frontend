import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  private fields;
  private addField;

  constructor(private admin: AdminService, private formBuilder: FormBuilder) {
    this.addField = this.formBuilder.group({
      title: '',
      description: '',
      belongs: ''
    })
   }

  ngOnInit() {
    this.admin.getFields().subscribe((data:any) => {
      this.fields = data;
    });
  }

  createField(value){
    this.admin.createNewField(value)
      .subscribe((data: any) => {
        alert(`Field ${data.title} was added`);
      }, (err: any) => {
        alert(`There was an error :${err.message}`)
      });
  }
}
