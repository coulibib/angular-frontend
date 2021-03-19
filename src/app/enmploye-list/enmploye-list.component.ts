import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe'


@Component({
  selector: 'app-enmploye-list',
  templateUrl: './enmploye-list.component.html',
  styleUrls: ['./enmploye-list.component.css']
})
export class EnmployeListComponent implements OnInit {

  employes: Employe[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.employes = [{
      "id": 1,
      "firstName": "ibra",
      "lastName": "coul",
      "emailId": "coulibra4@gmail.com"
    },
    {
      "id": 2,
      "firstName":"aba",
      "lastName": "samake",
      "emailId": "aba123@gmail.com"
    }
  ];
  }

}
