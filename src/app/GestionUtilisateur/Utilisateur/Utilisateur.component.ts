import { DeleteCompteComponent } from './../DeleteCompte/DeleteCompte.component';
import { ActiveOrDesactiveComponent } from './../ActiveOrDesactive/ActiveOrDesactive.component';
import { AddOrUpdateComponent } from './../AddOrUpdate/AddOrUpdate.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Utilisateur } from './../../shared/models/Utilisateur';
import { UtilisateurService } from './../../shared/services/Utilisateur.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-Utilisateur',
  templateUrl: './Utilisateur.component.html',
  styleUrls: ['./Utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  listeUtilisateur: Utilisateur[] = [];
  displayedColumns: string[] = ['role', 'username', 'nom' , 'prenom', 'structure', 'email', 'status', 'action'];
  columnsToDisplay: string[] = ['role', 'username', 'nom', 'structure', 'email', 'status', 'action'];
  listeAffiche = [
    {'value' : 'username', 'check': true},
    {'value' : 'nom', 'check': true},
    {'value' : 'prenom', 'check': true},
    {'value' : 'structure', 'check': true},
    {'value' : 'email', 'check': true},
    {'value' : 'status', 'check': true},
    {'value' : 'typeStructure', 'check': false},
    {'value' : 'appName', 'check': false},
    {'value' : 'pays', 'check': false},
    {'value' : 'ville', 'check': false},
  ];
  dataSource = new MatTableDataSource<Utilisateur>(this.listeUtilisateur);
  rechercheGeneral = '';
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private service: UtilisateurService,
              private dialogMat: MatDialog) {
    this.getUtilisateur();
  }

  ngOnInit() {
  }
  getUtilisateur() {
    this.service.getUtilisateur().subscribe(
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
    const dialogRef = this.dialogMat.open(DeleteCompteComponent, {
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
    const dialogRef = this.dialogMat.open(AddOrUpdateComponent, {
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
    const dialogRef = this.dialogMat.open(ActiveOrDesactiveComponent, {
      width: '350px',
      data: { utilisateur: element},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUtilisateur();
    });
  }

}
