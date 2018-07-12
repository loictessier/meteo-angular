import { Component, OnInit } from '@angular/core';
import {DataApiHttpService} from '../../services/data-api-http.service';
import {ActivatedRoute} from '../../../../node_modules/@angular/router';
import { Releve } from '../../models/releve';

@Component({
  selector: 'app-releve-form',
  templateUrl: './releve-form.component.html',
  styleUrls: ['./releve-form.component.css']
})
export class ReleveFormComponent implements OnInit {

  idVille: string;
  nomVille: string;
  temperature: number;
  ensoleillement: number;
  humidite: number;

  constructor(private dataApiHttpService: DataApiHttpService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      if (params.idVille) {
        this.idVille = params.idVille;
        this.nomVille = params.nomVille;
      }
    });

  }

  createReleve() {

    let date = new Date();
    let releve = new Releve(null,
                            this.temperature,
                            this.humidite,
                            this.ensoleillement,
                            date,
                            this.idVille);

    this.dataApiHttpService.createReleve(releve);

  }

}
