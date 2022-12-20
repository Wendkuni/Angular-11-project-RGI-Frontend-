import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Commune} from '../../../shared/models/Commune';
import {CommuneEditComponent } from '../commune-edit/commune-edit.component';
import {DeletecommuneComponent } from '../deletecommune/deletecommune.component';
import { CommuneService} from '../../../shared/services/commune.service'
import { from } from 'rxjs';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['id', 'code','libelle', 'type', 'province'];
  dataSource ;
  isHaut = false;
  rechercheGeneral= '';
  listCommnune: Commune[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private service: CommuneService,
              private dialogMat: MatDialog,
              private _snackBar: MatSnackBar,
              private token: TokenStorageService
                 ){
                  this.getData()
                  if(token.getUser().roles[0].name === 'ROLE_HAUT_COMMISSARIAT' || token.getUser().roles[0].name === 'ROLE_MATDS')
                  {
                    this.isHaut = true;
                    this.displayedColumns = ['id', 'code', 'libelle', 'type', 'province', 'option'];
                  }
                 }


  ngOnInit() {

  }

  getData() {
    if(this.token.getUser().roles[0].name === 'ROLE_HAUT_COMMISSARIAT')
    {
      this.listCommnune = [];
      this.service.getAllCommuneUser(this.token.getUser().structure.idStructure).subscribe(data => {
              this.listCommnune = data;
              this.dataSource = new MatTableDataSource<Commune>(this.listCommnune);
              this.dataSource.paginator = this.paginator;
      });
    }
    else{
      this.listCommnune = [];
      this.service.getAllCommune().subscribe(data => {
              this.listCommnune = data;
              this.dataSource = new MatTableDataSource<Commune>(this.listCommnune);
              this.dataSource.paginator = this.paginator;
      });
    }

  }
  edit(value: any) {
    const dialogRef = this.dialogMat.open(CommuneEditComponent , {
      width: '350px',
      data: { commune: value},
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }

  delete(value: Commune) {
    const dialogRef = this.dialogMat.open(DeletecommuneComponent , {
      width: '350px',
      data: { commune: value},
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }


  addCommune() {
    const mat = this.dialogMat.open(CommuneEditComponent,
      {width: '350px', data: { }, disableClose: true}
      );
    mat.afterClosed().subscribe(() => {
      this.getData()
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
