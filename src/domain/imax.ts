import { Movie } from "./movie";
import { MovieScreen } from "./screen";

class IMAXScreen extends MovieScreen {
    private screenCost: number;

    constructor(name: string, movie: Movie,  screenCost:number){
        super(name, movie);
        this.screenCost = screenCost;
    }

    getScreenCost(): number{
        return this.screenCost;
    }
}

export {IMAXScreen};