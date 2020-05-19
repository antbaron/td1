
export class Thanos {

  private _missionReussi:boolean = false
  
  constructor(private _nbPierreInfinite: number) {
	  if(_nbPierreInfinite < 0 || this.nbPierreInfinite > 6) {
		  throw new Error('Le nombre de pierre est incorrecte');
	  }
  }

  gagnePierre(): void {
		if (this._nbPierreInfinite < 6) {
			this._nbPierreInfinite++;
		}
	}

claquementDeDoigts(nbPopulation: number) {
		let result: number = nbPopulation;
		if (this._nbPierreInfinite == 6 && !this._missionReussi) {
			result = nbPopulation / 2;
			this._missionReussi = true;
		}
		return result;
	}

	toString(): string {
		return `Thanos [nbPierreInfinite=${this._nbPierreInfinite}, missionReussi=${this._missionReussi}]`
  }

  get nbPierreInfinite(): number {
	  return this._nbPierreInfinite;
  }
  get missionReussi(): boolean{ 
	  return this._missionReussi;
  }

}
