import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class PROFILEService {
 TYPE = 'type';
constructor() { }

saveType(type: number)
{
    window.sessionStorage.removeItem(this.TYPE);
    window.sessionStorage.setItem(this.TYPE, String(type));
}

getType()
{
  return Number(window.sessionStorage.getItem(this.TYPE));
}
}
