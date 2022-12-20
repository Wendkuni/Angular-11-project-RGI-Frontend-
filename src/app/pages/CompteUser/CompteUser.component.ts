import { SupprimerCompteComponent } from './../SupprimerCompte/SupprimerCompte.component';
import { AddCompteComponent } from './../addCompte/addCompte.component';
import { TokenStorageService } from './../../shared/services/TokenStorage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Utilisateur } from 'src/app/shared/models/Utilisateur';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UtilisateurService } from 'src/app/shared/services/Utilisateur.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-CompteUser',
  templateUrl: './CompteUser.component.html',
  styleUrls: ['./CompteUser.component.scss']
})
export class CompteUserComponent implements OnInit {
  listeUtilisateur: Utilisateur[] = [];
  displayedColumns: string[] = ['username', 'nom' , 'prenom', 'email', 'status', 'action'];
  columnsToDisplay: string[] = ['username', 'nom' , 'prenom', 'email', 'status', 'action'];
  listeAffiche = [
    {'value' : 'username', 'check': true},
    {'value' : 'nom', 'check': true},
    {'value' : 'prenom', 'check': true},
    {'value' : 'email', 'check': true},
    {'value' : 'status', 'check': true},
  ];
  dataSource = new MatTableDataSource<Utilisateur>(this.listeUtilisateur);
  rechercheGeneral = '';
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private service: UtilisateurService,
              private dialogMat: MatDialog,
              private token: TokenStorageService) {
    this.getUtilisateur();
  }

  ngOnInit() {
  }
  getUtilisateur() {
    this.service.getUtilisateurFromStruture(this.token.getUser().id, this.token.getUser().structure.idStructure).subscribe(
      (data: Utilisateur[]) => {
        this.listeUtilisateur = data;
        this.dataSource = new MatTableDataSource<Utilisateur>(this.listeUtilisateur);
        this.dataSource.paginator = this.paginator;
        console.log(data);
      }
    );
  }


  isCheck(element: Utilisateur)
  {
    if (element.password === '' || element.password == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  addDeleteColumn(event: MatSlideToggleChange, value)
  {
    if (event.checked)
    {
      let list: string[]=[];
      this.columnsToDisplay.push(value)
      this.displayedColumns.forEach((value, index) => {
          this.columnsToDisplay.forEach((val, ind) => {
            if (val === value)
            {
              list.push(value);
            }
          });
      });
      this.columnsToDisplay = list;
    }
    else
    {
      this.columnsToDisplay.forEach((val, ind) => {
        if(val === value)
        {
          this.columnsToDisplay.splice(ind, 1);
        }
      })
    }
  }
  annulerRechercheGeneral()
  {
    this.rechercheGeneral = '';
    this.recherche();
  }

  recherche() {
    this.dataSource.filter = this.rechercheGeneral.trim().toLowerCase();
  }

  deleteCompte(element: Utilisateur)
  {
    const dialogRef = this.dialogMat.open(SupprimerCompteComponent, {
      width: '350px',
      data: { utilisateur: element},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUtilisateur();
    });
  }
  updateOrAdd(element)
  {
    const dialogRef = this.dialogMat.open(AddCompteComponent, {
      width: '750px',
      data: { utilisateur: element},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUtilisateur();
    });
  }

  activeOrDesactive(element: Utilisateur)
  {
    // const dialogRef = this.dialogMat.open(ActiveOrDesactiveComponent, {
    //   width: '350px',
    //   data: { utilisateur: element},
    //   disableClose: true
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.getUtilisateur();
    // });
  }

}
