import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe'
import { EmployeService } from '../employe.service';


@Component({
  selector: 'app-enmploye-list',
  templateUrl: './enmploye-list.component.html',
  styleUrls: ['./enmploye-list.component.css']
})
export class EnmployeListComponent implements OnInit {

  employes!: Employe[];

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.getEmployes();
  }
  
  private getEmployes(){
      this.employeService.getEmployeList().subscribe(data => {
      this.employes = data;
    })
  }

}
