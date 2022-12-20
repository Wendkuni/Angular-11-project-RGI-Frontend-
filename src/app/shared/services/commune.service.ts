import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Province } from './../../shared/models/Province';
import { Commune} from './../../shared/models/Commune';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  API = environment;
      constructor(private http: HttpClient) { }

      getAllCommune(): Observable<Commune[]> {
        return this.http.get<Commune[]>(this.API.COMMUNE_API);
      }

      addCommune(commune: Commune): any {
        return this.http.post(this.API.COMMUNE_API+'save/', commune);
      }

      updateCommune(commune: Commune): any {
        return this.http.put(`${this.API.COMMUNE_API}update/${commune.id}`, commune);
      }

      deleteCommune(id: number): any {
        return this.http.delete(`${this.API.COMMUNE_API}delete/${id}`);
      }

      getAllProvince(): Observable<Province[]> {
        return this.http.get<Province[]>(`${this.API.PROVINCE_API}`);
      }
      getProvinceByLibelle(libelle: string): Observable<Province> {
        return this.http.get<Province>(`${this.API.PROVINCE_API}?libelle=${libelle}`);
      }
      getProvinceById(id: Province): Observable<Province> {
        return this.http.get<Province>(`${this.API.PROVINCE_API}/${id}`);
      }

      getAllCommuneUser(id): Observable<Commune[]> {
        return this.http.get<Commune[]>(`${this.API.COMMUNE_API}userAssigne/${id}`);
      }

      addCommuneUser(commune): any {
        return this.http.post(`${this.API.COMMUNE_API}saveCommuneFromUser`, commune);
      }
}
