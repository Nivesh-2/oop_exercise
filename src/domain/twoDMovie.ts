import { Movie } from "./movie";

class TwoDMovie extends Movie {
    private ExtraCost: number;
    constructor(name: string, cost: number){
        super(name);
        this.ExtraCost = cost;
    }

    getExtraCost(): number{
        return this.ExtraCost;
    }
}

export {TwoDMovie};