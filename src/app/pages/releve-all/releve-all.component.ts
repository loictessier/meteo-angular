import { Component, OnInit } from '@angular/core';
import { Releve } from '../../models/releve';

@Component({
  selector: 'app-releve-all',
  templateUrl: './releve-all.component.html',
  styleUrls: ['./releve-all.component.css']
})
export class ReleveAllComponent implements OnInit {

  ListeReleve: Releve[];

  constructor(public dataApiHttpService: DataApiHttpService) { }

  ngOnInit() {
  }

}
