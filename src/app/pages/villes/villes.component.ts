import { Component, OnInit } from '@angular/core';
import { Ville } from '../../models/ville';
import { DataApiHttpService } from '../../services/data-api-http.service';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {

  listeVilles: Ville[];

  constructor(public dataApiHttpService: DataApiHttpService) { }

  ngOnInit() {
    this.dataApiHttpService.getListVilles().then((liste) => {
      this.listeVilles = liste;
    });
  }

}
