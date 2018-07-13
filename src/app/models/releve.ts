import { Ville } from './ville';

export class Releve {

    public id: string;
    public temperature: number;
    public humidite: number;
    public ensoleillement: number;
    public date: Date;
    public idVille: string;
    public ville: Ville;

    constructor(id: string, temperature: number, humidite: number, ensoleillement: number, date: Date, idVille: string) {
        if (id !== null) {
            this.id = id;
        } else {
            this.id = this.guid();
        }
        this.temperature = temperature;
        this.humidite = humidite;
        this.ensoleillement = ensoleillement;
        this.date = date;
        this.idVille = idVille;

    }

    private guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}
