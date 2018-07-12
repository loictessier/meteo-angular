export class Releve {

    private _id: string;
    private _temperature: number;
    private _humidite: number;
    private _ensoleillement: number;
    private _date: Date;
    private _idVille: string;

    constructor(id: string,
                temperature: number,
                humidite: number,
                ensoleillement: number,
                date: Date,
                idVille: string) {
        this.id = id;
        this.temperature = temperature;
        this.humidite = humidite;
        this.ensoleillement = ensoleillement;
        this.date = date;
        this.idVille = idVille;
    }


    public get id(): string {
        return this._id;
    }
    public set id(v: string) {
        this._id = v;
    }

    public get temperature(): number {
        return this._temperature;
    }
    public set temperature(v: number) {
        this._temperature = v;
    }

    public get humidite(): number {
        return this._humidite;
    }
    public set humidite(v: number) {
        this._humidite = v;
    }

    public get ensoleillement(): number {
        return this._ensoleillement;
    }
    public set ensoleillement(v: number) {
        this._ensoleillement = v;
    }

    public get date(): Date {
        return this._date;
    }
    public set date(v: Date) {
        this._date = v;
    }

    public get idVille(): string {
        return this._idVille;
    }
    public set idVille(v: string) {
        this._idVille = v;
    }
}
