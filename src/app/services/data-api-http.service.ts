import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ville } from '../models/ville';
import { Releve } from '../models/releve';

@Injectable({
  providedIn: 'root'
})
export class DataApiHttpService {

  private urlVilles = 'http://pc-formateur/odata/villes';
  private urlReleves = 'http://pc-formateur/odata/releves';

  constructor(private httpClient: HttpClient) { }

  getListVilles(): Promise<Ville[]> {
    return this.httpClient.get(this.urlVilles).toPromise().then(
      (o: any) => o.value).then(
        (t) => t.map(
          (o) => new Ville(o.id, o.nom, o.latitude, o.longitude)));
  }

  getListReleves(idVille: string): Promise<Releve[]> {
    return this.httpClient.get(
      this.urlVilles + '(guid\'' + idVille + '\')/releves').toPromise().then(
        (o: any) => o.value).then(
          (t) => t.map(
            (o) => new Releve(o.id, o.temperature, o.humidite, o.ensoleillement, o.date, o.idVille)));
  }

  createReleve(releve: Releve) {
    let output: JSON;
    let obj: any = {
      'date': releve.date,
      'temperature': releve.temperature,
      'humidite': releve.humidite,
      'ensoleillement': releve.ensoleillement,
      'idVille': releve.idVille
    };
    output = <JSON>obj;
    this.httpClient.post(this.urlReleves, output);
  }
}
