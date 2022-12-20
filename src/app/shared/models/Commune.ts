import { Province } from './Province';
export class Commune {
  id: number;
  libelle: string;
  code:string;
  type: string;
  province: Province;
}
