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
  crossImgPath: string;
  pencilImgPath: string;

  constructor(private dataApiHttpService: DataApiHttpService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.crossImgPath = 'assets/cross.png';
    this.pencilImgPath = 'assets/pencil.png';
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

  deleteReleve(id: string) {
    this.dataApiHttpService.deleteReleve(id).then(() => {
      this.dataApiHttpService.getListReleves(this.idVille).then((liste) => {
        this.listeReleves = liste;
      });
    }).catch((message) => {
      console.log(message);
    });
  }

}
