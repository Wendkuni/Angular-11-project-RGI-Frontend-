import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const  httpOptions={
  headers: new HttpHeaders({'content-type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API = environment.UTILISATEUR_API;
  constructor(private http: HttpClient) { }


  login(user): Observable<any>{
    return this.http.post(this.API + 'login', {
      username:user.username,
      password:user.password},
      httpOptions);
  }

  updateProfile(profile)
  {
    return this.http.put(this.API + 'profile', profile);
  }
  createStructure(structure) {
    return this.http.post(this.API + 'inscription', structure);
  }

  findUtilisateurById(id)
  {
    return this.http.get(this.API + 'user/' + id);
  }
  getMenu(user)
  {
    return this.http.get('http://localhost:9090/api/v1/menu/' + user);
  }

  getUser(id)
  {
    return this.http.get(this.API + 'user/' + id);
  }

  forgetPassword(email)
  {
    return this.http.post(this.API + 'forgetPassword', email);
  }

  sendPassword(code)
  {
    return this.http.get(this.API + 'sendPassWord/' + code);
  }
}
