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
  newReleve = new Releve(null, null, null, null, new Date(), this.idVille);
  modeCreate: boolean;

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
      if (params.idReleve) {
        this.modeCreate = false;
        this.dataApiHttpService.getReleve(params.idReleve).then((releve) => {
          this.newReleve = releve;
        });
      } else {
        this.modeCreate = true;
      }
    });

  }

  saveReleve() {
    this.newReleve.date = new Date();
    if (this.modeCreate) {
      this.dataApiHttpService.createReleve(this.newReleve).then(() => {
        this.router.navigateByUrl('/pageville;idVille=' + this.idVille + ';nomVille=' + this.nomVille);
      }).catch((message) => {
        console.log(message);
      });
    } else {
      this.dataApiHttpService.modifyReleve(this.newReleve).then(() => {
        this.router.navigateByUrl('/pageville;idVille=' + this.idVille + ';nomVille=' + this.nomVille);
      }).catch((message) => {
        console.log(message);
      });
    }
  }

  backPage() {
    this.router.navigateByUrl('/');
  }

}
