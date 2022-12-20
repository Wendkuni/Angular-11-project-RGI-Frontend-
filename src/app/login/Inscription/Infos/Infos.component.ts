import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Infos',
  templateUrl: './Infos.component.html',
  styleUrls: ['./Infos.component.css']
})
export class InfosComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
infos(){
  this.route.navigate(['/Login'])
  }

}
