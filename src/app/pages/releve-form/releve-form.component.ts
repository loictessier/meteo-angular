import { Component, OnInit } from '@angular/core';
import {DataApiHttpService} from '../../services/data-api-http.service';
import {ActivatedRoute, Router} from '../../../../node_modules/@angular/router';
import { Releve } from '../../models/releve';

@Component({
  selector: 'app-releve-form',
  templateUrl: './releve-form.component.html',
  styleUrls: ['./releve-form.component.css']
})
export class ReleveFormComponent implements OnInit {

  idVille: string;
  nomVille: string;
  newReleve = new Releve(null, 20, 10, 2, new Date(), this.idVille);

  constructor(private dataApiHttpService: DataApiHttpService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      if (params.idVille) {
        this.idVille = params.idVille;
        this.newReleve.idVille = this.idVille;
        this.nomVille = params.nomVille;
      }
    });

  }

  createReleve() {
    this.newReleve.date = new Date();
    this.dataApiHttpService.createReleve(this.newReleve).then(() => {
      this.router.navigateByUrl('/pageville;idVille=' + this.idVille + ';nomVille=' + this.nomVille);
    }).catch((message) => {
      console.log(message);
    });
  }

  backPage() {

    this.router.navigateByUrl('/');

  }

}
