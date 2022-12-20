import { Commune } from './../models/Commune';
import { environment } from './../../../environments/environment';
import { Arrondissement } from './../models/Arrondissement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrondissementService {
  API = environment;
  constructor(private http: HttpClient) { }

  getAllArrondissement(): Observable<Arrondissement[]> {
    return this.http.get<Arrondissement[]>(this.API.ARRONDISSEMENT_API);
  }

  addArrondissement(arrondissement: Arrondissement): any {
    return this.http.post(this.API.ARRONDISSEMENT_API +'save/', arrondissement);
  }

  updateArrondissement(arrondissement: Arrondissement): any {
    return this.http.put(`${this.API.ARRONDISSEMENT_API}update/${arrondissement.id}`, arrondissement);
  }

  deleteArrondissement(id: number): any {
    return this.http.delete(`${this.API.ARRONDISSEMENT_API}delete/${id}`);
  }

  getAllCommune(): Observable<Commune[]> {
    return this.http.get<Commune[]>(`${this.API.COMMUNE_API}`);
  }
  getCommuneByLibelle(libelle: string): Observable<Commune> {
    return this.http.get<Commune>(`${this.API.COMMUNE_API}?libelle=${libelle}`);
  }
  getCommuneById(id: Commune): Observable<Commune> {
    return this.http.get<Commune>(`${this.API.COMMUNE_API}/${id}`);
  }

  getAllArrondissementUser(id): Observable<Arrondissement[]> {
    return this.http.get<Arrondissement[]>(`${this.API.ARRONDISSEMENT_API}userAssigne/${id}`);
  }

  addArrondissementUser(arrondissement): any {
    return this.http.post(`${this.API.ARRONDISSEMENT_API}saveArrondissementFromUser`, arrondissement);
  }
}
