import { Injectable } from '@angular/core';

export enum Maison{
  Gryffondor = 'Gryffondor' ,
  Poufsouffle = 'Poufsouffle' ,
  Serpentard = 'Serpentard' ,
  Serdaigle = 'Serdaigle'
}

const HARRY_POTTER = "Harry Potter";
@Injectable({
  providedIn: 'root'
})
export class PoudlardService {

  private _maisonsEleves = {
    [Maison.Gryffondor]: null,
    [Maison.Poufsouffle]: null,
    [Maison.Serdaigle]: null,
    [Maison.Serpentard]: null
  }

  get maisonsEleves() {
    return this._maisonsEleves;
  }

  constructor() { }


	inscriptionEleve(nomPrenom: string, maison: Maison): void {
		if (this._maisonsEleves[maison] == null) {
			this._maisonsEleves[maison] = [nomPrenom];
		} else {
      this._maisonsEleves[maison].push(nomPrenom);
    }
	}

	arriveDesHeros(): void {
		this.inscriptionEleve(HARRY_POTTER, Maison.Gryffondor);
		this.inscriptionEleve("Ron Weasley", Maison.Gryffondor);
		this.inscriptionEleve("Hermione Granger", Maison.Gryffondor);
	}

	findMaison(eleve: string) {
    let result: Maison = null;
    
    for (const maison in this._maisonsEleves) {
      if(this._maisonsEleves[maison] !== null && this._maisonsEleves[maison].contains(eleve)){
        result = maison as Maison
      }
    }
		return result;
	}

	
}
