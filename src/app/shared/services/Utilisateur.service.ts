import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  API = environment;

  constructor(private http: HttpClient) { }

  getUtilisateur(){
      return this.http.get(this.API.UTILISATEUR_API);
  }
  activerCompte(id)
  {
    return this.http.get(this.API.UTILISATEUR_API + 'activerCompte/' + id);
  }

  desactiverCompte(id)
  {
    return this.http.get(this.API.UTILISATEUR_API + 'desactiverCompte/' + id);
  }

  getRegion()
  {
    return this.http.get(this.API.REGION_API + 'regionNonAssigner');
  }

  getProvince()
  {
    return this.http.get(this.API.PROVINCE_API + 'provinceNonAssigner');
  }

  getCommune()
  {
    return this.http.get(this.API.COMMUNE_API + 'communeNonAssigner');
  }

  createStructure(structure) {
    return this.http.post(this.API.UTILISATEUR_API + 'inscription', structure);
  }

  createStructureAdmin(structure) {
    return this.http.post(this.API.UTILISATEUR_API + 'inscriptionAdmin', structure);
  }

  supprimerUser(id)
  {
    return this.http.delete(this.API.UTILISATEUR_API + 'supprimerCompte/' + id);
  }

  updateCompte(structure)
  {
    return this.http.put(this.API.UTILISATEUR_API + 'updateCompte', structure);
  }

  findUtilisateurById(id)
  {
    return this.http.get(this.API.UTILISATEUR_API + 'user/' + id);
  }
  getUtilisateurFromStruture(idUser, idStrucuture){
    return this.http.get(this.API.UTILISATEUR_API + 'structureUser/' + idUser + '/' + idStrucuture);
}

}
