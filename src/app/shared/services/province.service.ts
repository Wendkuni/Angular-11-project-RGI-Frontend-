import { Region } from './../models/Region';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Province } from './../models/Province';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  API = environment;
  constructor(private http: HttpClient) { }

  getAllProvince(): Observable<Province[]> {
    return this.http.get<Province[]>(this.API.PROVINCE_API);
  }

  addProvince(province): any {
    return this.http.post(this.API.PROVINCE_API +'save/', province, { observe: 'response'});
  }

  updateProvince(province): any {
    return this.http.put(`${this.API.PROVINCE_API}update/${province.id}`, province, {observe:"response"});
  }

  deleteProvince(id: number): any {
    return this.http.delete(`${this.API.PROVINCE_API}delete/${id}`);
  }

  getAllRegion(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.API.REGION_API}`);
  }
  getRegionByLibelle(libelle: string): Observable<Region> {
    return this.http.get<Region>(`${this.API.REGION_API}?libelle=${libelle}`);
  }
  getRegionById(id: Region): Observable<Region> {
    return this.http.get<Region>(`${this.API.REGION_API}/${id}`);
  }

  getAllProvinceUser(id): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.API.PROVINCE_API}userAssigne/${id}`);
  }

  addProvinceuser(province): any {
    return this.http.post(`${this.API.PROVINCE_API}saveProvinceFromUser`, province);
  }

}
