import { Arrondissement } from './Arrondissement';
export class Localite {
  id: number;
  code:string;
  libelle: string;
  type: string;
  arrondissement: Arrondissement;
}
