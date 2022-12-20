import { TokenStorageService } from 'src/app/shared/services/TokenStorage.service';
import { SupprimerComponent } from './../supprimer/supprimer.component';
import { Province } from './../../../shared/models/Province';
import { ProvinceService } from './../../../shared/services/province.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AddProvinceComponent } from './../addProvince/addProvince.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  listProvince: Province[] = [];
  isGouv = false;
  displayedColumns: string[] = ['id', 'code', 'province', 'cheflieu', 'region'];
  dataSource = new MatTableDataSource<Province>(this.listProvince);
  rechercheGeneral = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private service: ProvinceService,
              private dialogMat: MatDialog,
              private token: TokenStorageService){
                  this.getData();
                  if(token.getUser().roles[0].name === 'ROLE_GOUVERNORAT' || token.getUser().roles[0].name === 'ROLE_MATDS')
                  {
                    this.isGouv = true;
                    this.displayedColumns = ['id', 'code', 'province', 'cheflieu', 'region', 'option'];
                  }
                }


  ngOnInit() {

  }

  getData() {
    if(this.token.getUser().roles[0].name === 'ROLE_GOUVERNORAT')
    {
      this.listProvince = [];
      this.service.getAllProvinceUser(this.token.getUser().structure.idStructure).subscribe(data => {
              this.listProvince  = data;
              this.dataSource = new MatTableDataSource<Province>(this.listProvince);
              this.dataSource.paginator = this.paginator;
      });
    }
    else{
      this.listProvince = [];
      this.service.getAllProvince().subscribe(data => {
            this.listProvince  = data;
            this.dataSource = new MatTableDataSource<Province>(this.listProvince);
            this.dataSource.paginator = this.paginator;
      });
    }
  }
  edit(value: any) {
    const dialogRef = this.dialogMat.open(AddProvinceComponent, {
      width: '350px',
      data: { province: value},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

  delete(value: Province) {
    const dialogRef = this.dialogMat.open(SupprimerComponent, {
      width: '350px',
      data: { province: value},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }


  addProvince() {
    const mat = this.dialogMat.open(AddProvinceComponent,
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
