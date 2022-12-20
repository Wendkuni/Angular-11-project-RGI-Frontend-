import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { ErrorService } from './../../../ErrorGestion/error.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { DeleteArrondissementComponent } from './../deleteArrondissement/deleteArrondissement.component';
import { UpdateArrondissementComponent } from './../updateArrondissement/updateArrondissement.component';
import { Arrondissement } from './../../../shared/models/Arrondissement';
import { ArrondissementService } from './../../../shared/services/arrondissement.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-arrondissement',
  templateUrl: './arrondissement.component.html',
  styleUrls: ['./arrondissement.component.css']
})
export class ArrondissementComponent implements OnInit {

  listeArrondissement: Arrondissement[] = [];
  displayedColumns: string[] = ['id', 'code', 'arrondissement', 'commune', 'typeCommune'];
  dataSource = new MatTableDataSource<Arrondissement>(this.listeArrondissement);
  rechercheGeneral = '';
  isMaire = false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: ArrondissementService,
              private dialogMat: MatDialog,
              private error: ErrorService,
              private token: TokenStorageService) {
                this.getData();
                if(token.getUser().roles[0].name === 'ROLE_MAIRIE' || token.getUser().roles[0].name === 'ROLE_MATDS')
                {
                  this.isMaire = true;
                  this.displayedColumns = ['id', 'code', 'arrondissement', 'commune', 'typeCommune', 'option'];
                }
               }

  ngOnInit() {
  }

getData() {
  if(this.token.getUser().roles[0].name === 'ROLE_MAIRIE')
  {
      this.listeArrondissement = [];
      this.service.getAllArrondissementUser(this.token.getUser().structure.idStructure).subscribe(data => {
        console.log(data)
      this.listeArrondissement = data;
      this.dataSource = new MatTableDataSource<Arrondissement>(this.listeArrondissement);
      this.dataSource.paginator = this.paginator;

      },
      (err: HttpErrorResponse) =>
      {
        console.log(err);
      }
    );
  }
  else
  {
      this.listeArrondissement = [];
      this.service.getAllArrondissement().subscribe(data => {
      this.listeArrondissement = data;
      this.dataSource = new MatTableDataSource<Arrondissement>(this.listeArrondissement);
      this.dataSource.paginator = this.paginator;

      },
      (err: HttpErrorResponse) =>
      {
       
      }
    );
  }

}
  delete(value: Arrondissement) {
    const dialogRef = this.dialogMat.open(DeleteArrondissementComponent, {
      width: '400px',
      data: { arrondissement: value},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  edit(value: any) {
    const dialogRef = this.dialogMat.open(UpdateArrondissementComponent, {
      width: '350px',
      data: { arrondissement: value},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }


  addArrondissement() {
    const mat = this.dialogMat.open(UpdateArrondissementComponent,
      {width: '350px', data: { }, disableClose: true}
      );
    mat.afterClosed().subscribe(() => {
      this.getData();
    });
  }

  annulerRechercheGeneral()
  {
    this.rechercheGeneral = '';
    this.recherche();
  }

  recherche() {
    this.dataSource.filter = this.rechercheGeneral.trim().toLowerCase();
  }
}
