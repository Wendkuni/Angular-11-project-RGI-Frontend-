import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Localite} from '../../../../shared/models/Localite';
import {AddlocaliteComponent } from '../addlocalite/addlocalite.component';
import {DeletelocaliteComponent } from '../deletelocalite/deletelocalite.component';
import { LocaliteService} from '../../../../shared/services/localite.service'
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-localite',
  templateUrl: './localite.component.html',
  styleUrls: ['./localite.component.css']
})
export class LocaliteComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = ['id','code','libelle', 'type', 'arrondissement'];
  dataSource ;
  rechercheGeneral= '';
  isMairie = false;
  listLocalite: Localite[] = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private service: LocaliteService,
              private dialogMat: MatDialog,
              private _snackBar: MatSnackBar,
              private token: TokenStorageService
                 ){
                  this.getData()
                  if(token.getUser().roles[0].name === 'ROLE_MAIRIE' || token.getUser().roles[0].name === 'ROLE_MATDS')
                  {
                    this.isMairie = true;
                    this.displayedColumns = ['id','code','libelle', 'type', 'arrondissement', 'option'];
                  }
                 }


  ngOnInit() {

  }

  getData() {
    this.listLocalite = [];
    this.service.getAllLocalite().subscribe(data => {

            this.listLocalite = data;
            this.dataSource = new MatTableDataSource<Localite>(this.listLocalite);
            this.dataSource.paginator = this.paginator;
    });
  }
  edit(value: any) {
    const dialogRef = this.dialogMat.open(AddlocaliteComponent , {
      width: '350px',
      data: { localite: value},
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }

  delete(value: Localite) {
    const dialogRef = this.dialogMat.open(DeletelocaliteComponent , {
      width: '350px',
      data: { localite: value},
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }


  addLocalite() {
    const mat = this.dialogMat.open(AddlocaliteComponent,
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
