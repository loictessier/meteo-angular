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

  listeVilleCache: Promise<Ville[]>;

  constructor(private httpClient: HttpClient) {
      setTimeout(() => {
        this.listeVilleCache  = null;
      }, 300000);
   }


  getListVilles(): Promise<Ville[]> {
    if (!this.listeVilleCache) {
      this.listeVilleCache = this.httpClient.get(this.urlVilles).toPromise().then(
        (o: any) => o.value).then(
          (t) => t.map(
            (o) => new Ville(o.id, o.nom, o.latitude, o.longitude)));
    }
    return this.listeVilleCache;
  }

  getListReleves(idVille: string): Promise<Releve[]> {
    return this.httpClient.get(
      this.urlVilles + '(guid\'' + idVille + '\')/releves').toPromise().then(
        (o: any) => o.value).then(
          (t) => t.map(
            (o) => new Releve(o.id, o.temperature, o.humidite, o.ensoleillement, o.date, o.idVille)));
  }

  createReleve(releve: Releve): Promise<any> {
    return this.httpClient.post(this.urlReleves, releve).toPromise();
  }

  modifyReleve(releve: Releve): Promise<any> {
    return this.httpClient.put(this.urlReleves + '(guid\'' + releve.id + '\')', releve).toPromise();
  }

  deleteReleve(idReleve: string): Promise<any> {
    return this.httpClient.delete(this.urlReleves + '(guid\'' + idReleve + '\')').toPromise();
  }

  getReleve(idReleve: string): Promise<Releve> {
    return this.httpClient.get(this.urlReleves + '(guid\'' + idReleve + '\')').toPromise().then(
      (o: any) => new Releve(o.id, o.temperature, o.humidite, o.ensoleillement, o.date, o.idVille)
    );
  }
}
