import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  //l'url pour la table employe dans la base de donnée
  private baseURL = "http://localhost:8080/api/v1/employes";

  constructor(private httpClient: HttpClient) { }

  getEmployeList(): Observable<Employe[]>{
    return this.httpClient.get<Employe[]>(`${this.baseURL}`);
  }
}
