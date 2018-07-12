import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ville } from '../models/ville';

@Injectable({
  providedIn: 'root'
})
export class DataApiHttpService {

  private url_villes = 'http://pc-formateur/odata/villes';

  constructor(private httpClient: HttpClient) { }

  getListVilles(): Promise<Ville[]> {
    return this.httpClient.get(this.url_villes).toPromise().then(
      (o: any) => o.value).then(
        (t) => t.map(
          (o) => new Ville(o.id, o.nom, o.latitude, o.longitude)));
  }
}
