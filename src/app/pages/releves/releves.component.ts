import { Component, OnInit } from '@angular/core';
import { DataApiHttpService } from '../../services/data-api-http.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Releve } from '../../models/releve';

@Component({
  selector: 'app-releves',
  templateUrl: './releves.component.html',
  styleUrls: ['./releves.component.css']
})
export class RelevesComponent implements OnInit {

  listeReleves: Releve[];
  nomVille: string;
  idVille: string;

  constructor(private dataApiHttpService: DataApiHttpService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        if (params.idVille) {
          this.nomVille = params.nomVille;
          this.idVille = params.idVille;
          this.dataApiHttpService.getListReleves(params.idVille).then((liste) => {
            this.listeReleves = liste;
          });
        }
      });
  }

}
