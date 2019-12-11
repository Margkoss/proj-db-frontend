import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  users = [
    "Markos",
    "Billis",
    "Kostas"
  ]

  tables = [
    "user",
    "etairia"
  ]

  tableRows = [
    {
        "hid": 1,
        "username": "babis",
        "on_date": "2019-12-10 asdjjansjdakjsd",
        "success": 0,
        "action": "insert",
        "on_table": "job",
    },
    {
      "hid": 2,
      "username": "babis",
      "on_date": "2019-12-10 asdjjansjdakjsd",
      "success": 0,
      "action": "insert",
      "on_table": "job",
  },
  {
    "hid": 3,
    "username": "babis",
    "on_date": "2019-12-10 asdjjansjdakjsd",
    "success": 0,
    "action": "insert",
    "on_table": "job",
  },

]


  constructor() { }

  ngOnInit() {
  }

}
