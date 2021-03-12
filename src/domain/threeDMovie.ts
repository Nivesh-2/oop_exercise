import { Movie } from "./movie";

class ThreeDMovie extends Movie {
    private ExtraCost: number;
    constructor(name: string, cost: number) {
        super(name);
        this.ExtraCost = cost;
    }

    getExtraCost(){
        return this.ExtraCost;
    }
}

export {ThreeDMovie};