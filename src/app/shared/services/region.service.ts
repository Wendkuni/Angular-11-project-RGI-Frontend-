import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Region } from '../models/Region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  API = environment;
  constructor(private http: HttpClient) { }

  getAllRegion(): Observable<Region[]> {
    return this.http.get<Region[]>(this.API.REGION_API);
  }

  addRegion(region: Region): any {
    return this.http.post(this.API.REGION_API+'save/', region);
  }

  updateRegion(region: Region): any {
    return this.http.put(`${this.API.REGION_API}update/${region.id}`, region);
  }

  deleteRegion(id: number): any {
    return this.http.delete(`${this.API.REGION_API}delete/${id}`);
  }

  getRegionByLibelle(libelle: string): Observable<Region> {
    return this.http.get<Region>(`${this.API.REGION_API}?libelle=${libelle}`);
  }
  getRegionById(id: Region): Observable<Region> {
    return this.http.get<Region>(`${this.API.REGION_API}${id}`); 
  }

}
