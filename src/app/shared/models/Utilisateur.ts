import { Structure } from './Structure';
import { Role } from './Role';
export class Utilisateur {
  idUtilisateur: number;
  nom: string;
  prenom: string;
  username: string;
  password: string;
  role: Role;
  structure: Structure;
}
