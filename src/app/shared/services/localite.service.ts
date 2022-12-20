import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Localite} from './../../shared/models/Localite';
import { Arrondissement } from '../models/Arrondissement';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {
  API = environment;
  constructor(private http: HttpClient) { }

  getAllLocalite() : Observable<Localite[]> {
    return this.http.get<Localite[]>(this.API.LOCALITE_API);
  }

  addLocalite(localite: Localite) :any {
    return this.http.post(this.API.LOCALITE_API+'save/',localite);
  }

  updateLocalite(localite: Localite) :any {
    return this.http.put(`${this.API.LOCALITE_API}update/${localite.id}`,localite);
  }

  deleteLocalite(id: number) :any {
    return this.http.delete(`${this.API.LOCALITE_API}delete/${id}`);
  }

  getAllArrondissement(): Observable<Arrondissement[]> {
    return this.http.get<Arrondissement[]>(`${this.API.ARRONDISSEMENT_API}`);
  }
  getArrondissementByLibelle(libelle: string): Observable<Arrondissement> {
    return this.http.get<Arrondissement>(`${this.API.ARRONDISSEMENT_API}?libelle=${libelle}`);
  }
  getArrondissementById(id: Arrondissement): Observable<Arrondissement> {
    return this.http.get<Arrondissement>(`${this.API.ARRONDISSEMENT_API}/${id}`);
  }
}
