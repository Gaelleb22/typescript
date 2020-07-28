class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    getNom(): string {
        return this._nom;
    }
    getPrix(): number {
        return this._prix;
    }
}

class SejourService {
    private _sejours: Sejour[];
    constructor() {
        this._sejours = [new Sejour("Kyoto", 3000), new Sejour("Sapporo", 2250), new Sejour("Osaka", 2700)];
    }

    findByName(name:String): void {

        this._sejours.forEach((element:Sejour) => {
            if (element.getNom() === name) {
                console.log(`${element.getNom()} - ${element.getPrix()}€`);
            }
        });
        if (this._sejours.some((element:Sejour)=> element.getNom()===name)===false) {
            console.log(`No trip with name ${name}`);
        }
    }
}

const sejourService: SejourService = new SejourService();
sejourService.findByName('Kyoto');
sejourService.findByName('Tokyo');
