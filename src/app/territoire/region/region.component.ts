import { TokenStorageService } from './../../shared/services/TokenStorage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AjouterComponent } from './ajouter/ajouter.component';
import { Region } from '../../shared/models/Region';
import { MatTableDataSource } from '@angular/material/table';
import { RegionService } from '../../shared/services/region.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SupprimerComponent } from './Supprimer/Supprimer.component';





@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  isMatds = false;
  displayedColumns: string[] = ['id', 'code', 'libelle', 'cheflieu'];
  listRegion: Region[] = [];
  dataSource = new MatTableDataSource<Region>(this.listRegion);
  rechercheGeneral = '';





  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private service: RegionService,
              private dialogMat: MatDialog,
              private snackBar: MatSnackBar,
              private token: TokenStorageService ,
              ){
                this.getData();
                if (token.getUser().roles[0].name === 'ROLE_MATDS')
                {
                  this.isMatds = true;
                  this.displayedColumns = ['id', 'code', 'libelle', 'cheflieu', 'option'];
                }
              }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.listRegion = [];
    this.service.getAllRegion().subscribe(data => {
            this.listRegion = data;
            this.dataSource = new MatTableDataSource<Region>(this.listRegion);
            this.dataSource.paginator = this.paginator;

    });
  }
  edit(value: any) {
    const dialogRef = this.dialogMat.open(AjouterComponent, {
      width: '350px',
      data: { region: value},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  delete(value: Region) {
    const dialogRef = this.dialogMat.open(SupprimerComponent, {
      width: '350px',
      data: { region: value},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }



  addRegion(){
    const mat = this.dialogMat.open(AjouterComponent,
      {width: '350px', data: { }, disableClose: true}
      );
    mat.afterClosed().subscribe(() => {
      this.ngOnInit();
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
