export class Ville {

  private _id: string;
  private _nom: string;
  private _latitude: string;
  private _longitude: string;

  constructor(id: string, nom: string, latitude: string, longitude: string) {

      this.id = id;
      this.nom = nom;
      this.longitude  = longitude;
      this.latitude = latitude;

  }

  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }


  public get nom(): string {
    return this._nom;
  }
  public set nom(v: string) {
    this._nom = v;
  }



  public get longitude(): string {
    return this._longitude;
  }
  public set longitude(v: string) {
    this._longitude = v;
  }



  public get latitude(): string {
    return this._latitude;
  }
  public set latitude(v: string) {
    this._latitude = v;
  }


}
