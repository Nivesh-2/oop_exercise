import { Movie } from "./movie";
import { MovieScreen } from "./screen";

class NormalScreen extends MovieScreen {
    private ScreenCost: number;

    constructor(name: string, movie: Movie, cost: number){
        super(name, movie);
        this.ScreenCost = cost;
    }

    getScreenCost(): number {
        return this.ScreenCost;
    }
}

export {NormalScreen};