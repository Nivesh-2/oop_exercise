import { MovieScreen } from "./screen";

class IMAXScreen extends MovieScreen {
    private screenCost: number;

    constructor(name: string, screenCost:number){
        super(name);
        this.screenCost = screenCost;
    }

    getScreenCost(): number{
        return this.screenCost;
    }
}

export {IMAXScreen};